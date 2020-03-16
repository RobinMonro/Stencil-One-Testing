import { Component, Element, h, JSX } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppMain {
  @Element() public element: HTMLElement;

  public render(): JSX.Element {
    // return '';
    return (
      <div class='main'>
        <test-date />
      </div>
    );
  }
}
