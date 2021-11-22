import { Ref } from 'vue'

/**
 * WebComponent Helpers
 */

interface WebComponent<T> {
  $el: T
}

export const element = <T>(elementReference: Ref<any>): T => {
  const component: WebComponent<T> = elementReference.value
  return component.$el
}
