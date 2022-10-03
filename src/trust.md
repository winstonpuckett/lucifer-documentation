---
title: Trust | Lucifer
layout: layout.njk
eleventyNavigation:
  key: Trust
  icon: thumb_up
  order: 4
---

# Trust

This project uses industry best practices to 

# Versioning

Note: While the project is in alpha, the major version will stay at 0 even with breaking changes. The minor version will indicate a breaking change and the path version will indicate any non-breaking change.

Lucifer follows strict semver practices. From the home page of [semver.org](https://semver.org),

>Given a version number MAJOR.MINOR.PATCH, increment the:
>
>MAJOR version when you make incompatible API changes
>MINOR version when you add functionality in a backwards compatible manner
>PATCH version when you make backwards compatible bug fixes

This project recognizes that even a simple fix to a bug can break existing users if that bug was less strict than the fix. To maintain trust, the project has a standard checklist to ask whether the change is breaking:

Does this change:
- Alter data types?
- Fail an existing expectation that would have passed?
- Remove a parameter from the API?
- Change the testing syntax in a non-backward compatible way?
- Do anything else that will break customers?

If any of these questions are true, the major version will be incremented.

Whenever a release is created, a summary of the change will also be released.

There will be mistakes made along the way. Whenever we find that we've violated this agreement, we will admit the mistake imediately so that consumers of the project can take reasonable steps to guard against any poison versions.

# Testing practices

All features and bugs start with one or more automated tests, then the code is written to make the tests pass.

As lucifer is a CLI and a CLI testing application, most tests are written in lucifer syntax itself. This ensures an implicit awareness of how lucifer feels and that lucifer is always fast enough for this type of test-driven development.

There are certain types of changes which will be hard to test through lucifer. For instance, one feature which could be implemented in the future is the parallelization of tests. A feature like that would be hard to test with lucifer, given that it doesn't change any output. Unit tests written in plain rust would have an easier time asserting that parallelization is working.

Whenever a feature which should not be tested through integration testing (and therefore not be tested through lucifer) is found, that feature will be tested using the best tool for the job.