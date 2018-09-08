var express = require('express');
var router = express.Router();
const fetchUrl = require('fetch').fetchUrl;

router.get('/exchgrate', function(req, res, next) {
var endpoint = "http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";

  fetchUrl(endpoint, { method: "get" }, function (error, meta, body) {    
    var doc = body.toString();
    res.set('Content-Type', 'text/xml');
    res.send(doc);
  });
});

module.exports = router;
