# AlbusDente - Sistema de Apresentação Protegido

**Desenvolvido por InnovaSfera** 🚀  
_Soluções tecnológicas para a área da saúde_

---

## 🔐 Sistema de Login

Este projeto possui uma tela de login para proteger o acesso à apresentação.

### Credenciais de Acesso:
- **Usuário:** `AlbusDenteSistema`
- **Senha:** `*@BU$D#Nt3`

## 📁 Estrutura dos Arquivos

```
/
├── index.html                       # Tela de login (página inicial)
├── apresentacao-albusdente.html     # Apresentação protegida
├── logo-large.svg                   # Logo InnovaSfera (usado como watermark)
├── vercel.json                      # Configuração de rotas do Vercel
└── README.md                        # Este arquivo
```

**Importante:** 
- Certifique-se de que o arquivo `logo-large.svg` está presente na raiz do projeto para que os watermarks sejam exibidos corretamente.
- O arquivo `vercel.json` é **obrigatório** para o deploy funcionar corretamente no Vercel.

## 🚀 Deploy no Vercel

### ⚠️ ATENÇÃO: Checklist ANTES do Deploy

Certifique-se de que **TODOS** estes arquivos estão no repositório GitHub:
- [ ] `index.html`
- [ ] `apresentacao-albusdente.html`
- [ ] `logo-large.svg`
- [ ] **`vercel.json`** ⚠️ **CRUCIAL - SEM ELE DÁ 404**
- [ ] `README.md` (opcional)

### Passo 1: Preparar o Repositório
1. Crie um repositório no GitHub
2. **VERIFIQUE** se todos os arquivos estão na raiz:
```bash
git add .
git commit -m "Initial commit - AlbusDente presentation"
git push origin main
```
3. **CONFIRME** no GitHub que `vercel.json` está visível na raiz

### Passo 2: Conectar ao Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New..." → "Project"
3. Conecte sua conta do GitHub (se ainda não conectou)
4. Selecione o repositório do AlbusDente

### Passo 3: Configurar o Deploy
1. **Framework Preset:** Other (ou deixe em branco)
2. **Root Directory:** `./` (deixe como está)
3. **Build Command:** deixe vazio
4. **Output Directory:** deixe vazio
5. **Install Command:** deixe vazio
6. Clique em **"Deploy"**

### Passo 4: Aguardar Deploy
- O Vercel vai processar por 30-60 segundos
- Aguarde até aparecer "Congratulations!" ou tela de sucesso

### Passo 5: Testar as Rotas
Teste TODAS estas URLs:
- ✅ `https://seu-projeto.vercel.app/` → Deve mostrar login
- ✅ `https://seu-projeto.vercel.app/apresentacao` → Deve pedir login
- ✅ `https://seu-projeto.vercel.app/dashboard` → Deve pedir login
- ✅ `https://seu-projeto.vercel.app/login` → Deve mostrar login

**Se alguma rota der 404: Veja "Solução de Problemas" abaixo ⬇️**

### Rotas Disponíveis:
- `https://seu-projeto.vercel.app/` → Login (página inicial)
- `https://seu-projeto.vercel.app/apresentacao` → Apresentação (requer autenticação)
- `https://seu-projeto.vercel.app/dashboard` → Alias para apresentação

**Nota:** As URLs são limpas (sem `.html`) graças ao arquivo `vercel.json`.

## 🔒 Segurança

### ⚠️ Nota Sobre Segurança Client-Side
Este sistema usa **ofuscação intermediária** com Base64 encoding. As credenciais estão codificadas no JavaScript, mas ainda podem ser decodificadas por usuários técnicos. Veja o arquivo [SEGURANCA.md](SEGURANCA.md) para detalhes completos.

**Nível de Proteção:**
- ✅ Adequado para: Demos, apresentações, protótipos sem dados sensíveis
- ❌ NÃO adequado para: Dados reais de pacientes ou informações críticas

### Recursos de Segurança Implementados:
- ✅ Tela de login obrigatória
- ✅ Credenciais ofuscadas (Base64 + anti-debugging)
- ✅ Validação de credenciais
- ✅ Sessão baseada em sessionStorage
- ✅ Auto-logout após 8 horas de inatividade
- ✅ Redirecionamento automático se não autenticado
- ✅ Botão de logout no header da apresentação
- ✅ Configuração Vercel com rotas limpas

### 🐛 Solução de Problemas (Troubleshooting)

**Erro 404: NOT_FOUND ao acessar `/apresentacao`**

✅ **SOLUÇÃO RÁPIDA:**
1. Verifique se o arquivo `vercel.json` está na **raiz do repositório** no GitHub
2. Faça um novo commit e push:
```bash
git add vercel.json
git commit -m "Add vercel.json configuration"
git push
```
3. Aguarde o Vercel fazer o redeploy automático (30-60 segundos)
4. Teste novamente: `https://seu-dominio.vercel.app/apresentacao`

**Se ainda não funcionar:**
1. Acesse o painel do Vercel
2. Vá em "Settings" do projeto
3. Role até "File Structure" ou "Build & Development Settings"
4. Confirme que vê o arquivo `vercel.json` listado
5. Se NÃO aparecer: o arquivo não foi enviado ao GitHub
6. Force um redeploy: Aba "Deployments" → menu ⋮ → "Redeploy"

**Verificar se `vercel.json` existe no repo:**
- Acesse: `https://github.com/seu-usuario/seu-repo/blob/main/vercel.json`
- Se der 404: o arquivo NÃO está no repositório
- **Solução:** Faça commit do arquivo:
  ```bash
  git add vercel.json
  git commit -m "Add Vercel routing configuration"
  git push origin main
  ```

**Verificar no painel do Vercel:**
1. Acesse seu projeto no painel Vercel
2. Clique na última deployment
3. Clique em "Source" ou "View Source"
4. Procure por `vercel.json` na lista de arquivos
5. Se NÃO aparecer → arquivo não foi detectado

**Force um redeploy:**
1. Painel Vercel → Aba "Deployments"
2. Clique no deployment mais recente
3. Clique nos três pontos (⋮) → "Redeploy"
4. Aguarde completar e teste novamente

**Ainda com 404? Tente acessar diretamente o HTML:**
- Teste: `https://seu-projeto.vercel.app/apresentacao-albusdente.html`
- Se funcionar: problema é o `vercel.json`
- Se também der 404: arquivo não está no repositório

**Estrutura correta dos arquivos:**
```
seu-repositorio/
├── index.html
├── apresentacao-albusdente.html
├── logo-large.svg
├── vercel.json          ⚠️ DEVE ESTAR AQUI (raiz)
└── README.md
```

**Credenciais não funcionam**
- Usuário: `AlbusDenteSistema` (case-sensitive)
- Senha: `*@BU$D#Nt3` (exatamente como mostrado)
- Verifique se não há espaços extras ao digitar

**Watermark não aparece**
- Verifique se `logo-large.svg` está na raiz do repositório
- Confirme que o arquivo foi enviado no commit do deploy

### Nota Importante:
⚠️ Para **segurança máxima em produção com dados reais**, seria necessário implementar autenticação backend com API e banco de dados. Consulte [SEGURANCA.md](SEGURANCA.md) para opções.

## 📱 Funcionalidades

### 📐 Design Totalmente Responsivo
Todo o projeto foi otimizado para funcionar perfeitamente em qualquer dispositivo:

**Breakpoints Suportados:**
- 🖥️ **Desktop Large** (>1200px) - Experiência completa
- 💻 **Desktop Small** (≤1200px) - Layout otimizado
- 📱 **Tablet Landscape** (≤1024px) - Grid adaptado 2 colunas
- 📱 **Tablet Portrait** (≤768px) - Grid 1 coluna, navegação simplificada
- 📱 **Mobile Landscape** (≤640px) - Elementos compactos
- 📱 **Mobile Portrait** (≤480px) - Interface otimizada para toque
- 📱 **Mobile Small** (≤360px) - Suporte para telas pequenas
- 🔄 **Landscape Mode** - Ajustes especiais para orientação paisagem

**Recursos Responsivos:**
- ✅ Textos e espaçamentos proporcionais
- ✅ Grids adaptáveis (4col → 2col → 1col)
- ✅ Imagens e ícones redimensionáveis
- ✅ Tabelas otimizadas para mobile
- ✅ Botões e formulários touch-friendly
- ✅ Navegação adaptativa
- ✅ Watermarks redimensionados por dispositivo

### Tela de Login (`index.html`)
- Design moderno e responsivo
- Logo InnovaSfera (logo-large.svg) em watermark blur no background
- Badge "Powered by InnovaSfera" no rodapé com animação
- Mostrar/ocultar senha
- Mensagens de erro amigáveis
- Loading durante autenticação
- Foco automático no campo de usuário

### Apresentação Protegida (`apresentacao-albusdente.html`)
- Watermark sutil logo InnovaSfera (logo-large.svg) no background (canto inferior direito)
- Verificação de autenticação ao carregar
- Botão de logout no header
- Auto-logout por inatividade (8 horas)
- Footer com informações da InnovaSfera
- Todos os recursos da apresentação original mantidos

## 🎨 Customização

### Alterar Credenciais
Edite o arquivo `index.html` e procure por esta seção (linhas ~524-530):
```javascript
// Configuração do sistema (ofuscado)
const _0x4a2b = ['QWxidXNEZW50ZVNpc3RlbWE=', 'KkBCVSREI050Mw=='];
```

Para gerar novas credenciais em Base64:
1. Acesse um codificador Base64 online (ex: base64encode.org)
2. Codifique o novo usuário e senha
3. Substitua os valores no array `_0x4a2b`

**Exemplo:**
- Usuário: `NovoUsuario` → Base64: `Tm92b1VzdWFyaW8=`
- Senha: `NovaSenha123` → Base64: `Tm92YVNlbmhhMTIz`
```javascript
const _0x4a2b = ['Tm92b1VzdWFyaW8=', 'Tm92YVNlbmhhMTIz'];
```

### Alterar Tempo de Inatividade
No arquivo `apresentacao-albusdente.html`, altere:
```javascript
8 * 60 * 60 * 1000  // 8 horas em milissegundos
```

## 🌐 Acesso

1. Usuários acessam: `https://seu-dominio.vercel.app/`
2. São direcionados para a tela de login
3. Após login bem-sucedido, vão para `/apresentacao`
4. Se tentarem acessar `/apresentacao` sem login, são redirecionados ao login
5. Podem acessar também via `/dashboard` (rota alternativa)

**URLs Limpas:** Todas as rotas funcionam sem `.html` na URL (ex: `/apresentacao` em vez de `/apresentacao-albusdente.html`).

## 💡 Dicas

- Compartilhe apenas o link principal do site
- Não compartilhe as credenciais por meios inseguros
- O Vercel oferece domínio customizado no plano gratuito
- Para alterar as credenciais, atualize o código e faça novo deploy

## 📞 Suporte

Para alterar credenciais ou fazer ajustes, edite os arquivos e faça um novo commit. O Vercel fará deploy automático das alterações.

---

## 🎨 Branding

Este projeto apresenta elementos visuais da **InnovaSfera**:
- Watermark com logo-large.svg em background nas páginas (blur + baixa opacidade)
- Badge "Powered by InnovaSfera" na tela de login
- Footer com informações da empresa na apresentação
- Esquema de cores: Verde (#95ef4f) + Preto (#030012)
- Logo oficial da empresa usado como marca d'água sutil

---

📅 Criado em: Abril 2, 2026  
🏢 Desenvolvido por: **InnovaSfera** - Soluções Tecnológicas para Saúde  
🦷 Cliente: AlbusDente - Sistema de Gestão Integrada  
📧 Contato: contato@innovasfera.com.br  
📱 Telefone: (11) 94261-6650
