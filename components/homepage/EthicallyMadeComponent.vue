<script setup lang="ts">
import Button from "~/components/common/Button.vue";
import { onMounted, ref } from "vue";

const leftImage = ref<HTMLImageElement | null>(null);
const rightImage = ref<HTMLImageElement | null>(null);
const contentBox = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  if (leftImage.value) observer.observe(leftImage.value);
  if (rightImage.value) observer.observe(rightImage.value);
  if (contentBox.value) observer.observe(contentBox.value);

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <section class="ethically-made">
    <div ref="contentBox" class="ethically-made__content">
      <div class="ethically-made__title">Ethically Made</div>
      <div class="ethically-made__paragraph">
        I'm a paragraph. Click here to add your own text and edit me. I’m a
        great place for you to tell a story and let your users know a little
        more about you.
      </div>
      <Button label="Learn More" />
    </div>
    <div
      class="ethically-made__image-wrapper ethically-made__image-wrapper--left"
    >
      <img
        ref="leftImage"
        src="/images/homepage/ethically-made/hero_image_bedsheet_2850w.jpeg"
        alt="Ethically Made Left Image"
        class="ethically-made__image ethically-made__image--left"
      >
    </div>
    <div
      class="ethically-made__image-wrapper ethically-made__image-wrapper--right"
    >
      <img
        ref="rightImage"
        src="/images/homepage/ethically-made/hero_image_cotton_2850w.jpeg"
        alt="Ethically Made Right Image"
        class="ethically-made__image ethically-made__image--right"
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
.ethically-made {
  display: grid;
  height: auto;
  width: 100%;
  max-width: 75rem;
  min-height: auto;
  grid-template-rows: repeat(2, min-content) 1fr;
  grid-template-columns: 100%;
  margin: 5rem auto 0;
}

.ethically-made__content {
  width: 100%;
  max-width: 18.75rem;
  height: 100%;
  background-color: #f7f2ee;
  text-align: center;
  padding: 6.25rem 3.125rem 0.625rem 3.125rem;
  position: relative;
  z-index: 1;
  grid-area: 1 / 1 / 2 / 2;
  opacity: 0;
  justify-self: center;
  transform: scale(0.75) translate(0, 6.25rem);
  transition:
    opacity 1s ease,
    transform 1s ease;
}

.ethically-made__title {
  font-size: 2.5rem;
  margin-bottom: 3.125rem;
}

.ethically-made__paragraph {
  margin-bottom: 4.375rem;
  font-size: 0.9375rem;
  line-height: 1.875rem;
  font-weight: 200;
}

.ethically-made__image-wrapper--left {
  position: relative;
  margin: 14rem 0 0.625rem calc((100% - 61.25rem) * 0.5);
  left: 0.625rem;
  grid-area: 1 / 1 / 4 / 2;
}

.ethically-made__image--left {
  width: 25.3125rem;
  height: 31.5625rem;
  opacity: 0;
  transform: scale(0.75) translate(0, 1.25rem);
  transition:
    opacity 1s ease,
    transform 1s ease;
}

.ethically-made__image-wrapper--right {
  position: relative;
  margin: 0 0 2.5625rem calc((100% - 61.25rem) * 0.5);
  left: 25rem;
  grid-area: 2 / 1 / 3 / 2;
}

.ethically-made__image--right {
  width: 35.625rem;
  height: 27.5625rem;
  opacity: 0;
  transform: scale(0.75) translate(0, 1.25rem);
  transition:
    opacity 1s ease,
    transform 1s ease;
}

.visible {
  opacity: 1;
  transform: scale(1) translate(0, 0);
}
</style>
