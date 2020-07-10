import {} from '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import { LitElement, html, css } from 'lit-element';
import { routerMixin } from 'lit-element-router';
import { connect } from 'pwa-helpers';

import { store } from './store';

import { switchPage, loadPage } from './actions/actions';

import './app-link';
import './app-main';

class Navigator extends connect(store)(routerMixin(LitElement)) {
  createRenderRoot() {
    return this;
  }

  static get routes() {
    return [
      {
        name: 'html',
        pattern: 'html',
        data: { title: 'Home' }
      },
      {
        name: 'css',
        pattern: 'css'
      },
      {
        name: 'javascript',
        pattern: 'javascript'
      },
      {
        name: 'IETF',
        pattern: 'IETF'
      },
      {
        name: 'W3C',
        pattern: 'W3C'
      },
      {
        name: 'SGML',
        pattern: 'SGML'
      },
      {
        name: 'flexbox',
        pattern: 'flexbox'
      },
      {
        name: 'grid',
        pattern: 'grid'
      },
      {
        name: 'preprocessor',
        pattern: 'preprocessor'
      },
      {
        name: 'node-js',
        pattern: 'node-js'
      },
      {
        name: 'Functions',
        pattern: 'Functions'
      },
      {
        name: 'Objects',
        pattern: 'Objects'
      },
      {
        name: 'not-found',
        pattern: '*'
      }
    ];
  }

  static get properties() {
    return {
      main: { Type: String },
      selOne: { Type: String },
      selTwo: { Type: String },
      selThree: { Type: String },
      linkMain: { Type: String },
      linkOne: { Type: String },
      linkTwo: { Type: String },
      linkThree: { Type: String },
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
      content: { type: Object }
    };
  }

  static get styles() {
    return css`
      html,
      body {
        height: 100%;
      }
      #sticky-footer {
        flex-shrink: none;
      }
      .page-content {
        flex: 1 0 auto;
      }
    `;
  }

  /*
  async loading() {
    if (this.content['html'] === undefined) {
      this.content = await (await fetch('content.json')).json();
      this.main = await this.content['html']['content'];
      
      this.linkMain = await this.content['html']['linkText'][0];
      this.linkOne = await this.content['html']['linkText'][1];
      this.linkTwo = await this.content['html']['linkText'][2];
      this.linkThree = await this.content['html']['linkText'][3];


      this.selOne = await this.content['html']['linkContent'][0];
      this.selTwo = await this.content['html']['linkContent'][1];
      this.selThree = await this.content['html']['linkContent'][2];
      console.log('update');
      super.performUpdate();
    }
  }
  */

  /*
  constructor() {
    super();
    this.content = {};
    this.data = {};
    this.route = '';
    this.params = {};
    this.query = {};
    this.loading();
    //    this.addEventListener('DOMContentLoaded', this.loadContent(this));
  }
  */

  switchPage(page) {
    store.dispatch(switchPage(page));
  }

  loadPage(initial) {
    store.dispatch(loadPage(initial));
  }

  async stateChanged(state) {
    let stated = await state;
    this.content = stated.content;
    this.data = stated.data;
    this.route = stated.route;
    this.params = stated.params;
    this.query = stated.query;
    this.content = stated.content;
    this.main = stated.main;
    this.linkMain = stated.linkMain;
    this.linkOne = stated.linkOne;
    this.linkTwo = stated.linkTwo;
    this.linkThree = stated.linkThree;
    this.selOne = stated.selOne;
    this.selTwo = stated.selTwo;
    this.selThree = stated.selThree;
    console.log(this.route);
    this._requestUpdate();
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
    if (route === 'html' || route === 'css' || route === 'javascript')
      this.switchPage(route, params, query, data);
    /*
    if (this.route !== 'not-found' && this.route !== undefined) {
      if (
        this.route === 'html' ||
        this.route === 'css' ||
        this.route === 'javascript'
      ) {
        this.main = this.content[this.route]['content'];
        this.linkMain = this.content[this.route]['linkText'][0];
        this.linkOne = this.content[this.route]['linkText'][1];
        this.linkTwo = this.content[this.route]['linkText'][2];
        this.linkThree = this.content[this.route]['linkText'][3];
        this.selOne = this.content[this.route]['linkContent'][0];
        this.selTwo = this.content[this.route]['linkContent'][1];
        this.selThree = this.content[this.route]['linkContent'][2];
      }
    }*/
    //this.requestUpdate();
  }

  render() {
    return html`
      <div class="d-flex flex-column">
        <!-- NAVBAR - Start-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#" onClick="">Navigator App</a>
          <div class="w-100 text-right">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse text-right" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <app-link class="nav-link" href="/html">HTML</app-link>
              </li>
              <li class="nav-item">
                <app-link class="nav-link" href="/css">css</app-link>
              </li>
              <li class="nav-item">
                <app-link class="nav-link" href="/javascript"
                  >javascript</app-link
                >
              </li>
            </ul>
          </div>
        </nav>
        <!-- Navbar - END -->
        <div class="leftMenu">
          <div class="row">
            <div class="col-2">
              <div
                class="bg-dark nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <app-link class="nav-link" href="/${this.linkMain}"
                  >${this.linkMain}</app-link
                >
                <app-link class="nav-link" href="/${this.linkOne}"
                  >${this.linkOne}</app-link
                >
                <app-link class="nav-link" href="/${this.linkTwo}"
                  >${this.linkTwo}</app-link
                >
                <app-link class="nav-link" href="/${this.linkThree}"
                  >${this.linkThree}</app-link
                >
              </div>
            </div>
            <div class="col-9 page-content container">
              <div class="tab-content" id="v-pills-tabContent">
                <app-main active-route=${this.route}>
                  <p route="html">
                    ${this.main}
                  </p>
                  <p route="css">
                    ${this.main}
                  </p>
                  <p route="javascript">
                    ${this.main}
                  </p>
                  <p route="${this.linkOne}">${this.selOne}</p>
                  <p route="${this.linkTwo}">${this.selTwo}</p>
                  <p route="${this.linkThree}">${this.selThree}</p>
                </app-main>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small
            >All content is taken from
            <a href="https://developer.mozilla.org/de/">MDN web docs</a>
          </small>
        </div>
      </footer>
    `;
  }

  getContent(which) {
    this.main = this.data[which]['content'];
    this.selOne = this.data[which]['linkContent'][0];
    this.selTwo = this.data[which]['linkContent'][1];
    this.selThree = this.data[which]['linkContent'][2];
    this.linkMain = this.data[which]['linkText'][0];
    this.linkOne = this.data[which]['linkText'][1];
    this.linkTwo = this.data[which]['linkText'][2];
    this.linkThree = this.data[which]['linkText'][3];
    let i = 0;
    let linkTexa = '';
    for (let x in this.data[which]['linkText']) {
      switch (i) {
        case 0:
          linkTexa = 'linkOne';
          break;
        case 1:
          linkTexa = 'linkTwo';
          break;
        case 2:
          linkTexa = 'linkThree';
          break;
        case 3:
          break;
        default:
          linkTexa = '';
      }
      if (i === 3) {
        break;
      }
      let pattern = new RegExp(this.data[which]['linkText'][i + 1], 'gi');
      let txt = this.main;
      let rep = txt.replace(
        pattern,
        '<a href="#" onClick="' +
          linkTexa +
          '.click()">' +
          this.data[which]['linkText'][i + 1] +
          '</a>'
      );
      this.main = rep;
      i++;
    }
  }
}
customElements.define('navi-elem', Navigator);
