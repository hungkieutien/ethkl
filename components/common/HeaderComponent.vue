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
  padding: 0.3125rem 1.25rem 0.3125rem 1.25rem;
}

.navbar__links {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  list-style: none;
  padding-left: 0;
  text-transform: uppercase;
}

.navbar__link-url {
  font-size: 0.875rem;
  margin-right: 1.25rem;
  cursor: pointer;

  &:hover {
    color: #707070;
  }
}

.navbar__logo-url {
  display: flex;
  flex: 1;
  justify-content: center;
  text-decoration: none;
}

.navbar__logo {
  align-items: center;
  font-size: 1.875rem;
  font-weight: 500;
  color: #333;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
}

.navbar__icons {
  display: flex;
  gap: 0.625rem;
  flex: 1;
  justify-content: flex-end;
}
</style>
