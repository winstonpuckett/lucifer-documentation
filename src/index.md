---
title: Lucifer
layout: layout.njk
eleventyNavigation:
  key: Home
  icon: home
  order: 1
---

# Home

Illuminating CLI testing.

## What is lucifer?

Lucifer is a command line interface application which enables easy, maintainable testing of other CLI applications. Run your test suite anywhere, maintain your tests effortlessly, easily reproduce errors, and so much more with lucifer. 

## Get up and running quickly

Installation is incredibly simple and will be supported on all operating systems. Just run <code>cargo install lucifer-testing</code>. Head to the installation page [here](/installation) for full instructions and options.

In the future, this project will be directly integrated with common CI/CD tools like Github Actions and Jenkins for seemless CI/CD testing.

## Easy test suite management

Your test suite should never become more cumbersome than the code you're testing. Lucifer does many things to simplify and standardize your test suite.

Tests in lucifer are grouped into features, which are grouped into a test suite. Whenever you have a new feature to test, simply add a new file to your suite folder and start writing. Lucifer will register the new feature automatically and verify the new tests at the next check-in.

Each test is uniform - all tests have a name, description, and set of expectations. When you understand one test, you understand all tests.

## Know quickly when something's wrong

When lucifer runs, it outputs test information directly to the console and to a results.json file in a folder you specify. This enables human-readable *and* computer-readable consumption of the test results. In every scenario, find out exactly what's wrong with your system.

## Get started

The [getting started guide](/docs) is a great place to get up and running with lucifer quickly. It takes you through installation, understanding how to format lucifer things, and creating your first couple tests.

What are you waiting for!? [Get started!](/docs)
