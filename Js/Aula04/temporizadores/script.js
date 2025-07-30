// métodos temporizadres Js
// setTimeout
// setTimeout(code, delay)
setTimeout(function() {
    console.log('Essa função será executada após 2 segundos');
}, 2000);

console.log('-----------------------------------------');
//-----------------------------------------------------

function operacaoAssincrona(tempo, callback) {
    console.log('... iniciando uma operação assíncrona ...');

    setTimeout(function() {
        console.log(`Operação assíncrona concluída após ${tempo} milissegundos.`);
        callback();
    }, tempo);
}
operacaoAssincrona(3000, function(){
    console.log('O callback foi executado com sucesso!!')
})

console.log('Aqui será executado antes a "Operação Assíncrona ... aguarde"');

console.log('-----------------------------------------');
//-----------------------------------------------------
// setInterval

function mostrarHora() {
    const agora = new Date();
    console.log(`Hora atual: ${agora.toLocaleTimeString()}`);
}
const intervalo = setInterval(mostrarHora, 2000);
setTimeout(() => {
    clearInterval(intervalo);
    console.log('Hora parada');
})
console.log('-----------------------------------------');
 //-----------------------------------------------
 function time() {
    const nowTime = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit'};
    console.log(`Hora atual: ${nowTime.toLocaleTimeString('pt-br', options)}`);
 }
 setInterval(time, 3000);

 console.log('-----------------------------------------');
 //-----------------------------------------------------