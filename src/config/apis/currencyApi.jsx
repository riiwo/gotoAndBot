import Api from "../api";

export default class currencyApi extends Api {

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  static url() {
    return 'https://free.currencyconverterapi.com/api/v6';
  }

}
