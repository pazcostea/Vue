<template>
  <div>
    <h1>Habrá algo....</h1>
    <Counter :initValue="200" :maxValue="205" :minValue="199"/>
    <Counter/>
    <Counter/>
    <Counter/>
  </div>
</template>
<script>
import Counter from '../components/Counter.vue';

export default {
  data() {
    return {
      nombre: 'Hola mundo',
      numero: 0,
    };
  },
  components: {
    Counter,
  },
};
</script>
