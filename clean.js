const fs = require('fs');
let c = fs.readFileSync('app.js', 'utf8');
c = c.replace(/'[^']+\.(?:pdf|djvu|svg)[^']*'/gi, "'https://upload.wikimedia.org/wikipedia/commons/f/f9/Otavalo_Imbabura_nina_urkuwan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original'");
fs.writeFileSync('app.js', c);
console.log("Cleaned.");
