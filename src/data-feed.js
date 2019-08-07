import { webSocket } from 'rxjs/webSocket';

const wsFeedURL = 'wss://ws-feed.gdax.com';
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
