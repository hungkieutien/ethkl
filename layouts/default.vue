<script setup lang="ts">
import HeaderComponent from "~/components/common/HeaderComponent.vue";
import FooterComponent from "~/components/common/FooterComponent.vue";
</script>

<template>
  <div>
    <HeaderComponent />
    <slot />
    <FooterComponent />
  </div>
</template>
