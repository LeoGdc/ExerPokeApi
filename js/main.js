'use strict'

let a = {
    nome: "fernando",
    idade: "40"
}

const pesquisarRacas = async () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const response = await fetch(url)
    const data = await response.json()
    return Object.keys(data.message)
}

const pesquisarCachorro = async (raca) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${racas}`

    const response = await fetch(url)

    const data = await response.json()

    return data

}

const criarImg = (imagem) =>{
    const img =document.createElement('img')
    img.src = imagem

    return img

}

const carregarImagens = async () =>{
    const container =document.getElementById('imagem-container')
    const raca =document.getElementById('raca').value
    const imagens = await pesquisarCachorro(raca)

    const tagImagens = imagens.message.map(criarImg)

    container.replaceChildren(...tagImagens)

}

const carregarRacas = async() =>{


    const lista = document.getElementById('lista-racas')
    const racas = await pesquisarRacas()
    lista.innerHTML=`
    <option>
        ${racas.join("</options><option>")}
    </otion>
    `
    console.log(racas.json("<option></option>"))

}
document.getElementById('pesquisar').addEventListener('click', carregarImagens)

carregarRacas()