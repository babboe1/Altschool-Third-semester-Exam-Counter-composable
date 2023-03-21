<template>
   <div class="counter">
      <h1>Counter</h1>
      <p>{{ counter }}</p>
      <div>
         <button @click="increment">+</button>
         <button @click="decrement">-</button>
         <button @click="reset">Reset</button>
      </div>
      <div>
         <input type="number" v-model="newValue" @change="setValue" />
      </div>
   </div>
</template>

<script>
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
