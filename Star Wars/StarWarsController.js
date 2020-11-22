class Controler{

    constructor(){}

    static carregaInfos(id){

        console.log('entrei no carrega infos')

        let pedido = new XMLHttpRequest()

        pedido.open('GET', `https://swapi.dev/api/starships/${id}`)

        pedido.addEventListener('load', ()=>{

            try
            {
                if(pedido.status != 200){
                    throw new Error('Não existe nave com esse numero')
                }
                
                let dados = JSON.parse(pedido.responseText)

                View.mostrarNaTela(dados)

            } catch(err) {
                alert(err.message)
                // botao.style.backgroundColor = "red"
                document.location.reload(true)
            }finally{
                document.querySelector('body').style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/01/27/15/25/space-1164579_960_720.png')"
                document.querySelector('body').style.color = 'yellow'
            }

        })

        pedido.send()

    }
}