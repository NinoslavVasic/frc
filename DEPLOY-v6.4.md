# Deploy v6.4: Re-Leased tenant portal links (10/22/2026)

## Files changed

```
index.html        footer "Tenants" links
README.md         open item closed
DEPLOY.md         outstanding item closed
DEPLOY-v6.4.md    this file
```

## What changes

| Footer link | Before | After |
|---|---|---|
| Tenant portal | "(coming soon)", no link | https://us1.portal.re-leased.com/ |
| Pay rent | email to admin@ | https://us1.portal.re-leased.com/ |
| Maintenance request | email to admin@ | https://us1.portal.re-leased.com/ |

The links open in a new tab. The root address goes to the Re-Leased sign-in page, then to the tenant dashboard. Tenants pay in the Billing section (Re-Leased Pay) and send maintenance requests in the Maintenance section.

No change to the CSP. A link to another site is a navigation, so the CSP does not block it.

## Check after it is live

- [ ] Footer: the three Tenants links open the Re-Leased sign-in page in a new tab.
- [ ] "(coming soon)" is gone.
- [ ] DevTools → Console is clean.

## Note

Tenants can sign in only after they get the portal invitation from Re-Leased. If Re-Leased sets up a custom domain (for example portal.moonshot-properties.nyc), change the three links again.
