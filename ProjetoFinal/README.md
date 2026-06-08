# 🏥 GISA — Gestão e Inovação em Saúde (Módulo de Profissionais)

Este módulo contempla a implementação completa do **CRUD de Profissionais** para o sistema **GISA**, desenvolvido com foco no atendimento às necessidades da **APAE Sorocaba**. O projeto explora a integração assíncrona entre um front-end dinâmico e um back-end robusto estruturado com arquitetura polimórfica.

---

## 🚀 Links de Acesso

* **🌐 Aplicação Web (Deploy):** [Acessar o GISA](https://eduardofproenca.github.io/GISA_Codigo/)
* **💻 Repositório Front-End:** [GitHub - GISA Front-End](https://github.com/EduardoFProenca/GISA_Codigo)
* **⚙️ Repositório Back-End:** [GitHub - GISA Back-End](https://github.com/kauanzin222/BackEnd_GISA)

---

## 🔑 Credenciais para Homologação/Teste

Para navegar pelas funcionalidades implementadas, utilize os seguintes dados de acesso:

* **ID do Usuário:** `1`
* **Senha:** `hash_senha_gerente`

---

## 🛠️ Escopo Técnico Mapeado (CRUD)

A arquitetura foi desenhada para suportar persistência de dados polimórficos no banco de dados, mapeando as operações através dos seguintes métodos HTTP:

* **`GET` (Leitura):** Listagem geral paginada de profissionais ativos, filtros de busca dinâmica por nome/especialidade e carregamento detalhado de dados clínicos e residenciais para os modos de visualização e edição.
* **`PUT` (Atualização):** Atualização seletiva e inteligente. O sistema diferencia perfis clínicos (Especialistas) de perfis administrativos de forma polimórfica, gerenciando de forma automatizada e síncrona os relacionamentos de tabelas associativas (`@ManyToMany`) e coleções de endereços.
* **`DELETE` (Exclusão):** Fluxo de inativação lógica (*Soft Delete*). O profissional é desativado do ecossistema clínico sem perda de histórico ou integridade referencial no banco de dados.

---

## 🖥️ Telas Implementadas para Avaliação

As principais interações e regras de negócio avaliadas estão concentradas nas seguintes interfaces:

### 1. Gestão de Profissionais
* Painel centralizador contendo a listagem integrada de profissionais da clínica.
* Suporte a layout responsivo adaptado para Desktop (Tabela estruturada) e Mobile (Cards compactos).
* Barra de pesquisa em tempo real com paginação controlada pelo servidor.
* Gatilhos integrados para as ações de Visualização estrita, Edição limitada e Inativação lógica.

### 2. Cadastrar / Alterar Profissional
* Formulário inteligente com validações rígidas de campos obrigatórios antes da submissão (*Guarda de segurança* no front-end).
* Tratamento de dados dinâmicos: campos clínicos específicos (como Registro Profissional e Especialidades) ocultam-se ou adaptam-se dinamicamente caso o funcionário editado não pertença ao corpo clínico (não-especialista).
* Mapeamento completo e manual de estruturas de Endereço e dados condicionais de Pessoa Jurídica (PJ).
