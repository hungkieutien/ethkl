<script setup lang="ts"></script>

<template>
  <header>
    <nav class="navbar">
      <ul class="navbar__links">
        <li><NuxtLink class="navbar__link-url" to="">Damen</NuxtLink></li>
        <li><NuxtLink class="navbar__link-url" to="">Herren</NuxtLink></li>
      </ul>
      <NuxtLink class="navbar__logo-url" to="/">
        <div class="navbar__logo">Ethkl</div>
      </NuxtLink>
      <div class="navbar__icons">
        <NuxtLink to="">
          <Icon name="mdi-account" />
        </NuxtLink>
        <NuxtLink to="">
          <Icon name="mdi-cart" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  &__links {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    list-style: none;
    padding-left: 0;
    text-transform: uppercase;
  }

  &__link-url {
    font-size: 14px;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      color: #707070;
    }
  }

  &__logo-url {
    display: flex;
    flex: 1;
    justify-content: center;
    text-decoration: none;
  }

  &__logo {
    align-items: center;
    font-size: 30px;
    font-weight: 500;
    color: #333;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
  }

  &__icons {
    display: flex;
    gap: 10px;
    flex: 1;
    justify-content: flex-end;
  }
}
</style>
