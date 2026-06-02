# 🎨 PROMPT: Converter Markdown para HTML com Visual AlbusDente

## 📋 Objetivo
Criar páginas HTML profissionais e responsivas a partir de arquivos Markdown (.md), mantendo o design system e estrutura visual dos arquivos `index.html` e `apresentacao-albusdente.html` do projeto AlbusDente.

---

## 🎯 Instruções para o AI

Você receberá um arquivo Markdown e deverá convertê-lo em uma página HTML completa seguindo rigorosamente as especificações abaixo.

---

## 🎨 DESIGN SYSTEM (CSS Variables)

Use estas variáveis CSS obrigatoriamente:

```css
:root {
  /* Cores Primárias */
  --primary-color: #030012;
  --primary-dark: #000000;
  --primary-light: #1a1a2e;
  --secondary-color: #95ef4f;
  --accent-color: #f59e0b;
  --danger-color: #ef4444;
  
  /* Backgrounds */
  --bg-color: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-dark: #0f172a;
  
  /* Textos */
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  
  /* Sombras */
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
  
  /* Espaçamentos */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  /* Tipografia */
  --font-family: "Inter", -apple-system, sans-serif;
}
```

---

## 📦 ESTRUTURA HTML BASE

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="[DESCRIÇÃO DO CONTEÚDO]" />
  <title>[TÍTULO DO DOCUMENTO]</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

  <style>
    /* INCLUIR TODO O CSS DO DESIGN SYSTEM AQUI */
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="container">
      <div class="logo-area">
        <img src="logo-large.svg" alt="Logo" class="logo-img" />
        <h1 class="header-title">[TÍTULO]</h1>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container text-center">
      <h1>[TÍTULO PRINCIPAL DO MD]</h1>
      <p class="subtitle">[SUBTÍTULO OU DESCRIÇÃO]</p>
    </div>
  </section>

  <!-- Content Sections -->
  <main>
    [CONTEÚDO CONVERTIDO DO MD]
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>InnovaSfera Tecnologia</h3>
          <p>Transformando ideias em soluções digitais</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 InnovaSfera Tecnologia. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>

  <!-- InnovaSfera Watermark -->
  <!-- (já incluído no body::before do CSS) -->
</body>
</html>
```

---

## 🔄 MAPEAMENTO: MARKDOWN → HTML

### 📌 Títulos e Seções

**Markdown:**
```markdown
# Título Principal
## Seção 1
### Subseção 1.1
```

**HTML:**
```html
<!-- H1 vira Hero Section -->
<section class="hero">
  <div class="container text-center">
    <h1>Título Principal</h1>
  </div>
</section>

<!-- H2 vira Section com alternância de cor -->
<section class="section section-alt">
  <div class="container">
    <h2>Seção 1</h2>
    <!-- conteúdo -->
  </div>
</section>

<!-- H3 dentro de section -->
<h3>Subseção 1.1</h3>
```

**Regra de alternância:** Sections com H2 devem alternar entre `.section` e `.section.section-alt` para criar contraste visual.

---

### 📊 Listas e Bullet Points

**Markdown:**
```markdown
- Item 1
- Item 2
- Item 3
```

**HTML (Lista Simples):**
```html
<ul class="feature-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**HTML (Cards em Grid - para listas importantes):**
```html
<div class="grid grid-3">
  <div class="card">
    <div class="card-icon"><i class="fas fa-check"></i></div>
    <h4>Item 1</h4>
    <p>Descrição do item</p>
  </div>
  <div class="card">
    <div class="card-icon"><i class="fas fa-check"></i></div>
    <h4>Item 2</h4>
    <p>Descrição do item</p>
  </div>
  <div class="card">
    <div class="card-icon"><i class="fas fa-check"></i></div>
    <h4>Item 3</h4>
    <p>Descrição do item</p>
  </div>
</div>
```

---

### 🎯 Seções de Destaque (Callouts, Warnings)

**Markdown:**
```markdown
> **Importante:** Texto de destaque
```

**HTML:**
```html
<div class="alert alert-warning">
  <i class="fas fa-exclamation-triangle"></i>
  <div>
    <strong>Importante:</strong> Texto de destaque
  </div>
</div>
```

**CSS Necessário:**
```css
.alert {
  display: flex;
  gap: 1rem;
  padding: var(--spacing-md);
  border-radius: 8px;
  margin: var(--spacing-md) 0;
  align-items: flex-start;
}

.alert-warning {
  background: #fef3c7;
  border-left: 4px solid var(--accent-color);
  color: #92400e;
}

.alert-info {
  background: #dbeafe;
  border-left: 4px solid #3b82f6;
  color: #1e40af;
}

.alert-success {
  background: #d1fae5;
  border-left: 4px solid var(--secondary-color);
  color: #065f46;
}

.alert-danger {
  background: #fee2e2;
  border-left: 4px solid var(--danger-color);
  color: #991b1b;
}
```

---

### 🎨 Tabelas

**Markdown:**
```markdown
| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Dado 1   | Dado 2   | Dado 3   |
```

**HTML:**
```html
<div class="table-container">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Coluna 1</th>
        <th>Coluna 2</th>
        <th>Coluna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dado 1</td>
        <td>Dado 2</td>
        <td>Dado 3</td>
      </tr>
    </tbody>
  </table>
</div>
```

**CSS Necessário:**
```css
.table-container {
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: var(--shadow-md);
  border-radius: 8px;
  overflow: hidden;
}

.styled-table thead {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  color: white;
}

.styled-table th,
.styled-table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.styled-table tbody tr:hover {
  background-color: var(--bg-secondary);
}

.styled-table tbody tr:last-child td {
  border-bottom: none;
}
```

---

### 🎭 Accordion (para conteúdo expansível)

Use quando o MD tiver estrutura hierárquica profunda ou módulos separados.

**Markdown:**
```markdown
## Módulo 1: Nome do Módulo
Descrição breve

### Submódulo 1.1
Conteúdo detalhado...

### Submódulo 1.2
Conteúdo detalhado...
```

**HTML:**
```html
<div class="accordion-module">
  <div class="accordion-header">
    <div class="module-icon-large">
      <i class="fas fa-shield-alt"></i>
    </div>
    <div class="module-title-area">
      <h3>Módulo 1: Nome do Módulo</h3>
      <p>Descrição breve</p>
    </div>
    <div class="accordion-chevron">
      <i class="fas fa-chevron-down"></i>
    </div>
  </div>
  <div class="accordion-content">
    <div class="accordion-body">
      <h4>Submódulo 1.1</h4>
      <p>Conteúdo detalhado...</p>
      
      <h4>Submódulo 1.2</h4>
      <p>Conteúdo detalhado...</p>
    </div>
  </div>
</div>
```

**JavaScript Necessário:**
```javascript
<script>
  // Accordion functionality
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const module = header.parentElement;
      module.classList.toggle('active');
    });
  });
</script>
```

---

### 📈 Estatísticas / Métricas

**Markdown:**
```markdown
- **7 Módulos** integrados
- **24 Meses** de desenvolvimento
- **R$ 156.000** investimento total
```

**HTML:**
```html
<div class="hero-stats">
  <div class="stat-card">
    <span class="stat-number">7</span>
    <span class="stat-label">Módulos integrados</span>
  </div>
  <div class="stat-card">
    <span class="stat-number">24</span>
    <span class="stat-label">Meses de desenvolvimento</span>
  </div>
  <div class="stat-card">
    <span class="stat-number">R$ 156.000</span>
    <span class="stat-label">Investimento total</span>
  </div>
</div>
```

---

### ⚖️ Comparações (Problema vs Solução)

**Markdown:**
```markdown
### Problemas Atuais:
- Problema 1
- Problema 2

### Soluções Propostas:
- Solução 1
- Solução 2
```

**HTML:**
```html
<div class="comparison-container">
  <div class="problem-column">
    <h4><i class="fas fa-times-circle"></i> Problemas Atuais</h4>
    <ul class="problem-list">
      <li>Problema 1</li>
      <li>Problema 2</li>
    </ul>
  </div>
  <div class="solution-column">
    <h4><i class="fas fa-check-circle"></i> Soluções Propostas</h4>
    <ul class="solution-list">
      <li>Solução 1</li>
      <li>Solução 2</li>
    </ul>
  </div>
</div>
```

---

### 🔗 Links e Botões

**Markdown:**
```markdown
[Texto do Link](https://exemplo.com)
```

**HTML (Link normal):**
```html
<a href="https://exemplo.com" class="link">Texto do Link</a>
```

**HTML (Botão de ação):**
```html
<a href="https://exemplo.com" class="btn btn-primary">Texto do Botão</a>
```

**CSS Necessário:**
```css
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: var(--secondary-color);
  color: var(--primary-dark);
}
```

---

### 🖼️ Imagens

**Markdown:**
```markdown
![Alt text](caminho/imagem.jpg)
```

**HTML:**
```html
<div class="image-container">
  <img src="caminho/imagem.jpg" alt="Alt text" class="responsive-img" />
  <p class="image-caption">Legenda da imagem (opcional)</p>
</div>
```

**CSS Necessário:**
```css
.image-container {
  margin: var(--spacing-lg) 0;
  text-align: center;
}

.responsive-img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}

.image-caption {
  margin-top: var(--spacing-sm);
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-style: italic;
}
```

---

### 📝 Code Blocks

**Markdown:**
~~~markdown
```javascript
console.log("Hello World");
```
~~~

**HTML:**
```html
<div class="code-container">
  <div class="code-header">
    <span class="code-language">JavaScript</span>
    <button class="code-copy-btn" onclick="copyCode(this)">
      <i class="fas fa-copy"></i> Copiar
    </button>
  </div>
  <pre><code class="language-javascript">console.log("Hello World");</code></pre>
</div>
```

**CSS Necessário:**
```css
.code-container {
  margin: var(--spacing-lg) 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.code-header {
  background: var(--primary-dark);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.code-language {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
}

.code-copy-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background 0.3s;
}

.code-copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

pre {
  margin: 0;
  padding: var(--spacing-md);
  background: #1e293b;
  color: #e2e8f0;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

code {
  font-family: 'Courier New', monospace;
}
```

---

## 🎯 ELEMENTOS OBRIGATÓRIOS

### 1. **Watermark InnovaSfera**

Adicionar no CSS (dentro do `<style>`):

```css
/* InnovaSfera Watermark - Subtle */
body::before {
  content: "";
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 500px;
  height: 500px;
  background-image: url('logo-large.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
  user-select: none;
  filter: blur(3px);
  z-index: 0;
  transform: rotate(-5deg);
  opacity: 0.03;
}
```

### 2. **Footer Completo**

```html
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>InnovaSfera Tecnologia</h3>
        <p>Transformando ideias em soluções digitais</p>
        <div class="footer-social">
          <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="#" target="_blank"><i class="fab fa-github"></i></a>
          <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-section">
        <h4>Contato</h4>
        <p><i class="fas fa-envelope"></i> contato@innovasfera.tech</p>
        <p><i class="fas fa-phone"></i> (11) 99999-9999</p>
      </div>
      <div class="footer-section">
        <h4>Localização</h4>
        <p><i class="fas fa-map-marker-alt"></i> São Paulo, SP - Brasil</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 InnovaSfera Tecnologia. Todos os direitos reservados.</p>
      <p class="footer-badge">
        <span class="badge-text">Powered by</span>
        <strong>InnovaSfera</strong>
      </p>
    </div>
  </div>
</footer>
```

**CSS do Footer:**
```css
.footer {
  background: linear-gradient(135deg, #000000, #030012, #1a1a2e);
  color: white;
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.footer-section h3,
.footer-section h4 {
  color: var(--secondary-color);
  margin-bottom: var(--spacing-md);
  font-size: 1.125rem;
}

.footer-section p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-social {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.footer-social a {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  transition: all 0.3s;
}

.footer-social a:hover {
  background: var(--secondary-color);
  color: var(--primary-dark);
  transform: translateY(-3px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-lg);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

.footer-badge {
  margin-top: var(--spacing-sm);
  font-size: 0.875rem;
}

.footer-badge strong {
  color: var(--secondary-color);
  margin-left: 0.25rem;
}
```

### 3. **Responsividade Mobile**

Adicionar no final do CSS:

```css
/* Responsividade */
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }
  
  .hero h1 { font-size: 2.25rem; }
  .hero .subtitle { font-size: 1.125rem; }
  
  .comparison-container {
    grid-template-columns: 1fr;
  }
  
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
  
  .nav-menu {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .accordion-header {
    padding: var(--spacing-md);
  }
  
  .module-icon-large {
    width: 48px;
    height: 48px;
    font-size: 1.5rem;
  }
  
  body::before {
    width: 300px;
    height: 300px;
  }
}
```

---

## 🚀 WORKFLOW DE CONVERSÃO

### Passo 1: Análise do Markdown
1. Identificar a estrutura hierárquica (H1, H2, H3...)
2. Identificar listas, tabelas, blockquotes
3. Identificar seções que podem virar Accordion
4. Identificar dados que podem virar Cards ou Stats
5. Identificar comparações (Problema/Solução)

### Passo 2: Estruturar o HTML
1. Criar o Hero com o H1 principal
2. Converter H2 em Sections com alternância de cores
3. Converter conteúdo rico em componentes visuais
4. Adicionar ícones apropriados do Font Awesome
5. Adicionar animações sutis onde apropriado

### Passo 3: Refinamento Visual
1. Verificar hierarquia visual clara
2. Garantir espaçamento consistente
3. Adicionar hover effects nos elementos interativos
4. Testar responsividade mobile
5. Validar contraste de cores (acessibilidade)

### Passo 4: Finalização
1. Adicionar meta tags apropriadas
2. Otimizar title e description
3. Incluir watermark InnovaSfera
4. Incluir footer completo
5. Testar em diferentes navegadores

---

## 🎨 BIBLIOTECA DE ÍCONES

Use Font Awesome 6.4.0 icons apropriadamente:

| Contexto | Ícone Sugerido |
|----------|----------------|
| Autenticação/Login | `fa-shield-alt`, `fa-lock`, `fa-user-lock` |
| Agendamento | `fa-calendar-alt`, `fa-clock`, `fa-calendar-check` |
| Clientes/Pacientes | `fa-users`, `fa-user-md`, `fa-id-card` |
| Financeiro | `fa-dollar-sign`, `fa-chart-line`, `fa-wallet` |
| Relatórios | `fa-chart-bar`, `fa-file-chart`, `fa-analytics` |
| Comunicação | `fa-comments`, `fa-bell`, `fa-envelope` |
| Configurações | `fa-cog`, `fa-tools`, `fa-sliders-h` |
| Cloud/Hospedagem | `fa-cloud`, `fa-server`, `fa-database` |
| Sucesso/Check | `fa-check`, `fa-check-circle`, `fa-thumbs-up` |
| Erro/Alerta | `fa-times`, `fa-exclamation-triangle`, `fa-ban` |
| Info | `fa-info-circle`, `fa-question-circle` |
| Download | `fa-download`, `fa-file-download` |
| Upload | `fa-upload`, `fa-cloud-upload-alt` |
| Editar | `fa-edit`, `fa-pen`, `fa-pencil-alt` |
| Deletar | `fa-trash`, `fa-trash-alt` |
| Ver/Visualizar | `fa-eye`, `fa-search` |
| Adicionar | `fa-plus`, `fa-plus-circle` |
| Expandir | `fa-chevron-down`, `fa-angle-down` |
| Colapsar | `fa-chevron-up`, `fa-angle-up` |

**Dica:** Sempre use a classe `fas` (solid) ou `far` (regular). Exemplo: `<i class="fas fa-check"></i>`

---

## ✅ CHECKLIST FINAL

Antes de entregar o HTML, verificar:

- [ ] HTML5 válido (doctype, meta tags, lang)
- [ ] Todas as CSS variables declaradas
- [ ] Google Fonts (Inter) carregada
- [ ] Font Awesome 6.4.0 carregado
- [ ] Header com logo e título
- [ ] Hero section com título principal
- [ ] Sections com alternância de cores
- [ ] Footer completo com branding InnovaSfera
- [ ] Watermark InnovaSfera no background
- [ ] Responsividade mobile (media queries)
- [ ] Accordion funcional (se usado) com JavaScript
- [ ] Ícones coerentes e visualmente balanceados
- [ ] Espaçamentos consistentes (using CSS vars)
- [ ] Hover effects em elementos interativos
- [ ] Z-index correto (conteúdo acima do watermark)
- [ ] Accessibility (alt texts, aria-labels if needed)
- [ ] SEO (title, description, semantic HTML)

---

## 📤 FORMATO DE ENTREGA

Entregar um único arquivo `.html` autocontido (standalone) com:
- CSS inline dentro de `<style>` tags
- JavaScript inline dentro de `<script>` tags (se necessário)
- Links externos apenas para: Google Fonts, Font Awesome
- Imagens referenciadas por caminhos relativos ou URLs

**Nome do arquivo:** `[nome-do-documento].html`

**Estrutura do arquivo:**
```
- <!doctype html>
- <html lang="pt-BR">
  - <head> (meta, title, links, styles)
  - <body>
    - <header> (navegação)
    - <section class="hero"> (introdução)
    - <main> (conteúdo principal)
    - <footer> (rodapé InnovaSfera)
    - <script> (JavaScript se necessário)
```

---

## 💡 DICAS DE CONVERSÃO INTELIGENTE

### Quando usar Cards vs Accordion:
- **Cards**: Lista de 2-8 itens independentes, features, benefícios
- **Accordion**: Seções extensas com hierarquia profunda (módulos, capítulos)

### Quando usar Stats Cards:
- Números importantes (métricas, KPIs, resumo executivo)
- Sempre no Hero ou seção de destaque

### Quando usar Comparison (Problema/Solução):
- Quando o MD explicitamente contrasta situação atual vs proposta
- Pain points vs benefícios
- Antes vs Depois

### Animações e Interatividade:
- Hover em cards (transform translateY)
- Accordion expand/collapse
- Smooth scroll para navegação interna
- Fade in para elementos ao scroll (opcional)

---

## 🎓 EXEMPLO PRÁTICO DE USO

**Input (Markdown):**
```markdown
# Sistema de Gestão Escolar

Sistema completo para gestão de instituições de ensino

## Módulos Principais

### 1. Gestão de Alunos
- Matrícula digital
- Histórico acadêmico
- Documentação centralizada

<!-- ### 2. Gestão Financeira
- Mensalidades automatizadas
- Controle de inadimplência
- Relatórios financeiros -->

## Benefícios

- **95%** de redução em trabalho manual
- **R$ 50.000** economia anual
- **24/7** disponibilidade do sistema
```

**Output (HTML - Estrutura Simplificada):**
```html
<!-- Hero -->
<section class="hero">
  <div class="container text-center">
    <h1>Sistema de Gestão Escolar</h1>
    <p class="subtitle">Sistema completo para gestão de instituições de ensino</p>
  </div>
</section>

<!-- Módulos em Accordion -->
<section class="section">
  <div class="container">
    <h2>Módulos Principais</h2>
    
    <div class="accordion-module">
      <div class="accordion-header">
        <div class="module-icon-large"><i class="fas fa-user-graduate"></i></div>
        <div class="module-title-area">
          <h3>1. Gestão de Alunos</h3>
        </div>
        <div class="accordion-chevron"><i class="fas fa-chevron-down"></i></div>
      </div>
      <div class="accordion-content">
        <div class="accordion-body">
          <ul class="feature-list">
            <li>Matrícula digital</li>
            <li>Histórico acadêmico</li>
            <li>Documentação centralizada</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Benefícios em Stats -->
<section class="section section-alt">
  <div class="container">
    <h2 class="text-center">Benefícios</h2>
    <div class="hero-stats">
      <div class="stat-card">
        <span class="stat-number">95%</span>
        <span class="stat-label">Redução em trabalho manual</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">R$ 50.000</span>
        <span class="stat-label">Economia anual</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">24/7</span>
        <span class="stat-label">Disponibilidade do sistema</span>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 RESUMO EXECUTIVO

**Este prompt permite:**
✅ Converter qualquer Markdown em HTML profissional  
✅ Manter consistência visual com AlbusDente  
✅ Design responsivo e moderno  
✅ Branding InnovaSfera integrado  
✅ Componentes reutilizáveis e modulares  
✅ Acessibilidade e SEO otimizados  

**Resultado final:** Página HTML standalone, visualmente impactante, totalmente funcional, pronta para deploy.

---

**Versão:** 1.0 | **Data:** Abril 2026  
**Criado por:** InnovaSfera Tecnologia  
**Compatibilidade:** Projeto AlbusDente  
