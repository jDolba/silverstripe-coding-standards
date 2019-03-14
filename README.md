# SilverStripe Coding Standards

Set of definition and coding standards rules for your SilverStripe project

## Install

Via Composer

``` bash
$ composer require --dev silverstripe/coding-standards dev-master
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

## Credits

- [Jakub Dolba][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/jakubdolba/silverstripe-coding-standards.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/jakubdolba/silverstripe-coding-standards.svg?style=flat-square

[link-packagist]: https://packagist.org/packages/jakubdolba/silverstripe-coding-standards
[link-downloads]: https://packagist.org/packages/jakubdolba/silverstripe-coding-standards
[link-author]: https://github.com/JakubDolba
[link-contributors]: ../../contributors
