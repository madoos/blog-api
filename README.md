[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]



# blog-api

Api for madoos-blog using clean architecture.

## Architecture Overview

This project's architecture is based on Uncle Bob's [The Clean Architecture.][1] Please at least skim through his blog
as you will have a better understanding of how it works.

We are separated this application into 4 different layers
  1. Domains (highest)
  2. Use cases
  3. adapters
  4. Infrastructure (lowest)

The gist of it is a separation of concerns. Outer layer (lower) can reference (or know) the inner (highest) layer, however, the inner layers __can not__ know about outer layer. We accomplished this by using [Dependency Injection][2] and [Duck Typing][3] since Javascript doesn't have the concept of Interface.

```
(highest)                                    (lowest, most detail implementation)
domains ---> user cases ---> interfaces ---> infrastructure
```

## Run server dev

* npm install
* npm run dev

## Run server pro

* npm install
* npm run build
* npm start


## License

MIT © [Maurice Domínguez](maurice.ronet.dominguez@gmail.com)

[npm-image]: https://badge.fury.io/js/blog-api.svg
[npm-url]: https://npmjs.org/package/blog-api
[travis-image]: https://travis-ci.org/madoos/blog-api.svg?branch=develop
[travis-url]: https://travis-ci.org/madoos/blog-api
[daviddm-image]: https://david-dm.org/madoos/blog-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/madoos/blog-api
[coveralls-image]: https://coveralls.io/repos/madoos/blog-api/badge.svg
[coveralls-url]: https://coveralls.io/r/madoos/blog-api
[1]: https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html
[2]: https://martinfowler.com/articles/injection.html
[3]: https://en.wikipedia.org/wiki/Duck_typing
