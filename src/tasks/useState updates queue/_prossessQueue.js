export function getFinalState(baseState, queue) {
  return queue.reduce((prev, current) =>
    typeof current == 'function' ? current(prev) : current
    , baseState)
}