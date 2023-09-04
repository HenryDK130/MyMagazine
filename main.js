import { renderizarCatalogo } from "./src/cardProduto";
import { iniciarFiltros } from "./src/filtrosCatalogo";
import { attPrecoCarrinho, inicializarCarrinho, renderizarProdCarrinho } from "./src/menuCarrinho";


renderizarCatalogo();
inicializarCarrinho();
renderizarProdCarrinho();
attPrecoCarrinho();
iniciarFiltros();