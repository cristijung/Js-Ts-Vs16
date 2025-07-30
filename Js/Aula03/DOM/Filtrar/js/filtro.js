
const filtroInput = document.getElementById('filtroInput');
const listaDeProdutos = document.getElementById('listaDeProdutos');
const itensDeProduto = listaDeProdutos.getElementsByTagName('li');

filtroInput.addEventListener('keyup', () => {
    const filtro = filtroInput.value.toLowerCase(); // converte o texto para minúsculas para busca case-insensitive ...

    for (let i = 0; i < itensDeProduto.length; i++) {
        const textoDoItem = itensDeProduto[i].textContent.toLowerCase();
        if (textoDoItem.includes(filtro)) {
            itensDeProduto[i].style.display = ''; // exibe o item
        } else {
            itensDeProduto[i].style.display = 'none'; // oculta o item
        }
    }
});