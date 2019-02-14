# Web Package Starter

A starter package for create library for using as dependency.

# Why do we have that dev dependency?

* `@eigenspace/codestyle` - contains type definitions for specific library.
* `@types/*` - contains type definitions for specific library. 
* `clean-webpack-plugin` - used for clean bundle before run building. 
* `copy-webpack-plugin` - used for copy package.json in package bundle.
* `dts-bundle` - it is used to pack all *.d.ts file into one bundle index.d.ts.
* `husky` - used for configure git hooks.
* `jest` - testing framework to write unit specs (including snapshots).
* `lint-staged` - used for configure linters against staged git files.
* `ts-jest` - it lets you use Jest to test projects written in TypeScript.
* `ts-loader` - it is used to load typescript code with webpack.  
* `tslint` - it checks TypeScript code for readability, maintainability, and functionality errors.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
* `webpack` - it create app bundle for dev mode and production.
* `webpack-cli` - cli for webpack, provides commands for tasks.

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
              