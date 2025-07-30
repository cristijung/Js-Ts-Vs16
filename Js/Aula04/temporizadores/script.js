// métodos temporizadres Js
// setTimeout
// setTimeout(code, delay)
setTimeout(function() {
    console.log('Essa função será executada após 3 segundos');
}, 3000);
console.log('-----------------------------------------');
//-----------------------------------------------------

function operacaoAssincrona(tempo, callback) {
    console.log('... iniciando uma operação assíncrona ...');

    setTimeout(function() {
        console.log(`Operação assíncrona concluída após ${tempo} milissegundos.`);
        callback();
    }, tempo);
}
operacaoAssincrona(6000, function(){
    console.log('O callback foi executado com sucesso!!')
})

console.log('Aqui será executado antes a "Operação Assíncrona ... aguarde"');