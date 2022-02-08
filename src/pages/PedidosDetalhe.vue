<template>
  <div class="pedido-detalhe">
    <Header />
    <main>
      <Pedidos />      
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Pedidos from "../components/Pedidos.vue";
import Footer from "../components/Footer.vue";


export default {
  name : "PedidosDetalhe",
  components : {
    Header,
    Pedidos,
    Footer,    
  },
  data: function() {
    return {
      
    }
  },
}
</script>
<style>
  
</style>