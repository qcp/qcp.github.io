<script setup lang="ts">
import NavigationLine from '@/components/NavigationLine.vue'
import MobileView from '@/components/MobileView.vue'

import RiArrowGoBackFill from '~icons/ri/arrow-go-back-fill'
import RiDiscordFill from '~icons/ri/discord-fill'
import RiTelegramFill from '~icons/ri/telegram-fill'
import RiGithubFill from '~icons/ri/github-fill'
</script>

<template>
  <mobile-view>
    <div style="flex-grow: 1;" />

    <h2>I'm Misha</h2>
    <i>software developer</i>

    <!-- 
    <navigation-line>
      <ri-discord-fill />
      <ri-telegram-fill />
      <ri-github-fill />
    </navigation-line> 
    -->

    <div style="flex-grow: 1;" />

    <navigation-line>
      <ri-arrow-go-back-fill @click="$router.back()" />
    </navigation-line>
  </mobile-view>
</template>

<style scoped></style>
