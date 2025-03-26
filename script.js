
const somar = document.getElementById("soma");
const menos = document.getElementById("diminuir");
let resultado = document.getElementById("resultado");

somar.addEventListener("click", () => {
    let convert = parseInt (resultado.innerHTML, 10);
    let soma = convert + 1;
    resultado.innerHTML = soma;
});

menos.addEventListener("click", () => {
    let convert = parseInt (resultado.innerHTML, 10);
    let diminuir = convert - 1;
    if(resultado.innerHTML == 0 ){
        resultado.innerHTML = 0;
        alert("Erro! Você não pode diminuir o zero");
    }
    else{
        resultado.innerHTML = diminuir;
    }
});