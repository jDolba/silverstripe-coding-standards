# SilverStripe ESLint Shareable Config

An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) for Javascript based projects

## Installation

Use the package manager [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/) to install it.

This project includes 2 packages:

- `@silverstripeltd/eslint-config-base`: Contains the basic ESLint shareable config, for projects not using React.
- `@silverstripeltd/eslint-config-react`: Extends the base configuration and includes some React rules. For projects using React.

### Peer Dependencies

Check each peer dependency for each package:

- [@silverstripeltd/eslint-config-base](./packages/eslint-config-base/README.md)
- [@silverstripeltd/eslint-config-vue](./packages/eslint-config-vue/README.md)

```bash
yarn add -D @silverstripeltd/eslint-config-base
yarn add -D @silverstripeltd/eslint-config-vue
```

## Usage

Once the `@silverstripeltd/eslint-config-*` package is installed, you can use it by specifying `@silverstripeltd/eslint-config-*` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

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

[MIT](LICENSE)
