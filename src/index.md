---
title: Lucifer
layout: layout.njk
eleventyNavigation:
  key: Home
  order: 1
---


Lucifer
Illuminating CLI testing.

## Get up and running quickly

Installation is incredibly simple and will be supported in many scenarios. Currently the easiest way to install is through cargo with the command <code>cargo install lucifer-testing</code>. Head to the installation page [here](/installation) for full instructions and options.

## Easy test suite management

Your test suite should never become more cumbersome than the code you're testing. Lucifer does many things to simplify and standardize your test suite.

- Test organization
  - Standard test syntax.
  - Features are files.
  - Suites are folders
- Output
  - File / Test name info
  - Exact details on why a test failed*
- Run anywhere
  - Install easily
  - Use existing integrations with popular CI/CD systems.
  - Runs the same on any same operating system.


## Dive into the details

Lucifer is not hard to pick up. There are only a few concepts. [Dive in!](/docs)

## Notes:
\* As this product is still in alpha state, testing file existence and content gives a general error when either fails. Find out more [here](/docs/tests#file).