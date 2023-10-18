const camisaLacoste = {
    descricao: "Camisa Polo da lala",
    preco: 589.99,
    tamanho: "M",
    cor: "Branco",
    presente: true
}

// const {descricao} = camisaLacoste
// const {preco} = camisaLacoste
// const {presente} = camisaLacoste 

const {descricao, preco, presente} = camisaLacoste;

console.log(`
Produto:

Descricao: ${descricao}
Preco: ${preco}
Presente: ${presente ? "sim" : "nao"}
`)

const evento = {
    dataEvento : new Date(),
    descricaoEvebto : "Evento de javascript",
    titulo: "Programacao web",
    presenca : true,
    comentario : "Evento foi top"
}

const {dataEvento, descricaoEVento, titulo, presenca, comentario} = evento;

console.log(`
Titulo do Evento: ${titulo}
Descricao: ${descricaoEVento}
Data do Evento: ${dataEvento}}
Comentario: ${comentario}}
Presenca: ${presenca ? "sim" : "nao"}}
`); 


//Exercicio

//criar uma desestruturacao para um objeto filmes
//trazer somente 3 propiedades