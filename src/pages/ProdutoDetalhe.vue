<template>
  <div class="produto-detalhe">
    <Header />
    <main>
      <Detalhe
        :fazerPedido="fazerPedido"
        :setValoresSelecionados="setValoresSelecionados"
      />
      <NovoPedido
        :setCpfSelecionado="setCpfSelecionado"
        v-if="!isHidden"
        :isSubmit="isSubmit"
      />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Detalhe from "../components/Detalhe.vue";
import Footer from "../components/Footer.vue";
import NovoPedido from "../components/NovoPedido.vue";

export default {
  name: "ProdutoDetalhe",
  components: {
    Header,
    Detalhe,
    NovoPedido,
    Footer,
  },
  data: function () {
    return {
      isHidden: true,
      cpfSelecionado: "",
      valorUnitario: "",
      valorTotal: "",
      quantidade: "",
    };
  },
  methods: {
    fazerPedido: function () {
      this.isHidden = false;
    },
    // buscarPedidos: async function () {
    //   const result = await fetch("http://localhost:3000/pedidos")
    //     .then((res) => res.json())
    //     .then((res) => res)
    //     .catch((error) => {
    //       return {
    //         error: true,
    //         message: error,
    //       };
    //     });
    //   if (!result.error) {
    //     // this.pedidos = result;
    //     // console.log(this.pedidos);
    //   }
    // },
    criarPedido: async function () {
      const newPedido = {
        produtoId: this.$route.params.id,
        ValorTotal: this.valorTotal,
        valorUnitario: this.valorUnitario,
        quantidade: this.quantidade,
        clienteCPF: this.cpfSelecionado,
      };

      const result = await fetch("http://localhost:3000/pedidos", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newPedido),
      })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.message = "Pedido cadastrado com sucesso!";
      }
    },
    isSubmit: function () {
      this.criarPedido();      
    },
    setCpfSelecionado: function (cpfSelecionado) {
      this.cpfSelecionado = cpfSelecionado;      
    },
    setValoresSelecionados: function (valorUnitario, valorTotal, quantidade) {      this.valorUnitario = valorUnitario;
      this.valorTotal = valorTotal;
      this.quantidade = quantidade;

    },
  },
};
</script>
<style>
</style>