<script setup lang="ts">
import MobileView from '@/components/MobileView.vue'

import RiTelegramFill from '~icons/ri/telegram-fill'
import RiGithubFill from '~icons/ri/github-fill'

import { openUrl } from '@/utils'
</script>

<template>
  <mobile-view @dblclick="$router.push({ name: 'home' })">
    <div style="flex-grow: 1" />

    <div class="social">
      <ri-telegram-fill
        class="button"
        style="color: #3390ec"
        @click="openUrl('https://t.me/+TK1mucOyvZgzYzA6')"
      />
      <ri-github-fill @click="openUrl('https://github.com/qcp')" class="button" />
    </div>

    <div style="flex-grow: 1" />
  </mobile-view>
</template>

<style scoped>
.social {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5em;

  font-size: 2.5em;
}
.button {
  cursor: pointer;
}
</style>
