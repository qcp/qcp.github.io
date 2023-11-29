import { refAutoReset, tryOnMounted, tryOnUnmounted, useEventListener } from '@vueuse/core'
import { bypassFilter, createFilterWrapper } from '@vueuse/shared'

interface IOptions { threshold: number, delay: number }
export function useShake(options?: Partial<IOptions>) {
  const { threshold = 15, delay = 2000 } = options || {}

  const isShaked = refAutoReset(false, delay)

  tryOnMounted(() => {
    if (
      'requestPermission' in DeviceOrientationEvent
      && typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      DeviceOrientationEvent.requestPermission()
    }
  })

  const onDeviceMotion = createFilterWrapper(bypassFilter, (event: DeviceMotionEvent) => {
    if (event.acceleration) {
      const { x, y, z } = event.acceleration
      if ((x && x > threshold) || (y && y > threshold) || (z && z > threshold)) {
        isShaked.value = true
      }
    }
  })

  const dispose = useEventListener(window, 'devicemotion', onDeviceMotion)

  tryOnUnmounted(() => dispose())

  return isShaked
}
