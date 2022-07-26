//Minha solução
let varA = 'A';
let varB = 'B';
let varC= 'C';
const valorVarC = 'A';

varA = varB;
varB = varC;
varC = valorVarC;

console.log(varA, varB, varC);

//Primeira solução do professor
let varA1 = 'A';
let varB1 = 'B';
let varC1= 'C';
const varATemp = varA1;

varA1 = varB1;
varB1 = varC1;
varC1 = varATemp;

console.log(varA1, varB1, varC1);

//Segunda solução do prof

let varA2 = 'A';
let varB2 = 'B';
let varC2 = 'C';

[varA2, varB2, varC2] = [varB2, varC2, varA2];

console.log(varA2, varB2, varC2);