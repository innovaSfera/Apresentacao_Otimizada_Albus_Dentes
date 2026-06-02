# ✅ Checklist de Deploy - AlbusDente

## 🚨 Você está com erro 404 ao acessar `/apresentacao`?

Siga este checklist passo a passo:

---

## 1️⃣ Verificar Arquivos Locais

Execute no terminal (PowerShell) dentro da pasta do projeto:

```powershell
# Ver todos os arquivos
Get-ChildItem

# Deve aparecer:
# - index.html
# - apresentacao-albusdente.html
# - logo-large.svg
# - vercel.json ⚠️ IMPORTANTE
# - README.md
# - SEGURANCA.md
```

Se `vercel.json` NÃO aparecer: **PARE AQUI - arquivo foi deletado!**

---

## 2️⃣ Verificar Status do Git

```powershell
# Ver status dos arquivos
git status
```

### Se aparecer `vercel.json` em vermelho (não rastreado):

```powershell
# Adicionar ao Git
git add vercel.json

# Confirmar
git commit -m "Add vercel.json for Vercel routing"

# Enviar para GitHub
git push origin main
```

### Se aparecer "nothing to commit, working tree clean":
- ✅ Arquivo já está no GitHub
- Próximo passo: verificar no GitHub

---

## 3️⃣ Verificar no GitHub

1. Acesse: `https://github.com/SEU-USUARIO/SEU-REPOSITORIO`
2. Veja a lista de arquivos na raiz
3. **Procure por `vercel.json`**
4. Clique nele para ver o conteúdo

### Conteúdo correto do `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/apresentacao", "destination": "/apresentacao-albusdente.html" },
    { "source": "/dashboard", "destination": "/apresentacao-albusdente.html" },
    { "source": "/login", "destination": "/index.html" }
  ]
}
```

Se o arquivo **NÃO** estiver no GitHub ou o conteúdo estiver diferente:
```powershell
# Force o push
git add vercel.json
git commit -m "Update vercel.json configuration"
git push origin main --force
```

---

## 4️⃣ Redeploy no Vercel

Após confirmar que `vercel.json` está no GitHub:

### Opção A: Redeploy Automático
- Aguarde 1-2 minutos
- O Vercel detecta mudanças automaticamente
- Recarregue a página

### Opção B: Redeploy Manual
1. Acesse [vercel.com](https://vercel.com)
2. Entre no seu projeto
3. Aba **"Deployments"**
4. Clique no deployment mais recente
5. Clique nos **três pontos (⋮)**
6. Selecione **"Redeploy"**
7. Aguarde completar (30-60 segundos)

---

## 5️⃣ Testar as Rotas

Após o redeploy, teste TODAS estas URLs:

```
✅ https://proposta-albus-dente.vercel.app/
   → Deve mostrar tela de login

✅ https://proposta-albus-dente.vercel.app/apresentacao
   → Deve mostrar tela de login OU apresentação (se já logado)

✅ https://proposta-albus-dente.vercel.app/dashboard
   → Deve mostrar tela de login OU apresentação (se já logado)

✅ https://proposta-albus-dente.vercel.app/apresentacao-albusdente.html
   → Deve funcionar (acesso direto ao arquivo)
```

---

## 🔍 Diagnóstico Avançado

### Teste 1: Acesso direto ao arquivo HTML
```
https://proposta-albus-dente.vercel.app/apresentacao-albusdente.html
```

**Se funcionar:**
- ✅ Arquivo está no Vercel
- ❌ Problema é o `vercel.json` não sendo lido
- **Solução:** Verifique se `vercel.json` está na raiz (não em subpasta)

**Se der 404:**
- ❌ Arquivo NÃO está no deploy
- **Solução:** Confirme no GitHub e force redeploy

### Teste 2: Ver arquivos do deployment
1. Vercel Dashboard → Seu projeto
2. Clique no deployment mais recente
3. Clique em **"View Source"** ou **"Source"**
4. Procure `vercel.json` na lista
5. Clique e veja o conteúdo

**Se não aparecer:** arquivo não foi incluído no build

---

## 🆘 Solução Definitiva (Último Recurso)

Se NADA funcionou até agora:

```powershell
# 1. Deletar o projeto no Vercel
# Vá em Settings → General → Delete Project

# 2. Confirmar todos arquivos estão no Git
git add .
git commit -m "Complete AlbusDente files"
git push origin main

# 3. Criar NOVO projeto no Vercel
# - Import do GitHub novamente
# - Framework Preset: Other
# - Deploy

# 4. Aguardar completar e testar
```

---

## 📋 Estrutura Correta

```
seu-repositorio/ (RAIZ)
│
├── .git/                           (pasta Git - invisível)
├── index.html                      ✅ LOGIN
├── apresentacao-albusdente.html    ✅ APRESENTAÇÃO  
├── logo-large.svg                  ✅ LOGO
├── vercel.json                     ✅ ROTAS (CRUCIAL!)
├── README.md                       📄 Documentação
├── SEGURANCA.md                    📄 Segurança
└── DEPLOY-CHECKLIST.md             📄 Este arquivo
```

**ATENÇÃO:** `vercel.json` **DEVE** estar na raiz (mesmo nível que `index.html`)

---

## ✉️ Suporte

Se seguiu todos os passos e ainda não funciona:

1. Tire screenshot do:
   - Lista de arquivos no GitHub (raiz do repo)
   - Painel de deployments do Vercel
   - Terminal mostrando `git status`
   - Mensagem de erro completa

2. Entre em contato com InnovaSfera:
   - 📧 Email: contato@innovasfera.com.br
   - 📱 WhatsApp: (11) 94261-6650

---

*Última atualização: 02/04/2026*  
*Desenvolvido por InnovaSfera*
