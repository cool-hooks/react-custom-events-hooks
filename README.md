# [react-custom-events](https://github.com/cool-hooks/react-custom-events)

[![NPM version](http://img.shields.io/npm/v/react-custom-events?style=flat-square)](https://www.npmjs.com/package/react-custom-events)
[![NPM downloads](http://img.shields.io/npm/dm/react-custom-events?style=flat-square)](https://www.npmjs.com/package/react-custom-events)
[![NPM license](https://img.shields.io/npm/l/react-custom-events?style=flat-square)](https://www.npmjs.com/package/react-custom-events)
[![Codecov](https://img.shields.io/codecov/c/github/cool-hooks/react-custom-events?style=flat-square)](https://codecov.io/gh/cool-hooks/react-custom-events)
[![Travis](https://img.shields.io/travis/cool-hooks/react-custom-events/master?style=flat-square)](https://travis-ci.org/cool-hooks/react-custom-events)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-custom-events?style=flat-square)](https://bundlephobia.com/result?p=react-custom-events)

## About

### Alternatives

- [react-custom-events](https://github.com/HarshRohila/react-custom-events) by [Harsh Rohila](https://github.com/HarshRohila)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-custom-events
```

Or Yarn:

```sh
$ yarn add react-custom-events
```

## Getting Started

**• Import hook in React application file:**

```js
import { useCustomEvent } from 'react-custom-events';
```

#### Returned Values

#### Example

```js
// App.js

// emit + listen
const App = () => {
  const [message, setMessage] = useState('');

  const callMyEvent = useCustomEvent({
    eventName: 'myAwesomeCustomEvent',
    onSignal: (e) => setMessage(e.detail.message),
  });

  return (
    <>
      <p>{message}</p>

      <button onClick={() => callMyEvent({ message: 'Hello World!' })}>
        Say Hello!
      </button>
    </>
  );
};

// only emit
const App = () => {
  const callMyEvent = useCustomEvent({
    eventName: 'myAwesomeCustomEvent',
  });

  return (
    <>
      <button onClick={() => callMyEvent({ message: 'Hello World!' })}>
        Say Hello!
      </button>
    </>
  );
};

// only listen
const App = () => {
  const [message, setMessage] = useState('');

  useCustomEvent({
    eventName: 'myAwesomeCustomEvent',
    onSignal: (e) => setMessage(e.detail.message),
  });

  return (
    <>
      <p>{message}</p>
    </>
  );
};
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
