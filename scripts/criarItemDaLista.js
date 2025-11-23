import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item");

let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value === "") {
        alert("Não pode adicionar item vazio!")
        return;
    }

    const itemDaLista = document.createElement("li");

    const containerLista = document.createElement("div");
    containerLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none"
        }
    })

    const dataCompleta = gerarDiaDaSemana();

    const dataItem = document.createElement("p");
    dataItem.classList.add("texto-data");

    dataItem.innerText = dataCompleta;

    containerLista.appendChild(inputCheckbox);
    containerLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerLista);
    itemDaLista.appendChild(dataItem);

    return itemDaLista;
}