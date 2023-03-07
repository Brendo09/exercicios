function f4(){
    setTimeout(() => console.log('TimeOut Chamado'),5000);
    console.log("Função 4 Executou");
}
function f3(){
    console.log("Função 3 Executou");
    f4();
}
function f2(){
    console.log("Função 2 Executou");
    f3();
}
function f1(){
    console.log("Função 1 Executou");
    f2();
}
f1();

console.log('Fim do Programa');