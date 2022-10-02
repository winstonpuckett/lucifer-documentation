---
title: CLI Reference | Lucifer
layout: layout.njk
eleventyNavigation:
  key: CLI Reference
  parent: Getting Started
  order: 3
---

# CLI Reference

Note: the CLI is subject to change in subsequent versions. For instance, currently if you specify more than one input directory, only the last directory will be honored. In the future, this may allow you to specify many suites.

If you see any unconventional behavior, feel free to note it with the [issues tab](https://github.com/winstonpuckett/lucifer/issues) in GitHub.

## Flags

### Help

Invoke with:
```bash
lucifer -h
lucifer --help
``` 

Use case:<br>
View information about the project and how to invoke it.

Description:<br>
Displays all flags and options to invoke the cli, useful links to help you use lucifer effectively, and information about the product such as author and version.

### Version

Invoke with:
```bash
lucifer -v
lucifer --version
``` 

Use case:<br>
View the current version.

Description:<br>
Displays the current version in format: vX.X.X where X is the current version number.

### Silent

Invoke with:
```bash
lucifer -s
lucifer --silent
``` 

Use case:<br>
Suppress all console output.

Description:<br>
Tells lucifer not to send any output to the console. In the case of a crash (which should be rare. Please report if you do run into this), the silent flag may not be honored.

### No File

Invoke with:
```bash
lucifer -n
lucifer --no-file
``` 

Use case:<br>
Suppress the results.json file.

Description:<br>
Tells lucifer not to create a file with the results of the run. This can be helpful if you're running locally or have no need to output an extra file.

## Options

Option definiton

### Input Directory

Invoke with:
```bash
lucifer -i <new_directory>
lucifer --input-directory <new_directory>
``` 

Use case:<br>
Change the input directory.

Description:<br>
Changes the input directory (suite directory) from the default (.) to whereever you point to. This is especially useful when you want lucifer to run a tool which isn't on the path or has a dependency on the execution directory.

### Output directory

Invoke with:
```bash
lucifer -o <new_directory>
lucifer --output-directory <new_directory>
``` 

Use case:<br>
Change the output directory.

Description:<br>
Changes the output directory from the default (.) to whereever you point to. The output directory is where results.json goes.

## Keep learning

- Take the [getting started tour](/docs)
- Understand the [test syntax](/docs/tests)
- View the [source code](https://github.com/winstonpuckett/lucifer)