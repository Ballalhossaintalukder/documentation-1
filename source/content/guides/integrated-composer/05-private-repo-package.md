---
title: Integrated Composer
subtitle: Add a Package from a Private Repository
description: Learn how to add a package from a private repository.
tags: [composer, workflow]
contributors: [ari, edwardangert]
reviewed: "2022-12-13"
showtoc: true
permalink: docs/guides/integrated-composer/private-repo-package
contenttype: [guide]
innav: [false]
categories: [dependencies]
cms: [drupal, wordpress]
audience: [development]
product: [composer]
integration: [--]
---

This section provides information on how to add a package from a private repository using Integrated Composer.

<Alert title="Note" type="info">

Pantheons Secrets Manager is currently in Early Access (EA). You can also use the [Terminus plugin](https://github.com/pantheon-systems/terminus-secrets-manager-plugin) to manage your secrets for private repositories in Integrated Composer builds without committing your credentials to the repository. If you use it, follow the instructions in the Terminus plugin README instead of the steps presented on this page.

</Alert >

## Add a Package from a Private Repository

The steps below outline a method for adding a package from a private GitHub, GitLab, or Bitbucket repository. Refer to the official [Composer documentation](https://getcomposer.org/doc/articles/handling-private-packages.md) for additional information on handling private packages.

A token will be added to your code repository for this procedure. This allows anyone with the token to read and write to private repositories associated with the issuing account. You can explore workarounds to limit the scope of the token access. For example, you can create a new GitHub user and restrict that user's permission to only the private repositories needed for your Composer packages. This ensures your site repository code is not published publicly.

Your repository should contain a `composer.json` file that declares a package name in its name field. If it is a WordPress plugin or a Drupal module, it should specify a type of `wordpress-plugin` or `drupal-module` respectively. For these instructions, we will assume your package name is `mycompany/my-private-repo`.

<TabList>

<Tab title="GitHub" id="github-example" active={true}>

1. Generate a GitHub [Personal Access Tokens](https://github.com/settings/tokens) page. The Github token must have all `repo` permissions selected.

1. Add the private repository to `composer.json`, replacing `<token>` with your newly generated token.

   ```json:title=composer.json
   "repositories": [
        {
            "type": "vcs",
            "url": "https://<token>@github.com/mycompany/my-private-repo"
        }
    ],
    ```

1. Run the command below to require the package (you may specify any needed version constraint in this step):

   ```bash{promptUser: user
   composer require mycompany/my-private-repo
   ```

1. Run the commands below to commit the updated Composer files and add them to your environment only if the above command update works locally.

   ```bash{promptUser: user
   git add composer.json composer.lock
   git commit -m "Adding private package <your-package>"
   git push
   ```

</Tab>

<Tab title="GitLab" id="gitlab-example">

1. [Generate a GitLab token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html). Ensure that `read_repository` scope is selected for the token.

1. Add the private repository to `composer.json`, replacing `<token>` with your newly generated token.
 
    ```json:title=composer.json
    "repositories": [
        {
            "type": "vcs",
            "url": "https://oauth2:<token>@gitlab.com/mycompany/my-private-repo.git"
        }
    ],
    ```

1. Run the command below to require the package (you may specify any needed version constraint in this step):

   ```bash{promptUser: user
   composer require mycompany/my-private-repo
   ```

1. Run the commands below to commit the updated Composer files and add them to your environment only if the above command update works locally.

   ```bash{promptUser: user
   git add composer.json composer.lock
   git commit -m "Adding private package <your-package>"
   git push
   ```

</Tab>

<Tab title="Bitbucket" id="bitbucket-example">

1. [Generate a Bitbucket oauth consumer](https://support.atlassian.com/bitbucket-cloud/docs/use-oauth-on-bitbucket-cloud/). Ensure that Read repositories permission is selected for the consumer. Also, set the consumer as private and put a (dummy) callback URL.

1. Use the consumer key and consumer secret to create an `auth.json` file in your repo root like this:

    ```bash{promptUser: user}
    composer config bitbucket-oauth.bitbucket.org consumer-key consumer-secret
    ```

1. Add your private repository to the `repositories` section of `composer.json`:

    ```json:title=composer.json
    "repositories": [
        {
            "type": "vcs",
            "url": "https://bitbucket.org/vendor/package-name.git"
        }
    ],
    ```

1. Run the command below to require the package (you may specify any needed version constraint in this step):

   ```bash{promptUser: user
   composer require mycompany/my-private-repo
   ```

1. Run the commands below to commit the updated Composer files and add them to your environment only if the above command update works locally.

   ```bash{promptUser: user
   git add auth.json composer.json composer.lock
   git commit -m "Adding private package <your-package>"
   git push
   ```

</Tab>

</TabList>

## More Resources

- [Git on Pantheon Guide](/guides/git)
