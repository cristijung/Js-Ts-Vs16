interface UsuarioInfo {
    nome: string;
    email: string; 
    telefone: number;
    endereco?: string;   
}

interface UsuarioPermissoes {
    isAdmin: boolean;
    podeEditar: boolean;
}

const infoBasica: UsuarioInfo = {
    nome: 'Ana Banana',
    email: 'ana@email.com',
    telefone: 51999999999,
}

const permissoes : UsuarioPermissoes = {
    isAdmin: false,
    podeEditar: true,
}

const infoCompletaUser = { ...infoBasica, ...permissoes };
console.log(infoCompletaUser);

// o que faz um operador spread:
// ele espalha todas as propriedades de infoBasica (nome, email e telefone) para dentro do novo objeto