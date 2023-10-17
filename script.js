var alturaJanela = 0
var larguraJanela = 0
var vidas = 1
var tempo = 20

var tempoCriaMosquito = 2000
//nivel é atrelado ao parametro encaminhado pela url da pagina
var nivel = window.location.search 
nivel = nivel.replace('?', '')

if(nivel === 'facil'){
    tempoCriaMosquito = 2000
}
else if(nivel === 'medio'){
    tempoCriaMosquito = 1000
}
else if(nivel === 'dificil'){
    tempoCriaMosquito = 800
}

//essa função responde a mudança de tamanho do body
function AjustaTelaJogo(){
    alturaJanela = window.innerHeight //captura altura da tela
    larguraJanela = window.innerWidth //captura largura da tela
}

AjustaTelaJogo()

//cronometro exibido na tela. Encaminha pra tela de vitoria se a contagem terminar
//antes de perder todas as vidas
var timer = setInterval(function(){
    
    tempo--
    if(tempo < 0){
        clearInterval(timer)
        clearInterval(criaMosquito)
        location.href='vitoria.html'
    }
    else{
        document.getElementById('timer').innerHTML = tempo
    }
}, 1000)

//exibe o mosquito randomicamente na tela
function PosicaoAleatoria(){

    //remove o mosquito anterior caso exista
    if(document.getElementById('mosquito') != null){
        document.getElementById('mosquito').remove()

        //
        if(vidas > 3){
            window.location.href = "GameOver.html"
        }
        //se o elemento nao existir, coracao cheio é subsituito por coracao vazio
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
    }
    
    //gera numeros aleatorios para posicaçao do mosquito com decremento que
    //previne que a imagem ultrapasse a tela.
    var posicaoX = Math.floor(Math.random() * larguraJanela) - 90
    var posicaoY = Math.floor(Math.random() * alturaJanela) - 90

    //impede que x ou y sejam negativos
    if(posicaoX < 0){ 
        posicaoX = 0
    }
    if(posicaoY < 0){
        posicaoY = 0
    }

    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img') //criando elemento html imagem 
    mosquito.src = 'imagens/mosca.png' //referenciando local da imagem

    //definindo a classe da imagem
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    console.log(mosquito.className)

    //posicinando a imagem
    mosquito.style.position = 'absolute' 
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.left = posicaoX + 'px' 
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'

    //mosquito é removido da tela no evento click
    mosquito.onclick = function(){
        this.remove()
    }
}

//randomiza o tamanho da imagem e retorna classe da imagem
function tamanhoAleatorio(){
    var tamanho = Math.floor(Math.random() * 3+1) 
    console.log(tamanho)

    switch(tamanho){
        case 1:
            return "mosquito"+tamanho
        case 2:
            return "mosquito"+tamanho
        case 3:
            return "mosquito"+tamanho
    }
}

//randomiza o lado da imagem e retorna classe da imagem
function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2)
    
    switch(lado){
        case 0:
            return "ladoA" 
        case 1:
            return "ladoB"
    }
}