# Sudoo-Environment

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Environment/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Environment/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Environment/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Environment)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fenvironment.svg)](https://badge.fury.io/js/%40sudoo%2Fenvironment)
[![downloads](https://img.shields.io/npm/dm/@sudoo/environment.svg)](https://www.npmjs.com/package/@sudoo/environment)

Environment Control for NodeJS

## Install

```sh
yarn add @sudoo/environment
# Or
npm install @sudoo/environment --save
```

## Usage

```ts
import { Environment } from "@sudoo/environment";

type ConfigVariables = {
    readonly version: string;
};

const env: Environment = await Environment.fromFile('./config.json');
// Or
const env: Environment = Environment.fromFileSync('./config.json');

console.log(env.getKey("version")); // Version
```
