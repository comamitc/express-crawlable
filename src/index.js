var path = require( "path" );
var childProcess = require( "child_process" );
var phantomjs = require( "phantomjs" );
var url = require('url');
var binPath = phantomjs.path;

var expressCrawlable = function expressCrawlable(appState) {
  return function(req, res, next) {
    var urlPath = req.path;
    var escapedFragment = new RegExp("^/_escaped_fragment_/.*");

    if (escapedFragment.test(urlPath)) {
      var pageRender =  path.join(__dirname, "src/pageRender.js");

      var appUrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
      });

      var childArgs = [ 
        pageRender, 
        appUrl 
      ];

      return childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8"
        });

        return res.end( "<!doctype html><html>" + stdout + "</html>" );
      });
    }

    return next();
  };
};
