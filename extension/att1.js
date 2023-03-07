// Literal
const nome = "Brendo";
//Funcção Construtora
const nomeMeio = String("Santiago");
// Instanciação
const sobreNome = new String("Oliveira");

console.log(typeof nome); //String
console.log(typeof nomeMeio);  // String
console.log(typeof sobreNome); // object

console.log(nome instanceof String); // false
console.log(nomeMeio instanceof String); // false
console.log(sobreNome instanceof String); // true