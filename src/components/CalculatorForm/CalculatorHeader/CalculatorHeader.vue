<script setup></script>

<template>
  <section class="header">
    <h3 class="title">Mortgage Calculator</h3>
    <button class="clear-all-btn">Clear All</button>
  </section>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}

.title {
  font-size: 1.5rem;
  color: var(--slate-900);
}

.clear-all-btn {
  border: none;
  background-color: transparent;
  text-decoration: underline;
  font-family: "PlusJakartaSans";
  color: var(--slate-500);
  font-size: 0.9rem;
  cursor: pointer;
}
</style>
