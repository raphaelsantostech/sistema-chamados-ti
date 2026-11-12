
// Lista inicial de chamados fictícios
const chamados = [
    {
        id: 1,
        titulo: "Computador não liga",
        categoria: "Hardware",
        prioridade: "Alta",
        status: "Aberto"
    },
    {
        id: 2,
        titulo: "Problema com impressora",
        categoria: "Impressora",
        prioridade: "Média",
        status: "Em andamento"
    },
    {
        id: 3,
        titulo: "Instalação de software",
        categoria: "Software",
        prioridade: "Baixa",
        status: "Concluído"
    },
    {
        id: 4,
        titulo: "Erro de conexão com a rede",
        categoria: "Rede",
        prioridade: "Alta",
        status: "Aberto"
    }
];

// Atualiza os indicadores do painel
function atualizarIndicadores() {

    const total = chamados.length;

    const abertos = chamados.filter(
        chamado => chamado.status === "Aberto"
    ).length;

    const andamento = chamados.filter(
        chamado => chamado.status === "Em andamento"
    ).length;

    const concluidos = chamados.filter(
        chamado => chamado.status === "Concluído"
    ).length;

    document.getElementById("totalChamados").textContent = total;
    document.getElementById("chamadosAbertos").textContent = abertos;
    document.getElementById("chamadosAndamento").textContent = andamento;
    document.getElementById("chamadosConcluidos").textContent = concluidos;
}

// Exibe os chamados na tabela
function renderizarChamados() {

    const listaChamados = document.getElementById("listaChamados");

    // Limpa a tabela antes de preencher novamente
    listaChamados.innerHTML = "";

    chamados.forEach(function(chamado) {

        const linha = document.createElement("tr");

        // Criando as cinco primeiras colunas
        const dados = [
            chamado.id,
            chamado.solicitante || "Não informado",
            chamado.titulo,
            chamado.categoria,
            chamado.prioridade
        ];

        dados.forEach(function(valor) {

            const coluna = document.createElement("td");

            coluna.textContent = valor;

            linha.appendChild(coluna);
        });

        // Criando a coluna de status
        const colunaStatus = document.createElement("td");

        const seletorStatus = document.createElement("select");

        // Opções disponíveis
        const statusDisponiveis = [
            "Aberto",
            "Em andamento",
            "Concluído"
        ];

        statusDisponiveis.forEach(function(status) {

            const opcao = document.createElement("option");

            opcao.value = status;
            opcao.textContent = status;

            seletorStatus.appendChild(opcao);
        });

        // Mostra o status atual do chamado
        seletorStatus.value = chamado.status;

        // Detecta quando o usuário altera o status
        seletorStatus.addEventListener("change", function() {

            chamado.status = seletorStatus.value;

            // Atualiza os indicadores do painel
            atualizarIndicadores();

            console.log("Status atualizado:", chamado);
        });

        colunaStatus.appendChild(seletorStatus);

        linha.appendChild(colunaStatus);

        listaChamados.appendChild(linha);
    });
}

// Selecionando os elementos do formulário
const formulario = document.getElementById("formChamado");

const solicitante = document.getElementById("solicitante");
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const categoria = document.getElementById("categoria");
const prioridade = document.getElementById("prioridade");

console.log("Sistema de Chamados iniciado!");

// Evento de envio do formulário
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Criando um novo chamado com os dados do formulário
    const novoChamado = {
        id: chamados.length + 1,
        solicitante: solicitante.value,
        titulo: titulo.value,
        descricao: descricao.value,
        categoria: categoria.value,
        prioridade: prioridade.value,
        status: "Aberto"
    };

    // Adicionando o chamado à lista
    chamados.push(novoChamado);

    // Atualizando os indicadores
    atualizarIndicadores();

    // Atualizando a tabela
    renderizarChamados();

    // Limpando o formulário
    formulario.reset();

    console.log("Chamado cadastrado:", novoChamado);
});

// Executa as funções ao carregar a página
atualizarIndicadores();
renderizarChamados();
