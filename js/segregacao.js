const olaMundo = 'Olá mundo, introdução a JS';
const dataAtual = new Date();

console.log(olaMundo);
console.log(dataAtual);

function mensagem(mensagem){
    alert(mensagem);
}

function mensagem2(){
    mensagem('Aprendendo funções');
}

const mensagemFinal =(mensagemFinal) => {
    console.log(mensagemFinal);
}

mensagemFinal('Concluímos a execução')