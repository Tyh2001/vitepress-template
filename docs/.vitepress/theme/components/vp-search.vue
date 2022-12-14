<template>
  <f-input v-model="value1" type="text" placeholder="请输入...." />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
</script>


<style lang="scss" scoped>
.f-input {
  width: 200px;
}
</style>

