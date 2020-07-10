import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class Cubic extends LitElement {
  static get properties() {
    return {
      clicks: { type: Number },
      high: { type: Number },
      classChange: { type: String }
    };
  }
  static get styles() {
    return css`
      @keyframes fadeRed {
        from {
          background: #ffffff;
        }
        to {
          background: red;
        }
      }
      .fadeIt {
        animation: fadeRed 1s ease-in-out 0s;
      }
    `;
  }
  constructor() {
    super();
    this.clicks = 0;
    this.high = 0;
    this.chaclassChange = '';
  }

  render() {
    return html`
      <input
        type="text"
        id="start"
        placeholder="start"
        @keyup="${this.setLow}"
      />
      <input
        type="text"
        id="high"
        placeholder="high"
        @keyup="${this.setHigh}"
      />
      <button type="button" @click="${this.up}">Count up</button>
      <p id="flash" class=${this.classChange}>
        Clicks: <a id="clicks">${this.clicks}</a>
      </p>
    `;
  }

  up(e) {
    if (this.high !== 0 && this.clicks >= this.high) {
      this.classChange = 'fadeIt';
      setTimeout(() => {
        this.classChange = '';
      }, 1000);
    } else {
      this.clicks += 1;
    }
  }
  setLow(e) {
    if (e.target.value) {
      this.clicks = parseInt(e.target.value);
    }
  }
  setHigh(e) {
    this.high = parseInt(e.target.value);
  }
}
customElements.define('cubic-bezier', Cubic);
