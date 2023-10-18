//exemplo do classroom
// let hobbies = ['filmes', 'livros', 'futebol', 'músicas', 'artes'];
// const hobbiesList = hobbies.map(function(hobb){
// return `${hobb}`
// });
// console.log(hobbiesList);

// const numeros = [1, 2, 5, 10, 300];

// const arrDobro = numeros.map( (n) => {
//     return n * 2;
// })

// console.log(numeros);
// console.log(arrDobro);

//o map ele passa por cada item do array original
//e devolve um array personalizado


//crie dois arrays nomes e sobrenomes
//crie um terceiro array de nomeCompleto
//ao final exiba os nomes completos no console com o foreach

//utilize arrow functions como calback functions

//e necessario ter pelo menos 5 nomes

//sem map
// const nomes = ['Edu', 'Carlos', 'Mauricio', 'Jorge'];
// const sobrenomes = ['Costa', 'Roque', 'Marques', 'Silva'];
// const nomeCompleto = [];

// // // Usando forEach para criar o array nomeCompleto
// nomes.forEach( (nomes , index) => {
//     const sobrenome = sobrenomes [index];
//     const nomeCompletoAtual = `${nomes} ${sobrenome}`;
//     nomeCompleto.push(nomeCompletoAtual);

// });
// // // Exibindo os nomes completos no console
// nomeCompleto.forEach(nome => {
//     console.log(nome);
// });

//com map
const nomes = ["Alice", "Bob", "Charlie", "David", "Eva"];
const sobrenomes = ["Anderson", "Brown", "Clark", "Davis", "Evans"];

const nomeCompleto = nomes.map((nome, index) => `${nome} ${sobrenomes[index]}`);

// Exibindo os nomes completos no console
nomeCompleto.forEach(nome => {
  console.log(nome);
});
