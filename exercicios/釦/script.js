botao = document.querySelector("div.button")
contador = 0

function abaixa() {
    botao.style.boxShadow = "inset 0px 4px 9px rgba(0, 0, 0, 0.521)";
    botao.style.transform = "translate(0, 3.5px)";
}

function sobe() {
    botao.style.boxShadow = "4px 4px 9px rgba(0, 0, 0, 0.521)";
    botao.style.transform = "translate(0, -3.5px)";   
}

function mudaCor() {   
    if (contador % 2 == 0) {
        botao.style.backgroundColor = "blue";
    } else {
        botao.style.backgroundColor = "red";      
    }
    contador ++    
}
