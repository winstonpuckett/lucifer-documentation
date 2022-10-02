---
title: Test Syntax | Lucifer
layout: layout.njk
eleventyNavigation:
  key: Test Syntax
  parent: Reference
---

# Test Syntax

## Command

The command specifies what cli tool to run when the feature is called. 

Datatype: string

## Test - General Options

Within a test, there are a couple different options listed below.

### Name

A short-ish identifier for the test. This will be displayed when the suite is run, and is therefore important to be both meaningful and searchable. While duplicate names are allowed between tests, it is discouraged because of searchability.

Datatype: string

## Expectations

## Examples

Here's a test which specifies every possible argument along with descriptions of what each means:

```yaml
# Which command do you want to run for each test?
command: lucifer 
# The array of tests to run.
tests:
  # Printed during execution - important for searchability when test fails.
  - name: Any name
    # Provides a deeper level of information into what the test is supposed to assert.
    # Given, When, Then is a great, succinct way to express this.
    description: |
      Given any string
      When any string
      Then any string
    # The set of assertions.
    expectations:
      # Asserts the performance in milliseconds (default 1000)
      performance: 1000
      # Asserts the expected exit code matches what is returned when the tool is run. 
      exitCode: 1234
      # Asserts the console output of the command matches what is notated here.
      output: console output string
      # Asserts the console error stream of the command matches what is notated here.
      error: console error string
      # Asserts the file below exists.
      file: path/to/output/file
      # Asserts contents of the file above matches what is notated below.
      # If no file is given, this test is not run.
      contents: file output string
    # A list of arguments to pass to the command.
    args:
    - "1" # Can be passed as strings
    - 1 # Can be passed as integers
    - 1.5 # Can be passed as decimals
```

Lucifer is fully tested with itself. For real life examples of how to organize a suite, reference the test folder in the source code TODO: add link.

The code there gives examples of:
- Managing test data
- Every type of expectation
- Running your suite in CI/CD through GitHub actions
- And probably an example of what you're looking for

Source code: [github](https://github.com/winstonpuckett/lucifer)