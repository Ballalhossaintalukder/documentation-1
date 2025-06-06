---
title: Incident Management
subtitle: Notifications
description: Page four of our guide on Pagerduty integration with New Relic for incident management.
contenttype: [guide]
innav: [false]
categories: [track]
cms: [--]
audience: [development]
product: [newrelic]
integration: [--]
tags: [logs, measure, newrelic, teams, webops]
type: guide
permalink: docs/guides/pagerduty/notify/
editpath: pagerduty/04-notify.md
reviewed: "2020-08-19"
---
In this lesson, we'll configure PagerDuty as a notification channel for our New Relic&reg; monitor, so that failures immediately open a new incident and notify on-calls per your team's schedule and escalation policy.

## Create New Service in PagerDuty

Now we'll add a Service, which is any application, component, or team you wish to open incidents against:

1. In your PagerDuty account navigate to  **Configuration** > **Services**, then click **Add New Service**.

1. Enter a name. We suggest using the domain name (e.g., `example.com`) so it's easy to identify services for all your projects over time.

1. Select **New Relic** from the **Integration Type** dropdown menu.

1. Enter a name for the integration, such as "example.com".

1. Click **Add Service**.

1. Copy the integration key to your clipboard.

## New Relic&reg; Notification Channels

Now we'll hookup our PagerDuty service as a notification channel for our alert policy in New Relic&reg;:

1. Navigate to the **<Icon icon="wrench" /> Live** environment in your Site Dashboard, and click **<Icon icon="eye" /> New Relic** then **<Icon icon="externalLink" /> Go to New Relic**.

1. Go to **Alerts & AI** from the top menu, then **Notification Channels** from the right.

1. Select **New notification channel**.

1. Select **PagerDuty** from the dropdown menu, enter a service name and paste the integration key copied in the previous section:

  ![New Relic notification channel](../../../images/pagerduty/new-relic-notification-channels.png)

1. Select the **Alert policies** tab, and **Add alert policies**.

1. Select the policy created in the [monitoring](/guides/pagerduty/monitor) part of this guide, and **Save changes**.

## More Resources

- [Monitor and Improve Site Performance with New Relic&reg;](/guides/new-relic/monitor-new-relic)