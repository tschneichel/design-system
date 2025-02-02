import { Component, Host, h, Prop } from '@stencil/core'
import { ColorTypes } from '../../../types/color.types'

@Component({
  tag: 'bal-notification',
})
export class Notification {
  /**
   * Defines the color of the element
   */
  @Prop() color: '' | ColorTypes = ''

  render() {
    return (
      <Host>
        <div class={`notification p-4 is-${this.color}`}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
