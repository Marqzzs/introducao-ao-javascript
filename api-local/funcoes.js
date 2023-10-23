const urlViaCep = "https://viacep.com.br/ws/";

function cadastrar(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    alert("Cadastro Realizado!!!"); // Exibe uma mensagem de alerta
}

async function buscarEndereco(cep) {
    const resource = `/${cep}/json`; // Cria o URL da API Via CEP

    try {
        const response = await fetch(urlViaCep + resource); // Realiza uma solicitação à API

        if (response.ok) { // Verifica se a resposta da API está OK
            const endereco = await response.json(); // Converte a resposta em um objeto JavaScript

            // Atualiza os campos do formulário com os dados da API
            document.getElementById("endereco").value = endereco.logradouro;
            document.getElementById("cidade").value = endereco.localidade;
            document.getElementById("estado").value = endereco.uf;


        } else {
            console.log("Deu ruim");//Se deu erro retorna no console
        }
        
    } catch (error) {
        // Limpa a mensagem de erro, caso exista
        document.getElementById("not-found").innerText = "";

        console.log(error);

        // Se a resposta da API não estiver OK, exibe uma mensagem de erro
        document.getElementById("not-found").innerText = "CEP inválido";
    }
}

