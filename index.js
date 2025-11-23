import {criarItemDaLista} from "./scripts/criarItemDaLista.js";
import verificarLista from "./scripts/verificarLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const adicionarItem = document.getElementById("adicionar-item");

verificarLista(listaDeCompras);

adicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();

    const itemDaLista = criarItemDaLista();

    listaDeCompras.appendChild(itemDaLista);

    verificarLista(listaDeCompras);
});