import { webSocket } from 'rxjs/webSocket';

// gdax was retired - this is the current Coinbase Exchange market data feed
const wsFeedURL = 'wss://ws-feed.exchange.coinbase.com';
const subscribe = {
  type: 'subscribe',
  channels: [
    {
      name: 'ticker',
      product_ids: ['BTC-USD'],
    },
  ],
};

export default () => {
  const subject = webSocket(wsFeedURL);
  subject.next(subscribe);
  return subject;
};
