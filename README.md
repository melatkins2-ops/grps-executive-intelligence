# GRPS Executive Intelligence

A private leadership workspace for one executive user: a daily briefing, school intelligence before a visit, patterns across schools, CSA connections, and a running record of decisions and follow-through.

**Live site:** https://melatkins2-ops.github.io/grps-executive-intelligence/

## What's here

- `index.html`: the workspace
- `csa-building-staff-data.js`, `csa-building-staff.js`, `csa-building-staff.css`: CSA building-based staff directory, shown in School Intelligence and Before I Walk In
- `integration-snippet.html`: how the staff directory is wired in
- `images/`: GRPS logo
- `README.txt`: notes on the staff-directory integration

## Good to know

- Prototype. It uses GRPS information embedded in the page; new evidence must be connected before it appears automatically.
- Executive Memory is saved in the browser on the device (local storage) and does not sync between devices.

## Updating the site

Edit the files on a branch and open a pull request. GitHub Pages publishes `main` automatically, usually within a minute or two of a merge.

## Automated site check

Every pull request and every push to `main` runs **Site check** (`.github/workflows/site-check.yml`). It opens the site in a headless browser at desktop (1366px) and phone (390px) widths and fails if the page throws a JavaScript error, a local file or image is missing, or the page scrolls sideways. See the Actions tab for results.

Maintained by GRPS Community & Student Affairs.
