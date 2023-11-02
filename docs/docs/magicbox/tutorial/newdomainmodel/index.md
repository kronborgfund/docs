# Room Management Case

I like to make a high level walk through on how I have made a model for triggering the executing PowerShells script in a bi-directional way.  

## Usecases


### Creating a room

> As a person managing meetingsrooms, I like to have a simple way of creating new rooms so that they can be booked in Outlook and Teams as well as integrate with Cisco and Microsoft Teams meeting room devices .


```powershell
param (
    [Parameter(Mandatory = $true)]
    [string]$Name,
    [Parameter(Mandatory = $true)]
    [int]$Capacity

)

$alias = $Name.Split("(")[0].Trim().Replace(" ", "-").ToLower()
$mailbox = New-Mailbox -Name  "room-$alias" -DisplayName "$Name" -Room -ResourceCapacity  $Capacity


$result = @{
    MailAddress = $mailbox.WindowsEmailAddress
}
ConvertTo-Json -InputObject $result
| Out-File -FilePath $PSScriptRoot/output.json -Encoding:utf8NoBOM


$mailbox.WindowsEmailAddress
```

## Intrastructure
### Kubernetes cluster
### MongoDB
### PODS
#### Koksmat CLI
#### NextJS app

## Koksmat GO application
The Koksmat CLI is a kind of Swizz knife with the purpose of having one applicationm capeable of being called for different purposes. 
The Koksmat CLI is a Go application and the source code is available on [GitHub](https://github.com/koksmat-com/koksmat).

### Repository for PowerShell script


### Hosting environment for the PowerShell script

### API for triggering the executiong

## Nextjs application

### UI for listing the rooms

### Client components for triggering the execution

### API for triggering the server side

## MongoDB

## SharePoint list



### Artifacts

#### PowerShell script
The script to execute

#### PowerShell script wrapper

#### Room domain model

#### Room API usecase

#### Room Rest API interface

#### SharePoint list
Contains various metadata for controlling the Room



#### React table list
UI component for listing the rooms

#### Context actions
UI column component for presenting the actions available for a room

#### Context usecase provider
React context provider for the usecases controlling the presentation of the actions state component

#### Action state component

Provides the mean to call the UI API for starting the server side execution of the call to the PowerShell hosting environment


#### Event receiver 
*To be implemented*

Triggered when a new item is added or updated to the SharePoint list



