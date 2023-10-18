const numeros = [1,2,200,10,7,12,15,8]

console.log(numeros);

const nMenor10 = numeros.filter((n) =>{
    return n <= 10;
})

console.log(nMenor10);

const comentarios = [
    {comentario: 'bla bla bla', exibe: true},
    {comentario: 'evento merda', exibe: false},
    {comentario: 'otimo evento', exibe: true}
];

const comentarios0k = comentarios.filter( (c) => {
    return c.exibe === true;
});

console.log(comentarios0k);