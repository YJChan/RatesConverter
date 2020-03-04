const express = require('express');
const router = express.Router();
const fetchUrl = require('fetch').fetchUrl;
const apiKey = '';

router.get('/exchgrate', function(req, res, next) {
  const endpoint = "http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";

  fetchUrl(endpoint, { method: "get" }, function (error, meta, body) {    
    const doc = body.toString();
    res.set('Content-Type', 'text/xml');
    res.send(doc);
  });
});

router.get('/daily-rates', function(req, res, next) {
  const endpoint = `http://data.fixer.io/api/latest?access_key=${apiKey}&format=1`;

  fetchUrl(endpoint, {method: "get"}, function(err, meta, body) {
    const data = body.toString();
    res.set('Content-Type', 'application/json');
    res.end(data);
  });
});

module.exports = router;
