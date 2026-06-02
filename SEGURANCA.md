# 🔒 Documentação de Segurança - AlbusDente

## ⚠️ Nível de Proteção Atual: **INTERMEDIÁRIO**

### O que foi implementado:

1. **Codificação Base64** das credenciais
   - Username: `QWxidXNEZW50ZVNpc3RlbWE=` → decodifica para `AlbusDenteSistema`
   - Password: `KkBCVSREI050Mw==` → decodifica para `*@BU$D#Nt3`

2. **Ofuscação de variáveis**
   - Nomes como `_0x4a2b`, `_decode`, `_validate` dificultam busca
   - Strings fragmentadas em arrays

3. **Anti-debugging básico**
   - Detecta abertura do console
   - Mensagem de aviso para desencorajar inspeção

4. **Função de validação separada**
   - Lógica espalhada em múltiplas funções
   - Dificulta encontrar credenciais diretas no código

---

## ❌ Limitações (IMPORTANTE LER)

### Esta proteção NÃO impede:

✗ **Inspecionar código-fonte** - ainda é possível ver o JavaScript  
✗ **Decodificar Base64** - qualquer pessoa pode usar `atob()` no console  
✗ **Debugar o código** - ferramentas avançadas conseguem reverter ofuscação  
✗ **Interceptar requisições** - não há backend para validar  

### Como descobrir as credenciais (mesmo com ofuscação):

```javascript
// No console do navegador (F12):
atob('QWxidXNEZW50ZVNpc3RlbWE=')  // → "AlbusDenteSistema"
atob('KkBCVSREI050Mw==')           // → "*@BU$D#Nt3"
```

---

## ✅ Propósito desta Implementação

Esta solução é adequada para:
- **Demos e apresentações** que precisam de controle de acesso básico
- **Protótipos** sem dados sensíveis ou reais
- **Dificultar acesso casual** de usuários não-técnicos
- **Impedir robôs e crawlers** simples

---

## 🚀 Para Segurança Real de Produção

Se o sistema for processar **dados reais de pacientes** ou informações sensíveis, implemente:

### Opção 1: Vercel Serverless Functions (Recomendado)
```javascript
// api/login.js
export default function handler(req, res) {
  const { username, password } = req.body;
  
  // Validar no servidor (credenciais em variáveis de ambiente)
  if (username === process.env.VALID_USER && 
      password === process.env.VALID_PASS) {
    return res.json({ success: true, token: generateJWT() });
  }
  
  return res.status(401).json({ success: false });
}
```

### Opção 2: Firebase Authentication
- Autenticação gerenciada pelo Google
- Suporta email/senha, Google SSO, etc.
- Gratuito até 50k usuários/mês

### Opção 3: Supabase
- Backend completo com PostgreSQL
- Authentication integrada
- Tier gratuito generoso

---

## 📊 Comparação de Segurança

| Método | Proteção Casual | Proteção Técnica | Custo | Complexidade |
|--------|----------------|------------------|-------|--------------|
| **Atual (Ofuscação)** | ⭐⭐⭐ | ⭐ | Grátis | Baixa |
| **Vercel Functions** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ~$20/mês | Média |
| **Firebase Auth** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Grátis | Média |
| **Backend Próprio** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Variável | Alta |

---

## 🔑 Credenciais Atuais

**Usuário:** `AlbusDenteSistema`  
**Senha:** `*@BU$D#Nt3`

⚠️ **Trocar se houver dados sensíveis!**

---

## 📝 Recomendação Final

**Para esta apresentação/demo:** A ofuscação atual é suficiente ✅

**Para sistema com dados reais:** Migrar para autenticação backend ANTES do lançamento ⚠️

---

*Última atualização: 02/04/2026*  
*Powered by InnovaSfera*
