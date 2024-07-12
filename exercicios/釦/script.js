botao = document.querySelector("div.button")

function abaixa() {
    // botao.style.backgroundColor = "blue";
    botao.style.boxShadow = "inset 0px 3px 8px rgba(0, 0, 0, 0.521)";
    botao.style.transform = "translate(0, 3.5px)";
}

function sobe() {
    botao.style.boxShadow = "4px 4px 9px rgba(0, 0, 0, 0.521)";
    botao.style.transform = "translate(0, -3.5px)";   
}

function mudaCor() {
    botao.style.backgroundColor = "blue";
}