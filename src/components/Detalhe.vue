<template>
  <section class="detalhe">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Detalhe do Produto</h2>
          <img :src="produto.img" alt="Red dead" />
        </div>
        <div class="col-md-9">
          <h2>{{ produto.title }}</h2>
          <p>R$ {{produto.price}}</p>
        </div>
        <div class="col-md-3">
          <div class="detalhe__box-price">
            <p>Quantidade</p>
            <input :min='1' @input="toCalculate" type="number" v-model="quantity" />
          </div>
        </div>
        <div class="col-md-12">
          <hr />
          <h3>Descrição:</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged
          </p>
          <h4>
            Total : {{ quantity }} * {{produto.price}} =
            {{ total }}
          </h4>
        </div>
        <div class="col-md-12">
          <button @click="fazerPedido">Fazer Pedido</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Detalhe",
  data: function () {
    return {
      quantity: 1,
      total: '',
      produto: [],             
    };    
  },
  props: {
    fazerPedido: Function,    
    setValoresSelecionados: Function
  },
  methods: {
    getProdutoById: async function () {
      const id = this.$route.params.id;
      const result = await fetch("http://localhost:3000/produtos/" + id, {
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
        this.produto = result;
        this.toCalculate();
      }
    },    
    toCalculate: function () {
      const quantidadeNum = parseFloat(this.quantity)
      const precoNum = parseFloat(this.produto.price.replace(',', '.'))
      this.total = precoNum * quantidadeNum;
      this.total = this.total.toFixed(2).toString().replace('.', ',')

      this.setValoresSelecionados(this.produto.price, this.total, quantidadeNum);      
    },
  },
  created: function() {
    this.getProdutoById();
  },  
};
</script>
<style>
.detalhe {
  padding: 50px 0px;
}

.detalhe img {
  margin: 20px auto;
  display: block;
}

.detalhe__box-price {
  text-align: right;
  font-weight: bold;
}

.detalhe input {
  width: 50px;
  height: 30px;
  border-radius: 4px;
  padding: 0px 8px;
}

.detalhe button {
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