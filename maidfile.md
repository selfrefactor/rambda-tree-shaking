## build:rambda

```bash
cd packages/rambda&&yarn build
```

## install:rambda

```bash
cd packages/rambda&&npm i
```

## build:ramda

```bash
cd packages/ramda&&yarn build
```

## install:ramda

```bash
cd packages/ramda&&npm i
```

## build:base

```bash
cd packages/base&&yarn build
```

## install:base

```bash
cd packages/base&&npm i
```

## build

Run tasks `build:base`, `build:ramda` and `build:rambda` in parallel.

## prepare

Run tasks `install:base`, `install:ramda` and `install:rambda` in parallel.

## compare

Run tasks `build` before this

```bash
node compare.js
```
