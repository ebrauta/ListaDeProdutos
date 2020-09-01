const listaDeProdutos = [
    {
        'name': 'CPU',
        'price': 350
    },
    {
        'name': 'Monitor',
        'price': 400
    },
    {
        'name': 'Teclado',
        'price': 120
    },
    {
        'name': 'Mouse',
        'price': 30
    },
    {
        'name': 'Caixa de Som',
        'price': 75
    },
    {
        'name': 'Impressora',
        'price': 300
    }
];

const raiz = document.getElementById('root')

var produtos = []

let ulist = document.createElement('ul')
listaDeProdutos.forEach((item, index) => {
    let lItem = document.createElement('li')
    let sItem = document.createElement('span')
    sItem.setAttribute('id', `res${index}`)
    let valor =  Number(item.price).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
    sItem.innerText = `${item.name} - ${valor}`
    lItem.appendChild(sItem)
    let nItem = document.createElement('input')
    nItem.setAttribute('type', 'number')
    nItem.setAttribute('id',`qtde${index}`)
    nItem.setAttribute('min', 0)
    nItem.setAttribute('value', 0)
    lItem.appendChild(nItem)
    let bitem = document.createElement('input')
    bitem.setAttribute('type', 'button')
    bitem.setAttribute('value', 'Comprar')
    bitem.addEventListener('click', () => insereNaLista(item, nItem.value))
    lItem.appendChild(bitem)
    let b2item = document.createElement('input')
    b2item.setAttribute('type', 'button')
    b2item.setAttribute('value', 'Retirar')
    b2item.addEventListener('click', () => retiraDaLista(item, nItem.value))
    lItem.appendChild(b2item)
    ulist.appendChild(lItem)
})

raiz.appendChild(ulist)

const insereNaLista = (produto, qtde) => {
    if(qtde !== '0'){
        if(produtos.indexOf(produto) < 0){
            let newProduto = {
                'name': produto.name,
                'price': produto.price,
                'qtde': Number(qtde)
            }
            produtos.push(newProduto)
            let total = produtos.reduce((total, item) => {
                return total + (item.price * item.qtde)
            }, 0)
            console.log(total)
        }
    } else {
        alert('Insira a quantidade do produto')
    }
}

const retiraDaLista = (produto, qtde) => {
    let newProduto = {
        'name': produto.name,
        'price': produto.price,
        'qtde': Number(qtde)
    }
    produtos = produtos.filter((item) => {item !== newProduto})
    let total = produtos
    console.log(total)
}

/*
 <li id='produto1'><span id="res1">Monitor - R$ 400,00 </span>Qtde: <input type='number' id='qtde1' min="0" value=0><input type="button" value="Comprar" onclick="clicar(1)"> </li>
        <li id='produto2'><span id="res2">CPU - R$ 350,00 </span>Qtde: <input type='number' id='qtde2' min="0" value=0><input type="button" value="Comprar" onclick="clicar(2)"> </li>
        <li id='produto3'><span id="res3">Teclado - R$ 120,00 </span>Qtde: <input type='number' id='qtde3' min="0" value=0><input type="button" value="Comprar" onclick="clicar(3)"> </li>
        <li id='produto4'><span id="res4">Mouse - R$ 25,00 </span>Qtde: <input type='number' id='qtde4' min="0" value=0><input type="button" value="Comprar" onclick="clicar(4)"> </li>
        <li id='produto5'><span id="res5">Caixa de Som - R$ 75,00 </span>Qtde: <input type='number' id='qtde5' min="0" value=0><input type="button" value="Comprar" onclick="clicar(5)"> </li>
        <li id='produto6'><span id="res6">Impressora - R$ 300,00 </span>Qtde: <input type='number' id='qtde6' min="0" value=0><input type="button" value="Comprar" onclick="clicar(6)"> </li>



        Total: <span id="totValor"></span>
    */
/*
function insereNaLista(item, qtde){
    let divprod = document.getElementById('lista')
    let divtotal = document.getElementById('totValor')
    try {
        item = item.split(' - ')
        prodName = item[0]
        prodValor = Number(item[1].slice(2).replace(',','.')) * qtde;
        let prods = {name: prodName, value: prodValor}
        produtos.push(prods);
        let prodItem;
        let buttonItem;
        produtos.forEach((value) => {
            prodItem = document.createElement('p')
            buttonItem = document.createElement('input')
            let valor =  Number(value.value).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
            prodItem.innerHTML = `${value.name} - ${qtde} peça(s) = ${valor}`
            buttonItem.type = 'button'
            buttonItem.value = 'Retirar'
            buttonItem.addEventListener('click', () => retiraDaLista(value))
            prodItem.appendChild(buttonItem)
        }) 
        var totalFinal = produtos.reduce((total, value) => total += value.value, 0);
        divprod.appendChild(prodItem);
        divtotal.innerHTML = Number(totalFinal).toLocaleString('pt-BR',{style: 'currency', currency:'BRL'});
        alert('Compra efetuada com sucesso')
    } catch (error) {
        alert(`Erro: ${error} \nSua compra foi cancelada`)     
    } 
}

function retiraDaLista(produto){
    let index = produtos.indexOf(produto) + 1
    console.log(index)
    //console.log(document.getElementById('produto'+i))
    if(produtos.length === 0){
        alert('Não há produtos na lista')
    } else {
        //document.getElementById('prod'+i).style.display = 'block' 
        //produtos.splice(i, 1);
    }
    console.log(produtos)
}

function clicar(i){
    let prod = document.getElementById('res'+i);
    let qtd = document.getElementById('qtde'+i);
    if(qtd.value <= 0){
        alert('Insira a quantidade de produtos pedidos')
    }
    else{  
        document.getElementById('produto'+i).style.display = 'none'    
        insereNaLista(prod.innerHTML, qtd.value); 
    }
}
*/
