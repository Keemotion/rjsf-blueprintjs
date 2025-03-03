# React JSON Schema Form - Blueprintjs theme

## About The Project

Exports `blueprintjs` theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/)
- [BlueprintJs](https://blueprintjs.com/)
- [Typescript](https://www.typescriptlang.org/)

### How to install

This package is distributed through the GitHub Packages registry.

- Create a personal `GITHUB_TOKEN` and export it in the environment depending on the shell `.profile`, `.bashrc`, `.bash_profile`
- Setup the global `$HOME/.npmrc` to contain:

    ```ini
    //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
    ```

- Then you can install the package:
`$ npm i -S @keemotion/rjsf-blueprintjs`

[GitHub help](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

## Release

Run `npm run pr` and follow the wizard to prepare new release (create and push new commit and tag).

Run `nvm use` (to switch to correct node version) then `npm run build` and then `npm publish` to publish new package.

Please remember, when you're doing `npm build` or `npm publish` it takes files from the current working directory, not the latest commit.
So if you have any unstaged changes they will be bundled and published.
