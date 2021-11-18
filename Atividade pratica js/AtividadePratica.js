function Comparanumeros(num1, num2){
    /* ERRADO
    if(a == b){
        console.log("Os numeros são iguais")
    }else{
        console.log("Os numeros não são iguais")
    }*/

    /*Gabarito
    const saoIguais = num1 === num2;
    const soma = num1 + num2;
    
    
    if(saoIguais){
        return "São iguais"
    }

    return "Não são iguais"

    //If ternário
    return saoIguais ?  "São iguais" : "Não são iguais" 
    */
   if(!num1 || !num2) return 'Defina dois números!';
   const primeiraFrase = criaPrimeiraFrase(num1, num2);
   const segundaFrase = criaSegundaFrase(num1, num2);

   return `${primeiraFrase} ${segundaFrase}`

}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'não'
    }

    return `Os numeros são ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e que é ${resultado20} que 20`
}


console.log(Comparanumeros(40, 40))