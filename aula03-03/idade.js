const idade = function(){
    const hoje = new Date()
    const nascimento = new Date(1999,6,7);
    const milisegundoporano = 31536000000
    const idade = (hoje - nascimento) / milisegundoporano
    return Math.floor(idade);
}
console.log(idade());
