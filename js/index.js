let listaItem = []
let containerLista = document.querySelector('.container-lista')
let totalValor = document.getElementById('somaTotal')

const cadastrarItem = () =>{
    let nomeProduto = document.getElementById('nome-produto')
    let precoProduto = document.getElementById('preco-produto')
    
    if(nomeProduto.value && precoProduto.value != ""){
        listaItem.push({
            nome: nomeProduto.value,
            preco: precoProduto.value
        })        
        let soma = 0
        containerLista.innerHTML = "";
        listaItem.map( (item)=>{
            soma = parseFloat(soma) + parseFloat(item.preco)
            containerLista.innerHTML += `        
            <div class="item-cadastrado">
                <div class="nome-produto">
                    <p>${item.nome}</p>
                </div>
                <div class="preco-produto">
                    <p>R$ ${parseFloat(item.preco).toFixed(2).replace('.',',')}</p>
                </div>
            </div>        
            ` 
        })
        nomeProduto.value = ""
        precoProduto.value= ""
        totalValor.innerHTML = `R$ ${soma.toFixed(2).replace('.', ',')}`
    }else{
        alert('Cadastre somente com nome e preço!')
    }
}

const esvaziarLista = () =>{
    listaItem = []
    soma = 0
    containerLista.innerHTML = ""
    totalValor.innerHTML = "R$ 0,00"
}

document.getElementById('cadastro-item').addEventListener('click', cadastrarItem)
document.getElementById('limpar-lista').addEventListener('click', esvaziarLista)