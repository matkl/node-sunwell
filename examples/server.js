var express = require('express');

var app = express();
var Sunwell = require('../sunwell');
var sunwell = new Sunwell({ bodyFontSize: 50 });

app.get('/', function(req, res) {
  var width = 400;
  var blessingOfMight = {
      "id":"CS2_087",
      "artist":"Zoltan Boros",
      "set":"CORE",
      "type":"SPELL",
      "rarity":"FREE",
      "cost":1,
      "name":"Blessing of Might",
      "flavor":"\"As in, you MIGHT want to get out of my way.\" - Toad Mackle, recently buffed.",
      "playRequirements":{"REQ_TARGET_TO_PLAY":0,"REQ_MINION_TARGET":0},
      "collectible":true,
      "playerClass":"PALADIN",
      "howToEarnGolden":"Unlocked at Level 45.",
      "howToEarn":"Unlocked at Level 1.",
      "text":"Give a minion +3 Attack.",
      "texture":"W16_a053_D"
  };
  var card = sunwell.createCard(blessingOfMight, width, function(err, buffer) {
    if (err) next(err);

    res.writeHead(200, {
      //'Cache-Control': 'max-age=86400',
      'Content-Type': 'image/png'
    });

    res.write(buffer);
    res.end();
  });
});

app.use(function(err, req, res, next) {
  next(err);
});

var listener = app.listen(process.env.PORT || 8080, function() {
  console.log('Server listening on port', listener.address().port);
});
