# React Chat

This is an example React + Redux chat application, allowing users to list and send messages using a custom API.

## Notes
* The app is responsive, where screens wider than 460px have wider messages. Screens narrower than 290px were not taken into the consideration.
* Browser support was focused and tested on latest Chrome, Firefox, Safari, iOS Safari.
* Configuration regarding token, author, limit and messages since can be changed [here](src/config.js).

## Known Issues
* Input element fixed position carret bug. [More info](https://hackernoon.com/how-to-fix-the-ios-11-input-element-in-fixed-modals-bug-aaf66c7ba3f8)

## Usage

The app can be started by typing the following in the command line:

```
npm install
npm start
```

For production, it can be built by using the following command:

```
npm run build
```

Running tests can be achieved by using the following command:

```
npm run test
```

Running linter can be achieved by using the following command:

```
npm run test:lint
```
