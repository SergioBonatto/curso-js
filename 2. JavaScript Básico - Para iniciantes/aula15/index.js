// let num1 = 9.5783
// let num2 = Math.floor(num1) // arredonda pra baixo
// let num3 = Math.ceil(num1)  // arredonda pra cima
// let num4 = Math.round(num1) // arredonda pro mais próximo
// console.log(num1, num2, num3, num4)
// console.log(Math.max(6, 2, 1, 3, 5))
// console.log(Math.min(6, 2, 1, 3, 5))
// console.log(Math.random())
// console.log(2 ** 0.5)
// console.log((Math.PI) ** 2)
//
const numero        = Number(prompt('Digite um número'));
const numeroTitulo  = document.getElementById("numero-titulo");
const texto         = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = (
  `<p>A raiz quadrada de ${numero} é: ${numero ** 0.5}</p>
   <p>${numero} é NaN:                ${Number.isNaN(numero)}</p>
   <p>${numero} é um número inteiro:  ${Number.isInteger(numero)}</p>
   <p>Arrendondado para cima  é:      ${Math.ceil(numero)}</p>  
   <p>Arrendondado para baixo é:      ${Math.floor(numero)}</p>
   <p>Com duas casas decimais é:      ${Number.parseFloat(numero).toFixed(2)} </p>
  `
)
