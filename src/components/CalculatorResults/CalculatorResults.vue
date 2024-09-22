<script setup>
import NoResults from "./NoResults/NoResults.vue";
</script>

<template>
  <section class="results-container">
    <slot>
      <NoResults />
    </slot>
  </section>
</template>

<style scoped>
.results-container {
  background-color: var(--slate-900);
  border-radius: 0rem 1rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
}

@media screen and (max-width: 400px) {
  .results-container {
    border-radius: 0;
    padding: 1rem;
  }
}
</style>
