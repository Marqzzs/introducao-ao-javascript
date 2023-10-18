const numeros = [1, 2, 5, 10, 300];

const mesa = ["Coral", "Demetrio", "Anna"];

//calback function
// mesa.forEach(
//     function Carlos(pessoa) {
//         console.log(`Bom dia ${pessoa}`);
//     }
// );

//funcao anonima, quando a funcao nao tem nome
// mesa.forEach(function (pessoa) {
//   console.log(`Bom dia ${pessoa}`);
// });

//arrow function
// mesa.forEach( (pessoa) => {
//   console.log(`Bom dia ${pessoa}`);
// });

// const dobro = (x) => {
//     return x * 2;
// }

//forma simplificada sem o return
// const dobro = (x) => x * 2;

// console.log(dobro(5));

const bomDia = () => "Bom dia" //Retorna o texto

console.log(bomDia());