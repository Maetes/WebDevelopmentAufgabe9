import { LitElement, html } from 'lit-element';
import { outletMixin } from 'lit-element-router';

export class Main extends outletMixin(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('app-main', Main);
