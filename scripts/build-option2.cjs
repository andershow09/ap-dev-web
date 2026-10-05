const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function buildOption2() {
  const bgPath = path.resolve(__dirname, '..', 'public', 'assets', 'linkedin-banner-option2-bg.jpg');
  const bgBuffer = fs.readFileSync(bgPath);
  const bgBase64 = `data:image/jpeg;base64,${bgBuffer.toString('base64')}`;

  const svgContent = `<svg width="1584" height="396" viewBox="0 0 1584 396" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Darkening Vignette for Left Side Text Contrast -->
    <linearGradient id="vignette-left" x1="0" y1="0" x2="1584" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#08090A" stop-opacity="0.97" />
      <stop offset="30%" stop-color="#08090A" stop-opacity="0.92" />
      <stop offset="58%" stop-color="#08090A" stop-opacity="0.65" />
      <stop offset="85%" stop-color="#08090A" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#08090A" stop-opacity="0.10" />
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

    <!-- Glassmorphic Card Gradients -->
    <linearGradient id="opt2-card-mobile" x1="0" y1="0" x2="336" y2="124" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0E131F" stop-opacity="0.94" />
      <stop offset="100%" stop-color="#080A10" stop-opacity="0.88" />
    </linearGradient>
    <linearGradient id="opt2-card-fullstack" x1="0" y1="0" x2="336" y2="124" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#141224" stop-opacity="0.94" />
      <stop offset="100%" stop-color="#080812" stop-opacity="0.88" />
    </linearGradient>

    <!-- Angular Brand Gradient -->
    <linearGradient id="angular-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F43F5E" />
      <stop offset="100%" stop-color="#BE123C" />
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
  <line x1="0" y1="1" x2="1584" y2="1" stroke="url(#opt2-logo-stroke)" stroke-width="2.5" opacity="0.95" />

  <!-- ============================================================== -->
  <!-- 3. BRAND SIGNATURE & HEADLINE (CENTER-LEFT: x: 285)            -->
  <!-- ============================================================== -->
  <g transform="translate(285, 46)">
    
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
    <!-- FRAMEWORK & SDK CARDS WITH OFFICIAL LOGOS (x: 0, y: 154)   -->
    <!-- ========================================================== -->
    <g transform="translate(0, 150)">
      
      <!-- ======================================================== -->
      <!-- CARD 1: MOBILE ECOSYSTEM & SDKs                          -->
      <!-- ======================================================== -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="352" height="120" rx="14" fill="url(#opt2-card-mobile)" stroke="#38BDF8" stroke-opacity="0.4" stroke-width="1.2" />
        
        <!-- Header Pill -->
        <g transform="translate(14, 14)">
          <rect x="0" y="0" width="88" height="22" rx="6" fill="#38BDF8" fill-opacity="0.15" stroke="#38BDF8" stroke-opacity="0.4" stroke-width="1" />
          <text x="44" y="15" class="font-mono" font-size="10.5" font-weight="700" fill="#38BDF8" text-anchor="middle">📱 MOBILE</text>
        </g>
        <text x="112" y="29" class="font-mono" font-size="10.5" font-weight="500" fill="#94A3B8">Frameworks &amp; SDKs</text>

        <!-- Chips Row With Brand Logos (Clean Spacing, No Overflow) -->
        <g transform="translate(14, 46)">
          
          <!-- CHIP 1: FLUTTER -->
          <g transform="translate(0, 0)">
            <rect x="0" y="0" width="72" height="28" rx="7" fill="#131924" stroke="#253248" stroke-width="1" />
            <g transform="translate(6, 6) scale(0.66)">
              <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37z" fill="#54C5F8"/>
              <path d="M14.328 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.372z" fill="#29B6F6"/>
              <path d="M14.328 17.533L9.664 22.197l1.79 1.79 4.664-4.664-1.79-1.79z" fill="#01579B"/>
              <path d="M11.454 23.987l2.874 2.874h7.372l-6.46-6.46-3.786 3.586z" fill="#02569B"/>
            </g>
            <text x="47" y="18" class="font-mono" font-size="10.5" font-weight="600" fill="#F8FAFC" text-anchor="middle">Flutter</text>
          </g>

          <!-- CHIP 2: IONIC -->
          <g transform="translate(78, 0)">
            <rect x="0" y="0" width="62" height="28" rx="7" fill="#131924" stroke="#253248" stroke-width="1" />
            <g transform="translate(6, 6) scale(0.66)">
              <circle cx="12" cy="12" r="10" fill="#3880FF"/>
              <circle cx="12" cy="12" r="5" fill="#131924"/>
              <circle cx="12" cy="12" r="3" fill="#3880FF"/>
              <circle cx="16.5" cy="7.5" r="2.2" fill="#FFFFFF"/>
            </g>
            <text x="41" y="18" class="font-mono" font-size="10.5" font-weight="600" fill="#F8FAFC" text-anchor="middle">Ionic</text>
          </g>

          <!-- CHIP 3: REACT NATIVE -->
          <g transform="translate(146, 0)">
            <rect x="0" y="0" width="84" height="28" rx="7" fill="#131924" stroke="#253248" stroke-width="1" />
            <g transform="translate(6, 6) scale(0.66)">
              <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" stroke-width="1.3" transform="rotate(0 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" stroke-width="1.3" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" stroke-width="1.3" transform="rotate(120 12 12)"/>
            </g>
            <text x="53" y="18" class="font-mono" font-size="10.5" font-weight="600" fill="#F8FAFC" text-anchor="middle">React N.</text>
          </g>

          <!-- CHIP 4: ANDROID SDK (Zero overflow, ample margin) -->
          <g transform="translate(236, 0)">
            <rect x="0" y="0" width="76" height="28" rx="7" fill="#131924" stroke="#253248" stroke-width="1" />
            <g transform="translate(6, 6) scale(0.66)">
              <path d="M5 14C5 9.03 9.03 5 14 5s9 4.03 9 9H5z" fill="#3DDC84"/>
              <circle cx="9.5" cy="10" r="1.3" fill="#131924"/>
              <circle cx="18.5" cy="10" r="1.3" fill="#131924"/>
              <line x1="7.5" y1="5.5" x2="5" y2="2" stroke="#3DDC84" stroke-width="1.6" stroke-linecap="round"/>
              <line x1="20.5" y1="5.5" x2="23" y2="2" stroke="#3DDC84" stroke-width="1.6" stroke-linecap="round"/>
            </g>
            <text x="49" y="18" class="font-mono" font-size="10.5" font-weight="600" fill="#F8FAFC" text-anchor="middle">Android</text>
          </g>

        </g>

        <!-- Micro description & SDK notes (Updated) -->
        <text x="14" y="103" class="font-mono" font-size="9.8" font-weight="500" fill="#94A3B8">
          Dart · Clean Arch · MVVM · RxJS · Offline First
        </text>
      </g>

      <!-- ======================================================== -->
      <!-- CARD 2: FULL STACK ECOSYSTEM & SDKs                      -->
      <!-- ======================================================== -->
      <g transform="translate(366, 0)">
        <rect x="0" y="0" width="352" height="120" rx="14" fill="url(#opt2-card-fullstack)" stroke="#5E6AD2" stroke-opacity="0.5" stroke-width="1.2" />
        
        <!-- Header Pill -->
        <g transform="translate(14, 14)">
          <rect x="0" y="0" width="106" height="22" rx="6" fill="#5E6AD2" fill-opacity="0.2" stroke="#5E6AD2" stroke-opacity="0.5" stroke-width="1" />
          <text x="53" y="15" class="font-mono" font-size="10.5" font-weight="700" fill="#A5B4FC" text-anchor="middle">⚡ FULL STACK</text>
        </g>
        <text x="130" y="29" class="font-mono" font-size="10.5" font-weight="500" fill="#94A3B8">Web, APIs &amp; Cloud</text>

        <!-- Chips Row With Brand Logos -->
        <g transform="translate(14, 46)">
          
          <!-- CHIP 1: ANGULAR -->
          <g transform="translate(0, 0)">
            <rect x="0" y="0" width="74" height="28" rx="7" fill="#181528" stroke="#312B4C" stroke-width="1" />
            <g transform="translate(6, 6) scale(0.66)">
              <path d="M12 2L3 5.2l1.4 12.3L12 22l7.6-4.5 1.4-12.3L12 2z" fill="url(#angular-grad)"/>
              <path d="M12 2v20l7.6-4.5 1.4-12.3L12 2z" fill="#9F1239" opacity="0.4"/>
              <path d="M12 5.5l-4.8 10.8h2l1-2.5h3.6l1 2.5h2L12 5.5zm1.2 6.5h-2.4L12 8.7l1.2 3.3z" fill="#FFFFFF"/>
            </g>
            <text x="48" y="18" class="font-mono" font-size="10.5" font-weight="600" fill="#F8FAFC" text-anchor="middle">Angular</text>
          </g>

          <!-- CHIP 2: REACT -->
          <g transform="translate(80, 0)">
            <rect x="0" y="0" width="64" height="28" rx="7" fill="#181528" stroke="#312B4C" stroke-width="1" />
            <g transform="translate(6, 6) scale(0.66)">
              <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" stroke-width="1.3" transform="rotate(0 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" stroke-width="1.3" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" stroke-width="1.3" transform="rotate(120 12 12)"/>
            </g>
            <text x="43" y="18" class="font-mono" font-size="10.5" font-weight="600" fill="#F8FAFC" text-anchor="middle">React</text>
          </g>

          <!-- CHIP 3: NESTJS -->
          <g transform="translate(150, 0)">
            <rect x="0" y="0" width="70" height="28" rx="7" fill="#181528" stroke="#312B4C" stroke-width="1" />
            <g transform="translate(6, 6) scale(0.66)">
              <path d="M12.5 2.2C10.8 1.9 8.2 3 7 4.2L4.5 7.5c-1 1.4-1.2 3-.5 4.5l1.8 3.5c.8 1.6 2.4 2.6 4.2 2.6h3c1.5 0 3-.8 3.8-2l2.2-3.5c.8-1.2.6-2.8-.4-3.8L16 6.5c-1-1-2.2-1.8-3.5-2.2v-2.1z" fill="#E0234E"/>
              <path d="M14 6l3.5 3.5-2 3.5h-3l2-3.5L14 6z" fill="#FFFFFF" opacity="0.95"/>
            </g>
            <text x="46" y="18" class="font-mono" font-size="10.5" font-weight="600" fill="#F8FAFC" text-anchor="middle">NestJS</text>
          </g>

          <!-- CHIP 4: NODE.JS -->
          <g transform="translate(226, 0)">
            <rect x="0" y="0" width="76" height="28" rx="7" fill="#181528" stroke="#312B4C" stroke-width="1" />
            <g transform="translate(6, 6) scale(0.66)">
              <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z" fill="#5FA04E"/>
              <path d="M12 2l8.5 4.9-8.5 4.9-8.5-4.9L12 2z" fill="#68A063"/>
              <path d="M12 11.8v9.8l8.5-4.9V6.9L12 11.8z" fill="#43853D"/>
            </g>
            <text x="49" y="18" class="font-mono" font-size="10.5" font-weight="600" fill="#F8FAFC" text-anchor="middle">Node.js</text>
          </g>

        </g>

        <!-- Micro description & SDK notes -->
        <text x="14" y="103" class="font-mono" font-size="9.8" font-weight="500" fill="#94A3B8">
          TypeScript · Signals Zoneless · Micro Frontends
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
  console.log('Saved Option 2 SVG with framework logos:', outSvg);

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
