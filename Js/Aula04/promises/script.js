const tempo = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};
tempo(4000).then(function () {
  console.log("A Promise apareceu e resolveu depois de 4s");
});

//----------------------------------------
// exemplo de sintaxe do fluxo de uma Promise
function umaFuncao() {
  return new Promise((resolve, reject) => {
    const sucesso = false;

    if (sucesso) {
      resolve("Operação bem sucedida!");
    } else {
      reject("Erro na operação;");
    }
  });
}

//tratamento de erros q consequentemente serão os tratamentos dos states da Promise
umaFuncao()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });
