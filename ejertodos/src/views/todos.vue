<template>
  <div>
    <h1>{{nombre}}</h1>
    <BloqueTexto v-for="t of todos" :Key="t.titulo"/>
  </div>
</template>
<script>
import BloqueTexto from '@/components/BloqueTexto.vue';

export default {
  data() {
    return {
      nombre: 'Estoy en el ToDo.vue',
    };
  },
  components: {
    BloqueTexto,
  },
};
</script>
