# Commit Message Guidelines

This document outlines the guidelines for writing commit messages in this
repository. Following these rules helps maintain consistency and clarity across
the project's history.

## Commit Message Format

The commit message must adhere to the following structure:

```gitcommit
<type>(<scope>): <subject>

<body>

<footer>
```

## Squash Merge Commit Format

```gitcommit
<type>(<scope>): <subject>(#<pull_request_number>)

<body>

---
<username> --> <type>(<scope>): <subject>
OR
<username> --> <type>(<scope>): <subject>(#<pull_request_number>)

...<Include all other related commits>
---

<footer>
```

- **type**: The type of change being made. Must be one of the following:
  - feat: A new feature
  - fix: A bug fix
  - docs: Documentation-only changes
  - style: Changes that do not affect the meaning of the code (e.g., formatting)
  - refactor: A code change that neither fixes a bug nor adds a feature
  - perf: A code change that improves performance
  - test: Adding missing tests
  - chore: Changes to the build process or auxiliary tools
  - revert: Reverting a previous commit

  For additional details, refer to
  [`commitlint.config.js`](../commitlint.config.js) and
  [`.cz-config.js`](../.cz-config.js).

- **scope**: The area of the codebase affected by the change (e.g., web, api,
  workflows). Available scopes can be found in
  [`.cz-config.js`](../.cz-config.js).
- **subject**: A concise description of the change in imperative tense. Maximum
  50 characters. The length limit is enforced in
  [`.cz-config.js`](../.cz-config.js).
- **body**: A longer description of the change. Use "|" to break new lines.
  (Optional)
- **footer**: List issues closed by this change, e.g., `Closes #31, #34`.
  (Optional)

## Examples

### Adding a New Feature

```
feat(api): add user authentication

Added user authentication using JWT.

Closes #45.
```

### Fixing a Bug

```
fix(web): resolve button alignment issue

Fixed the alignment issue for the login button on mobile screens.

Closes #56.
```

### Updating Documentation

```
docs(workflows): update CI setup guide

Updated the CI setup guide to include new steps for integration.
```

## Tools

This repository uses the following tools to enforce commit message guidelines:

1. **Commitizen**: Helps generate commit messages interactively. Run:

   ```sh
   git cz
   ```

2. **Commitlint**: Validates commit messages against the rules defined in
   [`commitlint.config.js`](../commitlint.config.js).

3. **Prettier**: Ensures formatting consistency.

4. **Yarn Commit**: Use the `yarn commit` command as a shortcut to automatically
   invoke Commitizen for creating commit messages:
   ```sh
   yarn commit
   ```
   This ensures that commit messages follow the defined guidelines
   interactively.

## Additional Notes

- Breaking changes must be indicated in the body.
- Use imperative mood in the subject line.
- Avoid full stops at the end of the subject line.

Following these guidelines ensures that the commit history remains clean and
understandable for all contributors.
