# SilverStripe Coding Standards

Coding standards for your SilverStripe project

## Install

Via Composer

``` bash
$ composer require --dev silverstripe/coding-standards
```

## Usage

### Direct usage with composer scripts:

Add scripts to your composer.json file
 
```json

    "scripts": {
        "silverstripe-standards": [
            "@standard-cs"
        ],
        "standard-cs": "phpcs app/src app/tests --standard=vendor/silverstripe/coding-standards/definitions/phpcs.xml --extensions=php --encoding=utf-8",
        "standard-cs-fix": "phpcbf app/src app/tests --standard=vendor/silverstripe/coding-standards/definitions/phpcs.xml --extensions=php --encoding=utf-8"
    },

```

then run:
```bash
composer silverstripe-standards
```

to fix your Standards violations you can run
```bash
composer standard-cs-fix
```

### .editorconfig

you can use prepared `.editorconfig` file (see https://editorconfig.org/)

```bash
cp vendor/silverstripe/coding-standards/skeletons/.editorconfig .editorconfig 
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

## Security

If you discover any security related issues, please email jakub.dolba@silverstripe.com instead of using the issue tracker.

## Credits

- [Jakub Dolba][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/jakubdolba/silverstripe-coding-standards.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/jakubdolba/silverstripe-coding-standards/master.svg?style=flat-square
[ico-scrutinizer]: https://img.shields.io/scrutinizer/coverage/g/jakubdolba/silverstripe-coding-standards.svg?style=flat-square
[ico-code-quality]: https://img.shields.io/scrutinizer/g/jakubdolba/silverstripe-coding-standards.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/jakubdolba/silverstripe-coding-standards.svg?style=flat-square

[link-packagist]: https://packagist.org/packages/jakubdolba/silverstripe-coding-standards
[link-travis]: https://travis-ci.org/jakubdolba/silverstripe-coding-standards
[link-scrutinizer]: https://scrutinizer-ci.com/g/jakubdolba/silverstripe-coding-standards/code-structure
[link-code-quality]: https://scrutinizer-ci.com/g/jakubdolba/silverstripe-coding-standards
[link-downloads]: https://packagist.org/packages/jakubdolba/silverstripe-coding-standards
[link-author]: https://github.com/JakubDolba
[link-contributors]: ../../contributors
