import { onMounted, onBeforeUnmount } from '@vue/composition-api'

export default function(fn, immediate = false) {
  let raf = null

  const update = () => {
    fn()
    raf = window.requestAnimationFrame(update)
  }

  onMounted(() => {
    raf = window.requestAnimationFrame(update)
    if (immediate) {
      fn()
    }
  })

  onBeforeUnmount(() => {
    window.cancelAnimationFrame(update)
  })
}
