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
            <b-input v-model="valorCampoCpf" placeholder="Informe o cpf do cliente..." />
            <b-input-group-append>
              <b-button @click="filtrarClientePorCpf" variant="danger" class="text-warning">
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

    <div class="row">      
      <div class="col-md-12">
				<hr>
        <div class="col-md-12">
          <button class="salvar-button" @click="filtrarClientePorCpf">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NovoPedido",
  data: function () {
    return {
      cliente: [],
      valorCampoCpf: ""
    };
  },
  methods: {
    getClienteById: async function () { 
      const result = await fetch("http://localhost:3000/clientes/busca/" + this.valorCampoCpf, {
        method: "GET",
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
        this.cliente = result;
				console.log(this.cliente)
      }
    },
		filtrarClientePorCpf: function () {
			this.getClienteById();
		},
  },  
};
</script>

<style>
.salvar-button {
  width: 170px;
  height: 40px;
  border-radius: 6px;
  background-color: #ae382b;
  color: #f5a022;
  border: none;
  font-weight: bold;
  display: block;
  margin: 30px auto;
}
</style>