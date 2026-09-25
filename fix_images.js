const fs = require('fs');
const https = require('https');

function fetchImages(query, limit = 3) {
    return new Promise((resolve) => {
        // gsrlimit=limit for more images
        const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=imageinfo&iiprop=url&format=json`;
        const options = {
            headers: { 'User-Agent': 'AntigravityAgent/1.0 (contact@example.com)' }
        };
        https.get(url, options, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.query && json.query.pages) {
                        const pages = json.query.pages;
                        const urls = [];
                        for (const key in pages) {
                            if (pages[key].imageinfo && pages[key].imageinfo[0]) {
                                urls.push(pages[key].imageinfo[0].url);
                            }
                        }
                        resolve(urls);
                    } else {
                        resolve([]);
                    }
                } catch (e) {
                    resolve([]);
                }
            });
        }).on('error', () => resolve([]));
    });
}

async function main() {
    let content = fs.readFileSync('app.js', 'utf8');
    
    // Buscar bloques de lugares
    const placeRegex = /title:\s*'([^']+)',[\s\S]*?gallery:\s*\[([\s\S]*?)\]/g;
    
    let match;
    const replacements = [];
    
    while ((match = placeRegex.exec(content)) !== null) {
        let title = match[1];
        // Quitar partes como " · Ibarra" del título
        title = title.split('·')[0].trim();
        const oldGalleryStr = match[2];
        const fullMatch = match[0];
        
        console.log("Buscando imágenes para:", title);
        let imgUrls = await fetchImages(title, 3);
        
        // Si no encontró 3, buscar imágenes de la provincia como relleno
        if (imgUrls.length < 3) {
            console.log(`  Solo encontró ${imgUrls.length}. Rellenando...`);
            const fallbackUrls = await fetchImages(title + " Imbabura", 5);
            for (let url of fallbackUrls) {
                if (!imgUrls.includes(url)) imgUrls.push(url);
                if (imgUrls.length >= 3) break;
            }
        }

        // Si todavía no hay 3, usar genéricas de Imbabura Ecuador
        if (imgUrls.length < 3) {
            const genericUrls = await fetchImages("Imbabura Ecuador", 10);
            for (let url of genericUrls) {
                if (!imgUrls.includes(url)) imgUrls.push(url);
                if (imgUrls.length >= 3) break;
            }
        }
        
        // Si absolutamente todo falla (casi imposible), usar unas fijas
        while (imgUrls.length < 3) {
            imgUrls.push('https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original');
        }
        
        // Formatear el array de URLs para inyectarlo
        const newGalleryStr = '\n' + imgUrls.slice(0, 3).map(url => `      '${url}'`).join(',\n') + '\n    ';
        
        const newMatch = fullMatch.replace(oldGalleryStr, newGalleryStr);
        replacements.push({ old: fullMatch, new: newMatch });
    }
    
    for (const r of replacements) {
        content = content.replace(r.old, r.new);
    }
    
    fs.writeFileSync('app.js', content);
    console.log("¡Hecho!");
}

main();
