//Exercicio

//criar uma desestruturacao para um objeto filmes
//trazer somente 3 propiedades

//desafio: crie um array de objetos e use a destruturacao e tente exibir no console

const filmes = [
  {
    titulo: "Invocacao do Mal 4",
    genero: "Terror",
    dataEstreia: new Date(),
    diretor: "Michael Jackson",
    assistir: true,
  },
  {
    titulo: "As white",
    genero: "Comédia",
    dataEstreia: new Date(),
    diretor: "Jan Sulivan",
    assistir: false,
  },
];

filmes.forEach((filme, index) => {
  const { titulo, genero, dataEstreia, diretor, assistir } = filme;

  console.log(`Filme ${index + 1}:
    Título: ${titulo}
    Gênero: ${genero}
    Data de Estreia: ${dataEstreia}
    Diretor: ${diretor}
    Vai assistir? ${assistir ? "Com certeza" : "Não vou assistir"}\n`);
});

filmes.forEach( ({titulo, genero}, i) => {
    console.log(`
    Filme${i+1}: ${titulo.toUpperCase()}
    Genero: ${genero.toString()}
    `);
})