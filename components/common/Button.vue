<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <a :href="link" class="button-link">
    {{ label }}
  </a>
</template>

<style lang="scss">
.button-link {
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px 20px;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
