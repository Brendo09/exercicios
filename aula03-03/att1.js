const idade = function(){
  const hoje = new Date()
  const nascimento = new Date(1999,6,7);
  const milisegundoporano = 31536000000
  const idade = (hoje - nascimento) / milisegundoporano
  return Math.floor(idade);
}

const nome = "Brendo";
const altura = 1.79;
const filhos = 1;
const efetivo = true;
const hobbies = ["Futebol","Corrida","Games"];

const brendo = {
     nome: nome,
     altura: altura,
     filhos: filhos,
     efetivo: efetivo,
     idade: idade(),
     hobbies: hobbies
    //nome,altura,filhos,efetivo,idade,hobbies
  };

console.log(brendo);


