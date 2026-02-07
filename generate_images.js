const fs = require('fs');
const path = require('path');

const dir = 'd:/pvc/images';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

for (let i = 1; i <= 36; i++) {
    const deg = (i - 1) * 10;
    const svgContent = `
<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f0f0f0" />
  <text x="50%" y="40%" font-family="Arial" font-size="24" fill="#333" text-anchor="middle" dominant-baseline="middle">Product View</text>
  <text x="50%" y="50%" font-family="Arial" font-size="60" fill="#000" text-anchor="middle" dominant-baseline="middle">${i}</text>
  <text x="50%" y="60%" font-family="Arial" font-size="20" fill="#666" text-anchor="middle" dominant-baseline="middle">Angle: ${deg}°</text>
  <circle cx="250" cy="250" r="180" stroke="#ccc" stroke-width="2" fill="none" />
  <line x1="250" y1="250" x2="${250 + 180 * Math.cos(deg * Math.PI / 180)}" y2="${250 + 180 * Math.sin(deg * Math.PI / 180)}" stroke="red" stroke-width="4" />
</svg>`;

    // pad with leading zero if needed, e.g. img01.svg
    const fileName = `img${i.toString().padStart(2, '0')}.svg`;
    fs.writeFileSync(path.join(dir, fileName), svgContent.trim());
    console.log(`Generated ${fileName}`);
}
