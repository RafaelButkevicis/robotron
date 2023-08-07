//var = valor variavel, const = valor fixo.
//arrow functions => == function
//()dentro do parenteses é parametro     //const robotron = document.querySelector("#robotron")



//robotron.addEventListener("click", () => {
  //  console.log("robo.")
//})

//function dizOi(nome){
  //  console.log("oi " +  nome)
    //console.log("asdasdasd")
    
//}

//dizOi("pedro")

//parseInt -- passa de string para int
//dataset SER INDEPENDENTE DE UMA INFORMAÇÃO QUE POSSA SER ALTERADA
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll("[data-estatisticas]")
const controle = document.querySelectorAll("[data-controle]")
const images= [
    "img/amarelo.png",
    "img/rosa.png",
    "img/vermelho.png",
    "img/preto.png",
    "img/azul.png",
    "img/branco.png"
]
const changeButton = document.querySelector("[data-mudar]")
const randomImage = document.querySelector("[data-img]")
const imageContainer = document.querySelector("[data-container]")

changeButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    randomImage.src = randomImageUrl;
  });

  window.addEventListener("load", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    randomImage.src = randomImageUrl;
  });


controle.forEach((elemento) => {
    
    elemento.addEventListener("click", (evento) => {
         manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
         atualizaEstatisticas(evento.target.dataset.peca)
    }) 
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas] 
    })
}
