const nome = "Brendo";

String.prototype.meRetorne = function(){
    return this;
}
    const quemEhVC = nome.meRetorne();

console.log(nome.toUpperCase());
console.log(nome);
console.log(quemEhVC);
console.log(typeof nome);
console.log(typeof quemEhVC);