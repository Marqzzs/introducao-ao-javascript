const frutas = []; // Array para armazenar as frutas cadastradas

const form = document.getElementById("frutaForm");
const nomeFrutaInput = document.getElementById("nomeFruta");
const listaFrutas = document.getElementById("listaFrutas");

// Event listener para o envio do formulário
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário padrão

    const nomeFruta = nomeFrutaInput.value;
    if (nomeFruta.trim() !== "") {
        frutas.push(nomeFruta); // Adiciona a fruta ao array
        atualizarListaFrutas(); // Atualiza a lista de frutas
        nomeFrutaInput.value = ""; // Limpa o campo de entrada
    }
});

// Função para atualizar a lista de frutas
function atualizarListaFrutas() {
    // Limpa a lista de frutas
    listaFrutas.innerHTML = "";

    // Ordena as frutas em ordem alfabética
    frutas.sort();

    // Preenche a lista com as frutas
    frutas.forEach(function (fruta) {
        const li = document.createElement("li");
        li.textContent = fruta;
        listaFrutas.appendChild(li);
    });
}