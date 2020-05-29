var produtos = [];

function insereNaLista(item){
    let divprod = document.getElementById('lista')
    let divtotal = document.getElementById('totValor')
    try {
        item = item.split(' - ')
        prodName = item[0]
        prodValor = Number(item[1].slice(2).replace(',','.'))
        let prods = {name: prodName, value: prodValor}
        produtos.push(prods);
        let prodItem;
        produtos.forEach((value) => {
            prodItem = document.createElement('p')
            prodItem.innerHTML = `${value.name} - R$ ${value.value}`
        }) 
        var totalFinal = produtos.reduce((total, value) => total += value.value, 0);
        divprod.appendChild(prodItem);
        divtotal.innerHTML = Number(totalFinal).toLocaleString('pt-BR',{style: 'currency', currency:'BRL'});
        alert('Compra efetuada com sucesso')
    } catch (error) {
        alert(`Erro: ${error} \nSua compra foi cancelada`)     
    } 
}

function clicar(id){
    let prod = document.getElementById(id).innerHTML;

    insereNaLista(prod); 
}
