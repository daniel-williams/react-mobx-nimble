# React MobX Nimble
Nimble starter using JSX, Typescript, Webpack 3 and MobX for state management.

# Table of Contents
* [Overview](#overview)
* [Quick start](#quick-start)
* [File structure](#file-structure)
* [Useful links](#useful-links)
* [Author](#author)

## Overview
This starter includes a sample React Todo app which demostrates MobX integration and patterns. It's primary purpose is educational and to serve as a hacking starter.


## Quick Start
Clone or Fork this repo to get started

```bash
$ git clone https://github.com/daniel-williams/react-mobx-nimble
```
Install dependencies
```bash
# using yarn
$ yarn

# using npm
npm i
```

Spin up dev server
```bash
# browse to http:\\localhost:3000
npm run dev
```

## File Structure
```
root
 ├──client                     * static assets, copied to /dist on build
 |   └──assets                 * website static assets
 |       ├──images             * favicon
 |       └──styles             * vendor styles
 ├──config
 |   |   └──typings            * typings to support css modules
 |   ├──helpers.js             * project build helpers
 │   ├──webpack.build.js       * adds/overrides common configuration (prod/stag builds)
 │   ├──webpack.common.js      * common webpack configuration
 │   └──webpack.dev.js         * adds/overrides common configuration (dev/remote builds)
 ├──src/
 |   ├──app/                   * app source code
 |   ├──index.html             * entry file for app
 |   ├──polyfills.js           * libs to allow modern js syntax in legacy browsers
 │   └──vendors.js             * imports app dependencies
 ├──.gitignore                 * repo file exclusions
 ├──package.json               * Node Package Manager project file
 ├──README.md                  * this file
 ├──tsconfig.json              * Typescript environment configuration
 ├──yarn.lock                  * auto-generated file for consistent dependency versioning
 │
 └──dist/                      * prod/stag builds output files here
```

## Useful links

[MobX](https://mobxjs.github.io/mobx/)

## Author

Daniel Williams

<https://github.com/daniel-williams/react-mobx-nimble>