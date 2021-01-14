# Web Package Starter

A starter package for create library for using as dependency.

# Project structure

Project should adhere to this structure:
```
    /config - files for configuration project modules
    /src - files used by this application (modules, templates, ligic)
        /components - set of components
            /<concrete component> - folder that incapsulates all component's files
                 <concrete component>.enums.ts - set of component enums
                 <concrete component>.spec.tsx - tests for component
                 <concrete component>.tsx - component logic
        
        package-api.js - a public interface for a library consumer         
                     
    package.json - project configuration, contains project information, dependencies and settings
    webpack.config.package.json - main configuration for webpack
    yarn.log - file fixing specific dependency numbers
    README.md
    <other root configuration files> - for example, jest.config.ts, .gitignore, ...                                             
```

# Why do we have that dev dependencies?

* `@eigenspace/codestyle` - includes lint rules, config for typescript.
* `@types/*` - contains type definitions for specific library.
* `jest` - testing framework to write unit specs (including snapshots).
* `ts-jest` - it lets you use Jest to test projects written in TypeScript.
* `ts-loader` - it is used to load typescript code with webpack. 
* `eslint` - it checks code for readability, maintainability, and functionality errors.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
See `webpack.config.js`.
* `webpack` - it create app bundle for dev mode and production. 
* `copy-webpack-plugin` - used for copy package.json in package bundle.
* `clean-webpack-plugin` - used for clean bundle before run building.
* `husky` - used for configure git hooks.
* `lint-staged` - used for configure linters against staged git files.
* `webpack-cli` - command line interface dor webpack.