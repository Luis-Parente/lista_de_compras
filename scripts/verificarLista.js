const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarLista(listaDeCompras) {
    const itemDaLista = listaDeCompras.querySelectorAll("li");

    if (itemDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

export default verificarLista;