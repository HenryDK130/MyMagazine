import { apagarDoLocalStorage, desenharProdSimples, lerLocalStorage, salvarLocalStorage } from "./src/utilidades";

function desenharProdCheckout() {
    const idsProdCarrinhoQtd = lerLocalStorage('carrinho') ?? {};
    for(const idProduto in idsProdCarrinhoQtd) {
        desenharProdSimples(idProduto, 'container-produto-checkout', idsProdCarrinhoQtd[idProduto]);

    }
}

function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdCarrinhoQtd = lerLocalStorage('carrinho') ?? {};
    if(Object.keys(idsProdCarrinhoQtd).length === 0) {
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdCarrinhoQtd
    }
    const histPedidos = lerLocalStorage('historico') ?? [];
    const histPedidosAtt = [pedidoFeito, ...histPedidos];

    salvarLocalStorage('historico', histPedidosAtt);
    apagarDoLocalStorage('carrinho');

    window.location.href = './pedidos.html';
}

desenharProdCheckout();

document.addEventListener('submit', (evt) => finalizarCompra(evt));