const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const adicionarItem = document.getElementById("adicionar-item");

let contador = 0;

adicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();
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

    containerLista.appendChild(inputCheckbox);
    containerLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerLista);

    const diaDaSemana = new Date().toLocaleDateString("pt-br", {weekday: "long"});
    const data = new Date().toLocaleDateString("pt-br");
    const hora = new Date().toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric",
    });

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    const dataItem = document.createElement("p");
    dataItem.classList.add("texto-data");

    dataItem.innerText = dataCompleta;

    itemDaLista.appendChild(dataItem);

    listaDeCompras.appendChild(itemDaLista);
});