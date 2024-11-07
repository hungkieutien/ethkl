<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <a href="" class="button-link">
    {{ label }}
  </a>
</template>

<style lang="scss">
.button-link {
  .button-link {
    background-color: #fff;
    border: 1px solid #000;
    padding: 0.625rem 1.25rem;
    font-size: 0.75rem;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
  }
}
</style>
