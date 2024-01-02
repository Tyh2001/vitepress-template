<script lang="ts" setup>
  import { ref } from 'vue'
  import { FMessage } from 'fighting-design'

  const value = ref('')

  const onEnter = (): void => {
    FMessage({ type: 'success', message: '开始搜索' })
  }
</script>

<template>
  <f-input
    v-model="value"
    type="text"
    placeholder="请输入...."
    :on-enter="onEnter"
  />
</template>

<style lang="scss" scoped>
  .f-input {
    width: 200px;
    margin-left: 20px;
  }
</style>
