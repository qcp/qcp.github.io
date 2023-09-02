<script setup lang="ts">
import NavigationLine from '@/components/NavigationLine.vue'
import MobileView from '@/components/MobileView.vue'

import RiArrowGoBackFill from '~icons/ri/arrow-go-back-fill'
import RiTelegramFill from '~icons/ri/telegram-fill'
import RiGithubFill from '~icons/ri/github-fill'

import '@/assets/color-animation.css'

function openUrl(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <mobile-view>
    <div style="flex-grow: 1;" />

    <h2>I'm Misha</h2>
    <i>awesome software developer</i>

    <div class="social">
      <ri-telegram-fill class="color-animation" style=" --color-to: #3390ec;" @click="openUrl('https://t.me/m_bort')" />
      <ri-github-fill @click="openUrl('https://github.com/qcp')" />
    </div>

    <div style="flex-grow: 1;" />

    <navigation-line>
      <ri-arrow-go-back-fill @click="$router.back()" />
    </navigation-line>
  </mobile-view>
</template>

<style scoped>
.social {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5em;

  font-size: 2.5em;
}
</style>
