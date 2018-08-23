import Api from "../api";

export default class currencyApi extends Api {

  static headers() {
    return {
    };
  }

  static url() {
    return 'https://api.openweathermap.org/data/2.5';
  }

}
