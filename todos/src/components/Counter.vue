<template>
  <div>
    <h3>{{numero}} init value {{initValue}}</h3>
    <button @click="decrementar"
    :disabled="decrementIsDisable"
    :class="{'disabled': decrementIsDisable}">
    Decrementar
    </button>
    <input v-model="numero"
    type="number"
    :max="maxValue" :min="minValue"
    :class="{esVerde, esNaranja, esRojo}"/>
    <button @click="incrementar" :disabled="incrementIsDisable">Incrementar</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numero: 0,
    };
  },
  props: {
    initValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 10,
    },
    minValue: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    incrementar() {
      this.numero = +this.numero + 1;
    },
    decrementar() {
      this.numero = +this.numero - 1;
    },
  },
  computed: {
    incrementIsDisable() {
      return this.numero >= this.maxValue;
    },
    decrementIsDisable() {
      return this.numero <= this.minValue;
    },
    porcentajeCompletado() {
      return 100 * (this.numero - this.min) / (this.max - this.min);
    },
    esVerde() {
      return this.porcentajeCompletado <= 33;
    },
    esNaranja() {
      return this.porcentajeCompletado > 33 && this.completedPercentage <= 66;
    },
    esRojo() {
      return this.porcentajeCompletado > 66;
    },
  },
  watch: {
    numero(val, oldValue) {
      console.log(`Ha cambiado el valor de ${val} ha cambiado de ${oldValue}`);
      if (val > this.maxValue) {
        this.numero = this.maxValue;
      }
      if (val < this.minValue) {
        this.numero = this.minValue;
      }     
    },
  },
  created() {
    this.numero = this.initValue;
    console.log('He sido creado', this.initValue);
  },
};
</script>

<style>
  .disabled{
    background: blue;
    border: none;
  }
   .esVerde{
    background: green;
    border: none;
  }
  .esNaranja{
    background: orange;
    border: none;
  }
  .esRojo{
    background: red;
    border: none;
  }
</style>
