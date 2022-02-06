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
            <b-input />
            <b-input-group-append>
              <b-button variant="danger" class="text-warning"><strong>Buscar</strong></b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "NovoPedido",
};
</script>

<style>
</style>