---
title: PHP on Pantheon
subtitle: Introduction
description: Learn more about using PHP on Pantheon.
contenttype: [guide]
innav: [true]
categories: [php]
cms: [--]
audience: [development]
product: [--]
integration: [--]
tags: [webops, workflow]
contributors: [whitneymeredith]
showtoc: true
permalink: docs/guides/php
---

PHP is a scripting language that facilitates server-side web development. The PHP code in your Pantheon account is executed at runtime whenever a request is received from the web server the same way it is on other platforms.

## Supported PHP Versions

Pantheon supports the following PHP versions:

Click the links below to display complete PHP information for each version, including details of supported PHP extensions.

| Version                                          | Available   | Recommended |
| ------------------------------------------------ | :---------: | :---------: |
| [8.4](https://v84-php-info.pantheonsite.io/)   | <span style="color:green">✔</span>         | <span style="color:green">✔</span> Drupal 10.4+, 11.1+ <br /><br />❌ WordPress          |
| [8.3](https://v83-php-info.pantheonsite.io/)   | <span style="color:green">✔</span>         | <span style="color:green">✔</span>           |
| [8.2](https://v82-php-info.pantheonsite.io/)   | <span style="color:green">✔</span>         | <span style="color:green">✔</span>           |
| [8.1](https://v81-php-info.pantheonsite.io/)   | <span style="color:green">✔</span>         | ❌           |
| [8.0](https://v80-php-info.pantheonsite.io/) | <span style="color:green">✔</span>         | ❌          |
| [7.4](https://v74-php-info.pantheonsite.io/)     | <span style="color:green">✔</span>         | ❌          |
| [7.3](https://v73-php-info.pantheonsite.io/)     | <span style="color:green">✔</span>         | ❌           |
| [7.2](https://v72-php-info.pantheonsite.io/)     | <span style="color:green">✔</span>         | ❌           |

While sites previously configured with unlisted versions of PHP may continue running those versions, a site with a listed PHP version cannot be configured to an older, unlisted PHP version.

## Drush Compatibility

Refer to [Managing Drush Versions on Pantheon](/guides/drush/drush-versions) for detailed compatibility information.

## Terminus Compatibility

Refer to [Version Updates](/terminus/updates#php-version-compatibility-matrix) for detailed compatibility information.

## More Resources

- [PHP Slow Log](/guides/php/php-slow-log)

- [PHP Errors](/guides/php/php-errors)

- [Securely Working with phpinfo](/guides/secure-development/phpinfo)
