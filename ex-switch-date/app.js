//Código Professor
const h1 = document.querySelector('.exibicao');
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "";
            return diaSemanaTexto;
    }
}

function getMes(mes){
    let mesTexto;

    switch(mes){
        case 0:
            mesTexto = 'Janeiro';
        return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto= 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto =  'Julho';
            return mesTexto;
        case 7:
            mesTexto =  'Agosto';
            return mesTexto;
        case 8:
            mesTexto =  'Setembro';
            return mesTexto;
        case 9:
            mesTexto =  'Outubro';
            return mesTexto;
        case 10:
            mesTexto =  'Novembro';
            return mesTexto;
        case 11:
            mesTexto =  'Dezembro';
            return mesTexto;
        default:
            mesTexto = "";
            return mesTexto;
    }
}



function createDate(data){
    const diaSemana = data.getDay();
    const mes= data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMes(mes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
}

createDate(data);

h1.innerHTML = createDate(data);


/*Meu Código
function capturaData() {
    const data = new Date('2019-10-07 22:52:00');
    const numDia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    let diaSemana = data.getDay();
    const hora = data.getHours();
    const minutos = data.getMinutes();

    let diaSemanaTexto;

    const dataFim = `${diaSemana}, ${numDia} de ${mes} de ${ano} ${hora}:${minutos}`;

    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
        break;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
        break;
        case 2:
            diaSemanaTexto = 'Terça-feira';
        break;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
        break;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
        break;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
        break;
        case 6:
            diaSemanaTexto = 'Sábado';
        break;
        
    }

    console.log(dataFim);
}

function exibir(){
    const resultadoFIm
}

capturaData();

*/
