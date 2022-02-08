<template>
  <div class="produto-detalhe">
    <Header />
    <main>
      <Detalhe :fazerPedido="fazerPedido"/>
      <NovoPedido v-if="!isHidden"/>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Detalhe from "../components/Detalhe.vue";
import Footer from "../components/Footer.vue";
import NovoPedido from '../components/NovoPedido.vue';


export default {
  name : "ProdutoDetalhe",
  components : {
    Header,
    Detalhe,
    NovoPedido,
    Footer,
  },
  data: function() {
    return {
      isHidden: true,
    }
  },
  methods: {
    fazerPedido: function () {
      this.isHidden = false
    }
  }
}
</script>
<style>
  
</style>