/**
 * Created by Sunny on 16/5/2.
 */
angular.module('myApp.controllers', [])
    // 主页信息内容
    .controller('homeCtrl', function($scope){
        $scope.message = '欢迎来到喵屋，这里有很多关于猫咪的实用信息和图片，' +
            '让你在短时间内认识猫咪的品种和习性。点击导航栏“分类”进入品种介绍页面，点击“贴示”进入养猫小贴士页面。';
        $scope.about = '本网站为只读性网站，用户通过选择不同的页面阅读不同的信息，其中“分类”页的信息为后台返回的json数据，获取的数据在前端完成渲染，' +
            '剩余部分的文字直接写入了controller的scope中。前端使用AngularJS技术，后端使用NodeJS，实现基本的数据展示，页面跳转，以及简单的数据交互功能。';
        $scope.imageUrl0 = 'img/main0.jpg';
        $scope.imageUrl1 = 'img/main1.jpg';
        $scope.imageUrl2 = 'img/main2.jpg';
    })

    // 贴士页信息内容
    .controller('tipsCtrl', function($scope){
        $scope.tips = [
            {
                title : '猫的驯养方式(From: 百度百科)',
                contents: [
                    {
                        content: '猫咪的训练要从幼时抓起，先要摸清猫咪的脾气，然后根据需要选择不同的方式来进行训练。以下几种方式可供选用：强迫、诱导、奖励、惩罚、喊叫。'
                    }
                ]
            },
            {
                title : '猫的养护(From: 百度百科)',
                contents: [
                    {
                        content: '当你为猫准备好一切必需品之后，你应该仔细检查家中有是否对于一只好奇心重的猫有不安全的因素。然后再把猫带回来。'
                    },
                    {
                        content: '家中应注意的安全事项：'
                    },
                    {
                        content: '在新猫来家前，要把有危险的物品挪到猫够不着的地方。'
                    },
                    {
                        content: '不要让猫碰到炉架。或者在炉边安装护栏。'
                    },
                    {
                        content: '随时注意关好洗衣机、电冰箱、冰柜、烤箱、微波炉的门。'
                    },
                    {
                        content: '值钱的、易碎的摆设品要放在猫够不到的地方。'
                    },
                    {
                        content: '切记不可在室内和在猫其它的活动场所里种植有毒的植物。有些植物对猫是有毒的。'
                    },
                    {
                        content: '凡是垃圾废物，千万别让猫碰到。'
                    },
                    {
                        content: '电源线，不要让猫啃电线，不用时请切断电源。'
                    },
                    {
                        content: '火炉护栏 在火炉边或在其它的明火周围请安装护栏。'
                    },
                    {
                        content: '把猫放在适当的宠物专用箱（如宠物航空箱。如果你用铁丝笼装猫最好在笼子外罩个布罩）' +
                        '带回来很重要，不要用纸箱。如果是从朋友家带回一只成年猫，最好能要求带回一件这只猫所熟悉的用品。' +
                        '例如，这只猫平常用惯的便盆或猫窝或玩具，它会感到比较安全，而能较快地在新地方安定下来。'
                    }
                ]
            },
            {
                title : '猫的喂养(From: 百度百科)',
                contents: [
                    {
                        content: '幼猫喂养小常识'
                    },
                    {
                        content: '1.要养成从小吃猫粮的好习惯，幼猫从4周龄开始就可以吃猫粮，开始用温水浸泡。小猫在10周龄时就可以喂食干猫粮了，可让它自由采食，并备清洁饮水。'
                    },
                    {
                        content: '2.少食多餐，喂食要注意定时、定量、定点。定时：每天在固定的时间喂食，养成良好的吃饭习惯。' +
                        '定量：饭量不要忽多忽少，随着猫咪年龄的增加，在某一段时间里（一般三、四个月的时候）小猫的饭量逐渐增加，到八个月以上就保持稳定了。'
                    },
                    {
                        content: '3.一般2个月左右的猫一天要吃5、6次以上。小猫三个月以前一般每日喂食四次，如早9点，中午12点，晚6点及10点。' +
                        '三至六月大时，每日喂三次。六个月大以后每日两次，从这时期最好全用猫食干粮，这对它的牙齿和牙龈有好处。'
                    },
                    {
                        content: '4.给小猫吃的奶水不够或没奶时，可饮用专门的宠物奶粉，大一点的时候可在奶粉中加一些米粉。' +
                        '如果直接食用牛奶的话，可能引起拉稀，因小猫不能很好地消化牛奶。'
                    },
                    {
                        content: '成猫喂养小常识'
                    },
                    {
                        content: '1.猫在12个月龄以上就进入成猫阶段，成猫的身体和消化系统已基本发育成熟，能较好的消化和吸收营养素。' +
                        '成猫在营养上需要全价而均衡的营养，维持猫的最佳健康状态同时防止衰老。'
                    },
                    {
                        content: '2.成年猫的最佳饮食是营养全价而均衡的猫粮。当猫达到7岁以上时，它们就会出现许多健康问题，特别是新陈代谢方面，比如肾脏和眼睛。' +
                        '要解决这类问题，重要的是喂给它们低脂肪低能量的食物，帮它们维持正常体重。' +
                        '此外，还应保证食物中纤维素的含量来保证肠胃的健康，减少镁和磷的含量维持泌尿系统和肾脏的健康。另外，应尽量为它们易于消化的食物。'
                    },
                    {
                        content: '3.定时称一下猫的体重，以保证猫的体重在正常的范围之内，并根据兽医和营养师的建议进行喂养。' +
                        '定时评估一下猫的身体状况，并根据身体状况来调整食物的喂食量。轻轻的挠猫下巴，是会增加猫对你的好感度。'
                    }

                ]
            }
        ];


    });

angular.module('categories.controllers', [])

    // 分类页信息内容, 页面加载时向后台发起请求,获取json数据

    .controller('largeCatCtrl', function($scope, $http){
        $scope.getLarge = function(){
            $http.get('http://localhost:3000/getLarge').success(function(res) {
                $scope.cats = res;

            });
        };
        $scope.getLarge();
    })
    .controller('mediumCatCtrl', function($scope, $http){
        $scope.getMedium = function(){
            $http.get('http://localhost:3000/getMedium').success(function(res) {
                $scope.cats = res;

            });
        };
        $scope.getMedium();
    })
    .controller('smallCatCtrl', function($scope, $http){
        $scope.getSmall = function(){
            $http.get('http://localhost:3000/getSmall').success(function(res) {
                $scope.cats = res;

            });
        };
        $scope.getSmall();
    });