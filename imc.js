const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')


 if (nome !== '' && altura !== '' && peso !== ''){
    const valorimc = (peso / (altura * altura)).toFixed(1)
    
    let classificacao = ''
    
    if(valorimc < 18.5){
        classificacao = 'Abaixo do Peso'
    }else if(valorimc < 25){
        classificacao = 'Você está com o peso ideal. Parábens!!'
    }else if(valorimc < 30){
        classificacao = 'Você está levemente acima do peso.'
    }else if(valorimc < 35){
        classificacao = 'Você está com Obesidade Grau I'
    }else if(valorimc < 40){
        classificacao = 'Você está com Obesidade Grau II'
    }else{
        classificacao = 'Você está com Obesidade Grau III. Cuidado!!!'
    }
    resultado.textContent = `${nome} seu IMC é ${valorimc} e você está ${classificacao}`;
   }else{
    resultado.textContent = 'Preencha todos os campos!!'
}
}

calcular.addEventListener('click', imc)