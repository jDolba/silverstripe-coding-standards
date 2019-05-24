# SilverStripe Coding Standards

Set of definition and coding standards rules for your SilverStripe project

## Install

Via Composer

```bash
composer require --dev jdolba/silverstripe-coding-standards ^0.1
```

## Usage

### Example of usage with composer scripts:

* Add scripts to your composer.json file 
```json
    "scripts": {
        "silverstripe-standards": [
            "@php-lint",
            "@phpcs"
        ],
        "php-lint": "parallel-lint app/src app/tests",
        "phpcs": "phpcs app/src app/tests --standard=vendor/jdolba/silverstripe-coding-standards/definitions/php/phpcs-ss4.xml --extensions=php --encoding=utf-8",
        "phpcbf": "phpcbf app/src app/tests --standard=vendor/jdolba/silverstripe-coding-standards/definitions/php/phpcs-ss4.xml --extensions=php --encoding=utf-8",
        "phpcs-fix": "@phpcbf"
    },
```

* then run:
```bash
composer silverstripe-standards
```

* to fix your Standards violations you can run
```bash
composer phpcs-fix
# or
composer phpcbf

```

#### Custom rules

you can also customize rules by adding `phpcs.xml` file directly to you project root:
```bash
cp vendor/jdolba/silverstripe-coding-standards/skeletons/phpcs.xml phpcs.xml
```
don't forgot to change paths in composer scripts (`--standard=phpcs.xml`)

### .editorconfig

you can use prepared `.editorconfig` file (see https://editorconfig.org/)

```bash
cp vendor/jdolba/silverstripe-coding-standards/skeletons/.editorconfig .editorconfig 
```

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
