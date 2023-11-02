---
lifecycle: Prototyped
---

# CAVA

```yaml
magicapp: v1
metadata:
  app: cava
  name: CAVA
stages:
  - stage: planning # Agenda and goals
    type: sequential
    name: Planning  
    inputs:
      - suggestion:
    outputs: 
      - agenda:
      - invitation:
    tasks:
      - prepare agenda:
          who: secretary
      - approve agenda:       
          who: chair
      - prepare invitation:
          who: secretary
      - reserve resources:
          who: secretary  
      - invite attendees:
          who: secretary
    conditions:
      pending:  
        receive confirmations:

      final:
        confirm resource:
  - stage: headsup1 # Logistics
    type: timecontraint
    name: Heads Up
    outputs: 
      - instruction: 
    tasks:
      # To support attendees with special needs, we need to know about them in advance
      # Special food ... 
      # Special support ...
      # Special equipment ...
      # Special room setup ...
      - send selfservice link:
          who: system
          when: 3 days before

  - stage: headsup2 # Logistics
    type: timecontraint
    name: Heads Up
    outputs: 
      - guide:  
    tasks:
      - send guideance:
          who: system
          when: 
            - 1 day before
            - 2 hours before
  - stage: transportation # Logistics
    type: sequential
    name: Transportation
    variants:
      car:
        tasks:
          - issue parking permit:
              who: reception
          - parking:
              who: attendee
      public transportation:
      cycle:
      walk:
  - stage: checkin # Logistics
    name: Check In visitors
    type: sequential
    tasks:
      - register visitor:
          who: receptionist
          selfservice: attedee
      - get wifi code:
          who: receptionist
      - handed out badge:       
          who: receptionist
      - inform host:
        who: receptionist
      - receive visitor:
          who: host  
  - stage: wayfinding 
    name: Wayfinding
    type: sequential       

  - stage: support_the_meeting
    name: Support the Meeting
    type: ondemand
    tasks:
      - prepare room:
          when: before
          who: waiter        
      - cleanup room:
          when: after
          who: waiter
      - prepare food:
          when: before
          who: kitchen
          timecontraints: 
            days: 1
            cutovertime: 12:00
      - deliver food:
          when: during
          who: waiter
      - prepare drinks:
          when: before
          who: kitchen
      - deliver drinks:
          when: during
          who: waiter
  - stage: running_the_meeting # Chairing/Facilitating
    name: Running the Meeting
    type: sequential
    tasks:
      - start meeting:
          who: chair
      - run meeting:
          who: chair
          repeat:
            each agenda item:
              who: presenter
              timebox: variable
              decision: majority
              vote: majority
              information: majority
      - end meeting:
          who: chair
  - stage: checkout # Logistics
    type: sequential
    tasks:
      - return badge:
          how: 
            title: handover to receptionist
            tool: visitor system
            form: return badge form
            path: /return-badge
          who: visitor
  - stage: following_up # After the meeting ends
    name: Following Up
    type: sequential
    tasks:
      - prepare minutes:
          who: secretary
      - approve minutes:
        - who: chair
      - archive meeting:
          who: secretary
  - stage: invoicing # After the meeting ends
    name: Invoicing
    type: sequential
    tasks:
      - prepare invoice:
          who: secretary
      - send invoice:
          who: secretary
      - receive payment:
          who: secretary
  - stage: backoffice
    name: Backoffice
    type: ondemand
    tasks:
      - order catering:
          who: receptionist
          when: 13:00
          frequency: daily
     
Events: # Logistics
    name: Events
    exception:
      - meeting_cancelled:
        tasks:
          - cancel meeting:
              who: secretary
          - cancel invitation:
              who: secretary
          - cancel resources:
              who: secretary
          - notify attendees:
              who: secretary
          - notify resources:
              who: secretary
      - meeting_rescheduled:
        tasks:
          - reschedule meeting:
              who: secretary
          - reschedule invitation:
              who: secretary
          - reschedule resources:
              who: secretary
          - notify attendees:
              who: secretary
          - notify resources:
              who: secretary
      - meeting_delayed:
        tasks: 
          - delay resources:
              who: secretary
          - notify attendees:
              who: secretary
          - notify resources:
              who: secretary
      - attendee_cancellation:
        tasks:
          - notify attendees:
              who: secretary
          - notify resources:
              who: secretary
      - resource_unavailable:
        tasks:
          - find replacement resource:
              who: secretary
          - notify attendees:
              who: secretary
          - notify resources:
              who: secretary
      - attendee_delayed:
        tasks:
          - notify attendees:
              who: secretary
          - notify resources:
              who: secretary
      - attendee_checkin:
        tasks:
          - notify host:
              who: receptionist
      - attendee_notcheckedout:
        tasks:
          - notify:
              who: 
              - receptionist
              - security

    
roles:
  - name: secretary
    description: Secretary
  - name: chair
    description: Chair
  - name: attendee
    description: Attendee
  - name: receptionist
    description: Receptionist
  - name: waiter
    description: Waiter
  - name: kitchen
    description: Kitchen
  - name: host
    description: Host
  - name: presenter
    description: Presenter
  - name: visitor
    description: Visitor
  - name: resources
    description: Resources
  - name: reception
    description: Reception
  - name: attendee
    description: Attendee
  - name: attendee
    description: Attendee
```