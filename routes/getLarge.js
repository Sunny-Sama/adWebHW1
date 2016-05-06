/**
 * Created by Sunny on 16/5/4.
 */
var express = require('express');
var bigcats = [
    {
        "name": "布偶猫",
        "fur": "长毛",
        "weight": " 4.5-9KG",
        "color": "大多数单色被毛，玳瑁色花纹和斑纹；总是有重点色、双色和棒球手套状的被毛",
        "character": "布偶猫喜欢人类陪伴，乐于同儿童玩耍，通常对其他宠物友好，但不太好动；一旦过了幼年期，大多数布偶猫喜欢温柔的游戏。",
    },

    {
        "name": "英国短毛猫",
        "fur": "短毛",
        "weight": "4-8KG",
        "color": "单色、重点色、双色、烟色、斑纹、毛尖色、玳瑁色",
        "character": "英国短毛猫大胆好奇，但非常温柔，适应能力也很强，不会因为环境的改变而改变，也不会乱发脾气、更不会乱吵乱叫，它只会尽量爬到比较高的地方，低着头瞪着那双圆圆的大眼睛面带微笑地俯视着你。",
    }
];
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send(bigcats);
});

module.exports = router;