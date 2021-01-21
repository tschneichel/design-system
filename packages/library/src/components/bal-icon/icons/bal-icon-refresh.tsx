import { Component, h } from '@stencil/core';

@Component({
  tag: 'bal-icon-refresh',
  shadow: false,
  scoped: true,
})
export class IconRefresh {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g clip-path="url(#clip0)"><path d="M29.788 17.315l-4.574-3.964a.737.737 0 00-1.067 0l-4.421 4.269a.737.737 0 000 1.067c.152.152.305.305.61.305.152 0 .305 0 .457-.153l3.201-3.201c.153 4.421-2.591 8.537-6.86 9.452-3.049.762-6.25-.153-8.537-2.592a.737.737 0 00-1.067 0 .737.737 0 000 1.067c1.982 2.135 4.726 3.202 7.47 3.202.762 0 1.677-.153 2.44-.305 4.877-1.22 8.231-5.793 8.079-10.824l3.049 2.744a.737.737 0 001.067 0c.457-.305.457-.762.152-1.067zm-5.794-9.452c-2.744-3.201-6.86-4.573-10.976-3.506-3.049.762-5.64 2.591-7.165 5.183-1.22 2.134-1.677 4.574-1.524 7.013l-3.05-2.744c-.304-.305-.762-.153-1.067.152-.304.305-.304.762.153 1.067l4.573 3.964c.153.152.305.152.458.152.152 0 .457 0 .457-.152l4.269-4.116a.737.737 0 000-1.067.737.737 0 00-1.067 0l-3.202 3.049c-.305-2.287 0-4.574 1.22-6.403C8.445 8.168 10.73 6.644 13.17 5.88c3.506-.762 7.012.305 9.451 3.05a.737.737 0 001.068 0c.457-.306.61-.763.304-1.068z"/></g><defs><clipPath id="clip0"><path d="M0 0h30v30H0z"/></clipPath></defs></svg>
    );
  }
}
