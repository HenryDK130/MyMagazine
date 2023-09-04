import { catalogo, lerLocalStorage, salvarLocalStorage } from "./utilidades";

const idsProdCarrinhoQtd = lerLocalStorage('carrinho') ?? {};

function abrirCarrinho () {
    document.getElementById("carrinho").classList.add('right-[0px]');
    document.getElementById("carrinho").classList.remove('right-[-360px]');
}

function fecharCarrinho () {
    document.getElementById("carrinho").classList.remove('right-[0px]');
    document.getElementById("carrinho").classList.add('right-[-360px]');
}

function irParaCheckout() {
    if(Object.keys(idsProdCarrinhoQtd).lenght === 0){
        return;
    }
    window.location.href = './checkout.html';
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    const botaoParaCheckout = document.getElementById('finalizar-compra')
    
    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    botaoParaCheckout.addEventListener('click', irParaCheckout);
}

export function adicionarCarrinho (idProduto) {
    if (idProduto in idsProdCarrinhoQtd){
        incrementarQtdProd(idProduto);
        return;
    }
    idsProdCarrinhoQtd[idProduto] = 1;
    salvarLocalStorage('carrinho', idsProdCarrinhoQtd);
    desenharProdCarrinho(idProduto);
    attPrecoCarrinho();
}

function removerCarrinho(idProduto) {
    delete idsProdCarrinhoQtd[idProduto];
    salvarLocalStorage('carrinho', idsProdCarrinhoQtd);
    attPrecoCarrinho();
    renderizarProdCarrinho();
}

function incrementarQtdProd(idProduto) {
    idsProdCarrinhoQtd[idProduto]++;
    salvarLocalStorage('carrinho', idsProdCarrinhoQtd);
    attPrecoCarrinho();
    attInfoQtd(idProduto);
}
function decrementarQtdProd(idProduto) {
    if (idsProdCarrinhoQtd[idProduto] === 1) {
        removerCarrinho(idProduto);
        return;
    }
    idsProdCarrinhoQtd[idProduto]--;
    salvarLocalStorage('carrinho', idsProdCarrinhoQtd);
    attPrecoCarrinho();
    attInfoQtd(idProduto);
}
function attInfoQtd(idProduto) {
    document.getElementById(`qtd-${idProduto}`).innerText = idsProdCarrinhoQtd[idProduto];
}

function desenharProdCarrinho(idProduto) {
    const produtos = catalogo.find((p) => p.id === idProduto)
    const containerProdCarrinho = document.getElementById("produtos-carrinho");

    const elementArticle = document.createElement("article");
    const articleClasses = ['flex', 'bg-slate-100', 'rounded-lg', 'p-1', 'relative'];

    for (const articleClass of articleClasses) {
        elementArticle.classList.add(articleClass);
    }

    const cardProdCarrinho = `<button id="remover-item-${produtos.id}" 
    class="absolute top-0 right-0 p-2"><i class="fa-solid fa-circle-xmark text-slate-600 hover:text-slate-800"></i></button>
    <img src="./assets/img/${produtos.imagem}" alt="${produtos.nome}" class="h-24 rounded-lg p-1">
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${produtos.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho M</p>
      <p class="text-green-700 text-lg">$${produtos.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrementar-produto-${produtos.id}'>-</button>
        <p id='qtd-${produtos.id}' class='mx-2'>${idsProdCarrinhoQtd[produtos.id]}</p>
        <button id='incrementar-produto-${produtos.id}'>+</button>
    </div>`;
  
  elementArticle.innerHTML = cardProdCarrinho;
  containerProdCarrinho.appendChild(elementArticle);

  document.getElementById(`decrementar-produto-${produtos.id}`).addEventListener("click", () => decrementarQtdProd(produtos.id));
  document.getElementById(`incrementar-produto-${produtos.id}`).addEventListener("click", () => incrementarQtdProd(produtos.id));
  document.getElementById(`remover-item-${produtos.id}`).addEventListener("click", () => removerCarrinho(produtos.id));

}

export function renderizarProdCarrinho() {
    const containerProdCarrinho = document.getElementById("produtos-carrinho");
    containerProdCarrinho.innerHTML = '';

    for (const idProduto in idsProdCarrinhoQtd) {
        desenharProdCarrinho(idProduto);
    }
}

export function attPrecoCarrinho() {
    const precoCarrinho = document.getElementById('preco-total');
    let precoTotal = 0;
    for(const idProdutoCarrinho in idsProdCarrinhoQtd) {
        precoTotal += catalogo.find((p) => p.id === idProdutoCarrinho).preco * idsProdCarrinhoQtd[idProdutoCarrinho];
    }
    precoCarrinho.innerHTML = `Total: $${precoTotal}`;
} 