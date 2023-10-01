<script setup lang="ts">
import FundsView from './components/fund-viewer/FundsView.vue';
import Header from './components/shared/Header.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="flex flex-col justify-center">
    <Header />
    <div class="web__body px-10">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: calc(100vw - (100vw - 100%));
  }
}
</style>
