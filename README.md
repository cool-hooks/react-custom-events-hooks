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

**• Import hooks in React application file:**

```js
import { useCustomEvent, useEmitter, useListener } from 'react-custom-events';
```

#### Returned Values

#### Example

```js
import React from 'react';
import { useCustomEvent, useEmitter, useListener } from 'react-custom-events';

/* ------ Emit + Listen Example ------ */

const EmitListenExample = () => {
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

/* ------ Only Emit Example 1 ------ */

const EmitExample = () => {
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

/* ------ Only Emit Example 2 ------ */

const EmitExample = () => {
  const callMyEvent = useEmitter('myAwesomeCustomEvent');

  return (
    <>
      <button onClick={() => callMyEvent({ message: 'Hello World!' })}>
        Say Hello!
      </button>
    </>
  );
};

/* ------ Only Listen Example 1 ------ */

const ListenExample = () => {
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

/* ------ Only Listen Example 2 ------ */

const ListenExample = () => {
  const [message, setMessage] = useState('');

  useListener('myAwesomeCustomEvent', (e) => setMessage(e.detail.message));

  return (
    <>
      <p>{message}</p>
    </>
  );
};
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
