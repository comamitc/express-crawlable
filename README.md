# express-crawable

An express-middleware that renders SPA's via the `/_escaped_fragment_/` pattern.

### Rationale

1. [How to make your Single Page Application Node.js website using URL hash routing more search engine friendly][1]
2. [Making AJAX applications crawlable][2]

[1]: http://blog.christoffer.me/how-to-make-your-single-page-application-node-js-website-using-url-hash-routing-more-search-engine-friendly/
[2]: https://developers.google.com/webmasters/ajax-crawling/docs/learn-more

### Install

```sh
npm install --save express-crawlable
```

### Usage

```js
var express = require('express'),
  app = express(),
  expressCrawlable = require('express-crawlable');

//------------------------------------------------------------------------------
// SETUP
//------------------------------------------------------------------------------
app.use(expressCrawlable);

// start server
var server = app.listen(1235, function() {
  console.info('Listening on port ' + server.address().port);
});

```

### License
> MIT License 2016 © Mitch Comardo
