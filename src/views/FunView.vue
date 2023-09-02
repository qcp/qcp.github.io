<script setup lang="ts">
import MobileView from '@/components/MobileView.vue'
import NavigationLine from '@/components/NavigationLine.vue'

import RiGameFill from '~icons/ri/game-fill'
import RiArrowGoBackFill from '~icons/ri/arrow-go-back-fill'
</script>

<template>
  <mobile-view>
    <div style="flex-grow: 1" />
    <h2>Some fun here soon</h2>
    <h1>
      <ri-game-fill style="color: yellow;" />
    </h1>
    <div style="flex-grow: 1" />
    <navigation-line>
      <ri-arrow-go-back-fill @click="$router.back()" />
    </navigation-line>
  </mobile-view>
</template>

<style scoped></style>
