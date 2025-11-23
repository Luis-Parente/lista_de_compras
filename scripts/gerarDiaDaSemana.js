function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString("pt-br", {weekday: "long"});
    const data = new Date().toLocaleDateString("pt-br");
    const hora = new Date().toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric",
    });

    return `${diaDaSemana} (${data}) às ${hora}`;
}

export default gerarDiaDaSemana;