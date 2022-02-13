<template>
  <div class="pedido-card">
    <b-row>
      <b-col>
        <b-card style="max-width: 20rem">
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
.card {
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px 20px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card h3 {
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 5px;
}

.card p {
  font-size: 14px;
  color: #000000;
}

.card img {
  max-width: 80%;
  height: 180px;
}

.card button {
  width: 170px;
  height: 40px;
  border-radius: 6px;
  background-color: #ae382b;
  color: #f5a022;
  border: none;
  font-weight: bold;
}

.card button a {
  color: inherit;
  text-decoration: none;
}

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