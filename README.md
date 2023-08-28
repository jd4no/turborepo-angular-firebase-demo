# Tubrorepo Demo Monorepo

## What's inside?

This monorepo includes the following packages/apps:

### Apps

- `webapp`: An Angular webapp.
- `functions`: The Firebase Cloud Functions that support the `webapp` app as the backend.
- `firebase`: The collection of Firestore rules and indexes as well as scripts for running the local emulators.

### Packages

- `eslint-config-custom`: Shared `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`).
- `tsconfig`: Shared `tsconfig.json`s used throughout the monorepo.
- `types`: Shared Types between the various Apps.

### Utilities

This repo has some additional tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io) for code formatting.

## Development

### Commands

Commands run through Turborepo allow for outputs to be chached for quicker future runs. The Turborepo `turbo.json` file contains
the workspace commands such as `build`, `dev`, `lint`... These commands match the script commands in each workspace's
`package.json` file.

Turborepo will run all matching commands in every workspace but is smart enough to run dependant workspaces in the correct order.
For example, running the `build` command will run the `build` command on the shared Types package before running the `build` command
in the Angular app because the Angular app depends on the Types package.

Commands can also depend on other commands, such as `build` can depend on `lint` to run before the `build` will run.

Adding a new command to a workspace `package.json` requires that the command is also added to the `turbo.json` file. For consistancy
it should also be added to the root `package.json` package to then call the `turbo` version command. Turbo should be used whenever
possible so the outputs can be cached.

### Build

To build all apps and packages, run the following command from the repo's root directory:

```sh
npm run build
```

To build a single app or package, run the follwing command:
```sh
npm run build -- --filter=appName
```

or

```sh
cd /directory/app
npm run build
```

### Local Development

To develop all apps and packages, run the following command from the repo's root directory:

```sh
npm run dev
```

To serve a single app or package, run the follwing command:
```sh
npm run dev -- --filter=appName
```

or

```sh
cd /directory/app
npm run dev
```

### Deployment

TBD

## NPM Workspaces

Packages are shared in the workspace and with the apps. Packages can be imported as a dependancy or dev dependancy. 
For example, in the Angular app the shared types are imported as so:

The path to the shared lib is listed in the `tsconfig.json` paths.
```
"paths": {
      "@myorg/types": ["../../packages/types/dist/types"]
    }
```

Then the lib is imported as a dependancy in the `packages.json` file. The `*` tells the npm workspace that this package is a workspace resource.
```
"@myorg/types": "*"
```

## Turborepo Basics

This repo uses Turborepo to help manage the workspaces.
### Useful Turborepo Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
