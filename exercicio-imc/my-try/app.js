//CÓDIGO PROFESSOR
const form = document.querySelector('.calculoImc');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Evento prevenido.');
    setResultado();
});

function setResultado (msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');//criando um elemento de parágrafo por meio do JS
    p.classList.add('paragrafo-resultado');//criando uma classe para o parágrafo
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p);//insere o elemento p criado dentro da classe resultado (calculoFim), que é uma div onde se exibe o resultado
}


/* Código desenvolvido sozinho sem o auxílio do professor

function calcularImc() {
    
    const calculoFim = documento.querySelector('.calculoFim');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector ('.altura');
    const imc = peso/(altura**2);
    const abaixo = `Seu IMC é ${imc}, você está abaixo do peso`;
    const normal = `Seu IMC é ${imc}, você está com o peso normal`;
    const sobrepeso = `Seu IMC é ${imc}, você está com sobrepeso`;
    const grau1 = `Seu IMC é ${imc}, você está com obesidade de primeiro grau`;
    const grau2 = `Seu IMC é ${imc}, você está com obesidade de segundo grau`;
    const grau3 = `Seu IMC é ${imc}, você está com obesidade de terceiro grau`;
    

    function recebeForm() {
        

        if (imc < 18.5) {
        calculoFim.innerHTML += abaixo;
        }
        else if (imc >= 18.5 && imc <= 24.5) {
            calculoFim.innerHTML += normal;
        }
        else if (imc >= 25 && imc <= 29.9) {
            calculoFim.innerHTML += sobrepeso;
        }
        else if (imc >= 30 && imc <= 34.9) {
            calculoFim.innerHTML += grau1;
        }
        else if (imc >= 35 && imc <= 39.9) {
            calculoFim.innerHTML += grau2;
        }
        else if (imc > 40) {
            calculoFim.innerHTML += grau3;
        }
        else {
            calculoFim.innerHTML += `<p>Não foi possível calcular seu IMC, você forneceu dados incorretos!</p>`
        }
        
    }
    
}

calcularImc();
*/