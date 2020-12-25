# [react-custom-events-hooks](https://github.com/cool-hooks/react-custom-events-hooks)

[![NPM version](https://img.shields.io/npm/v/react-custom-events-hooks?style=flat-square)](https://www.npmjs.com/package/react-custom-events-hooks)
[![NPM downloads](https://img.shields.io/npm/dm/react-custom-events-hooks?style=flat-square)](https://www.npmjs.com/package/react-custom-events-hooks)
[![NPM license](https://img.shields.io/npm/l/react-custom-events-hooks?style=flat-square)](https://www.npmjs.com/package/react-custom-events-hooks)
[![Codecov](https://img.shields.io/codecov/c/github/cool-hooks/react-custom-events-hooks?style=flat-square)](https://codecov.io/gh/cool-hooks/react-custom-events-hooks)
[![Travis](https://img.shields.io/travis/cool-hooks/react-custom-events-hooks/master?style=flat-square)](https://travis-ci.org/cool-hooks/react-custom-events-hooks)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-custom-events-hooks?style=flat-square)](https://bundlephobia.com/result?p=react-custom-events-hooks)

## About

Create custom events. Fast, simple, fun!

### Alternatives

- [react-custom-events-hooks](https://github.com/HarshRohila/react-custom-events-hooks) by [Harsh Rohila](https://github.com/HarshRohila)
- [@use-it/event-listener](https://github.com/donavon/use-event-listener) by [Donavon West](https://github.com/donavon)
- [react-event-hooks](https://github.com/Eldorean/react-events-hooks) by [Silvester Wilson Wennekers](https://github.com/Eldorean)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-custom-events-hooks
```

Or Yarn:

```sh
$ yarn add react-custom-events-hooks
```

## Getting Started

**• Import hooks in React application file:**

```js
import {
  useCustomEvent,
  useEmitter,
  useListener,
} from 'react-custom-events-hooks';
```

#### Example

```js
import React, { useState } from 'react';
import {
  useCustomEvent,
  useEmitter,
  useListener,
} from 'react-custom-events-hooks';

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
