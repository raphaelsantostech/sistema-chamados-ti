
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

// Executa a atualização ao carregar a página
atualizarIndicadores();
