# PnWKit

PnWKit is here to make interacting with the V3 Politics and War API easy. All you have to do is import the library, add your key, and make a query.

## Getting Started

To get started using PnWKit you must first have node and npm installed, or you can use it in a browser. It is recommended you are using TypeScript, as it
will give you full advantage of the advanced typings within the library and allow you to be much more productive.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm i --save pnwkit
  ```

## Usage

To use PnWKit just import the library and add your key, then you can make asyncronous queries.

```ts
import pnwkit from 'pnwkit';
pnwkit.addKey('xxxxx');

const nations = await pnwkit.nationQuery({id: [100541], first: 1}, `name`);

console.log(`Nation name: ${nations[0].name}`);
```

If you want to paginate your query for more results, just enable pagination after your query.

```ts
const nations = await pnwkit.nationQuery({id: [100541], first: 1}, `name`, true);

console.log(`Nation name: ${nations.data[0].name}, current page: ${nations.paginatorInfo.currentPage}`);
```

The queries are written in normal GraphQL, so you can get all the cities in a nation like this

```ts
const nations = await pnwkit.nationQuery({id: [100541], first: 1}, 
  `
  name,
  cities {
    name  
  }`);

console.log(`First city of ${nations[0].name}: ${nations[0].cities[0].name});
```
You can also do the following queries in PnWKit:

- NationQuery
- AllianceQuery
- TradePriceQuery
- TradeQuery
- WarQuery
- TreasureQuery
- ColorQuery

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