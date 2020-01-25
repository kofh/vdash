import useEvent from './useEvent'

export default function(event, handler, options = false, immediate = false) {
  useEvent(window, event, handler, options, immediate)
}