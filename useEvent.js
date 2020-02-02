import { onMounted, onBeforeUnmount } from '@vue/composition-api'

export default function({
  target,
  event,
  handler,
  options = { capture: false, passive: true },
  immediate = false
}) {
  onMounted(() => {
    const _target = typeof target === 'function' ? target() : target
    _target.addEventListener(event, handler, options)
    if (immediate) {
      handler()
    }
  })
  onBeforeUnmount(() => {
    const _target = typeof target === 'function' ? target() : target
    _target.removeEventListener(event, handler, options)
  })
}
