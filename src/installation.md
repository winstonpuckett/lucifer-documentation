---
title: Install | Lucifer
layout: layout.njk
eleventyNavigation:
  key: Installation
---

# Installation

Easy installation is a top priority for lucifer. It is well understood that most of the time lucifer will be running in automation scenarios. Please bare with me as I slowly add lucifer to more package repositories. If you have a specific scenario you'd like to support, let me know with the [issues tab](https://github.com/winstonpuckett/lucifer/issues) in GitHub.

*note: Running commands copied from the internet is inherently dangerous. Even though lucifer will never aim to cause harm, it will always be safer to type these commands in.*

## Cargo (recommended)

Prerequisites:
- [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)

To install lucifer, simply run the command below:
```bash
cargo install lucifer-testing
```

Then run the next command to see that lucifer was properly installed.

```bash
lucifer --version
```

Expected output replacing X with the version number:
    vX.X.X

### Troubleshooting

#### Command not found

It's likely lucifer was installed, but is not on the path. 
1. Head to where cargo installs packages (~/.cargo/bin by default)
1. Check there is a file called "lucifer" or "lucifer.exe"
1. Add ~/.cargo/bin to your PATH.

## From source

Cargo is required to install from source. Installing [directly from cargo](/installation#Cargo%20(Recommended)) is easier.

In the rare instance where installing from source is better, run the following commands.
```bash
# Get the source
git clone https://github.com/winstonpuckett/lucifer.git
cd lucifer

# Build the project
cargo build --release

# move the target file out of the directory
mv ./target/release/lucifer ..

# Remove the source folder
rm -rf lucifer
```
