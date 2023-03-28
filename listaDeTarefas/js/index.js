const item = document.querySelector('.entradaItem')
const cad = document.querySelector('.cadastrar')

cad.addEventListener('click', (e)=>{
   e.preventDefault()
   const itemLista = document.querySelector('.textItem')
   const inputItem = (itemLista.value)
   
   const item = inserir(inputItem)
   const msg = `${item}`
   console.log(msg)
   listar(msg)
  
})

function inserir(item){
    const listaTarefas = []
    listaTarefas.push(item)
    return listaTarefas
}

function criarElemento(){
    const p = document.createElement('p')
    return p;
}

function listar(item){
    const lista = document.querySelector('.tituloLista')
    lista.innerHTML += ``

    const p = criarElemento()
    
    p.innerText = item
    lista.appendChild(p)
}


