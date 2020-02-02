import { reactive } from '@vue/composition-api'
import useWindowEvent from './useWindowEvent'

export default function() {
  const dimensions = reactive({
    width: 0,
    height: 0
  })

  useWindowEvent({
    event: 'resize',
    handler: () => {
      dimensions.width = window.innerWidth
      dimensions.height = window.innerHeight
    },
    immediate: true
  })

  return dimensions
}
