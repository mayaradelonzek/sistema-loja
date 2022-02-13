<template>
  <div class="produto-detalhe">
    <Header />
    <main>
      <Detalhe :fazerPedido="fazerPedido" />
      <NovoPedido
        :nome="cliente.nome"
        :sobrenome="cliente.sobrenome"
        :cpf="cliente.CPF"
        :dataNascimento="cliente.dataNascimento"   
        :getClienteByCpf="getClienteByCpf"     
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
      cliente: [],     
    };
  },
  methods: {
    fazerPedido: function () {
      this.isHidden = false;
    },
    getClienteByCpf: async function (valorCampoCpf) {
      const result = await fetch(
        "http://localhost:3000/clientes/busca/" + valorCampoCpf,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.cliente = result;
        console.log(this.cliente);
      }
    },       
    buscarPedidos: async function () {
      const result = await fetch("http://localhost:3000/pedidos")
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });
      if (!result.error) {
        this.pedidos = result;
        console.log(this.pedidos);
      }
    },
    criarPedido: async function () {
      const newPedido = {
        codigo: this.pedido.produtoId,
        cpf: this.pedido.clienteCPF,
        valorUnitario: this.pedido.valorUnitario,
        valorTotal: this.pedido.ValorTotal,
        quantidade: this.pedido.quantidade,
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
        (this.codigo = this.pedido.produtoId),
          (this.cpf = this.pedido.clienteCPF),
          (this.valorUnitario = this.pedido.valorUnitario),
          (this.valorTotal = this.pedido.ValorTotal),
          (this.quantidade = this.pedido.quantidade),
          (this.message = "Pedido cadastrado com sucesso!");
      }
    },
    isSubmit: function () {
      this.criarPedido();
    },
  },
};
</script>
<style>
</style>