<template>
  <div>
    <b-row>
      <b-col>
        <b-card class="pedido-card" align="left">
          <p>Código: {{ codigo }}</p>
          <p>CPF Cliente: {{ cpf }}</p>
          <p>Valor Unitário: {{ valorUnitario }}</p>
          <p>Valor Total: {{ valorTotal }}</p>
          <p>Quantidade: {{ quantidade }}</p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    codigo: String,
    cpf: String,
    valorUnitario: String,
    valorTotal: String,
    quantidade: String,    
  },
};
</script>
<style>

.pedido-card {
  align-items: flex-start;
}

</style>