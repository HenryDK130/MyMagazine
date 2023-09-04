import { lerLocalStorage, desenharProdSimples } from "./src/utilidades";

function criarPedidoHist(pedidoCD) {
    const elementoPedido = `<p class='text-xl text-bold my-4'>${new Date (pedidoCD.dataPedido).toLocaleDateString('pt-br', 
    {hour: '2-digit', minute: '2-digit'})}</p>
        <section id='container-pedidos-${pedidoCD.dataPedido}' class='bg-slate-300 p-3 rounded-lg'></section>    
        `;
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += elementoPedido;

    for(const idProduto in pedidoCD.pedido) {
        desenharProdSimples(idProduto, `container-pedidos-${pedidoCD.dataPedido}`, pedidoCD.pedido[idProduto]);
    }
}

function renderizarHistPedidos() {
    const historico = lerLocalStorage('historico');
    for(const pedidoCD of historico) {
        criarPedidoHist(pedidoCD);
    }
}

renderizarHistPedidos();