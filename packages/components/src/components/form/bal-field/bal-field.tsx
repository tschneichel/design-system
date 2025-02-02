import { Component, h, Host, Prop, Element, Watch } from '@stencil/core'

@Component({
  tag: 'bal-field',
})
export class Field {
  @Element() element!: HTMLElement

  /**
   * If `true` the component gets a invalid style.
   */
  @Prop() invalid = false

  /**
   * If `true` the field loses opacity
   */
  @Prop() disabled = false

  /**
   * If `true` the field can be used on blue background.
   */
  @Prop() inverted = false

  /**
   * If `true` a loading spinner is visible at the end of the input
   */
  @Prop() loading = false

  private formControlElement = ['bal-field-control']
  private inputElements = ['bal-input', 'bal-textarea', 'bal-select', 'bal-datepicker']
  private formElements = [...this.formControlElement, 'bal-field-label', 'bal-field-message']

  @Watch('invalid')
  invalidHandler() {
    this.notifyComponents<{ invalid: boolean }>([...this.inputElements, ...this.formElements], input => {
      input.invalid = this.invalid
    })
  }

  @Watch('disabled')
  @Watch('loading')
  @Watch('inverted')
  restHandler() {
    this.notifyComponents<{ disabled: boolean; loading: boolean; inverted: boolean }>(
      [...this.inputElements, ...this.formControlElement],
      input => {
        input.disabled = this.disabled
        input.loading = this.loading
        input.inverted = this.inverted
      },
    )
  }

  private notifyComponents<T>(selectors: string[], callback: (component: T) => void) {
    const components = this.element.querySelectorAll<Element>(selectors.join(', '))
    components.forEach(c => callback(c as any))
  }

  componentWillLoad() {
    this.invalidHandler()
    this.restHandler()
  }

  render() {
    return (
      <Host
        class={{
          'is-invalid': this.invalid,
        }}
      >
        <div
          class={{
            'form': true,
            'is-inverted': this.inverted,
            'is-disabled': this.disabled,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    )
  }
}
