/*  sites sobre Error
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch

*/



/*function validaArray(arr, num){
    if(!arr && !num) throw new ReferenceError('Envie os parametros certos');

    if(typeof arr !== 'object') throw new TypeError('Envie  arrays do tipo object');

    if(typeof arr !=='number') throw new TypeError('Envie os numeros do tipo number');

    if(arr.length !== num) throw new RangeError('Tamanho invalido');

}->Primeira Forma */ 

function validaArray2(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parametros certos");

    if(typeof arr !== 'object') throw new TypeError("Envie  arrays do tipo object");

    if(typeof num !=='number') throw new TypeError("Envie os numeros do tipo number");

    if(arr.length !== num) throw new RangeError("Tamanho invalido");
    
    return arr;

    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um referenceError");
            console.log(e.message)
            //throw e;
            //console.log(e.name);
            //console.log(e.stack); Pode ser utilizado qualquer um desses 4 exemplos
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message)
            //throw e;
            //console.log(e.name);
            //console.log(e.stack); Pode ser utilizado qualquer um desses 4 exemplos
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message)
            //throw e;
            //console.log(e.name);
            //console.log(e.stack); Pode ser utilizado qualquer um desses 4 exemplos
        }else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(validaArray2([1, 2, 3, 4, 5], 5));



