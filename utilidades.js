export const catalogo = [{
    id: "1",
    nome: 'Camisa Larga com Bolsos',
    marca: 'Zara',
    preco: 70,
    imagem: 'product-1.jpg',
    feminino: false, 
}, { id: "2",
    nome: 'Casaco Reto com Lã',
    marca: 'Zara',
    preco: 110,
    imagem: 'product-2.jpg',
    feminino: true, 
}, { id: "3", 
    marca: 'Zara', 
    nome: 'Jaqueta com Efeito Camurça', 
    preco: 60, imagem: 'product-3.jpg', 
    feminino: false, 
}, { id: "4", 
    marca: 'Zara',
    nome: 'Sobretudo em Mescla de Lã',
    preco: 160,
    imagem: 'product-4.jpg', 
    feminino: false, 
}, { id: "5", 
    marca: 'Zara', 
    nome: 'Camisa Larga Acolchoada de Veludo Cotelê', 
    preco: 110, 
    imagem: 'product-5.jpg', feminino: false, 
}, { id: "6", 
    marca: 'Zara', 
    nome: 'Casaco de Lã com Botões', 
    preco: 170, 
    imagem: 'product-6.jpg', 
    feminino: true, 
}, { id: "7", 
    marca: 'Zara', 
    nome: 'Casaco com Botões', 
    preco: 75, 
    imagem: 'product-7.jpg', 
    feminino: true, 
}, { id: "8", 
    marca: 'Zara', 
    nome: 'Colete Comprido com Cinto', 
    preco: 88, 
    imagem: 'product-8.jpg',
    feminino: true, 
}]

export function salvarLocalStorage(chave, info) {
    localStorage.setItem(chave, JSON.stringify(info));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdSimples(idProduto, idContainerHtml, qtdProd) {
    const produtos = catalogo.find((p) => p.id === idProduto)
    const containerProdCarrinho = document.getElementById(idContainerHtml);

    const elementArticle = document.createElement("article");
    const articleClasses = ['flex', 'bg-stone-200', 'rounded-lg', 'p-1', 'relative', 'mb-2', 'w-96'];

    for (const articleClass of articleClasses) {
        elementArticle.classList.add(articleClass);
    }

    const cardProdCarrinho = `
    <img src="./assets/img/${produtos.imagem}" alt="${produtos.nome}" class="h-24 rounded-lg p-1">
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${produtos.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho M</p>
      <p class="text-green-700 text-lg">$${produtos.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='qtd-${produtos.id}' class='mx-2'>${qtdProd}</p>
    </div>`;
  
    elementArticle.innerHTML = cardProdCarrinho;
    containerProdCarrinho.appendChild(elementArticle);

}