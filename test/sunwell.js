var expect = require('chai').expect;
var Canvas = require('canvas');
var Image = Canvas.Image;
var Sunwell = require('../sunwell');

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

describe('sunwell', function() {
  it('renders a card', function(done) {
    var sunwell = new Sunwell();

    sunwell.createCard(blessingOfMight, 200, function(err, buffer) {
      expect(buffer).to.have.length.above(0);
      done();
    });
  });
});
