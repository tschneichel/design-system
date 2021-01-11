import { Component, h, Host, Prop, Element } from '@stencil/core'

@Component({
  tag: 'bal-field-control',
  shadow: false,
  scoped: true,
})
export class FieldControl {
  @Element() element: HTMLElement

  /**
   * Baloise icon for the right side of the input
   */
  @Prop() iconRight: string = ''

  /**
   * Baloise icon for the left side of the input
   */
  @Prop() iconLeft: string = ''

  /**
   * If `true` a loading spinner is visible at the end of the input
   */
  @Prop() loading: boolean = false

  get buildIconLeftTemplate() {
    if (this.iconLeft) {
      return <bal-icon name={this.iconLeft} isLeft={true} size="medium" />
    }
    return ''
  }

  get buildIconRightTemplate() {
    if (this.iconRight) {
      return <bal-icon name={this.iconRight} isRight={true} size="medium" />
    }
    return ''
  }

  render() {
    return (
      <Host
        class={{
          'control': true,
          'has-icons-left': !!this.iconLeft,
          'has-icons-right': !!this.iconRight || this.loading,
          'is-loading': this.loading,
        }}>
        <slot></slot>
        {this.buildIconLeftTemplate}
        {this.buildIconRightTemplate}
      </Host>
    )
  }
}
