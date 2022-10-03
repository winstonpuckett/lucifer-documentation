---
title: Troubleshooting | Lucifer
layout: layout.njk
eleventyNavigation:
  key: Troubleshooting
  icon: help
  order: 5
---

# Troubleshooting

## My expectations of a string are the same as the output, but the test failed!

This is most likely a line ending error. I (Winston Puckett) ran into this many times when testing from both a windows and linux machine.

To confirm, look at the test output in the results.json file. The json file shows \r\n characters. Comparison of expected / actual should reveal the discrepency easily.

Currently the best way to fix this is to change the line endings on your expectations file to match the system you're running lucifer on. The project team is looking into better ways to solve this, such as a flag which asks lucifer to ignore line endings. This isn't the default because there could be cases where you want to fail on different line endings.

If this is something which bothers you, create an issue with the [issues tab](https://github.com/winstonpuckett/lucifer/issues) in GitHub.