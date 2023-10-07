<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
body {
  --col1: color-mix(in oklab, var(--color-background-mute), transparent 75%);
  --col2: color-mix(in oklab, var(--color-background-soft), transparent 75%);
  background-image: linear-gradient(var(--col1) 2px, transparent 2px),
    linear-gradient(90deg, var(--col1) 2px, transparent 2px),
    linear-gradient(var(--col2) 1px, transparent 1px),
    linear-gradient(90deg, var(--col2) 1px, transparent 1px);
  background-size:
    100px 100px,
    100px 100px,
    20px 20px,
    20px 20px;
  background-position:
    -2px -2px,
    -2px -2px,
    -1px -1px,
    -1px -1px;
}
</style>
