# Sistema de Chamados de TI — Anotações de Estudo

## 1. Sobre o projeto

Projeto desenvolvido para praticar HTML, CSS e JavaScript, simulando um sistema de gerenciamento de solicitações de suporte técnico.

O sistema permite:
- Visualizar os indicadores de chamados.
- Cadastrar novos chamados.
- Informar solicitante, título, descrição, categoria e prioridade.
- Visualizar os chamados em uma tabela.
- Alterar o status dos chamados.

## 2. Estrutura dos arquivos

- `index.html`: estrutura e elementos da página.
- `style.css`: aparência visual e organização dos elementos.
- `script.js`: funcionalidades e manipulação dos dados.
- `anotacoes-javascript.md`: documentação e explicações do projeto.

## 3. JavaScript — Conceitos aprendidos

### 3.1. Variáveis com const

Utilizamos `const` para declarar variáveis que não terão sua referência substituída.

Exemplo:

```javascript
const formulario = document.getElementById("formChamado");
```

Nesse caso, estamos armazenando na variável `formulario` o elemento HTML que possui o identificador `formChamado`.

### 3.2. Arrays

Um array permite armazenar vários elementos em uma única variável.

Exemplo:

```javascript
const chamados = [
    {
        id: 1,
        titulo: "Computador não liga",
        categoria: "Hardware",
        prioridade: "Alta",
        status: "Aberto"
    }
];
```

No projeto, o array `chamados` armazena os registros do sistema.

### 3.3. Objetos

Um objeto organiza informações relacionadas em propriedades.

Exemplo:

```javascript
const novoChamado = {
    id: 1,
    solicitante: "Raphael",
    titulo: "Computador não liga",
    categoria: "Hardware",
    prioridade: "Alta",
    status: "Aberto"
};
```

Cada propriedade representa uma informação do chamado.

### 3.4. Funções

Uma função agrupa instruções que executam determinada tarefa.

Exemplo:

```javascript
function atualizarIndicadores() {
    const total = chamados.length;
}
```

No projeto, a função `atualizarIndicadores()` calcula os números apresentados no painel.

### 3.5. Método filter()

O método `filter()` percorre um array e retorna os elementos que atendem a uma condição.

Exemplo:

```javascript
const abertos = chamados.filter(
    chamado => chamado.status === "Aberto"
).length;
```

Nesse caso, contamos quantos chamados possuem o status "Aberto".

### 3.6. Propriedade length

A propriedade `length` informa a quantidade de elementos de um array ou o tamanho de uma string.

Exemplo:

```javascript
const total = chamados.length;
```

Retorna a quantidade de chamados cadastrados no array.

### 3.7. getElementById()

Permite localizar um elemento HTML pelo seu identificador (`id`).

Exemplo:

```javascript
const titulo = document.getElementById("titulo");
```

Utilizamos esse recurso para acessar os campos do formulário.

### 3.8. addEventListener()

Permite acompanhar eventos que acontecem na página.

Exemplo:

```javascript
formulario.addEventListener("submit", function(event) {
    // Instruções executadas no envio do formulário
});
```

No projeto, utilizamos o evento `submit` para identificar quando o usuário envia um chamado.

### 3.9. preventDefault()

Impede o comportamento padrão de um evento.

Exemplo:

```javascript
event.preventDefault();
```

No formulário, evita que a página seja recarregada durante o envio.

### 3.10. push()

Adiciona um novo elemento ao final de um array.

Exemplo:

```javascript
chamados.push(novoChamado);
```

No projeto, adiciona o novo chamado à lista armazenada na variável `chamados`.

### 3.11. reset()

Restaura os campos do formulário para seus valores iniciais.

Exemplo:

```javascript
formulario.reset();
```

Utilizamos esse comando depois do cadastro para limpar os campos e permitir um novo preenchimento.

### 3.12. textContent

Permite acessar ou modificar o conteúdo textual de um elemento HTML.

Exemplo:

```javascript
document.getElementById("totalChamados").textContent = total;
```

No projeto, atualiza os números dos indicadores do painel.

## 4. Funcionamento do cadastro

Quando o usuário envia o formulário, o JavaScript:

1. Impede o recarregamento da página.
2. Captura as informações preenchidas.
3. Cria um objeto com os dados do chamado.
4. Adiciona o objeto ao array `chamados`.
5. Atualiza os indicadores.
6. Atualiza a tabela de chamados.
7. Limpa o formulário.

## 5. Observação importante sobre os dados

Atualmente, os chamados são armazenados em um array JavaScript na memória do navegador.

Isso significa que os registros cadastrados durante a execução não são mantidos permanentemente. Ao atualizar ou fechar a página, os novos registros podem ser perdidos.

Uma das próximas evoluções será estudar formas de persistir esses dados.

## 6. Controle de versão com Git

Utilizamos Git para registrar as alterações realizadas no projeto.

Comandos estudados:

```bash
git status
```
Verifica as alterações nos arquivos.

```bash
git add .
```
Prepara os arquivos para serem registrados.

```bash
git commit -m "Descrição da alteração"
```
Registra uma versão do projeto.

```bash
git push
```
Envia as alterações para o GitHub.

## 7. Objetivo de aprendizagem

Consolidar conhecimentos em desenvolvimento web, praticando a integração entre HTML, CSS e JavaScript por meio de um projeto funcional, com evolução gradual das funcionalidades.