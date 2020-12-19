let calculadora = {
    sumar: function(numA, numB){
        return numA + numB
    },
    restar: function(numA, numB){
        return numA - numB
    },
    multiplicacion: function(numA, numB){
        return numA * numB
    },
    dividir: function(numA, numB){
        if (numA !== 0 && numB !== 0){
            return numA / numB
        }else{
            let mensaje = "Error";
            return mensaje
        }  
    }
}

console.log(calculadora.sumar(2,5));
console.log(calculadora.restar(12,5));
console.log(calculadora.multiplicacion(10,5));
console.log(calculadora.division(20,5));