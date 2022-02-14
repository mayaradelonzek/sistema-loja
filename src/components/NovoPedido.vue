<template>
  <div class="container">
    <div class="row">
      <hr />
      <b-row class="mb-5">
        <b-col sm="5">
          <h4 class="mb-3">Novo pedido</h4>
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <span class="input-group-text"> CPF Cliente:</span>
            </b-input-group-prepend>
            <b-input
              v-model="valorCampoCpf"
              placeholder="Informe o cpf do cliente..."
            />
            <b-input-group-append>
              <b-button @click="getClienteByCpf" variant="danger" class="text-warning">
                <strong>Buscar</strong>
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <div>
            <p>Nome Completo: {{ cliente.nome }} {{ cliente.sobrenome }}</p>
            <p>CPF: {{ cliente.CPF }}</p>
            <p>Data de Nascimento: {{ cliente.dataNascimento }}</p>
          </div>
        </b-col>
      </b-row>      
    </div>
  </div>
</template>

<script>
export default {
  name: "NovoPedido",
  data: function () {
    return {
      valorCampoCpf: "",
      cliente: []
    };
  },
  props: {          
    setCpfSelecionado: Function
  },
  methods: {
    getClienteByCpf: async function () {
      const result = await fetch(
        "http://localhost:3000/clientes/busca/" + this.valorCampoCpf,
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
        this.setCpfSelecionado(this.cliente.CPF)        
      }
    },       
  },
};
</script>

<style>
</style>