import { adicionarCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {    
    for (const produto of catalogo) {
        const cardProduto = `<div id="card-prod-${produto.id}"
        class='border-solid shadow-xl shadow-slate-400 w-48 m-2 flex flex-col p-2 justify-between group rounded-lg ${produto.feminino ? 'feminino' : 'masculino'}'>
        <img src="./assets/img/${produto.imagem}" alt="imagem produto ${produto.id}." class='group-hover:scale-110 duration-300 my-3 rounded-lg'/>
        <p class='text-sm'>${produto.marca}</p>
        <p class='text-sm'>${produto.nome}</p>
        <p class='text-sm'>$${produto.preco}</p>
    <button id='adicionar-${produto.id}' class='bg-slate-950 text-slate-200 hover:bg-slate-700'><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;
    
    document.getElementById('container-produto').innerHTML += cardProduto
    }

    for (const produto of catalogo) {
        document.getElementById(`adicionar-${produto.id}`)
        .addEventListener('click', () => adicionarCarrinho(produto.id));
    }
}
