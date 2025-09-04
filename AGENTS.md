# AGENTS

This is a monorepo with TypeScript. The project turborepo and uses yarn
workspaces for package management.

## Project structure

**IMPORTANT**:

- Each application executed in this project is stored in `apps/**`.
- `packages/**` contains reusable configuration files, React components, and
  common logging features for use in `apps/**`. For a detailed list, see
  [Internal Packages](/README.md#internal-packages).
- `docs/guidelines/*.md`: Various guidelines for this project are described
  here.

## Coding style

**IMPORTANT**:

- **DO NOT** use `try`/`catch` if it can be avoided.
- **DO NOT** use `else` statements.
- **DO NOT** use the `ant` type.
- **DO NOT** use `let` or `var` statements.
- **PREFER** single word variable names where possible.
