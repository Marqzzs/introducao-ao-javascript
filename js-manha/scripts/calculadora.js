// Função para realizar o cálculo
function calcular() {
  // Evitar o envio do formulário
  event.preventDefault();

  // Obter os valores dos campos de entrada
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let op = document.getElementById("operacao").value;
  let resultado;

  if (isNaN(n1) || isNaN(n2)) {
    alert("E necessario digitar apenas numeros");
    return;
  }
  // Realizar a operação selecionada
  switch (op) {
    case "+":
      resultado = somar(n1, n2);
      break;
    case "-":
      resultado = subtrair(n1, n2);
      break;
    case "/":
      if (n2 == 0) {
        resultado = "Não é possível dividir por zero";
      } else {
        resultado = dividir(n1, n2);
      }
      break;
    case "*":
      resultado = multiplicar(n1, n2);
      break;
    default:
      resultado = "Selecione uma operação";
      break;
  }

  // Exibir o resultado na página
  document.getElementById("resultado").textContent = resultado;
}

// Funções para as operações matemáticas
function subtrair(n1, n2) {
  return n1 - n2;
}

function somar(n1, n2) {
  return n1 + n2;
}

function dividir(n1, n2) {
  return n1 / n2;
}

function multiplicar(n1, n2) {
  return n1 * n2;
}
