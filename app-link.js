import { LitElement, html, css } from 'lit-element';
import { linkMixin } from 'lit-element-router';

export class Link extends linkMixin(LitElement) {
  static get properties() {
    return {
      href: { type: String },
      class: { type: String },
      sideLink: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      a {
        color: #cccccc;
        text-decoration: none;
        background-color: transparent;
      }
      a:hover {
        color: white;
      }
    `;
  }
  constructor() {
    super();
    this.href = '';
  }
  render() {
    return html`
      <a class="${this.class}}" href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
  }
  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define('app-link', Link);
