const fs = require('fs');
const path = require('path');

function generateStandaloneShowcase() {
  const png1Path = path.resolve('C:/Users/ander/Documents/Work/ap-dev-web/public/assets/linkedin-banner.png');
  const png2Path = path.resolve('C:/Users/ander/Documents/Work/ap-dev-web/public/assets/linkedin-banner-option2.png');
  const png1_2xPath = path.resolve('C:/Users/ander/Documents/Work/ap-dev-web/public/assets/linkedin-banner-2x.png');
  const png2_2xPath = path.resolve('C:/Users/ander/Documents/Work/ap-dev-web/public/assets/linkedin-banner-option2-2x.png');

  const b64_1 = `data:image/png;base64,${fs.readFileSync(png1Path).toString('base64')}`;
  const b64_2 = `data:image/png;base64,${fs.readFileSync(png2Path).toString('base64')}`;
  const b64_1_2x = `data:image/png;base64,${fs.readFileSync(png1_2xPath).toString('base64')}`;
  const b64_2_2x = `data:image/png;base64,${fs.readFileSync(png2_2xPath).toString('base64')}`;

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AP dev — Banners LinkedIn (Self-Contained &amp; Direct Download)</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #08090A;
      color: #F7F8F8;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 32px 24px;
      line-height: 1.5;
    }
    .container { max-width: 1400px; margin: 0 auto; }
    header {
      margin-bottom: 24px;
      border-bottom: 1px solid #22262E;
      padding-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
    h1 {
      font-size: 26px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .badge {
      font-family: monospace;
      font-size: 12px;
      padding: 4px 10px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid rgba(56, 189, 248, 0.35);
      color: #38BDF8;
    }
    .specs {
      font-family: monospace;
      font-size: 13px;
      color: #94A3B8;
      background: #121417;
      padding: 8px 16px;
      border-radius: 8px;
      border: 1px solid #22262E;
    }
    .specs strong { color: #38BDF8; }
    
    .folder-hint {
      background: #12161F;
      border: 1px solid #1E293B;
      border-left: 4px solid #38BDF8;
      padding: 14px 20px;
      border-radius: 8px;
      margin-bottom: 28px;
      font-size: 13.5px;
      color: #CBD5E1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }
    .folder-path {
      font-family: monospace;
      background: #080A0E;
      padding: 4px 8px;
      border-radius: 4px;
      color: #38BDF8;
      user-select: all;
    }

    .tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 24px;
    }
    .tab-btn {
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      background: transparent;
      border: 1px solid transparent;
      color: #94A3B8;
      transition: all 0.2s ease;
    }
    .tab-btn:hover { color: #F7F8F8; background: #121417; }
    .tab-btn.active {
      color: #F7F8F8;
      background: #181C24;
      border-color: #38BDF8;
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
    }

    .card {
      background: #121417;
      border: 1px solid #22262E;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 32px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    .card-header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    .card-title {
      font-size: 19px;
      font-weight: 700;
      color: #F7F8F8;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .card-desc {
      font-size: 13.5px;
      color: #94A3B8;
      margin-top: 4px;
    }
    .actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 8px;
      font-size: 13.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid #22262E;
      background: #181C24;
      color: #F7F8F8;
      user-select: none;
    }
    .btn:hover {
      background: #222834;
      border-color: #38BDF8;
      transform: translateY(-1px);
    }
    .btn-primary {
      background: linear-gradient(135deg, #5E6AD2 0%, #38BDF8 100%);
      color: #08090A;
      border: none;
      font-weight: 700;
    }
    .btn-primary:hover {
      opacity: 0.95;
      box-shadow: 0 4px 20px rgba(56, 189, 248, 0.4);
    }
    
    .banner-wrapper {
      position: relative;
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #22262E;
      background: #08090A;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    }
    .banner-img {
      width: 100%;
      height: auto;
      display: block;
      user-select: none;
    }

    /* Safe Zone Simulation (LinkedIn Avatar Mockup) */
    .avatar-mockup {
      position: absolute;
      left: 3.2%;
      bottom: -35px;
      width: 12%;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background: #1E232B;
      border: 4px solid #08090A;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      pointer-events: none;
    }
    .avatar-mockup-inner {
      font-size: 11px;
      font-weight: 700;
      color: #64748B;
      text-align: center;
      font-family: monospace;
      padding: 4px;
    }
    .safe-zone-tag {
      position: absolute;
      left: 3.2%;
      bottom: 12px;
      background: rgba(239, 68, 68, 0.2);
      border: 1px dashed rgba(239, 68, 68, 0.6);
      color: #FCA5A5;
      font-family: monospace;
      font-size: 11px;
      padding: 4px 8px;
      border-radius: 4px;
      pointer-events: none;
      z-index: 12;
      display: none;
    }
    .show-safe-zone .safe-zone-tag { display: block; }
    .show-safe-zone .avatar-mockup {
      outline: 2px dashed #EF4444;
      background: rgba(239, 68, 68, 0.25);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-top: 24px;
    }
    .feature-box {
      background: #0D1015;
      border: 1px solid #1E232B;
      border-radius: 10px;
      padding: 14px 18px;
    }
    .feature-box h4 {
      font-size: 13.5px;
      font-weight: 700;
      color: #38BDF8;
      margin-bottom: 4px;
    }
    .feature-box p {
      font-size: 12.5px;
      color: #94A3B8;
    }
  </style>
</head>
<body>

  <div class="container">
    <header>
      <div>
        <h1>
          AP dev — Banners Oficiais LinkedIn
          <span class="badge">100% Standalone Base64</span>
        </h1>
        <p style="font-size: 14px; color: #94A3B8; margin-top: 4px;">
          Especialista em <strong>Flutter, Ionic, Angular e Android</strong> com categorias Mobile &amp; Full Stack.
        </p>
      </div>
      <div class="specs">
        Resolução Oficial: <strong>1584 × 396 px (4:1)</strong>
      </div>
    </header>

    <!-- Local Path Hint -->
    <div class="folder-hint">
      <div>
        📂 <strong>Dica de Acesso Rápido:</strong> Os arquivos já estão salvos e prontos na pasta local do seu projeto:
        <br>
        <span class="folder-path">C:\\Users\\ander\\Documents\\Work\\ap-dev-web\\public\\assets\\</span>
      </div>
      <button class="btn" onclick="copyFolderPath()">📋 Copiar Caminho da Pasta</button>
    </div>

    <!-- Navigation Tabs -->
    <div class="tabs">
      <button class="tab-btn active" onclick="switchTab('tab-all')">👁️ Ver Ambas as Opções</button>
      <button class="tab-btn" onclick="switchTab('tab-opt1')">Opção 1: Terminal Monolith (Vetorial)</button>
      <button class="tab-btn" onclick="switchTab('tab-opt2')">Opção 2: Cyber 3D (Smartphone &amp; Cloud)</button>
    </div>

    <!-- OPTION 1 -->
    <div id="section-opt1" class="card">
      <div class="card-header">
        <div>
          <div class="card-title">
            <span style="color: #38BDF8;">●</span> Opção 1: Terminal Monolith (Engenharia &amp; Capabilities)
          </div>
          <div class="card-desc">
            Vetor nítido com cards separados por categoria e terminal detalhando capabilities completas.
          </div>
        </div>
        <div class="actions">
          <button class="btn btn-primary" onclick="triggerDownload(b64_opt1, 'apdev-linkedin-banner-opt1.png')">
            ⬇️ Baixar PNG 1x (1584×396)
          </button>
          <button class="btn" onclick="triggerDownload(b64_opt1_2x, 'apdev-linkedin-banner-opt1-retina-2x.png')">
            🚀 Baixar 2x Retina (3168×792)
          </button>
          <button class="btn" onclick="toggleSafeZone('banner1-container')">
            👁️ Simular Avatar
          </button>
        </div>
      </div>

      <div class="banner-wrapper" id="banner1-container">
        <img class="banner-img" src="${b64_1}" alt="AP dev LinkedIn Banner Opção 1">
        <div class="avatar-mockup">
          <div class="avatar-mockup-inner">FOTO DE<br>PERFIL</div>
        </div>
        <div class="safe-zone-tag">ÁREA SEGURA DO AVATAR</div>
      </div>

      <div class="features-grid">
        <div class="feature-box">
          <h4>📱 Mobile Frameworks Card</h4>
          <p>Flutter, Ionic, React Native e Android agrupados em card com visual Obsidian.</p>
        </div>
        <div class="feature-box">
          <h4>⚡ Full Stack Frameworks Card</h4>
          <p>Angular, React, NestJS e Node.js em card separado com acento índigo.</p>
        </div>
        <div class="feature-box">
          <h4>💻 Terminal de Capabilities</h4>
          <p>Visão 360° no terminal: Mobile, Web Zoneless, SOLID, 80%+ testes e IA com MCP.</p>
        </div>
      </div>
    </div>

    <!-- OPTION 2 -->
    <div id="section-opt2" class="card">
      <div class="card-header">
        <div>
          <div class="card-title">
            <span style="color: #5E6AD2;">●</span> Opção 2: Cyber 3D Ambient (Smartphone Holográfico &amp; Cloud Glow)
          </div>
          <div class="card-desc">
            Composição 3D volumétrica com smartphone futurista, grade de nuvem e cards em glassmorphism.
          </div>
        </div>
        <div class="actions">
          <button class="btn btn-primary" onclick="triggerDownload(b64_opt2, 'apdev-linkedin-banner-opt2.png')">
            ⬇️ Baixar PNG 1x (1584×396)
          </button>
          <button class="btn" onclick="triggerDownload(b64_opt2_2x, 'apdev-linkedin-banner-opt2-retina-2x.png')">
            🚀 Baixar 2x Retina (3168×792)
          </button>
          <button class="btn" onclick="toggleSafeZone('banner2-container')">
            👁️ Simular Avatar
          </button>
        </div>
      </div>

      <div class="banner-wrapper" id="banner2-container">
        <img class="banner-img" src="${b64_2}" alt="AP dev LinkedIn Banner Opção 2 Cyber 3D">
        <div class="avatar-mockup">
          <div class="avatar-mockup-inner">FOTO DE<br>PERFIL</div>
        </div>
        <div class="safe-zone-tag">ÁREA SEGURA DO AVATAR</div>
      </div>

      <div class="features-grid">
        <div class="feature-box">
          <h4>🔮 Iluminação Volumétrica 3D</h4>
          <p>Smartphone futurista com neon edge glow (#38BDF8) e computação em nuvem ao fundo.</p>
        </div>
        <div class="feature-box">
          <h4>🛡️ Vinheta de Alto Contraste</h4>
          <p>Gradiente escuro à esquerda para leitura 100% nítida e proteção do avatar.</p>
        </div>
        <div class="feature-box">
          <h4>💎 Glassmorphism</h4>
          <p>Cards de Mobile e Full Stack translúcidos perfeitamente legíveis sobre o render.</p>
        </div>
      </div>
    </div>

  </div>

  <script>
    const b64_opt1 = "${b64_1}";
    const b64_opt1_2x = "${b64_1_2x}";
    const b64_opt2 = "${b64_2}";
    const b64_opt2_2x = "${b64_2_2x}";

    function triggerDownload(base64Data, filename) {
      // Decode base64 to Blob to bypass browser file:// URL download restrictions
      const parts = base64Data.split(';base64,');
      const contentType = parts[0].split(':')[1];
      const raw = window.atob(parts[1]);
      const rawLength = raw.length;
      const uInt8Array = new Uint8Array(rawLength);

      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }

      const blob = new Blob([uInt8Array], { type: contentType });
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    }

    function toggleSafeZone(containerId) {
      const container = document.getElementById(containerId);
      container.classList.toggle('show-safe-zone');
    }

    function switchTab(tabId) {
      const btns = document.querySelectorAll('.tab-btn');
      btns.forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');

      const sec1 = document.getElementById('section-opt1');
      const sec2 = document.getElementById('section-opt2');

      if (tabId === 'tab-all') {
        sec1.style.display = 'block';
        sec2.style.display = 'block';
      } else if (tabId === 'tab-opt1') {
        sec1.style.display = 'block';
        sec2.style.display = 'none';
      } else if (tabId === 'tab-opt2') {
        sec1.style.display = 'none';
        sec2.style.display = 'block';
      }
    }

    function copyFolderPath() {
      navigator.clipboard.writeText("C:\\\\Users\\\\ander\\\\Documents\\\\Work\\\\ap-dev-web\\\\public\\\\assets\\\\");
      alert("Caminho copiado para a área de transferência! Você pode colar no Windows Explorer.");
    }
  </script>
</body>
</html>`;

  const outHtmlBrain = path.resolve('C:/Users/ander/.gemini/antigravity/brain/c93761da-74b8-40a0-8a36-1f36db98bf7a/linkedin-banner-showcase.html');
  fs.writeFileSync(outHtmlBrain, html, 'utf8');
  console.log('Saved standalone showcase to:', outHtmlBrain);
}

generateStandaloneShowcase();
