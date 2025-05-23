---
title: "Plans"
subtitle: Site Hosting Plans and Addons
description: Learn how to purchase and manage site plans and addons.
tags: [plans]
contributors: [wordsmither]
showtoc: true
permalink: docs/guides/account-mgmt/plans/site-plans
editpath: docs/guides/account-mgmt/plans/07-site-plans.md
reviewed: "2025-05-01"
contenttype: [guide]
innav: [false]
categories: [plans]
cms: [--]
audience: [sysadmin]
product: [--]
integration: [--]
---

This section covers purchasing a new plan.

## Before You Begin

- Elite sites cannot manage plans from the Site Dashboard. [Contact Sales](https://pantheon.io/contact-us) or reach out to your dedicated Client Sales Executive for details.

- The permission to manage a site's plan is granted only to the roles of **Site Owner** / **Organization Administrator**. Other roles do not have access to change the site plan as described on this page. Pantheon for EDU+ allows Organization Administrators to manage site plans for sites within their organization. When a site is associated with an EDU+ Organization, billing is managed through a contract with Pantheon, and only Organization Administrators can confirm a site plan change. For details, see [Role-Based Permissions & Change Management](/guides/account-mgmt/workspace-sites-teams/teams/#site-level-roles-and-permissions).

- If you need to assume site and billing ownership, the current Site Owner must [transfer ownership to you directly](/guides/account-mgmt/workspace-sites-teams/sites#change-site-ownership).

In addition, consider the following changes to feature access _before_ upgrading or downgrading the site's plan. Certain scenarios require code changes in order to safely change the site plan.

### Disable Addons When Downgrading to Basic Plan

[Object Caching](/object-cache) and [Pantheon Search](/solr) are not available for Basic sites. These features must be disabled in order to select Basic as the new site plan when upgrading or downgrading plans.

To remove these addons:

<TabList>

<Tab title="WordPress" id="wp-id" active={true}>

#### Object Cache

To safely disable Redis, refer to the following how-to guide:

- [Remove Object Cache](/object-cache/remove)

#### Pantheon Search

<Partial file="remove-addons/wp-solr.md" />

</Tab>

<Tab title="Drupal" id="d7-id">

#### Object Cache

To safely disable Redis, refer to the following how-to guide:

- [Remove Object Cache](/object-cache/remove)

#### Pantheon Search

<Partial file="remove-addons/d7-solr.md" />

</Tab>

</TabList>

### Upgrades

Site plan upgrades will change your site's resources and access to features immediately. The associated card will be charged a prorated amount for the remainder of the current billing period.

If your site benefits from [Preferred Pricing](https://pantheon.io/plans/agency-preferred-pricing?docs), contact the site's Supporting Workspace for assistance in order to retain your special pricing rate.

### Downgrades

Site plan downgrades will change your site's resources and access to features immediately. Beginning on the next billing cycle, the associated card will be charged for the new site plan. No prorated refunds or credits will be issued for site downgrades.

If your site benefits from [Preferred Pricing](https://pantheon.io/plans/agency-preferred-pricing?docs), contact your Supporting Workspace for assistance, in order to retain your special pricing rate.

[Custom domains](/guides/domains) are not available to Sandbox sites. Downgrading to a Sandbox site will **automatically delete** existing custom domains across all environments of the site. If you decide to return to a paid plan in the future, you will need to add the domains again.

Downgrading to a Sandbox site will disable automatic backups. You will still be able to create backups manually. Refer to the [Backups Tool](/guides/backups) for more information.

## Purchase a Plan

To purchase a plan for a site:

<Alert title="Note" type="info">

Pantheon offers savings for sites purchased with annual billing. Refer to [Pantheon Annual Billing](/guides/account-mgmt/plans/pricing) for more information.

</Alert>

Please note that only Site owners can update plans. There are several places within the Pantheon Dashboard you can upgrade your site plan:

1.  [Go to the Site Dashboard](/guides/account-mgmt/workspace-sites-teams/sites#site-dashboard), and click **Upgrade** next to the site's name.
2.  Within your personal workspace, navigate to Settings>Subscriptions. Click the 'Actions' dropdown and choose, **Change Site Plan**
3.  If you are in a workspace, you can navigate to **Settings** > **Billing**. Scroll to see **Supported Sites** table. Within that table, if you are the site owner, you'll be able to click the **Site Plan** column to upgrade or downgrade your site.


From the site upgrade and downgrade page, complete the following steps:

1. Click the **Select** button under the [plan you choose](https://pantheon.io/plans/pricing/). Select the billing frequency: [**Pay Annually**](/guides/account-mgmt/plans/pricing) or **Pay Monthly** at the top of the page.

  - If you've chosen a **Performance Plan**, choose the size and click **Choose Performance**.

  - If you've chosen a **Basic Plan**, click **Continue**.

  - If you've chosen **Custom**, please fill out the contact field to be contacted by a customer support agent.

2. Click **+ Add New Card** and enter the credit card information, then click **Add Card** to save the card information. If you already have a card saved, it should be available in this section.

3. Click **Continue** and review your information carefully, then click **Place Your Order** to confirm your purchase.

   - [Contact Support](/guides/support/contact-support) if you need any help.

As the site owner, you’ll receive an email confirming the change to the site. You’ll receive an updated invoice after the site billing is processed.

## Enable Add-ons

You can enable the following add-ons:

- [Pantheon Search](/solr) is a Solr-based system for indexing and searching site content. Pantheon provides Apache Solr v3.6 as a service for most plans including the Sandbox site plan.
 - [Object Cache](/object-cache) is a Redis-based open-source, networked, in-memory, key-value data store that can be used as a drop-in caching backend for your Drupal or WordPress website.


### Add-ons and the Basic Plan

Pantheon Search and Object Cache are available to Sandbox plans for testing. Pantheon Search and Object Cache are available to Performance Small plans and higher for production sites. If either feature is enabled on your site, the feature will stop functioning and may cause errors if the site is moved to a Basic plan.

## Sandbox Sites

Sandbox sites are useful for trying out the Pantheon platform, creating sandboxes for development, or for starting a new client project. Pantheon allocates two Sandbox sites for all user accounts. If you've reached your limit of Sandbox sites, delete an unused site, take a site live, or join an organization. If you're building sites for third parties, join the [Pantheon Partner Program](https://pantheon.io/plans/partner-program?docs) for more Sandbox sites, Multidev environments, and other features. If you're at an educational institution, sign up for [Pantheon for EDU](https://pantheon.io/edu?docs).

To downgrade to Sandbox, see [Cancel Current Plan](/guides/account-mgmt/plans/site-plans#cancel-your-plan).

### Interstitial Warning Pages
In order to inform visitors they are accessing a non-production sandbox site, and to discourage abuse of sandbox sites (spam, phishing, or other malicious purposes) - Pantheon displays an interstitial warning page for all newly created sandbox sites. 

![screenshot of warning message](../../../../images/interstitial-warning-message.png)

After clicking through this page, a cookie is set in the browser to prevent the interstitial page from showing again for the same visitor on a given environment for 24 hours.

These pages show in all environments (Multidev, Dev, Test, and Live) for [_sandbox_ sites that have not upgraded to a paid plan](/guides/account-mgmt/plans/resources).
Once a site is on a paid plan, this message will no longer show for any environment.

#### Bypassing the interstitial page with an HTTP header during automated testing

If you are using a automated testing tool that requires access to the sandbox site, you can add an HTTP header of `Deterrence-Bypass` to your request to bypass the interstitial page.

For example, if you are testing a site with Playwright, you can add the following to your test script:

```javascript
await page.setExtraHTTPHeaders({
  'Deterrence-Bypass': 'true',
});
```

## Change Your Plan

Only Site Administrators or Site Owners can change site plans.

<Alert title="Warning" type="danger">

Before making any changes, please review [Before You Make Changes](#before-you-begin).

</Alert>

To change your plan:

<TabList>

<Tab title="Edu Sites" id="edu" active={true}>

1. [Go to the Site Dashboard](/guides/account-mgmt/workspace-sites-teams/sites#site-dashboard), click **Upgrade** next to the site's name. Otherwise, click the current plan tag next to the site's name.

1. Click **Select** below the plan you choose, and select the Plan Size if it's a Performance plan.

1. Review the new plan on the **Confirm Purchase** page, and click **Place Your Order**.

Because billing is handled by the organization, the plan change is immediate, and you'll be returned to the Site Dashboard.

If the site plan isn't shown on the Dashboard immediately, refresh the page or click the **Workflows** button for status.

</Tab>

<Tab title="All Other Sites" id="other">

1. [Go to the Site Dashboard](/guides/account-mgmt/workspace-sites-teams/sites#site-dashboard).

1. For Sandbox sites, click **Upgrade** next to the site's name. Otherwise, click the current plan tag next to the site's name.

</Tab>

</TabList>

## Cancel Your Plan

<Alert title="Warning" type="danger">

Before making any changes, please review [Before You Make Changes](#before-you-begin).

</Alert>

1. [Go to the Site Dashboard](/guides/account-mgmt/workspace-sites-teams/sites#site-dashboard).

1. Select the current plan (to the right of the site name).

1. Click the **Downgrade to free** link to cancel the current plan.

1. Check **Yes, cancel my plan**, then click **Continue**.

1. Make sure the change details are correct, then click **Submit**.

1. Remove the existing card as a payment method for the site. Refer to [Billing in the Site Dashboard](/guides/account-mgmt/billing/methods#delete-a-site-specific-payment-method) for more information.

Optionally, you can remove the Sandbox site after downgrading. Refer to [Deleting a Site on Pantheon](/guides/account-mgmt/workspace-sites-teams/sites#delete-sites) for more information.

<Alert title="Note" type="info" >

For any site plan downgrades, no refunds or prorated credits will be issued as per our [Terms of Service](https://pantheon.pactsafe.io/legal.html#tos).

</Alert>
