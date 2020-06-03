# SilverStripe ESLint Shareable Config Base

An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) for Javascript based projects

>Contains the basic ESLint shareable config, for projects not using Vue.

## Installation

Use the package manager [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/) to install it.

### Peer Dependencies

Peer dependencies need to be installed in order to make it work properly

```javascript
"eslint": "^6.0.0"
"eslint-plugin-import": "^2.0.0"
```

After that you should install the plugin without any problem

```bash
yarn add -D @silverstripeltd/eslint-config-base
```

## Usage

Once the `@silverstripeltd/eslint-config-base` package is installed, you can use it by specifying `@silverstripeltd/eslint-config-base` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@silverstripeltd/eslint-config-base",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contributors

- [View Contributors](https://github.com/the-unicorns/eslint-shareable-config/graphs/contributors)

## License

[MIT](https://choosealicense.com/licenses/mit/)
