//CÓDIGO PROFESSOR
const form = document.querySelector('.calculoImc');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso'); //Poderia utilizar form no lugar de e.target, pois o input de peso está dentro de form que já está sendo capturado no evento
    const inputAltura = e.target.querySelector('.altura'); //capturando input
    const peso = Number (inputPeso.value); //convertendo os valores dos inputs pra number
    const altura = Number (inputAltura.value);
    
    if (!peso) {
        setResultado('Peso inválido!', false); // if para caso retorne um NaN
        return;
    }

    if (!altura) {
        setResultado('Altura inválido!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.5) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso/(altura**2);
    return imc.toFixed(2);
    
}

function criaP () {
    const p = document.createElement('p');//criando um elemento de parágrafo por meio do JS
    return p;
    //p.classList.add(); --> criando uma classe para o parágrafo
    
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad'); 
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
    //resultado.appendChild(p); --> insere o elemento p criado dentro da classe resultado (calculoFim), que é uma div onde se exibe o resultado
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