---
title: Frequently Asked Questions
description: Frequently asked questions about Drupal or WordPress sites on Pantheon.
tags: [support]
permalink: docs/faq
contenttype: [doc]
innav: [true]
categories: [faq]
cms: [drupal, wordpress]
audience: [agency, development]
product: [cdn, localdev, search, siteportfolio, terminus]
integration: [--]
---

This page includes commonly asked questions to give you more information about Pantheon, including what our platform offers and supports.

Review [Platform Considerations](/guides/platform-considerations) for more technical information.

## Getting Started

### Can I put production sites on Pantheon?

Yes. Thousands of live production sites run on Pantheon.

### What versions of Drupal does Pantheon support?

Pantheon supports Drupal 7+ sites. As of February 2016, the Drupal community [no longer supports Drupal 6](https://www.drupal.org/drupal-6-eol). Drupal 6 sites will continue to run on Pantheon, but there will no longer be any updates to fix bugs or security issues.

### What versions of WordPress does Pantheon support?

Pantheon supports the most recent release of WordPress via our [upstream](https://github.com/pantheon-systems/WordPress), which includes platform integration plugins and a pre-configured `wp-config.php`.

### How much does Pantheon cost?

You can develop new sites for free on Pantheon. Billing starts when you're ready to go live and direct traffic to a site. See available plans on our [pricing page](https://pantheon.io/plans/pricing).

### Where are the Pantheon servers located?

In addition to the United States data center, [new sites can be created](/regions) in Australia, Canada, and the European Union (EU). Pantheon's [Global CDN](/guides/global-cdn) serves content from 70+ POPs (points of presence) distributed around the world.

### Can I run other applications on Pantheon?

Only WordPress and Drupal applications are officially supported, but the PHP runtime is complete. Some users have experimented with running applications with custom PHP code.

### Does Pantheon have FTP or shell access?

Pantheon supports toggling between local development mode using `git push` to transfer all code changes, and an on-server development mode, which provides access to the codebase via SFTP.

Direct SSH access is not supported, but you are able to directly interface with mysql, use CLI tools ([Terminus](/terminus), [drush](/guides/drush), [WP-CLI](/faq#does-pantheon-support-wp-cli%3F)), and SFTP files.

### How does Pantheon work with DNS?

Pantheon can handle any domain name you point at it, however DNS configuration is still your responsibility. For more information, refer to [Launch Essentials](/guides/launch/domains).

### What are the differences between the environments?

- Dev has lower TTL on Varnish caching and shows errors to site users.
- Test has the same caching configuration as Live and does not show errors to users. If the Live environment has multiple application containers, Test will have two.
- Live has optimal caching and does not show errors to users, and (depending on the plan) can have multiple application containers for high availability and high performance.

To learn more, refer to [Using the Pantheon Workflow](/pantheon-workflow).

## Developing Sites

### Does Pantheon offer professional services?

Yes, refer to [Professional Services](/guides/professional-services) for more information.

### Can Pantheon run sites on highly available server clusters?

Yes. Pantheon sites run on a highly available clustered infrastructure.

### Can I use my own Git repository (e.g GitHub)?

Yes. While your Pantheon site will only run from code in your Pantheon Git repository, this can be mirrored from an external repository by setting up a [continuous integration workflow](/guides/build-tools), or by syncing your code to [multiple remotes](/guides/git/collaborative-development).

[Partner Agencies](https://pantheon.io/plans/partner-program?docs), [Enterprise](https://pantheon.io/plans/elite?docs), and [EDU](https://pantheon.io/edu?docs) accounts can also set up a [custom upstream](/guides/custom-upstream).

### Does Pantheon support Drupal Multisite?

No. Instead of a traditional Drupal Multisite setup, Pantheon designed a better solution called [Custom Upstreams](/guides/custom-upstream). Pantheon's architecture is designed to provide high performance and a rich feature set for individual Drupal sites. Individual sites can end up in states of configuration that make module or Drupal core updates impossible to do across all the sites of a multisite setup. The codebase also becomes [a single point of failure](https://pantheon.io/resources/drupal-multisite-vs-pantheon-upstreams).

Our solution is to deliver granular resources and powerful code management tools so that users who want to run a large portfolio of sites can do so easily, without running the risks inherent in multisite.

### Does Pantheon support WordPress Multisite?
Yes, Pantheon supports the following use cases of [WordPress Multisite](/guides/multisite):

- Blogs for faculty at a university
- Franchise sites under a parent organization site
- Sections within a media publication

### Does Pantheon support Drush?

Yes. Pantheon comes with Drush pre-integrated with `@alias` files. For more details, refer to [Drupal Drush Command-Line Utility](/guides/drush). You can invoke Drush commands on Pantheon sites using [Terminus](/terminus), the Pantheon CLI.

### Does Pantheon support WP-CLI?

Yes. You can invoke WP-CLI commands on Pantheon sites using [Terminus](/terminus), the Pantheon CLI.

### Does Pantheon support local development?

Yes. [Local development](/guides/local-development) is a great best practice, and Pantheon supports a wide array of local development tools (e.g. MAMP, WAMP, Homebrew, etc).

### How does cron work with Drupal on Pantheon?

The platform will use Drush to run cron on an hourly basis automatically. More fine-tuned cron control is in development. If you need to run cron more frequently, you are free to do so using your own timing system and Drush aliases. For more information, refer to [Cron for Drupal](/drupal-cron).

### How does cron work with WordPress on Pantheon?

WordPress runs its own internal cron-like system as visitors load your site. You can also use external services to schedule and create tasks. For more information, refer to [Cron for WordPress](/guides/wordpress-developer/wordpress-cron).

### Can I host a multilingual site?

Pantheon is home to many polylingual and non-English sites, and hosting a multi-language site on Pantheon requires no additional platform configuration.

For detailed information on how to configure a multilingual Drupal site, refer to the [Multilingual Guide on Drupal.org](https://drupal.org/documentation/multilingual).

Pantheon doesn’t enforce any particular site layout or architecture for multilingual sites, but the blog entry [Working with multi-regional websites](https://webmasters.googleblog.com/2010/03/working-with-multi-regional-websites.html) from The Google Webmaster Central Blog has some fantastic recommendations.

It’s possible to specify a site language given a particular domain or path. In order of preference:

1. ccTLDs (country-code top level domain names)
2. Subdomains with gTLDs eg: de.site.com, fr.site.com, etc.
3. Subdirectories with gTLDs eg: site.com/de/, site.com/fr/, etc.

Each of these configurations is possible with Drupal’s built-in language switching.

You can associate multiple domains with a single site environment. Refer to [Launch Essentials](/guides/launch/domains) for details.

### Can I install a new Panopoly distribution?

Yes. Refer to [Public Distributions](/start-state/#public-distributions) for details.

## Caching and Performance

### Can I use other CDNs with Pantheon?

Yes. We recommend that you ensure that you are enforcing HTTPS only at the outer CDN and assuming HTTPS in the application. Check your CDN for how to redirect all traffic to HTTPS. Pantheon also provides advanced caching addons for WordPress & Drupal.

### What version of Apache Solr does Pantheon Search run?

<Partial file="solr-version.md" />

Refer to our documentation for details about configuring Pantheon Search (Solr) for [WordPress](/guides/wordpress-developer/wordpress-solr) and [Drupal](/guides/solr-drupal/solr-drupal-7).

## Support

### What support is available for Pantheon?

Refer to [Get Support](/guides/support) and explore our [support features](https://pantheon.io/support).

## Security

### Pantheon User Account Login Session Length

<Partial file="dashboard-login-session-length.md" />

### PCI Compliance on Pantheon

Since you can alter your code on Pantheon, you must certify your own applications. PCI compliance for applications deployed on any platform cannot be guaranteed by the platform alone. We recommend architectures designed to work with PCI SAQ-A to minimize both risk and compliance efforts.
