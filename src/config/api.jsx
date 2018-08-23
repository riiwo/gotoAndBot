import _ from 'lodash';

export default class Api {

  static url() {
    throw "Url not set";
  }

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json'
    };
  }

  static get(route, params) {
    params = params && _.pickBy(params, _.identity)
    let urlParameters = params && Object.keys(params).map(i => `${i}=${params[i]}`).join('&')
    return this.xhr(params ? `${ route }?${ urlParameters }` : route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb) {
    const url = `${ this.url() }${ route }`;
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = this.headers();
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (!resp.ok) throw resp;
      return json;
    });
  }

}
