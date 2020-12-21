<template>
  <div class="table-responsive">
    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(data, index) in prices">
          <tr :key="index">
            <td>{{ data.name }}</td>
            <td>
              <input
                :id="data.id"
                type="radio"
                name="price"
                :value="data.price"
                @click="emitData(data.id, data.price)"
              />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    prices: {
      type: Array,
      required: true,
    },
  },
  methods: {
    emitData(id, price) {
      this.$emit('update:id', id);
      this.$emit('update:price', price);
    },
  },
};
</script>
