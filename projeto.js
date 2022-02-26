class Produto {
  constructor(name, price, qtde, icon) {
    this.name = name;
    this.price = price;
    this.qtde = qtde;
    this.icon = icon;
  }
  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getQtde() {
    return this.qtde;
  }

  getIcon() {
    return this.icon;
  }
}

const toCurrency = function (value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const listaDeProdutos = [
  new Produto("CPU", 350, 0, "memory"),
  new Produto("Monitor", 400, 0, "monitor"),
  new Produto("Teclado", 120, 0, "keyboard"),
  new Produto("Mouse", 30, 0, "mouse"),
  new Produto("Caixa de Som", 75, 0, "speaker"),
  new Produto("Impressora", 300, 0, "adf_scanner"),
  new Produto("Roteador", 150, 0, "router"),
];

const raiz = document.getElementById("root");
const lado = document.getElementById("side");

const createInput = (type, id, value, action, title) => {
  let inputItem = document.createElement("input");
  inputItem.setAttribute("type", type);
  inputItem.setAttribute("value", value);
  if (type === "number") {
    inputItem.setAttribute("id", id);
    inputItem.setAttribute("min", 0);
  } else if (type === "button") {
    inputItem.addEventListener("click", action);
    inputItem.setAttribute("class", id);
    inputItem.title = title;
  }
  return inputItem;
};

const productsList = document.createElement("ul");
listaDeProdutos.forEach((item, index) => {
  let listItem = document.createElement("li");
  let spanItem = document.createElement("span");
  spanItem.setAttribute("id", `res${index}`);
  spanItem.classList.add("boxProduct");
  spanItem.innerHTML = `<span class="material-icons md-48">${item.getIcon()}</span><span>${item.getName()}</span><span>${toCurrency(
    item.getPrice()
  )}</span>`;
  listItem.appendChild(spanItem);

  let buttonGroup = document.createElement("div");
  buttonGroup.classList.add("btngroup");

  let buttonInsert = createInput(
    "button",
    "btn",
    "shopping_cart",
    () => insereNaLista(item),
    "Comprar"
  );
  buttonInsert.classList.add("insert");
  buttonInsert.classList.add("material-icons");
  buttonGroup.appendChild(buttonInsert);

  let buttonDelete = createInput(
    "button",
    "btn",
    "delete",
    () => retiraDaLista(item),
    "Apagar"
  );
  buttonDelete.classList.add("delete");
  buttonDelete.classList.add("material-icons");
  buttonGroup.appendChild(buttonDelete);
  listItem.appendChild(buttonGroup);
  productsList.appendChild(listItem);
});

raiz.appendChild(productsList);

const divList = document.createElement("ul");
lado.appendChild(divList);

const buttonClearList = createInput(
  "button",
  "clearAll",
  "delete_sweep",
  () => limparCarrinho(),
  "Limpar lista"
);
buttonClearList.classList.add("delete");
buttonClearList.classList.add("material-icons");

lado.appendChild(buttonClearList);

const insereNaLista = (produto) => {
  let prod = listaDeProdutos.find((item) => item == produto);
  prod.qtde += 1;
  let total = calculaTotal();
  resultado.innerHTML = `Total:  ${toCurrency(total)}`;
  mostraLista();
};

const retiraDaLista = (produto) => {
  let prod = listaDeProdutos.find((item) => item == produto);
  let index = listaDeProdutos.indexOf(prod);
  prod.qtde !== 0
    ? (prod.qtde -= 1)
    : alert("Não tem mais este produto na lista!");
  resultado.innerHTML = `Total:  ${toCurrency(calculaTotal())}`;
  mostraLista();
};

const calculaTotal = () => {
  return listaDeProdutos.reduce((total, item) => {
    return total + Number(item.getPrice()) * Number(item.getQtde());
  }, 0);
};

const mostraLista = () => {
  while (divList.firstChild) {
    divList.removeChild(divList.firstChild);
  }
  listaDeProdutos.forEach((item) => {
    if (Number(item.getQtde()) !== 0) {
      let prodItem = document.createElement("li");
      prodItem.setAttribute("id", item.getName());
      prodItem.innerHTML = `${item.getQtde()}\t\t${item.getName()}`;
      divList.appendChild(prodItem);
    }
  });
  lado.appendChild(divList);
};

const limparCarrinho = () => {
  while (divList.firstChild) {
    divList.removeChild(divList.firstChild);
  }
  listaDeProdutos.forEach((item) => (item.qtde = 0));
  resultado.innerHTML = `Total:  ${toCurrency(calculaTotal())}`;
};
