let nome = document.querySelector('#nome')
let modelo = document.querySelector('#modelo')
let preco = document.querySelector('#preco')
let tamanho = document.querySelector('#tamanho')

class View{

    constructor(){}

    static mostrarNaTela(dados){

        nome.innerHTML = `Nome: ${dados.name}`
        modelo.innerHTML = `Modelo: ${dados.model}`
        preco.innerHTML = `Preço: ${dados.cost_in_credits} mangos`
        tamanho.innerHTML = `Tamanho: ${dados.length} metros`
    }
}