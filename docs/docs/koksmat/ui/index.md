---
tags: [Koksmat,Onboarding]
status: draft
---
# Getting started

Status: `draft`

This guide will help you get started with developing a new app for the Koksmat platform.

## TL;DR
- Make a fork of the UI into your own repo - https://github.com/koksmat-com/ui/fork
- Start a GitHub Code Space
- Time for a cup of coffee
- Hit debug 
- Navigate to http://localhost:4321


## Prerequisites
- A GitHub account
- A browswer
- React development experience




## Bootstrap

### Fork the UI Repository

Make a fork of the UI into your own repo - https://github.com/koksmat-com/ui/fork

### Start a GitHub Code Space

Start a GitHub Code Space

### Create a new app subfolder

Within the repo, navigate to `/ui/app/www/apps`

### Connect to a cluster

```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az login --use-device-code
az account set --subscription "Office365 admin" -o table
az aks get-credentials --resource-group magicbox --name magicbox-prod
```

Result

```text
Merged "magicbox-prod" as current context in /home/codespace/.kube/config
```

### Create .env file
Create a .env file in the `/apps/www` folder with the following content

```text
DATABASE=christianiabpos
MONGODB=mongodb://username:password@localhost:27017/?directConnection=true&authMechanism=DEFAULT&tls=false
```

Replace the username and password with the credentials you got from the cluster

## Develop
Establish a connection to the cluster


```bash
kubectl port-forward services/prod-mongos 27017:27017 -n percona
```


## Initial Training


### Magicbox Framework
Basic understanding of the framework

###  NextJS Framwork
Basic understanding of the NextJS framework

### Magicbox UI 
Basic understanding on how to develop a “Magicbox Applications” 

Covering 
- React components 
- React hooks: useState,useContext,useMemo
- React server side actions
- Tailwind CSS
- Microsoft Auth Library (MSAL)
- Magicbox API

# How to develop a new app
The UI modules are implemented using the App router in the NextJS framework.
