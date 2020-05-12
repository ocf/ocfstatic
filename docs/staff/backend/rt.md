---
title: "Request Tracker"
---

[**Request Tracker**](https://rt.ocf.berkeley.edu/) is the ticketing system
used by the OCF. It is the main way of keeping track of OCF-related activity.
Some tickets are automatically created when emails are received at the queue's
name (e.g. help@, devnull@, etc.). Staff can also create tickets by logging in
directly to the web UI.

## Queues

Tickets are assigned to queues, or organized boards. Manually-created
tickets are found under:

- _bod_ for meeting topics
- _bureaucracy_ for officer-related issues
- _operations_ for Operations Strategist work (opstaff)
- _projects_ for long-term activities
- _techtalks_ for Tech Talk ideas and organization
- _todo_ for shorter-term items

## Tickets

### Comment vs Reply

Much like the issues between Reply and Reply-All, the difference between Comment and Reply has led
to some mishaps. In the RT interface, _Reply_ directly communicates with the poster, so look for the
last communication with the ticket opener. _Comment_ doesn't directly communicate and is generally for
internal discussion. This can also be done through email, as RT defaults the reply-to field with the
queue mailing lists. Be careful here though: to comment through email, send the email to {queue}-comment
(i.e. help@ vs help-comment@). Also make sure that your reply does not include any of the comments, as in
make sure the trimmed comment is all the information you want released.

### Creation

They can be manually created through the _New Ticket in_ button on the top right of the page. If doing
so to communicate to people outside of the OCF, add their email to the requestors field of the ticket and
leave the body blank. Afterwards, reply to the ticket to actually communicate with the person as the ticket
creation doesn't send emails to the requestor but does to staff.
Staff mailing lists are attached to the queue, so they usually don't have to be CC'd (i.e. _help_ to help@).
You can set people to be owner, allowing people to keep track of assignments better.

### Modification

With any created ticket, it can be modified further. For queues like _bod_, some tickets should be discussed
more urgently than others. In the individual ticket page, one can change a ticket's priority value ([-10, 100]
recommended) by clicking on _The Basics_. Ownership is modified through _Reminders_ and mailing list settings
can be modified through _People_.

Tickets may reference each other or there may be redundant tickets. If so, ticket relationships and merging
can be done under _Links_ for the ticket you want to keep/set relations for.

#### Statuses

- _new_: New tickets without staff responses
- _open_: Responded tickets
- _stalled_: Held back due to other things. Turns to open on thread update.
- _resolved_: Manual resolution
- _rejected_: Rejection usually without comments
- _deleted_: Use sparingly, and generally used on obvious spam.

### Searching

By default, the queues only show _open_ or _new_ tickets. To see other tickets, either search the ticket number in the
top right or use _New Search_ to do more advanced searching. If using the latter, don't forget to press either _Add these
terms and Search_ or _Update formate and Search_. Search arguments can also be saved for later use, as seen with the
ocfstaff saved searches (bother a staff member to see these searches).
