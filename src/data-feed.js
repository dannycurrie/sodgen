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

export default (callback) => {
  const ws = new WebSocket(wsFeedURL);

  ws.onopen = () => {
    ws.send(JSON.stringify(subscribe));
  };

  ws.onmessage = (e) => {
    const value = JSON.parse(e.data);
    callback(value);
  };
};
