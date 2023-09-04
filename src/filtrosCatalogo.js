const catalogoProdutos = document.getElementById('container-produto');

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

    for(const produto of produtosEscondidos) {
        produto.classList.remove('hidden');
    }

}

function esconderMasc() {
    exibirTodos();
    const produtosMasc = Array.from(catalogoProdutos.getElementsByClassName('masculino'));

    for (const produto of produtosMasc) {
        produto.classList.add('hidden');
    }
}

function esconderFem() {
    exibirTodos();
    const produtosFem = Array.from(catalogoProdutos.getElementsByClassName('feminino'));

    for (const produto of produtosFem) {
        produto.classList.add('hidden');
    }
}

export function iniciarFiltros() {
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
    document.getElementById('exibir-femininos').addEventListener('click', esconderMasc);
    document.getElementById('exibir-masculinos').addEventListener('click', esconderFem);

}