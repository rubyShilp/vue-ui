/**
 * Hyphenate a camelCase string.
 */
function filterHeaderElements (slots) {
  return slots ? slots.filter(vnode => !!vnode.tag) : []
}
export function slotsToHeaderProps (slots) {
  return filterHeaderElements(slots).map(vnode =>{
    return vnode.componentOptions
  })
}