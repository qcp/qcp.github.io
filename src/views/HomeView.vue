<script setup lang="ts"></script>

<template>
  <main class="main">
    <div class="mobile-view">
      <h1>PR</h1>
      <h3>soon</h3>
      <h1>🚧</h1>
    </div>
  </main>
</template>

<style scoped>
.main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;

  background-color: var(--color-background-soft);
}

@media screen and (orientation: landscape) {
  .mobile-view {
    height: 80vh;
    aspect-ratio: 1/2;
    border: 1px dashed var(--color-border);
    border-radius: 1em;
  }
}
@media screen and (orientation: portrait) {
  .mobile-view {
    height: 100%;
    width: 100%;
  }
}
</style>
