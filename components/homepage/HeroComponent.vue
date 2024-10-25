<script setup lang="ts">
import Button from "~/components/common/Button.vue";

const heroSizes =
  "(max-width: 600px) 570px, (max-width: 900px) 1140px, (max-width: 1200px) 1710px, (max-width: 1800px) 2280px, 2850px";

const imagePaths = {
  left: {
    webp: [
      "/images/hero/hero_image_left_570w.webp 570w",
      "/images/hero/hero_image_left_1140w.webp 1140w",
      "/images/hero/hero_image_left_1710w.webp 1710w",
      "/images/hero/hero_image_left_2280w.webp 2280w",
      "/images/hero/hero_image_left_2850w.webp 2850w",
    ].join(",\n"),
    jpeg: [
      "/images/hero/hero_image_left_570w.jpeg 570w",
      "/images/hero/hero_image_left_1140w.jpeg 1140w",
      "/images/hero/hero_image_left_1710w.jpeg 1710w",
      "/images/hero/hero_image_left_2280w.jpeg 2280w",
      "/images/hero/hero_image_left_2850w.jpeg 2850w",
    ].join(",\n"),
  },
  right: {
    webp: [
      "/images/hero/hero_image_right_570w.webp 570w",
      "/images/hero/hero_image_right_1140w.webp 1140w",
      "/images/hero/hero_image_right_1710w.webp 1710w",
      "/images/hero/hero_image_right_2280w.webp 2280w",
      "/images/hero/hero_image_right_2850w.webp 2850w",
    ].join(",\n"),
    jpeg: [
      "/images/hero/hero_image_right_570w.jpeg 570w",
      "/images/hero/hero_image_right_1140w.jpeg 1140w",
      "/images/hero/hero_image_right_1710w.jpeg 1710w",
      "/images/hero/hero_image_right_2280w.jpeg 2280w",
      "/images/hero/hero_image_right_2850w.jpeg 2850w",
    ].join(",\n"),
  },
};
</script>

<template>
  <section class="hero">
    <div class="hero__picture-container">
      <picture class="hero__picture">
        <source
          type="image/webp"
          :sizes="heroSizes"
          :srcset="imagePaths.left.webp"
        >
        <img
          alt="Hero Image Left"
          loading="lazy"
          decoding="async"
          :sizes="heroSizes"
          :srcset="imagePaths.left.jpeg"
          src="/images/hero/hero_image_left_2850w.jpeg"
          class="hero__image"
        >
      </picture>
      <div class="hero__button-wrapper">
        <Button label="shop women" class="hero__button" />
      </div>
    </div>
    <div class="hero__picture-container">
      <picture class="hero__picture">
        <source
          type="image/webp"
          :sizes="heroSizes"
          :srcset="imagePaths.right.webp"
        >
        <img
          alt="Hero Image Right"
          loading="lazy"
          decoding="async"
          :sizes="heroSizes"
          :srcset="imagePaths.right.jpeg"
          src="/images/hero/hero_image_right_2850w.jpeg"
          class="hero__image"
        >
      </picture>
      <div class="hero__button-wrapper">
        <Button label="shop men" class="hero__button" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  display: flex;
  max-width: 100%;
  overflow: hidden;
}

.hero__picture-container {
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
}

.hero__picture {
  flex: 0 1 50%;
}

.hero__image {
  width: 100%;
  height: auto;
}

.hero__button-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 15%;
  position: absolute;
}
</style>