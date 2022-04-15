[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/bsnk-dev/pnwkit)

<p align="center">
  <a href="https://github.com/bsnk-dev/pnwkit">
    <img src="https://assets.bsnk.dev/pnwkit_icon.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">PnWKit</h3>

  <p align="center">
    Politics & War V3 API Library
    <br />
    <a href="https://bsnk-dev.github.io/pnwkit/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://pypi.org/project/pnwkit-py/">Python Version</a>
    ·
    <a href="https://github.com/bsnk-dev/pnwkit/issues">Report Bug</a>
    ·
    <a href="https://github.com/bsnk-dev/pnwkit/issues">Request Feature</a>
  </p>
</p>


PnWKit is here to make interacting with the V3 Politics and War API easy. All you have to do is import the library, add your key, and make a query.

## Getting Started

To get started using PnWKit you must first have node and npm installed, or you can use it in a browser. It is recommended you are using TypeScript, as it
will give you full advantage of the advanced typings within the library and allow you to be much more productive.

### Prerequisites

Install the library using NPM.
* npm
  ```sh
  npm i --save pnwkit
  ```
  
### Future Plans

Baseball queries are coming soon with v2.2.0!

## Usage

To use PnWKit just import the library and add your key, then you can make asyncronous queries.

```ts
import pnwkit from 'pnwkit';
pnwkit.setKey('xxxxx');

const nations = await pnwkit.nationQuery({id: [100541], first: 1}, `nation_name`);

console.log(`Nation name: ${nations[0].nation_name}`);
```

If you want to paginate your query for more results, just enable pagination after your query.

```ts
const nations = await pnwkit.nationQuery({id: [100541], first: 1}, `nation_name`, true);

console.log(`Nation name: ${nations.data[0].nation_name
name}, current page: ${nations.paginatorInfo.currentPage}`);
```

The queries are written in normal GraphQL, so you can get all the cities in a nation like this

```ts
const nations = await pnwkit.nationQuery({id: [100541], first: 1}, 
  `
  nation_name,
  cities {
    name  
  }`);

console.log(`First city of ${nations[0].nation_name}: ${nations[0].cities[0].name}`);
```

If you want to have multiple copies of PnWKit running at the same time, you can use the Kit class export.

```ts
import {Kit} from 'pnwkit';

const pnwkit = new Kit();
pnwkit.setKey('xxxx');

// queries...
```

### Use with require()

PnWKit also supports require() like in vanilla js.

```js
const pnwkit = require('pnwkit');

pnwkit.setKey('xxxx');
// etc..
```

### Caching

PnWKit has caching built right in for your convenience. 
Just create a cache function with ``PnWKit.cached`` and define how long it can be cached for. Then call it like normal.

Different calls return different cached versions too.

```ts
const cachableNationQuery = pnwkit.cached(
  pnwkit.nationQuery, // The query you want to cache
  1                   // How long that query can be cached at a time, in minutes
);

const nations = await cachableNationQuery({id: [100541], first: 1}, `nation_name`);

// If you call it again within the age limit you'll get a cached version
const nationsCached = await cachableNationQuery({id: [100541], first: 1}, `nation_name`);
```


You can also do the following queries in PnWKit:

- nationQuery
- allianceQuery
- tradePricesQuery
- tradeQuery
- warQuery
- treasureQuery
- colorQuery
- bountyQuery
- cityQuery
- warAttackQuery
- bankRecordsQuery

You can look at the arguments and possible data to collect here at the [docs](https://bsnk-dev.github.io/pnwkit/).


# Development

## Testing

### Setup

Tests won't work right away, you have to specify private information inside the test/testconfig.json file.

It should look like this:

```json
{
  "apiKey": "xxxxx"
}
```

After that just run ```npm run test```

## Generating Docs

To generate documentation use the script: ```npm run docs```.
