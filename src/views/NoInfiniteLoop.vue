<template>
  <div id="app">
    <form @submit.prevent="validateBeforeSubmit">
      <PricesTable
        :prices="prices"
        @update:id="form.id = $event"
        @update:price="form.price = $event"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  components: {
    PricesTable: () => import('../components/PricesTable.vue'),
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
      console.log('result');
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
