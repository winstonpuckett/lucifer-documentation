---
title: FAQ | Lucifer
layout: layout.njk
eleventyNavigation:
  key: FAQ
  icon: school
  order: 3
---

# Frequently Asked Questions

## Why does lucifer not run tests in parallel?

Lucifer tracks performance metrics. Performance could be artifcially inflated with tests that run in parallel. Parallelization is a current feature consideration. If this is a high priority for you, file an enhancement with the [issues tab](https://github.com/winstonpuckett/lucifer/issues) in GitHub.

## Why input yaml and output json?

Yaml is easily readable by humans. Writing yaml is often far more comforatable than writing json. Therefore, we accept tests in yaml format.

However, yaml is slow to parse and unsafe to transmit over the internet (in the case of packet loss). Therefore, when data is written and read by computers, lucifer prefers to output in json. 

## Why does lucifer default to a 1 second performance ceiling?

Performance is incredibly important. Defaulting to 

## Have an unanswered question?

