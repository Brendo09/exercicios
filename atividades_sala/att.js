function maiorQue(){
    let aleatorio = Math.random() * 100;
    aleatorio = aleatorio.toFixed(0);
    let func = function(valor){
        console.log(`${valor} é maior que : ${aleatorio} ?`)
        return valor > aleatorio;
    }
    return func;  //high order function - função que retorna outra função , como esta aqui
    
}
console.log(maiorQue()(100));
// paradigma de programação : Metado definido para resolução de problema ou execução de tarefas   -   medado / abordagem usada para resolver o que precisa
// categoria : Duas -> imperativas : intuitivo: procedural, orientada a objeto , processamento paralelo    declarativa: linguagem logicas , database
// caracteristicas   imperativo : focado no fluxo , estados são mutaveis  , focar como o algorito vai ser implementado  ,  maior quantidade de codigo  , nivel menor de escabilidade  ,  mais facil de entender
//  declarivo - sequencia exada do que vc quer     declativa : Foco mais na logica   ,  presa para imutabilidade    , foco no que vc precisa ser feito  , menos codigo , alto nivel de escalamento  ,  mais complicado de se entender
