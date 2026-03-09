function mostrar(secao) {

let secoes = document.querySelectorAll(".conteudo");

secoes.forEach(function(div){
div.style.display = "none";
});

document.getElementById(secao).style.display = "block";

}
