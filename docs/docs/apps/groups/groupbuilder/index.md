---
tags: [Role HR, Role Comms, Koksmat CLI ]
status: draft
---

# Group Builder

Do you need to send emails to a large number of recipients in your organization? Do you want to create distribution lists based on various criteria, such as organization level, reporting structure, location, and country? Do you want to avoid the hassle of manually adding or removing members from your lists? If you answered yes to any of these questions, then you might be interested in Group Builder, a new tool that simplifies the process of creating and managing distribution lists.

`Group Builder` is a tool that uses an Excel file containing email addresses and metadata, such as name, organization level, manager, work site, address, and country. Based on this file, `Group Builder` generates distribution list names, each with a unique identity that consists of a prefix and the hash value of the display name. This ensures that the alias does not conflict with the limitations of Exchange. Group Builder also creates contact objects for any SMTP addresses that do not match the DNS entries in the tenant.

Finally, `Group Builder` either creates or deletes the groups, and updates the member list in one step. You can use Group Builder to create distribution lists for various purposes, such as communication, collaboration, reporting, and analysis. `Group Builder` is easy to use, fast, and reliable. It saves you time and effort, and helps you reach your target audience more effectively.

If you want to learn more about Group Builder, check it out here

## Roles

### HR

**Uploads and Validate Excel file**

The End User is presented for a UI showcasing how the system interprets the Excel file. The End User can then validate the content and either accept or reject the content.

### Comms

Get notified about the status of the process

## System Roles

### Create Missing Groups
Run sequentially through the list of groups and creates any missing groups.

### Create Contact Objects
Run sequentially through the list of contacts and creates any missing contacts.

### Get Unique ID for Emails
Run trough all email addresses and gets the unique ID for each.

### Generate update scripts
This generates the update scripts for the groups and contacts.

### Execute update scripts
Updates scripts run in parallel with a max number of threads matching the number of allowed Exchange Management sessions in your tenant

### Delete Missing Groups
Run sequentially through the list of groups and deletes those know longer needed.

### Publish Group Finder index
Publishes the Group Finder index to the Group Finder API


## Components

### Uploading and validating the latest Excel file

Exposes the API for uploading and validating the latest Excel file.

```bash
koksmat serve groupfinder
```

UI path: [/app/channels/mailgroups](https://github.com/koksmat-com/ui/blob/tools/apps/www/app/channels/mailgroups/page.tsx)

### Processing the latest Excel file

Timer job which runs every evening.

```bash
koksmat sync groupfinder
```
xx number of worker processes waiting for Exchange jobs.

```bash
koksmat work exchange
```