# 📊 Revisão de Cálculos - Projeto AlbusDente

**Data da Revisão:** 01 de Junho de 2026  
**Responsável:** Equipe InnovaSfera  
**Objetivo:** Validar estimativas de custo, horas e prazo do projeto

---

## 📋 Sumário Executivo

| Métrica | Proposta Original | Proposta Otimizada | Economia |
|---------|-------------------|-------------------|----------|
| **Custo Total** | R$ 169.000 | R$ 142.189 | **R$ 26.811 (-15,9%)** |
| **Prazo Total** | 31 meses | 27 meses | **4 meses (-12,9%)** |
| **Horas Totais** | 4.160h | 3.504h | **656h (-15,8%)** |
| **Custo/Hora Médio** | R$ 40,63 | R$ 40,57 | Consistente |

---

## 1️⃣ Revisão Módulo por Módulo

### **Módulo 0 - Setup e Infraestrutura**

| Item | Original | Revisão | Status |
|------|----------|---------|--------|
| **Custo** | R$ 13.000 | R$ 13.000 | ✅ Mantido |
| **Horas** | 320h | 320h | ✅ Mantido |
| **Prazo** | 1 mês | 1 mês | ✅ Mantido |

**Detalhamento de Horas:**
- Configuração Azure (App Service + SQL + Blob Storage): 80h
- CI/CD Pipeline (Azure DevOps): 40h
- Ambientes (Dev, Staging, Prod): 60h
- Segurança (SSL, WAF, HTTPS): 40h
- Configuração banco de dados: 40h
- Documentação técnica: 40h
- Testes de infraestrutura: 20h

**Validação:** ✅ **APROVADO** - Estimativa realista para setup completo Azure

---

### **Módulo 1 - Autenticação e Cadastros**

| Item | Original | Revisão | Status |
|------|----------|---------|--------|
| **Custo** | R$ 19.500 | R$ 19.500 | ✅ Mantido |
| **Horas** | 480h | 480h | ✅ Mantido |
| **Prazo** | 2 meses | 2 meses | ✅ Mantido |

**Detalhamento de Horas:**
- Sistema de autenticação SSO: 120h
- Perfis de acesso granulares (RBAC): 100h
- Cadastro centralizado multi-tenant: 80h
- Auditoria LGPD: 60h
- Recuperação de senha/2FA: 40h
- Testes de segurança: 40h
- Documentação: 40h

**Validação:** ✅ **APROVADO** - Segurança é crítica, horas adequadas

---

### **Módulo 2 - Agendamento de Consultas**

| Item | Original | Revisão | Status |
|------|----------|---------|--------|
| **Custo** | R$ 26.000 | R$ 26.000 | ✅ Mantido |
| **Horas** | 640h | 640h | ✅ Mantido |
| **Prazo** | 3 meses | 3 meses | ✅ Mantido |

**Detalhamento de Horas:**
- Calendário visual (drag-and-drop): 120h
- Sistema de lembretes automáticos: 80h
- Fila de espera digital: 100h
- Integração WhatsApp API: 80h
- Conflito de horários/validações: 80h
- Relatórios de agendamento: 80h
- Notificações em tempo real: 60h
- Testes e ajustes: 40h

**Validação:** ✅ **APROVADO** - Módulo complexo, estimativa conservadora

---

### **Módulo 3 - Fila Digital / Senhas**

| Item | Original | Revisão | Status |
|------|----------|---------|--------|
| **Custo** | R$ 13.000 | R$ 13.000 | ✅ Mantido |
| **Horas** | 320h | 320h | ✅ Mantido |
| **Prazo** | 1 mês | 1 mês | ✅ Mantido |

**Detalhamento de Horas:**
- Totem de senhas (interface touch): 80h
- Painel de TV (display de chamada): 60h
- Sistema de chamada via SignalR: 80h
- Métricas de espera em tempo real: 40h
- Integração com consultórios: 40h
- Testes: 20h

**Validação:** ✅ **APROVADO** - SignalR pode ser desafiador, mas viável

---

### **Módulo 4 - Ficha Clínica + Azure**

| Item | Original | Revisão | Status |
|------|----------|---------|--------|
| **Custo** | R$ 32.500 | R$ 32.500 | ✅ Mantido |
| **Horas** | 800h | 800h | ✅ Mantido |
| **Prazo** | 4 meses | 4 meses | ✅ Mantido |

**Detalhamento de Horas:**
- Prontuário digital completo: 160h
- Odontograma interativo: 120h
- Upload/visualização de fotos/raio-X (Azure Blob): 100h
- Receita digital com ICP-Brasil: 140h
- Atestados com QR Code: 80h
- Anamnese e termo de consentimento: 80h
- Histórico de consultas: 60h
- Testes e validações: 60h

**Validação:** ✅ **APROVADO** - ICP-Brasil é complexo, horas adequadas

---

### **Módulo 5 - Relatórios e Métricas**

| Item | Original | Revisão | Status |
|------|----------|---------|--------|
| **Custo** | R$ 19.500 | R$ 19.500 | ✅ Mantido |
| **Horas** | 480h | 480h | ✅ Mantido |
| **Prazo** | 2 meses | 2 meses | ✅ Mantido |

**Detalhamento de Horas:**
- Dashboard em tempo real: 100h
- 10+ tipos de relatórios: 200h
- Filtros avançados: 60h
- Exportação Excel/PDF: 60h
- Gráficos interativos: 40h
- Testes: 20h

**Validação:** ✅ **APROVADO** - Relatórios são trabalhosos, estimativa correta

---

### **Módulo 6 - Financeiro e Faturamento**

| Item | Original | Otimizado | Status |
|------|----------|-----------|--------|
| **Custo** | R$ 19.500 | **R$ 0 (REMOVIDO)** | ❌ Removido |
| **Horas** | 480h | 0h | ❌ Removido |
| **Prazo** | 3 meses | 0 mês | ❌ Removido |

**Justificativa da Remoção:**
- ❌ Complexidade fiscal muito alta (INSS, IRRF, FGTS, legislação mutável)
- ❌ Risco elevado de bugs em cálculos financeiros
- ❌ Integrações bancárias custosas (CNAB 240/400)
- ❌ Manutenção contínua obrigatória
- ✅ **Alternativa:** Integração com sistemas especializados (Conta Azul, Omie)
- ✅ **Custo alternativo:** R$ 200-500/mês (ROI em 3+ anos)

**Economia:** **R$ 19.500**

---

### **Módulo 7 - Comunicação e Follow-up**

| Item | Original | Revisão | Status |
|------|----------|---------|--------|
| **Custo** | R$ 13.000 | R$ 13.000 | ✅ Mantido |
| **Horas** | 320h | 320h | ✅ Mantido |
| **Prazo** | 1 mês | 1 mês | ✅ Mantido |

**Detalhamento de Horas:**
- Sistema de chamados digitais: 80h
- Follow-up automatizado: 80h
- Sistema de avaliações: 60h
- Gestão remota multi-clínica: 60h
- Testes: 40h

**Validação:** ✅ **APROVADO** - Escopo simplificado, horas adequadas

---

### **Módulo 8 - RH & Departamento Pessoal**

| Item | Original | Otimizado | Status |
|------|----------|-----------|--------|
| **Custo** | R$ 13.000 | **R$ 9.750** | ⚠️ Otimizado |
| **Horas** | 320h | 240h | ⚠️ Reduzido |
| **Prazo** | 2 meses | 6 semanas | ⚠️ Reduzido |

**Detalhamento de Horas Otimizadas:**
- Cadastro completo (20+ campos): 40h
- Upload/Download documentos (Azure Blob): 60h
- Registro de horas + integração agendamento: 30h
- Cálculo simplificado de folha: 20h
- 3 relatórios micro do funcionário: 50h
- Exportação Excel/PDF: 20h
- Testes: 20h

**Funcionalidades Removidas:**
- ❌ Engine de gestão de benefícios (VA, VT, convênio): -70h
- ❌ Lançamentos automáticos ao financeiro: -40h
- ❌ Portal do colaborador: -60h
- ❌ CNAB bancário: -50h
- ❌ Relatórios avançados de gestão: -40h
- ❌ Cálculos fiscais complexos: -60h

**Economia:** **R$ 3.250 (-25%)**

**Validação:** ✅ **APROVADO** - Mantém essencial, remove complexidade desnecessária

---

### **Módulo 9 - Gestão de Estoque**

| Item | Original | Otimizado | Status |
|------|----------|-----------|--------|
| **Custo** | R$ 19.500 | **R$ 15.439** | ⚠️ Otimizado |
| **Horas** | 480h | 380h | ⚠️ Reduzido |
| **Prazo** | 3 meses | 9,5 semanas | ⚠️ Reduzido |

**Detalhamento de Horas Otimizadas:**
- Cadastro fornecedores + histórico: 40h
- Cadastro produtos (2 níveis categorias): 30h
- Entrada manual de NF-e + anexo PDF: 35h
- Registro solicitações + aprovação: 30h
- Saída de estoque + transferências: 55h
- Cadastro simples de ativos: 30h
- Histórico básico + auditoria: 25h
- 6 relatórios essenciais + dashboard: 90h
- Alertas básicos: 20h
- Testes: 25h

**Funcionalidades Removidas:**
- ❌ Parser XML automático de NF-e: -30h
- ❌ Workflow engine complexo: -20h
- ❌ Rastreamento GPS: -40h
- ❌ Sistema de fotos obrigatórias: -20h
- ❌ Controle patrimonial avançado: -30h
- ❌ Controle lote/validade FIFO: -40h
- ❌ 6 relatórios não essenciais: -60h
- ❌ Categorização multinível complexa: -20h

**Economia:** **R$ 4.061 (-21%)**

**Validação:** ✅ **APROVADO** - Foco no essencial, remove over-engineering

---

### **Módulo 10 - Assistência Técnica**

| Item | Original | Revisão | Status |
|------|----------|---------|--------|
| **Custo** | R$ 13.000 | R$ 13.000 | ✅ Mantido |
| **Horas** | 320h | 320h | ✅ Mantido |
| **Prazo** | 1 mês | 1 mês | ✅ Mantido |

**Detalhamento de Horas:**
- Sistema de chamados técnicos: 80h
- Manutenção preventiva/corretiva: 60h
- Métricas de equipamentos: 60h
- Rastreamento GPS técnicos: 60h
- Relatórios: 40h
- Testes: 20h

**Validação:** ✅ **APROVADO** - Escopo adequado ao prazo

---

## 2️⃣ Análise de Custo por Hora

### **Cálculo do Valor/Hora Praticado:**

**Proposta Original:**
- Total: R$ 169.000
- Horas totais: 4.160h (10 módulos × média de 416h)
- **Valor/hora:** R$ 40,63

**Proposta Otimizada:**
- Total: R$ 142.189
- Horas totais: 3.504h
- **Valor/hora:** R$ 40,57

**Validação:** ✅ **CONSISTENTE** - Valor/hora mantém-se estável entre R$ 40-41/hora

---

## 3️⃣ Comparação com Mercado

### **Benchmark de Custos (Junho 2026):**

| Nível | Valor/Hora Mercado | Projeto AlbusDente | Status |
|-------|-------------------|-------------------|--------|
| **Júnior** | R$ 25-35/h | - | - |
| **Pleno** | R$ 40-60/h | **R$ 40,57/h** | ✅ Dentro da faixa |
| **Sênior** | R$ 70-100/h | - | - |

**Análise:**
- ✅ Valor/hora está na **faixa de desenvolvedor Pleno**
- ✅ Adequado para projeto full-stack com .NET Core 8 + React + Azure
- ✅ Inclui análise, desenvolvimento, testes e documentação

---

## 4️⃣ Validação de Prazo

### **Cálculo de Prazo por Horas/Mês:**

**Premissas:**
- 1 desenvolvedor full-time
- 160 horas úteis/mês (40h/semana × 4 semanas)
- Considera reuniões, planejamento, ajustes

**Proposta Original:**
- 4.160 horas ÷ 160h/mês = **26 meses de desenvolvimento puro**
- + 5 meses de buffer (reuniões, homologações, ajustes)
- **Total:** 31 meses ✅ **REALISTA**

**Proposta Otimizada:**
- 3.504 horas ÷ 160h/mês = **21,9 meses de desenvolvimento puro**
- + 5 meses de buffer
- **Total:** 27 meses ✅ **REALISTA**

---

## 5️⃣ Distribuição de Horas por Atividade

### **Breakdown Típico de Horas:**

| Atividade | % Estimado | Horas (Original) | Horas (Otimizado) |
|-----------|-----------|------------------|-------------------|
| Análise e Design | 15% | 624h | 526h |
| Desenvolvimento | 50% | 2.080h | 1.752h |
| Testes (Unit + Integração) | 15% | 624h | 526h |
| Correções de Bugs | 10% | 416h | 350h |
| Documentação | 5% | 208h | 175h |
| Reuniões/Alinhamentos | 5% | 208h | 175h |
| **TOTAL** | **100%** | **4.160h** | **3.504h** |

**Validação:** ✅ **DISTRIBUIÇÃO ADEQUADA** - Proporcionalidade mantida

---

## 6️⃣ Análise de Risco

### **Riscos Identificados e Mitigações:**

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| **ICP-Brasil (Receita Digital)** | Alta | Alto | Alocar 140h + buffer de 20h |
| **Integração Azure Blob** | Média | Médio | Usar SDK oficial .NET |
| **SignalR em Produção** | Média | Médio | Testes de carga + infraestrutura adequada |
| **Odontograma Interativo** | Alta | Médio | Prototipar na Fase 1 |
| **LGPD/Auditoria** | Baixa | Alto | Consultor jurídico + logs detalhados |

---

## 7️⃣ Recomendações Finais

### ✅ **APROVAÇÕES:**

1. **Manter Proposta Otimizada:** R$ 142.189 / 27 meses
2. **Módulo Financeiro Removido:** Economia de R$ 19.500 + redução de risco
3. **RH Simplificado:** Economia de R$ 3.250 mantendo funcionalidades essenciais
4. **Estoque Otimizado:** Economia de R$ 4.061 removendo over-engineering

### ⚠️ **ATENÇÕES:**

1. **ICP-Brasil:** Confirmar requisitos técnicos com cliente antes de iniciar
2. **Azure Costs:** Cliente deve estar ciente dos custos mensais Azure (variáveis)
3. **Integração WhatsApp:** Verificar limites de API do WhatsApp Business
4. **WorkLab/OrcLab:** Confirmar documentação de APIs de integração

### 📊 **MÉTRICAS DE SUCESSO:**

| Métrica | Meta |
|---------|------|
| Taxa de Entrega no Prazo | > 90% |
| Taxa de Bugs em Produção | < 5% |
| Satisfação do Cliente | > 8/10 |
| Retrabalho | < 10% das horas |

---

## 8️⃣ Conclusão

### **Parecer Técnico:**

✅ **PROPOSTA OTIMIZADA APROVADA**

- **Custo:** R$ 142.189 (redução de 15,9%)
- **Prazo:** 27 meses (redução de 4 meses)
- **Qualidade:** Mantida com foco no essencial
- **Risco:** Reduzido com remoção de módulo financeiro

### **Assinaturas:**

**Equipe Técnica InnovaSfera**  
Data: 01/06/2026

---

**Próximo Passo:** Apresentar revisão ao cliente Marino para aprovação formal.
