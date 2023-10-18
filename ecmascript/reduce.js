const numeros = [10,12,20]

const somatorio = numeros.reduce( (total, n) => {
    return total + n
}, 0)

console.log(somatorio);

const produtos = [
    {produto: "Camiseta", preco: 129.90},
    {produto: "Tenis", preco: 140.90},
    {produto: "Bolsa", preco: 109.90}
]

let totProduto = produtos.reduce( (vlInicial, oP) => {
    return vlInicial + oP.preco;
}, 0)

console.log(`Gerente, o total de vendas e: R$${totProduto}`);