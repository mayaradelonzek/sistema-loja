<template>
  <section class="pedidos">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4 class="mt-5">Todos os pedidos</h4>
        </div>        
      </div>
      <div class="row">
        <div v-for="pedido in pedidos" :key="pedido._id" class="col-md-4">
          <PedidoCard 
            :codigo="pedido.produtoId"
            :cpf="pedido.clienteCPF"
            :valorUnitario="pedido.valorUnitario"
            :valorTotal="pedido.ValorTotal"   
            :quantidade="pedido.quantidade"         
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import PedidoCard from "./PedidoCard.vue";

export default {
  name : "Pedidos",
  components : {
    PedidoCard
  },
  data : function(){
    return {          
      pedidos : []
    }
  },
  methods: {
    buscarPedidos: async function () {      
      const result = await fetch(
        "http://localhost:3000/pedidos"
      )
        .then((res) => res.json())
        .then((res) => res)        
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });
       if(!result.error) {
        this.pedidos = result  
        console.log(this.pedidos)       
      } 
    }
  }, 
  created: function() {
    this.buscarPedidos();
  }
}
</script>
<style>
  .produtos{
    padding: 56px 0px;
    background-color: #E2E2E2;
    width: 100%;
    min-height : 800px;
  } 

  .produtos .row{
    align-items: flex-start;
  }

  .produtos h2{
    font-size : 36px;
    color: #ae382b;
    padding: 0;
    margin : 0;
  } 

  .produtos input {
    border-radius : 50px;
    background-color: #f1f1f1;
    border: none;
    width: 70%;
    height: 30px;
    padding: 4px 14px;
    float: right;    
  }
</style>