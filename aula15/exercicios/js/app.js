const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
let raizQuadrada = Math.sqrt(numero);
let numeroInteiro = Number.isInteger(numero);
let notANumber = Number.isNaN(numero);
let arredondarCima = Math.ceil(numero);
let arredondarBaixo = Math.floor(numero);
let duasCasasDecimais = numero.toFixed(2);

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>A raiz quadrada é: ${raizQuadrada}</p>
<p>${numero} é inteiro: ${numeroInteiro}</p>
<p>É NaN: ${notANumber}</p>
<p>Arredondando para baixo: ${arredondarBaixo}</p>
<p>Arredondando para cima: ${arredondarCima}</p>
<p>Com duas casas decimais: ${duasCasasDecimais}</p>`;