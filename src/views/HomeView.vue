<script setup lang="ts">
import MobileView from '@/components/MobileView.vue'

import RiBearSmileLine from '~icons/ri/bear-smile-line'
import RiSkull2Line from '~icons/ri/skull-2-line'
import RiRobot2Line from '~icons/ri/robot-2-line'
import RiGhostLine from '~icons/ri/ghost-line'
import RiAliensLine from '~icons/ri/aliens-line'
import RiMickeyLine from '~icons/ri/mickey-line'

import { useCycleList, useIntervalFn, useSwipe, useVibrate } from '@vueuse/core'

import { useShake } from '@/composables/useShake'
import { ref, watch } from 'vue'
import { openUrl } from '@/utils'

const isShake = useShake({ threshold: 20 })
const { vibrate } = useVibrate({ pattern: [500, 100, 300, 100, 200, 50, 200] })
watch(isShake, (isShake) => isShake && vibrate())

const el = ref<EventTarget>()
const { direction } = useSwipe(el)
watch(direction, () => {
  switch (direction.value) {
    case 'up':
      return openUrl('https://youtu.be/dQw4w9WgXcQ')
    case 'left':
    case 'right':
      return nextLogo()
  }
})

const { state: logo, next: nextLogo } = useCycleList([
  RiBearSmileLine,
  RiSkull2Line,
  RiRobot2Line,
  RiGhostLine,
  RiAliensLine,
  RiMickeyLine
])

const {
  state: text,
  index: textIndex,
  next: nextText
} = useCycleList([
  'reserved for future kek',
  'stay tuned',
  'or swipe',
  'or not',
  'or shake',
  'or close',
  'or dbl tap',
  'but wait',
  '...'
])
useIntervalFn(nextText, 2500)
</script>

<template>
  <mobile-view class="view" ref="el" @dblclick="$router.push({ name: 'about' })">
    <div style="flex-grow: 1" />

    <component :is="logo" class="bear" />

    <h1>GOTCHA</h1>

    <transition name="slide-up" mode="out-in">
      <span :key="textIndex">
        {{ text }}
      </span>
    </transition>

    <div style="flex-grow: 1" />
  </mobile-view>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(2em);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-2em);
}

.view {
}

.bear {
  font-size: 2em;
  --rotation: 10deg;
  rotate: var(--rotation);
  transform-origin: bottom;
  animation: bear-nods 5s infinite both;
}
@keyframes bear-nods {
  0% {
    rotate: var(--rotation);
  }
  50% {
    rotate: calc(-1 * var(--rotation));
  }
}
</style>
