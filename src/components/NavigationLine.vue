<template>
  <div class="navigation">
    <slot></slot>
  </div>
</template>

<style scoped>
.navigation {
  width: 100%;
  font-size: 2em;
  display: flex;
  justify-content: space-around;
}

.navigation > :deep(*:hover) {
  cursor: pointer;
  scale: 1.1;
}
</style>
