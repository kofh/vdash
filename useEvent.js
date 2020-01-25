import { onMounted, onBeforeUnmount } from '@vue/composition-api'

export default function(target, event, handler, options = false, immediate = false) {
  onMounted(() => {
    target.addEventListener(event, handler, options)
    if(immediate) {
      handler()
    }
  })

  onBeforeUnmount(() => {
    target.removeEventListener(event, handler, options)
  })
}