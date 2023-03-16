<template>
  <div v-for="x in radio_data" :key="x" class="labels">
    <label>
      <input :name="radio_name" type="checkbox" :value="x" v-model="checkedNames">
      <p>{{ x }}</p>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioBoxChain",
  props: ['radio_data', 'param_x', 'radio_name'],
  emits: ['update:param_x'],
  data() {
    return {
      checkedNames: [],
    }
  },
  watch: {
    checkedNames(val) {
      this.$emit('update:param_x', val);
    },
  }
}
</script>

<style scoped>
.labels {
  display: inline-block;
}

.labels label {
  display: block;
  vertical-align: middle;
  margin: 10% 10% 10%;
  text-align: center;
}

@media (max-width: 1217px) {
  * {
    font-size: 14px;
  }
}

@media (max-width: 877px) {
  * {
    font-size: 13px;
  }
}
</style>