/**
 * Created by Sunny on 16/5/4.
 */
var express = require('express');
var smallcats = [
    {
        "name": "新加坡猫",
        "fur": "短毛",
        "weight": " 1-2.7KG",
        "color": "深褐色和灰黑色：象牙底色与海豹棕色多层分布",
        "character": "新加坡猫的性格是非常外向的，它们非常黏人，活泼好动，既有非常强的好奇心，但绝对不是具有破坏性的猫。它们非常聪明，懂得与人交流，博取人们对它们的怜爱。性格是它最可爱的一面，很少有人能够抵挡住新加坡猫的热情。懂人语，温顺近人，作为伴侣动物，特别招人喜爱。",
    },

    {
        "name": "东方短毛猫",
        "fur": "短毛",
        "weight": "3KG",
        "color": "异国白色、肉桂色和浅黄褐色、烟色、阴影色、斑纹、玳瑁色、单色或双色",
        "character": "东方猫聪明敏捷，活泼好动，忠于主人，喜欢攀高。好静的主人可能不大喜欢，因为这种猫常常会在家具甚至窗帘上练习上下攀爬的本领。",
    }
];
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send(smallcats);
});

module.exports = router;
