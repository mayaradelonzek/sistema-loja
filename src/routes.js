import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import ProdutoDetalhe from "./pages/ProdutoDetalhe.vue";
import PedidosDetalhe from "./pages/PedidosDetalhe.vue"

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/produto-detalhe/:id", name: "produto-detalhe", component: ProdutoDetalhe },  
  // { path: "/produto-detalhe/:cpf", name: "produto-detalhe-cpf", component: ProdutoDetalhe },  
  { path: "/pedidos", name: "pedido-detalhe", component: PedidosDetalhe },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;