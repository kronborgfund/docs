---
slug: who-have-licenes-and-when-was-the-last-login
title: Who have licenses and when was the last login
authors: [nielsgregers]
tags: [ microsoft365,licenses]
draft: true
---

# Who have licenses and when was the last login?

## Introduction

Ever so often we run out of licenses for our users. And we need to know who is using the licenses and who is not.

I don't like to repeat my self, so I will develop a function which can read data from the Microsoft Graph API and present it in the KOKSMAT UI.

Envision that the following component should do the job.

1. Application registration in Azure AD authorized to read the data
2. Server component able to authenticate and read the data
3. Data file containing translation of SKU to readable names
4. Monogodb for interim storage of data
5. UI component which can read the data and present it in a nice way

## Video

### Episode 1

This episode is by first, where I demonstrate a big potential for improvements. I will try to do better in the next episodes.

<iframe width="100%" height="400px" style={{height:"50vh"}}   src="https://www.youtube.com/embed/kCnf5oZKEwU?si=LqagKN2LfiLS-heG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### Episode 2