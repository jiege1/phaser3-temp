

export default class Ticker {

  tickers = [];

  constructor(props) {
    this.props = props;
  }

  add(func) {
    if (typeof func !== 'function') {
      console.error('Ticker just add function!');
      return;
    }
    this.tickers.push(func);
  }

  remove(func) {
    this.tickers = this.tickers.filter(item => item !== func);
  }

  trigger() {
    this.tickers.forEach(item => {
      item();
    });
  }

}