<template>
  <div>
    <h3>{{titulo}}</h3>
    <input v-model="texto"/>
    <button @click="anyadir">Añadir</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titulo: 'Estoy en el bloque de texto.vue',
      texto: 'Introducir texto',
    };
  },
  methods: {
    anyadir() {
      console.log('Añadido');
      this.texto = 'Añadido';
    },
  },
};
</script>
