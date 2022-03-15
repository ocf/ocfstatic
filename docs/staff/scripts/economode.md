---
title: "economode: turn economode on/off on the printers"
---

By default our printers print with the Economode setting on, which saves toner
and also means your printouts come out draft quality. If you need to print
something and not have it in draft quality, you can use the `economode` script
to turn Economode off.

You'll need the printer password, whose location can be found in `/opt/passwords`. Only `rootstaff` has access to this file, you'll have to ask someone on `rootstaff` to give you the password.

Remember to reset Economode to on using the same script once you're done.

## Usage

```
$ economode on
Enter printer password:
Setting economode to on for papercut... OK
Setting economode to on for pagefault... OK

$ economode off
Enter printer password:
Setting economode to off for papercut... OK
Setting economode to off for pagefault... OK
```
