function calcularSoma() {
    //pega os numeros digitadosnos campos de entrada
    var numeroA =parseFloat(document.getElementById('numeroA').value);
    var numeroB = parseFloat(document.getElementById('numeroB').value);

    //verifica se os numeros são validos (ou seja,se são numeros mesmos)
    if (!isNaN(numeroA) && !isNaN(numeroB)) {
        //realiza a soma dos numeros
        var resultado = numeroA + numeroB;

        //exibe o resultado na pagina
        document.getElementById('resultado').innerHTML = "A soma de " + numeroA + " e " + numeroB + " é: " + resultado;
    }else{
        document.getElementById('resultado').innerHTML = "Por favor, digite numeros validos.";
    }

}
function limparTela() {
    //apaga o conteudo do campo "resultado"
    document.getElementById("resultado").innerHTML = "";
    //apaga o conteudo dos campos "numeroA" e "numeroB" (opcional)
    document.getElementById("numeroA").value = "";
    document.getElementById("numeroB").value = "";
    }

