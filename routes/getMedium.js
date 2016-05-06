/**
 * Created by Sunny on 16/5/4.
 */
var express = require('express');
var mediumcats = [
    {
        "name": "异国短毛猫",
        "fur": "短毛",
        "weight": "3-6.5KG",
        "color": "几乎拥有所有可能的毛色和花纹",
        "character": "性格好静，可爱，温纯，甜美，不拘小节及忠诚，另一方面，又与其它品种一样的活泼及顽皮。它像波斯猫一样文静，和人亲近，又像美国短毛猫一样顽皮机灵。",
    },

    {
        "name": "暹罗猫",
        "fur": "短毛",
        "weight": "2.5-5.5KG",
        "color": "单色重点色、斑纹重点色、玳瑁色重点色",
        "character": "暹罗猫性格刚烈好动，机智灵活，好奇心特强，善解人意。暹罗猫喜欢与人为伴，可用皮带拴着散步。它需要主人的不断爱抚和关心，对主人忠心耿耿、感情深厚，如果强制与主人分开，则可能会抑郁而死。暹罗猫还十分聪明，能很快学会翻筋斗叼回抛物等技巧。暹罗猫的叫声独特或像小孩的啼哭声，而且声音很大。",
    }
];
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send(mediumcats);
});

module.exports = router;
