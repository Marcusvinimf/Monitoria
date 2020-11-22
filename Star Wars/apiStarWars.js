let botao = document.querySelector('#btn1')

let input = document.querySelector('#id')

botao.addEventListener('click', ()=>{

    Controler.carregaInfos(input.value)

    console.log('to no botão')
})