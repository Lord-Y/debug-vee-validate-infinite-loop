<template>
  <div id="app">
    <ValidationObserver v-slot="{ passes }" ref="form">
      <form @submit.prevent="passes(validateBeforeSubmit)">
        <PricesTableInfiniteLoop
          :prices="prices"
          @update:id="form.id = $event"
          @update:price="form.price = $event"
        />
        <button type="submit">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'InfiniteLoop',
  components: {
    PricesTableInfiniteLoop: () =>
      import('../components/PricesTableInfiniteLoop.vue'),
  },
  data() {
    return {
      prices: [
        {
          id: 1,
          name: 'Oranges',
          price: 5,
        },
        {
          id: 2,
          name: 'Pinnapples',
          price: 20,
        },
        {
          id: 3,
          name: 'Apple',
          price: 10,
        },
      ],
      form: {
        id: '',
        price: '',
      },
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$refs.form.validate().then(result => {
        console.log('result', result);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
