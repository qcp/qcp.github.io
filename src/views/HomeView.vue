<script setup lang="ts">
import MobileView from '@/components/MobileView.vue'
import NavigationLine from '@/components/NavigationLine.vue'

import RiGameFill from '~icons/ri/game-fill'
import RiMegaphoneFill from '~icons/ri/megaphone-fill'
import RiAliensFill from '~icons/ri/aliens-fill'

import '@/assets/color-animation.css'
</script>

<template>
  <mobile-view>
    <div style="flex-grow: 1" />
    <div class="packman">
      <ri-game-fill class="color-animation" style="--color-to: yellow;" />
    </div>
    <h1>GOTCHA</h1>
    <div style="flex-grow: 1" />

    <navigation-line>
      <ri-megaphone-fill @click="$router.push('fun')" />
      <ri-aliens-fill @click="$router.push('about')" />
    </navigation-line>
  </mobile-view>
</template>

<style scoped>
.packman {
  font-size: 2em;
  padding: 2px;
  animation: packman-move 15s infinite;
}

@keyframes packman-move {
  0% {
    translate: 0em 0em;
  }

  19% {
    rotate: 0deg;
  }

  20% {
    translate: 6ch 0em;
  }

  22%,
  38% {
    rotate: 90deg;
  }

  40% {
    translate: 6ch 4em;
  }

  42%,
  58% {
    rotate: 180deg;
  }

  60% {
    translate: -6ch 4em;
  }

  62%,
  78% {
    rotate: 270deg;
  }

  80% {
    translate: -6ch 0em;
  }

  82%,
  98% {
    rotate: 0deg;
  }

  100% {
    translate: 0ch 0em;
  }
}
</style>
