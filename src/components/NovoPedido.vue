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
              <b-button @click="getClienteByCpf(valorCampoCpf)" variant="danger" class="text-warning">
                <strong>Buscar</strong>
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <div>
            <p>Nome Completo: {{ nome }} {{ sobrenome }}</p>
            <p>CPF: {{ cpf }}</p>
            <p>Data de Nascimento: {{ dataNascimento }}</p>
          </div>
        </b-col>
      </b-row>
      <div class="row">
        <div class="col-md-12">
          <hr />
          <div class="col-md-12">
            <button class="salvar-button" @click="isSubmit">Salvar</button>
          </div>
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
      valorCampoCpf: ""
    };
  },
  props: {
    nome: String,
    sobrenome: String,
    cpf: String,
    dataNascimento: String,
    getClienteByCpf: Function,
    isSubmit: Function,
    
  },
  methods: {},
};
</script>

<style>
</style>