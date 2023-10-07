<template>
  <main class="main">
    <div class="mobile-view">
      <slot></slot>
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
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em;

  background-color: color-mix(in oklab, var(--color-background-soft), transparent 25%);
}

@media screen and (orientation: landscape) and (not (pointer: coarse)) {
  .mobile-view {
    height: 80vh;
    width: unset;
    aspect-ratio: 1/2;
    border: 1px dashed var(--color-border);
    border-radius: 1em;
  }
}
</style>
