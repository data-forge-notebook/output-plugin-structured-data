# Data-Forge Notebook output plugin: structured data

This is the output plugin for Data-Forge Notebook v2 that displays structured JavaScript data.

[Follow the developer on Twitter for news and updates](https://twitter.com/codecapers)

[Click for the main DFN code repository](https://github.com/data-forge-notebook/editor-core)

## Setup

You need [Node.js](https://nodejs.org/en/) installed to use this code.

Clone this repo then install dependenices:

```bash
npm install
```

## Build and serve production version

```bash
npm start
```

Open a browser and navigate to [http://localhost:1234/](http://localhost:1234/).

## Build and serve in development

```bash
npm run start:dev
```

## Build for production

```bash
npm run build
```

## Publish the plugin

Simply commit and push `out/index.html` (might want to have a plugin registry in the future!).