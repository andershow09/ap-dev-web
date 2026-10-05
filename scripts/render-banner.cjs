const sharp = require('sharp');
const path = require('path');

async function renderBanners() {
  const svgPath = path.resolve(__dirname, '..', 'public', 'assets', 'linkedin-banner.svg');
  const outPng1x = path.resolve(__dirname, '..', 'public', 'assets', 'linkedin-banner.png');
  const outPng2x = path.resolve(__dirname, '..', 'public', 'assets', 'linkedin-banner-2x.png');

  console.log('Rendering 1x (1584x396)...');
  await sharp(svgPath, { density: 150 })
    .resize(1584, 396)
    .png({ quality: 100 })
    .toFile(outPng1x);
  console.log('Generated:', outPng1x);

  console.log('Rendering 2x Retina (3168x792)...');
  await sharp(svgPath, { density: 300 })
    .resize(3168, 792)
    .png({ quality: 100 })
    .toFile(outPng2x);
  console.log('Generated:', outPng2x);
}

renderBanners().catch(console.error);
