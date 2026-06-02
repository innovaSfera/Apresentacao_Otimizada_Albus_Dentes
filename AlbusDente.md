# Documento de Reunião - Levantamento de Requisitos
## Novo Sistema Albus Dente

---

### 📋 Informações da Reunião

**Data:** Reunião realizada às 09h00  
**Objetivo:** Levantamento de ideias, necessidades e dores para o desenvolvimento do novo sistema integrado da Albus Dente  
**Tópicos Abordados:**
- Compreensão da rotina operacional da empresa
- Identificação de problemas e limitações dos sistemas atuais
- Levantamento de funcionalidades desejadas
- Identificação de diferenciais competitivos

---

### 👥 Participantes da Reunião

| Nome | Cargo | Área de Atuação |
|------|-------|-----------------|
| **Ligia** | Coordenadora | CIAMEPO (8 clínicas) |
| **Leila** | Coordenadora | Sindepress |
| **Vanessa** | Coordenadora | Sindepress |
| **Patricia** | Coordenadora | Financeiro |
| **Jonathan** | Tecnlogia | Infraestrutura & Segurança |
---

### 🏢 Contexto Empresarial

**Albus Dente - Estrutura Atual:**
- Diversas clínicas em operação (incluindo clínicas no interior)
- Atendimentos: Odontológico, Médico e Laboral
- Clientes principais: CIAMEPO, Sindepress, Refeições, Seibref, Siemaco

**Operação Atual:**
- Fichas de prontuário e receitas elaboradas de forma manual
- Processos operacionais dependem de trabalho manual intensivo
- Múltiplos sistemas não integrados
- Comunicação interna via rádio e forma manual arcaica
- Gestão de clínicas requer visitas presenciais das coordenadoras

---

### 💻 Sistemas Atuais em Uso

| Sistema | Finalidade | Limitações |
|---------|-----------|------------|
| **DoctorArea** | Agendamento | Não entrega relatórios, não gerencia prontuários digitais |
| **Sistema do Sindicato** | Gestão de pacientes (Firebird) | Sistema local (rede), integração limitada, dados repassados manualmente para Excel |
| **Sistema de Nota Fiscal** | Emissão de NF | Atende apenas 90% das clinicas locais, não é um sistema integrado para todas as clinicas e toda Albus Dente, ainda sim sendo necessário emissão manual de NF-e em portais de prefeitura |
| **Monday** | Checklist de visitas | Utilizado para controle, mas desconectado do operacional |
| **WorkLab** | (Necessita integração) | Mencionado como necessidade de integração |

### Anotação de sistemas que podem ser espelho e trazer resultado para eles
| **Sistema Financeiro (Action)** | Contas a pagar/receber | Relatórios manuais, sem automação |
| **Intrachat** | Comunicação | Sistema terceiro 
| **OrcLab** | Laboratório | Sistema de laboratório |

**⚠️ Ponto Crítico de Integração:**  
O sistema do Sindicato utiliza banco de dados **Firebird** em rede local. Será necessário conversar com o sindicato sobre possibilidades de integração.

---

## 🔴 Problemas Identificados por Área

### 📊 CIAMEPO - Coordenadora Ligia

**Dores Principais:**
- ❌ Sistema atual (DoctorArea) não entrega relatórios adequados
- ❌ Contagem de consultas e agendamentos feita manualmente
- ❌ Preenchimento manual de Excel para envio de relatórios
- ❌ Prontuário e receitas precisam ser digitalizados manualmente
- ❌ Ausência de métricas e estatísticas para identificar gargalos (gaps)
- ❌ Falta de sistema de follow-up com pacientes e médicos
- ❌ Necessidade de registro fotográfico em fichas clínicas odontológicas não atendida

**Necessidades:**
- ✅ Sistema que gere relatórios automaticamente
- ✅ Métricas estatísticas para análise de performance
- ✅ Sistema de follow-up de satisfação do cliente
- ✅ Prontuário e receitas 100% digitais
- ✅ Registro fotográfico integrado na ficha odontológica

---

### 🏢 Sindepress - Coordenadoras Leila e Vanessa

**Dores Principais:**
- ❌ Sistema limitado do cliente (Sindepress) armazena: dados do paciente mas não tem dados como: faltas, presença, agendamento, dentistas, horas de consulta, altas
- ❌ Sistema local (Firebird) com limitações de funcionalidades
- ❌ Necessidade de exportar dados para Excel manualmente
- ❌ Informações sobre profissionais (nome, endereço, dados bancários, CRO, dias de atendimento, horas) gerenciadas em sistema separado
- ❌ Geração de multas e faltas para médicos/pacientes feita em Excel
- ❌ Sistema de nota fiscal atende apenas 90% das necessidades

**Necessidades:**
- ✅ Integração com sistema interno da empresa e sistema do Sindicato
- ✅ Geração automática de relatórios de pagamento
- ✅ Comunicação entre módulos do sistema
- ✅ Relatório automatizado de multas e advertências para envio ao sindicato
- ✅ Sistema de nota fiscal 100% integrado para todas as clínicas

**Observação:** Vanessa reforçou que o sistema interno precisa se comunicar com o sindicato para envio de relatórios de multas e advertências, já que o sindicato é quem aplica as penalidades.

---

### 💰 Financeiro - Coordenadora Patricia

**Dores Principais:**
- ❌ Trabalho com contas a pagar e receber sem automação adequada
- ❌ Geração manual de relatórios de Gross Profit
- ❌ Gestão de estoque e compras (abastecimento das clínicas com rateio) feita manualmente
- ❌ Sistema atual funciona como "loja" (compra e repassa), mas falta controle integrado
- ❌ Alimentação manual de relatórios com informações complementares
- ❌ Folha de pagamento sem integração com horas trabalhadas
- ❌ Gerar arquivo de integração bancária de forma manual
- ❌ Emissão de nota fiscal manual em cada portal de prefeitura
- ❌ Relatórios mensais de fechamento (rendimento x despesas) feitos manualmente
- ❌ Sistema de relatório atual apresenta travamentos

**Necessidades:**
- ✅ Geração automática de boletos
- ✅ Automação da folha de pagamento (integrada com relatório de horas dos médicos)
- ✅ Múltiplos relatórios automatizados: fechamento mensal, gastos por clínica, gastos por área, gastos por sindicato
- ✅ Automação na emissão de notas fiscais
- ✅ Integração entre relatório de horas e sistema financeiro
- ✅ Sistema de geração de arquivo para pagamento bancário automatizado

**Impacto Compartilhado:**
Ligia e Vanessa utilizam sistema de nota fiscal que atende 90%. Os relatórios do financeiro (Patricia) serviriam para todas as coordenadoras, especialmente se houver **interligação de todas as clínicas** (mencionado como possível **Fase 2/Etapa Posterior**).

---

### 📞 Operacional - Comunicação e Processos

**Dores Principais:**
- ❌ Comunicação via rádio entre recepção e consultórios
- ❌ Médico/dentista precisa ir até a recepção chamar o paciente
- ❌ Paciente não retira senha, fila manual na recepcionista
- ❌ Ausência de métricas de tempo de fila e parâmetros estatísticos
- ❌ Falta de follow-up sistematizado (processos muito manuais/antigos)
- ❌ Coordenadoras precisam fazer visitas presenciais em cada clínica
- ❌ Dentistas se comunicam com assistentes via rádio (limpeza, instrumentos)
- ❌ Dentista precisa levar informações manualmente à recepcionista (orientações, retorno, exames), causando possíveis gaps
- ❌ Atestados precisarão ter QR Code por lei em breve

**Necessidades:**
- ✅ Sistema de chamada de pacientes em tela nos consultórios
- ✅ Sistema digital de senhas e fila
- ✅ Métricas de tempo de fila e estatísticas operacionais
- ✅ Sistema de follow-up automatizado
- ✅ Sistema de checklist/gestão integrado (similar ao Monday) para coordenadoras
- ✅ Sistema de chamados internos para dentistas/assistentes
- ✅ Atestados digitais com QR Code
- ✅ Integração de orientações pós-consulta no sistema (evitar gaps)

---

## ✨ Requisitos Detalhados do Novo Sistema

### 📅 Módulo 1: Agendamento de Consultas

| # | Requisito | Descrição |
|---|-----------|-----------|
| 1.1 | Agendamento Digital | Sistema completo de agendamento de consultas |
| 1.2 | Integração WhatsApp | Confirmação de consultas via WhatsApp |
| 1.3 | Fila de Espera | Sistema de fila de espera disponível |
| 1.4 | Lembrete Automático | Lembrete de retorno após 6 meses |
| 1.5 | Notificação em Tempo Real | Aviso em tempo real para dentistas e médicos no consultório |
| 1.6 | Código de Cores | Sistema com cores para facilitar o entendimento visual |
| 1.7 | Rastreamento | Registro de qual recepcionista realizou o agendamento |
| 1.8 | Avaliação Recepcionista | Possibilidade do paciente avaliar o atendimento da recepcionista |
| 1.9 | Avaliação por Setores | Paciente avaliar clínica por setores (Limpeza, Organização, Atend. Médico, Atend. Odonto, Insumos nos banheiros, Atend. Recepção) |

---

### 📋 Módulo 2: Ficha Clínica Digital

| # | Requisito | Descrição |
|---|-----------|-----------|
| 2.1 | Emissão Digital | Atestados, comprovante de horas e receitas digitais |
| 2.2 | Atestado com QR Code | Atestados com QR Code (exigência legal futura) |
| 2.3 | Anamnese Digital | Anamnese e termo de consentimento digitais |
| 2.4 | Anexo de Imagens | Possibilidade de anexar imagens e raio-x |
| 2.5 | Registro Fotográfico | Sistema de registro fotográfico (especialmente odontologia) |
| 2.6 | Fichas Antigas | Possibilidade de anexar ficha clínica antiga (digitalização) |
| 2.7 | Odontograma | Odontograma digital integrado |
| 2.8 | Comando de Voz | Comando de voz para registro de consultas |
| 2.9 | Identidade Visual | Receitas com identidade visual personalizada por cliente (Sindepress, Refeições, Seibref, Siemaco, Albus Dente) |
| 2.10 | Orientações Integradas | Sistema registra orientações, necessidade de retorno e exames diretamente (evita gaps de comunicação) |

---

### 👨‍⚕️ Módulo 3: Cadastro e Gestão de Agendas

| # | Requisito | Descrição |
|---|-----------|-----------|
| 3.1 | Cadastro Simplificado | Cadastro de dentistas/médicos sem necessidade de e-mail e confirmação: apenas nome, CRO/CRM e especialidade |
| 3.2 | Integração WorkLab | Sistema interligado com WorkLab |
| 3.3 | Controle de Abertura/Fechamento | Abertura e encerramento de agendas apenas pela coordenação |
| 3.4 | Bloqueio de Agendas | Bloqueio de agendas disponível apenas para coordenadoras e clínicas |
| 3.5 | Login por Clínica | Cada clínica possui um login individual |
| 3.6 | Visão Consolidada | Coordenação tem acesso e resumo geral de todas as filiais |
| 3.7 | Dados de Profissionais | Sistema gerencia dados bancários, CRO/CRM, dias de atendimento, quantidade de horas |

---

### 📊 Módulo 4: Relatórios e Métricas

#### 4.1 Relatórios Operacionais

| # | Requisito | Descrição |
|---|-----------|-----------|
| 4.1.1 | Quantidade de Pacientes | Relatório de quantidade de pacientes atendidos (por pessoa) |
| 4.1.2 | Quantidade de Consultas | Quantidade de consultas (cada consulta = 20 minutos) |
| 4.1.3 | Relatório por Especialidade | Relatório contendo: faltas, desmarques, encaixes, retornos, exames clínicos, altas, emergências |
| 4.1.4 | Relatório Geral Multi-Filial | Relatório geral consolidado com informações de todas as filiais |
| 4.1.5 | Filtragem por Profissional | Filtragem por profissional para análise de quantidade de procedimentos |
| 4.1.6 | Métricas Estatísticas | Métricas estatísticas para identificar gargalos (gaps) |
| 4.1.7 | Tempo de Fila | Parâmetros e estatísticas de tempo de fila |

#### 4.2 Relatórios Financeiros

| # | Requisito | Descrição |
|---|-----------|-----------|
| 4.2.1 | Relatório de Pagamento | Relatório de pagamento para profissionais |
| 4.2.2 | Horas para Folha | Filtragem por profissional para contabilização de horas para folha de pagamento (cada agenda = 4 horas, cada doutor tem valor de hora diferenciado) |
| 4.2.3 | Integração Financeiro | Automação do envio de dados para o financeiro |
| 4.2.4 | Gross Profit | Relatórios de Gross Profit automatizados |
| 4.2.5 | Fechamento Mensal | Relatório mensal de fechamento (rendimento x despesas) |
| 4.2.6 | Gastos por Clínica | Relatório de gastos por clínica |
| 4.2.7 | Gastos por Área | Relatório de gastos por área |
| 4.2.8 | Gastos por Sindicato | Relatório de gastos por sindicato/cliente |
| 4.2.9 | Multas e Advertências | Relatório de multas e faltas para envio ao sindicato |

---

### 💵 Módulo 5: Financeiro e Faturamento

| # | Requisito | Descrição |
|---|-----------|-----------|
| 5.1 | Contas a Pagar/Receber | Gestão automatizada de contas |
| 5.2 | Geração de Boletos | Automação na geração de boletos |
| 5.3 | Folha de Pagamento | Automação da folha de pagamento integrada com horas trabalhadas |
| 5.4 | Integração Bancária | Geração de arquivo para integração bancária (pagamento de médicos) |
| 5.5 | Emissão de NF-e | Automação na emissão de notas fiscais (integração com portais de prefeitura) |
| 5.6 | Gestão de Estoque | Controle de estoque e compras com rateio entre clínicas |

---

### 📞 Módulo 6: Comunicação e Follow-up

| # | Requisito | Descrição |
|---|-----------|-----------|
| 6.1 | Chamada de Pacientes | Sistema de chamada de pacientes em tela nos consultórios (substitui rádio) |
| 6.2 | Sistema de Senhas | Sistema digital de senhas para organização de fila |
| 6.3 | Chamados Internos | Sistema de chamados para dentistas solicitarem assistentes (limpeza, instrumentos) |
| 6.4 | Follow-up Pacientes | Sistema de follow-up de satisfação e retorno com pacientes |
| 6.5 | Follow-up Médicos | Sistema de follow-up com médicos/dentistas |
| 6.6 | Gestão de Clínicas | Sistema de checklist/gestão para coordenadoras (similar ao Monday) |

---

## 🔗 Integrações Necessárias

### Sistemas Externos

| Sistema | Tipo de Integração | Observações |
|---------|-------------------|-------------|
| **Sistema do Sindicato (Firebird)** | Integração de dados | **CRÍTICO:** Sistema local, necessita conversa com sindicato |
| **WorkLab** | Integração bidirecional | Mencionado para gestão de agendas |
| **OrcLab** | Integração com laboratório | Sistema de laboratório já utilizado |
| **WhatsApp** | API de mensagens | Confirmações e lembretes |
| **Portais de Prefeitura** | API para emissão de NF-e | Múltiplos portais conforme localização |
| **Bancos** | Arquivo de remessa bancária | Pagamento de profissionais |

### Considerações Técnicas

**⚠️ Ponto de Atenção:**
- O sistema do Sindicato (Firebird) é de rede local e pertence ao sindicato
- Será necessário **reunião com o sindicato** para definir forma de integração
- Dados atualmente são exportados manualmente para Excel
- Possível necessidade de API ou exportação automatizada

---

## 🔄 Requisitos Cruzados e Compartilhados

### Requisitos que Impactam Múltiplas Áreas

| Requisito | Áreas Impactadas | Descrição |
|-----------|------------------|-----------|
| **Relatórios Automatizados** | CIAMEPO, Sindepress, Financeiro | Elimina trabalho manual de Excel em todas as áreas |
| **Sistema de NF-e** | Sindepress, Financeiro | Ligia e Vanessa usam sistema que atende 90%, Patricia precisa emitir manualmente |
| **Integração Multi-Clínica** | Todas as áreas | Interligação de todas as 8 clínicas (mencionado como Fase 2) |
| **Folha de Pagamento** | Operacional, Financeiro | Horas trabalhadas alimentam automaticamente folha de pagamento |
| **Prontuário Digital** | CIAMEPO, Sindepress, Sindicato | Substituição de processos manuais, possível integração com sistema do sindicato |
| **Avaliação/Follow-up** | CIAMEPO, Operacional | Satisfação de pacientes e qualidade de atendimento |
| **Gestão Centralizada** | Coordenadoras | Visão consolidada para coordenadoras, detalhamento por clínica |

---

## 📍 Fases de Implementação Sugeridas

### 🎯 Fase 1 - Funcionalidades Essenciais (Prioridade Alta)

**Objetivo:** Eliminar processos manuais críticos e estabelecer base do sistema

#### Módulo Clínico
- Prontuário digital completo (anamnese, prescrições, atestados)
- Agendamento digital com fila de espera
- Ficha odontológica com registro fotográfico
- Atestados com QR Code

#### Módulo de Relatórios
- Relatórios operacionais automatizados (consultas, especialidades, faltas)
- Relatórios de pagamento por profissional
- Relatório de horas trabalhadas

#### Módulo Financeiro
- Automação de folha de pagamento
- Geração de arquivo de remessa bancária
- Relatórios financeiros básicos (fechamento mensal, despesas)

#### Comunicação Básica
- Sistema de chamada de pacientes (tela)
- Sistema de senhas digital

#### Gestão
- Login por clínica
- Visão consolidada para coordenação
- Cadastro simplificado de profissionais

---

### 🚀 Fase 2 - Integrações e Diferenciais (Prioridade Média)

**Objetivo:** Integrar sistemas e adicionar funcionalidades de melhoria operacional

#### Integrações
- **Integração com sistema do Sindicato (Firebird)** → Depende de reunião com sindicato
- Integração WhatsApp (confirmações, lembretes)
- Integração WorkLab
- Integração OrcLab

#### Funcionalidades Avançadas
- **Interligação de todas as 8 clínicas** (gestão unificada)
- Sistema de emissão de NF-e automatizado (portais de prefeitura)
- Comando de voz para registro de consultas
- Gestão de estoque e compras com rateio

#### Follow-up e Avaliação
- Sistema de follow-up automatizado (pacientes e médicos)
- Avaliações por setor (limpeza, organização, atendimento)
- Avaliação de recepcionistas

---

### ⭐ Fase 3 - Otimizações e Analytics (Prioridade Baixa)

**Objetivo:** Análise avançada e otimização contínua

- Métricas estatísticas avançadas (identificação de gargalos)
- Dashboard de performance por clínica
- Sistema de checklist para visitas (coordenadoras)
- Chamados internos (dentistas/assistentes)
- Análise preditiva de demanda
- Relatórios personalizáveis

---

## 🎯 Próximos Passos e Ações Necessárias

### Ações Imediatas

1. **Reunião com Sindicato**
   - Definir possibilidade de integração com sistema Firebird
   - Entender limitações técnicas e possibilidades de API
   - Definir formato de exportação de dados

2. **Validação de Prioridades**
   - Revisar e validar fases sugeridas com todas as coordenadoras
   - Definir cronograma de implementação

3. **Levantamento Técnico Complementar**
   - Especificações técnicas dos sistemas atuais
   - Volumes de dados (pacientes, consultas, profissionais)
   - Infraestrutura disponível (servidores, rede)

4. **Identidades Visuais**
   - Coletar logotipos e padrões visuais de cada cliente (Sindepress, Refeições, Seibref, Siemaco, Albus Dente)

5. **Mapeamento de Portais de NF-e**
   - Listar todos os municípios onde há clínicas
   - Mapear portais de prefeitura para integração

### Definições Pendentes

- [ ] Modelo de hospedagem (cloud vs local)
- [ ] Estratégia de migração de dados históricos
- [ ] Treinamento de usuários
- [ ] Cronograma detalhado por fase
- [ ] Orçamento e recursos necessários

---

## 📝 Observações Finais

**Sistema Atual em Crise:**
- Sistema de relatório apresenta travamentos
- Alta dependência de processos manuais gerando retrabalho
- Risco de perda de dados e informações inconsistentes
- Impossibilidade de gestão estratégica sem métricas adequadas

**Oportunidades:**
- Sistema integrado pode reduzir drasticamente carga de trabalho manual
- Possibilidade de expansão para novas clínicas com estrutura escalável
- Diferencial competitivo com follow-up e avaliações de qualidade
- Compliance legal (QR Code em atestados)

**Clientes a Considerar:**
- Sindepress
- Refeições
- Seibref
- Siemaco
- Albus Dente (marca própria)

---

**Documento elaborado em:** Março/2026  
**Última atualização:** [Data da reunião original]  
**Responsável pela documentação:** [Seu nome/equipe]


