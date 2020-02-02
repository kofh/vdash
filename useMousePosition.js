import { reactive } from '@vue/composition-api'
import useWindowEvent from './useWindowEvent'
import useAnimationFrame from './useAnimationFrame'

export default function({ dampening = 0 } = {}) {
  const pos = reactive({
    x: 0,
    y: 0
  })

  useWindowEvent({
    event: 'mousemove',
    handler: (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
    }
  })

  if (dampening !== 0) {
    const coefficient = 1 - Math.max(dampening, 0.001)
    const dampenedPos = reactive({
      x: 0,
      y: 0
    })

    useAnimationFrame(() => {
      const deltaX = pos.x - dampenedPos.x
      dampenedPos.x =
        Math.abs(deltaX) < 0.0001 ? pos.x : dampenedPos.x + deltaX * coefficient
      const deltaY = pos.y - dampenedPos.y
      dampenedPos.y =
        Math.abs(deltaY) < 0.0001 ? pos.y : dampenedPos.y + deltaY * coefficient
    })

    return dampenedPos
  } else {
    return pos
  }
}
