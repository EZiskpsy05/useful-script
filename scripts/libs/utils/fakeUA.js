/* ua information disguise */
export function fakeUA(ua) {
  // Object.defineProperty(navigator, 'userAgent', {
  //   value: ua,
  //   writable: false,
  //   configurable: false,
  //   enumerable: true
  // })

  const desc = Object.getOwnPropertyDescriptor(
    Navigator.prototype,
    "userAgent"
  );
  Object.defineProperty(Navigator.prototype, "userAgent", {
    ...desc,
    get: function () {
      return ua;
    },
  });
}

/* ua information source: https://developers.whatismybrowser.com */
export const userAgentMap = {
  android: {
    chrome:
      "Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36",
    firefox:
      "Mozilla/5.0 (Android 7.0; Mobile; rv:57.0) Gecko/57.0 Firefox/57.0",
  },
  iPhone: {
    safari:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/111.0.0.0 Mobile/15E148 Safari/604.1",
    chrome:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.121 Mobile/15E148 Safari/605.1",
  },
  iPad: {
    safari:
      "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1",
    chrome:
      "Mozilla/5.0 (iPad; CPU OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.155 Mobile/15E148 Safari/605.1",
  },
  mac: {
    safari:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15",
    chrome:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Firefox) Chrome/74.0.3729.157 Safari/537.36",
  },
};
