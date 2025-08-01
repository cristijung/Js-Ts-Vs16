var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var infoBasica = {
    nome: 'Ana Banana',
    email: 'ana@email.com',
    telefone: 5199999 - 9999,
};
var permissoes = {
    isAdmin: false,
    podeEditar: true,
};
var infoCompletaUser = __assign(__assign({}, infoBasica), permissoes);
console.log(infoCompletaUser);
// o que faz um operador spread:
// ele espalha todas as propriedades de infoBasica (nome, email e telefone) para dentro do novo objeto
