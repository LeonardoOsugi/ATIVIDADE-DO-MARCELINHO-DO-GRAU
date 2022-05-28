function atv1() { 
    var n1 = Number(window.prompt("Digite um valor inteiro: "));
    var n2 = Number(window.prompt("Digite mais um valor inteir: "));

    if(n1 < n2){
        var menor = n1;
        var maior = n2;

        document.getElementById("resultado").innerHTML = `Ordem crescente: ${n1}-${n2}`;
    } else if(n1 > n2){
        var menor = n2;
        var maior = n1;

        document.getElementById("resultado").innerHTML = `Ordem crescente: ${n2}-${n1}`;
    } else {
        var igual = n1;

        document.getElementById("resultado").innerHTML = `Os dois são iguais então a ordem crescente é: ${igual}`;
    }
}

function atv2() {
    var alt = Number(window.prompt("Sua altura: "));
    var gen = window.prompt("Seu gênero[M/F]: ");


     if(gen == "M" || gen == "m") {
         var pes_ideal = (72.7*alt)-58;
     } else if(gen == "F" || gen == "f") {
         var pes_ideal = (62.1*alt)-44.7;
     } else{
         document.getElementById("resultado").innerHTML = `Você não digitou [M], [m], [F] ou [f] tente novamente`
     }
     document.getElementById("resultado").innerHTML = `Sua altura é ${alt}, seu gênero é ${gen}, sendo assim seu peso ideal é ${pes_ideal.toFixed(2)}`;
}

function atv3() {
    var n1 = Number(window.prompt("Digite um número inteiro: "));
    var n2 = Number(window.prompt("Digite mais um número inteiro: "));
    var n3 = Number(window.prompt("Digite mais um número inteiro: "));

    menor  = n1
    if (n2 < n1){
        menor = n2;
    } if(n3 < n1){
        menor = n3;
    }

    document.getElementById("resultado").innerHTML = `O menor número digitado foi ${menor}`;
}

function atv4() { 
    var int = Number(window.prompt("Escreva um número aí né: "));

    if ( int >= 0){
        if( int % 2 == 0){
            document.getElementById("resultado").innerHTML = `ISSO É PAR HEMMMMMMM`;
        } else{
            document.getElementById("resultado").innerHTML = `ISSO É IMPAR HEMMMMMMM`;
        }
    } else {
        int = int*(- 1);
        document.getElementById("resultado").innerHTML = `O número que você digitou é negativo, mas seu valor absoluto é ${int}`;
    }
}


function atv5(){
    var num = Number(window.prompt("Escreva um número aí né: "));

    if(num % 2 == 0 && num % 3 ==0){
        document.getElementById("resultado").innerHTML = `O número ${num} é divisível por 2 e 3`;
    } else{
        document.getElementById("resultado").innerHTML = `O número ${num} NÃO é divisível por 2 e 3`;
    }

}

function atv6(){
    var num = Number(window.prompt("Escreva um número aí né: "));

    if(num % 2 == 0 && num % 7 ==0){
        document.getElementById("resultado").innerHTML = `O número ${num} é divisível por 2 e 7`;
    } else{
        document.getElementById("resultado").innerHTML = `O número ${num} NÃO é divisível por 2 e 7`;
    }
}

function atv7(){
    do{
        var amigao = Number(window.prompt("Informe um número ai o amigão: "));
    }while(amigao < 1 || amigao > 7);

    switch(amigao){
        case 1:
            document.getElementById("resultado").innerHTML = `Domingo`;
            break;
        case 2:
            document.getElementById("resultado").innerHTML = `Segunda-Feira`;
            break;
        case 3:
            document.getElementById("resultado").innerHTML = `Terça-Feira`;
            break;
        case 4:
            document.getElementById("resultado").innerHTML = `Quarta-Feira`;
            break;
        case 5:
            document.getElementById("resultado").innerHTML = `Quinta-Feira`;
            break;
        case 6:
            document.getElementById("resultado").innerHTML = `Sexta-Feira`;
            break;
        case 7:
            document.getElementById("resultado").innerHTML = `Sabado`;
            break;
    }

}

function atv8(){
    var soma = 0;
    for(n = 1; n <= 20; n++ ){
        if(n % 2 == 0) {
            soma += n;
        }
    }
    document.getElementById("resultado").innerHTML = `A soma dos pares é ${soma}`
}

function atv9(){
    var num = Number(window.prompt("Digite um número para saber sua tábuada: "));

    document.getElementById("resultado").innerHTML = `${num} X ${1} = ${num * 1}, ${num} X ${2} = ${num * 2}, ${num} X ${3} = ${num * 3}, ${num} X ${4} = ${num * 4}, ${num} X ${5} = ${num * 5}, ${num} X ${6} = ${num * 6}, ${num} X ${7} = ${num * 7}, ${num} X ${8} = ${num * 8}, ${num} X ${9} = ${num * 9}, ${num} X ${10} = ${num * 10}`;

}

function atv10(){
    do{
        var num = Number(window.prompt("Digite um número positivo qualquer: "));
    }while(num < 0);

    var sub = num;
    var mult = 1;

    while(sub != 0) {
        if(sub == 0){
            mult = 1;
        }
        mult *= sub
        sub -= 1;
    }
    document.getElementById("resultado").innerHTML = `o fatorial de ${num}! é ${mult}`;
}