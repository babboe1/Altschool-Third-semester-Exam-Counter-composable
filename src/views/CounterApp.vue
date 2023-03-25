<template>
   <div class="counter">
      <h1>Counter App</h1>
      <p>{{ counter }}</p>
      <div>
         <input type="number" v-model="newValue" @change="setValue" />
      </div>
      <div class="increment">
         <button @click="increment">+</button>
         <button @click="decrement">-</button>
      </div>
      <div class="reset"><button @click="reset">Reset</button></div>
   </div>
</template>

<script>
import '../assets/styles/counter.css';
import { mapState, mapActions } from 'vuex';

export default {
   computed: {
      ...mapState({
         counter: (state) => state.counter.value,
      }),

      newValue: {
         get() {
            return this.counter;
         },
         set(value) {
            this.$store.dispatch('counter/setValue', Number(value));
         },
      },
   },

   methods: {
      ...mapActions({
         increment: 'counter/increment',
         decrement: 'counter/decrement',
         reset: 'counter/reset',
      }),

      setValue() {
         this.$store.dispatch('counter/setValue', Number(this.newValue));
      },
   },
};
</script>
