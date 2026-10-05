const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function buildOption2() {
  const bgPath = path.resolve(__dirname, '..', 'public', 'assets', 'linkedin-banner-option2-bg.jpg');
  const bgBuffer = fs.readFileSync(bgPath);
  const bgBase64 = `data:image/jpeg;base64,${bgBuffer.toString('base64')}`;

  const svgContent = `<svg width="1584" height="396" viewBox="0 0 1584 396" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Darkening Gradient on Left for Safe Avatar Area & Text Contrast -->
    <linearGradient id="vignette-left" x1="0" y1="0" x2="1584" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#08090A" stop-opacity="0.96" />
      <stop offset="35%" stop-color="#08090A" stop-opacity="0.88" />
      <stop offset="65%" stop-color="#08090A" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#08090A" stop-opacity="0.20" />
    </linearGradient>

    <!-- Logo Gradients -->
    <linearGradient id="opt2-logo-bg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1A1E24" />
      <stop offset="100%" stop-color="#08090A" />
    </linearGradient>
    <linearGradient id="opt2-logo-stroke" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#5E6AD2" />
      <stop offset="100%" stop-color="#38BDF8" />
    </linearGradient>

    <!-- Glassmorphism Card Gradients -->
    <linearGradient id="opt2-card-mobile" x1="0" y1="0" x2="320" y2="114" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0E121A" stop-opacity="0.92" />
      <stop offset="100%" stop-color="#080A0F" stop-opacity="0.85" />
    </linearGradient>
    <linearGradient id="opt2-card-fullstack" x1="0" y1="0" x2="320" y2="114" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#121122" stop-opacity="0.92" />
      <stop offset="100%" stop-color="#080812" stop-opacity="0.85" />
    </linearGradient>
  </defs>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;family=JetBrains+Mono:wght@500;600;700&amp;display=swap');
    .font-sans { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
  </style>

  <!-- 1. 3D Cyber Ambient AI Render as Canvas Background -->
  <image href="${bgBase64}" width="1584" height="396" preserveAspectRatio="xMidYMid slice" />

  <!-- 2. Darkening Vignette for Left Side Text Legibility -->
  <rect width="1584" height="396" fill="url(#vignette-left)" />

  <!-- Top Accent Light Bar -->
  <line x1="0" y1="1" x2="1584" y2="1" stroke="url(#opt2-logo-stroke)" stroke-width="2.5" opacity="0.9" />

  <!-- ============================================================== -->
  <!-- 3. BRAND SIGNATURE & HEADLINE (CENTER-LEFT: x: 290)            -->
  <!-- ============================================================== -->
  <g transform="translate(290, 50)">
    
    <!-- Monolith Logo Icon (96x96) -->
    <g transform="translate(0, 4)">
      <rect x="0" y="0" width="94" height="94" rx="26" fill="url(#opt2-logo-bg)" stroke="url(#opt2-logo-stroke)" stroke-width="2.2" />
      <circle cx="16" cy="16" r="3" fill="#EF4444" opacity="0.9" />
      <circle cx="24" cy="16" r="3" fill="#F59E0B" opacity="0.9" />
      <circle cx="32" cy="16" r="3" fill="#10B981" opacity="0.9" />
      <line x1="0" y1="25" x2="94" y2="25" stroke="white" stroke-opacity="0.1" stroke-width="1" />

      <path d="M18 70L34 35C34.8 33.5 37.2 33.5 38 35L54 70" stroke="#F7F8F8" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M23 60H49" stroke="#F7F8F8" stroke-width="5" stroke-linecap="round" />

      <path d="M48 35H64C70.5 35 75 39 75 45C75 51 70.5 55 64 55H48V70" stroke="#38BDF8" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />

      <rect x="56" y="59" width="30" height="17" rx="4" fill="#5E6AD2" fill-opacity="0.35" stroke="#5E6AD2" stroke-opacity="0.8" stroke-width="1.2" />
      <text x="71" y="71" class="font-mono" font-size="10.5" font-weight="700" fill="#A5B4FC" text-anchor="middle">dev</text>
    </g>

    <!-- Brand Typography & Titles -->
    <g transform="translate(118, 0)">
      <text x="0" y="46" class="font-sans" font-size="48" font-weight="900" fill="#F7F8F8" letter-spacing="-1.2">
        AP dev <tspan fill="#38BDF8">.</tspan>
      </text>

      <text x="0" y="80" class="font-sans" font-size="22" font-weight="700" fill="#E2E8F0" letter-spacing="-0.3">
        Mobile Engineer <tspan fill="#5E6AD2">|</tspan> Full Stack Developer
      </text>

      <g transform="translate(0, 108)">
        <text x="0" y="0" class="font-sans" font-size="15" font-weight="600" fill="#38BDF8" letter-spacing="0.2">
          Especialista em Flutter, Ionic, Angular e Android
        </text>
      </g>
    </g>

    <!-- ========================================================== -->
    <!-- FRAMEWORK CATEGORY CARDS (x: 0, y: 152)                   -->
    <!-- ========================================================== -->
    <g transform="translate(0, 152)">
      
      <!-- CARD 1: MOBILE ECOSYSTEM -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="324" height="114" rx="14" fill="url(#opt2-card-mobile)" stroke="#38BDF8" stroke-opacity="0.4" stroke-width="1.2" />
        
        <g transform="translate(14, 14)">
          <rect x="0" y="0" width="84" height="22" rx="6" fill="#38BDF8" fill-opacity="0.15" stroke="#38BDF8" stroke-opacity="0.4" stroke-width="1" />
          <text x="42" y="15" class="font-mono" font-size="10.5" font-weight="700" fill="#38BDF8" text-anchor="middle">📱 MOBILE</text>
        </g>
        <text x="108" y="29" class="font-mono" font-size="10.5" font-weight="500" fill="#94A3B8">Frameworks &amp; SDKs</text>

        <!-- Chips Row -->
        <g transform="translate(14, 46)">
          <g transform="translate(0, 0)">
            <rect x="0" y="0" width="70" height="26" rx="6" fill="#141923" stroke="#2D3748" stroke-width="1" />
            <text x="35" y="17" class="font-mono" font-size="11" font-weight="600" fill="#F7F8F8" text-anchor="middle">Flutter</text>
          </g>
          <g transform="translate(76, 0)">
            <rect x="0" y="0" width="58" height="26" rx="6" fill="#141923" stroke="#2D3748" stroke-width="1" />
            <text x="29" y="17" class="font-mono" font-size="11" font-weight="600" fill="#F7F8F8" text-anchor="middle">Ionic</text>
          </g>
          <g transform="translate(140, 0)">
            <rect x="0" y="0" width="76" height="26" rx="6" fill="#141923" stroke="#2D3748" stroke-width="1" />
            <text x="38" y="17" class="font-mono" font-size="11" font-weight="600" fill="#F7F8F8" text-anchor="middle">React Native</text>
          </g>
          <g transform="translate(222, 0)">
            <rect x="0" y="0" width="74" height="26" rx="6" fill="#141923" stroke="#2D3748" stroke-width="1" />
            <text x="37" y="17" class="font-mono" font-size="11" font-weight="600" fill="#F7F8F8" text-anchor="middle">Android</text>
          </g>
        </g>

        <text x="14" y="98" class="font-mono" font-size="9.5" font-weight="500" fill="#94A3B8">
          Nativo · Híbrido · MVVM · Offline-First
        </text>
      </g>

      <!-- CARD 2: FULL STACK ECOSYSTEM -->
      <g transform="translate(340, 0)">
        <rect x="0" y="0" width="324" height="114" rx="14" fill="url(#opt2-card-fullstack)" stroke="#5E6AD2" stroke-opacity="0.5" stroke-width="1.2" />
        
        <g transform="translate(14, 14)">
          <rect x="0" y="0" width="102" height="22" rx="6" fill="#5E6AD2" fill-opacity="0.2" stroke="#5E6AD2" stroke-opacity="0.5" stroke-width="1" />
          <text x="51" y="15" class="font-mono" font-size="10.5" font-weight="700" fill="#A5B4FC" text-anchor="middle">⚡ FULL STACK</text>
        </g>
        <text x="126" y="29" class="font-mono" font-size="10.5" font-weight="500" fill="#94A3B8">Web &amp; Backend</text>

        <!-- Chips Row -->
        <g transform="translate(14, 46)">
          <g transform="translate(0, 0)">
            <rect x="0" y="0" width="72" height="26" rx="6" fill="#161526" stroke="#2D3748" stroke-width="1" />
            <text x="36" y="17" class="font-mono" font-size="11" font-weight="600" fill="#F7F8F8" text-anchor="middle">Angular</text>
          </g>
          <g transform="translate(78, 0)">
            <rect x="0" y="0" width="60" height="26" rx="6" fill="#161526" stroke="#2D3748" stroke-width="1" />
            <text x="30" y="17" class="font-mono" font-size="11" font-weight="600" fill="#F7F8F8" text-anchor="middle">React</text>
          </g>
          <g transform="translate(144, 0)">
            <rect x="0" y="0" width="68" height="26" rx="6" fill="#161526" stroke="#2D3748" stroke-width="1" />
            <text x="34" y="17" class="font-mono" font-size="11" font-weight="600" fill="#F7F8F8" text-anchor="middle">NestJS</text>
          </g>
          <g transform="translate(218, 0)">
            <rect x="0" y="0" width="78" height="26" rx="6" fill="#161526" stroke="#2D3748" stroke-width="1" />
            <text x="39" y="17" class="font-mono" font-size="11" font-weight="600" fill="#F7F8F8" text-anchor="middle">Node.js</text>
          </g>
        </g>

        <text x="14" y="98" class="font-mono" font-size="9.5" font-weight="500" fill="#94A3B8">
          Zoneless · Micro Frontends · REST / GraphQL
        </text>
      </g>

    </g>
  </g>

  <!-- Bottom Accent Edge Line -->
  <line x1="0" y1="395" x2="1584" y2="395" stroke="#22262E" stroke-width="1" />
</svg>`;

  const outSvg = path.resolve(__dirname, '..', 'public', 'assets', 'linkedin-banner-option2.svg');
  const outPng1x = path.resolve(__dirname, '..', 'public', 'assets', 'linkedin-banner-option2.png');
  const outPng2x = path.resolve(__dirname, '..', 'public', 'assets', 'linkedin-banner-option2-2x.png');

  fs.writeFileSync(outSvg, svgContent, 'utf8');
  console.log('Saved SVG:', outSvg);

  console.log('Rendering Option 2 PNG (1584x396)...');
  await sharp(Buffer.from(svgContent), { density: 150 })
    .resize(1584, 396)
    .png({ quality: 100 })
    .toFile(outPng1x);
  console.log('Generated PNG 1x:', outPng1x);

  console.log('Rendering Option 2 PNG 2x Retina (3168x792)...');
  await sharp(Buffer.from(svgContent), { density: 300 })
    .resize(3168, 792)
    .png({ quality: 100 })
    .toFile(outPng2x);
  console.log('Generated PNG 2x:', outPng2x);

  // Copy to brain directory for artifact access
  const brainDir = path.resolve('C:/Users/ander/.gemini/antigravity/brain/c93761da-74b8-40a0-8a36-1f36db98bf7a');
  fs.copyFileSync(outPng1x, path.join(brainDir, 'linkedin-banner-option2.png'));
  console.log('Copied to brain directory');
}

buildOption2().catch(console.error);
