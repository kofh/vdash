import useEvent from './useEvent'

export default function({ event, handler, options, immediate }) {
  useEvent({
    target: () => window,
    event,
    handler,
    options,
    immediate
  })
}
