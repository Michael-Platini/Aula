const nome = 'Michael Platini';
const sobrenome = 'da Silve Ferreira';
const idade = 22;
const peso = 78;
const alturaEmM = 1.76;
const anoAtual = 2021;
let imc = peso/ (alturaEmM * alturaEmM);
let anoNascimento = (anoAtual - idade);

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} E seu IMC é ${imc}`);

