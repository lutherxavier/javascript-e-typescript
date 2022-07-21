/*Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 45.54584
Luiz Otávio nasceu em 1980*/
const nome = 'Luther Mateus';
const sobrenome = 'Xavier Machado';
const idade = 20;
const peso = 65;
const altura = 1.67;

let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg tem ${altura} de altura e seu IMC é de ${imc}. ${nome} ${sobrenome} nasceu em ${anoNascimento}.`);