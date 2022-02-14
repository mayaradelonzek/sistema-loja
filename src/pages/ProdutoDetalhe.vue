<template>
  <div class="produto-detalhe">
    <Header />
    <main>
      <Detalhe
        :fazerPedido="fazerPedido"
        :setValoresSelecionados="setValoresSelecionados"
      />
      <NovoPedido :setCpfSelecionado="setCpfSelecionado" v-if="!isHidden" />
      <div class="container">
        <div v-if="!isHidden" class="row">
          <div class="col-md-12">
            <hr />
            <div class="col-md-12">
              <button class="salvar-button" @click="isSubmit">Salvar</button>
            </div>
          </div>
        </div>
        <p>{{message}}</p>
      </div>
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
      message: ""
    };
  },
  methods: {
    fazerPedido: function () {
      this.isHidden = !this.isHidden;
    },    
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
        this.isHidden = !this.isHidden
      }
    },
    isSubmit: function () {
      this.criarPedido();
    },
    setCpfSelecionado: function (cpfSelecionado) {
      this.cpfSelecionado = cpfSelecionado;
    },
    setValoresSelecionados: function (valorUnitario, valorTotal, quantidade) {
      this.valorUnitario = valorUnitario;
      this.valorTotal = valorTotal;
      this.quantidade = quantidade;
    },
  },
};
</script>
<style>
</style>