<template>
  <div class="table-responsive">
    <ValidationProvider
      name="prices"
      rules="required"
      v-slot="validationContext"
    >
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
                  :class="getValidationStateClass(validationContext)"
                  @click="emitData(data.id, data.price)"
                />
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <span class="text-danger mt-2 text-center">
        {{ validationContext.errors[0] }}
      </span>
    </ValidationProvider>
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
    getValidationStateClass(validationContext) {
      if (validationContext.validated && validationContext.failed === false) {
        return 'is-valid';
      }
      if (validationContext.failed) {
        return 'is-invalid';
      }
    },
    emitData(id, price) {
      this.$emit('update:id', id);
      this.$emit('update:price', price);
    },
  },
};
</script>
