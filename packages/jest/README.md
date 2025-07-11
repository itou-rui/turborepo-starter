## Jest Config

This directory contains the Jest configuration files tailored for testing
various parts of the workspace. Below is an overview of the configurations and
their intended usage:

### `common.js`

- **Purpose**: Shared Jest configuration for all projects.
- **Key Features**:
  - `transform`: Uses `ts-jest` for TypeScript files.
  - `testMatch`: Matches test files in `tests/**/*.test.ts` patterns.
  - `verbose`: Enables detailed test output.

### `app.js`

- **Purpose**: Jest configuration for application-level testing.
- **Extends**: `common.js`
- **Key Features**:
  - `moduleNameMapper`: Maps `@packages/*` to `<rootDir>/../../packages/*/src`.

### `packages.js`

- **Purpose**: Jest configuration for package-level testing.
- **Extends**: `common.js`
- **Key Features**:
  - `moduleNameMapper`: Maps `@packages/*` to `<rootDir>/../$1/src`.

### `package.json`

- **Purpose**: Defines metadata and dependencies for the `@workspace/jest`
  package.
- **Key Features**:
  - Name: `@workspace/jest`
  - Version: `1.0.0`
  - Private package (`private`: true)
  - Files included: `index.js`
  - Development Dependencies: Jest, `ts-jest`, and `@types/jest`.

### Usage

To use these configurations in your project, extend or import the appropriate
configuration file. For example:

```javascript
const jestConfig = require("@workspace/jest/app");
module.exports = jestConfig;
```

This ensures consistent testing across the workspace and compatibility with
various frameworks.
