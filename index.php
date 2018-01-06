<?php
require_once "../jssdk.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>12.12 吃土节 聚橙精彩演出 1元秒杀</title>
    <meta name="keywords" content="聚橙网双12活动,双12购票最高立减200元,一元秒杀,演唱会,舞台剧,音乐剧,儿童剧,演出门票订购,订票" />
    <meta name="description" content="聚橙网推出' 12.12 吃土节 聚橙精彩演出 1元秒杀 '活动,全场领券最高立减200元,一元秒杀,这土你吃得起"/>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/swiper-3.4.2.min.css">
    <script src="js/mobile-util.js"></script>
</head>
<body>
    <!-- 主banner -->
    <div class="banner-area">
        <div class="scene" id="scene">
            <div data-depth="0.25" class="layer">
                <div class="b-circle">
                    <img src="images/banner-circle.png" alt="">
                </div>
            </div>
            <div data-depth="0.30" class="layer">
                <div class="b-main">
                    <img src="images/banner-main.png" alt="">
                </div>
            </div>
            <div data-depth="0.35" class="layer">
                <div class="b-logo">
                    <img src="images/banner-logo.gif" alt="">
                </div>
            </div>
            <div data-depth="0.30" class="layer">
                <div class="b-title">
                    <img src="images/banner-title.png" alt="">
                </div>
            </div>
            <div data-depth="0.20" class="layer">
                <div class="b-word1">
                    <img src="images/banner-word1.png" alt="">
                </div>
            </div>
            <div data-depth="0.40" class="layer">
                <div class="b-word2">
                    <img src="images/banner-word2.png" alt="">
                </div>
            </div>
            <div data-depth="0.60" class="layer">
                <div class="b-hang1">
                    <img src="images/hang1.png" alt="">
                </div>
            </div>
            <div data-depth="0.50" class="layer">
                <div class="b-hang2">
                    <img src="images/hang2.png" alt="">
                </div>
            </div>
            <div data-depth="0.70" class="layer">
                <div class="b-hang3">
                    <img src="images/hang3.png" alt="">
                </div>
            </div>
            <div data-depth="1.00" class="layer">
                <div class="b-hang4">
                    <img src="images/hang4.png" alt="">
                </div>
            </div>
            
        </div>
    </div>  
    <!-- 主banner end  -->
    <!-- 导航区域 -->
    <div class="navbar-area">
        <div class="navbar is-placeholder"></div>
        <div class="navbar js-navbar">
            <span class="nav-item active" data-anchor="coupon-area">抢券</span>
            <span class="nav-item" data-anchor="seckill-area">秒杀</span>
            <span class="nav-item" data-anchor="concert-area">套票</span>
            <span class="nav-item" data-anchor="discount-area">折扣</span>
            <span class="nav-item" data-anchor="hot-area">热门</span>
        </div>
    </div>
    <!-- 导航区域end -->
    <!-- 优惠券 -->
    <div class="coupon-area">
        <div class="area-title"></div>
        <div class="ticket-wrap">
            <div class="ticket-item" data-id="167">
                <div class="img-wrap">
                    <img src="images/15yuan.png" alt="">
                </div>
                <div class="get-btn">点击领取</div>
            </div>
            <div class="ticket-item" data-id="169">
                <div class="img-wrap">
                    <img src="images/100yuan.png" alt="">
                </div>
                <div class="get-btn">点击领取</div>
            </div>
            <div class="ticket-item" data-id="168">
                <div class="img-wrap">
                    <img src="images/50yuan.png" alt="">
                </div>
                <div class="get-btn">点击领取</div>
            </div>
            <div class="ticket-item" data-id="170">
                <div class="img-wrap">
                    <img src="images/160yuan.png" alt="">
                </div>
                <div class="get-btn">点击领取</div>
            </div>
            <div class="ticket-item disabled" data-id="0" id="ticket1213">
                <div class="img-wrap">
                    <img src="images/20yuan.png" alt="">
                </div>
                <div class="get-btn">即将开始</div>
            </div>
            <div class="ticket-item" data-id="171">
                <div class="img-wrap">
                    <img src="images/200yuan.png" alt="">
                </div>
                <div class="get-btn">点击领取</div>
            </div>
            <div class="ticket-item" data-id="172" id="ticket12" style="display:none;">
                <div class="img-wrap">
                    <img src="images/20yuan_12.png" alt="">
                </div>
                <div class="get-btn">点击领取</div>
            </div>
            <div class="ticket-item" data-id="173" id="ticket13" style="display:none;">
                <div class="img-wrap">
                    <img src="images/20yuan_13.png" alt="">
                </div>
                <div class="get-btn">点击领取</div>
            </div>


        </div>
    </div>
    <!-- 优惠券end -->
    <!-- 秒杀专区 -->
    <div class="seckill-area">
        <div class="area-title"></div>
        <div class="date-tab">
            <ul class="date-list">
                <li class="date-item">
                    <p class="date">12.07~12.11</p>
                    <p class="tip">每天10点开秒</p>
                </li>
                <li class="date-item">
                    <p class="date">12.12</p>
                    <p class="tip">每两小时秒一场</p>
                </li>
                <li class="date-item">
                    <p class="date">12.13</p>
                    <p class="tip">10/12/18/20点开秒</p>
                </li>
            </ul>
        </div>
        <!-- 时间轮播 -->
        <div class="swiper-container time-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide active">
                    <span>10:00</span>
                </div>
            </div>
        </div>
        <!-- 时间轮播end -->
        <!-- 秒杀演出 -->
        <div class="show-wrap">

        </div>
        <!-- 秒杀演出end -->
    </div>
    <!-- 秒杀专区end -->
    <!-- 积分点击区域 -->
    <div class="integ-area">
        <a href="http://m.juooo.com/scores/index" class="integ-go"></a>
    </div>
    <!-- 积分点击区域end -->
    <!-- 演唱会专区 -->
    <div class="concert-area">
        <div class="area-title"></div>
        <div class="concert-wrap">
            <a href="https://m.juooo.com/ticket/81911" class="con-item ada">
                <div class="con-info">
                    <p class="title">庄心妍saw the light 全国<br/>巡回演唱会2017-深圳站</p>
                    <p class="venue">场馆：深圳体育馆</p>
                    <p class="time">时间：2017.12.23 周六 20：00</p>
                        <p class="price">套票价：￥1760
                        <span class="smaller">（880*2）</span>
                    </p>
                    <p class="gift">（送价值199元双肩包）</p>
                </div>
                <div class="con-btn">立即购票</div>
                <div class="circle-tip"></div>
                <div class="package-pop"></div>
            </a>
            <a href="https://m.juooo.com/ticket/81510" class="con-item sandy">
                <div class="con-info">
                    <p class="title">2017林忆莲PRANAVA/造乐者世界 巡回演唱会ENCORE绍兴站</p>
                    <p class="venue">场馆：绍兴市奥体中心体育馆</p>
                    <p class="time">时间：2017.12.16 周六 19：30</p>
                    <p class="price">套票价：￥2199<span class="smaller">（1380*2）</span></p>
                </div>
                <div class="con-btn">立即购票</div>
                <div class="con-arrow"></div>
            </a>
        </div>
    </div>
    <!-- 演唱会专区end -->
    <!-- 折扣专区 -->
    <div class="discount-area">
        <div class="area-title"></div>
        <!-- 城市轮播 -->
        <div class="swiper-container city-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide remark">
                    <span>城市：</span>
                </div>

            </div>
        </div>
        <!-- 城市轮播end -->
        <!-- 折扣演出 -->
        <div class="show-wrap">

        </div>
        <!-- 折扣演出end -->
    </div>
    <!-- 折扣专区end -->

    <!-- 主打区域 -->
    <div class="featured-area">
        <div class="featured-wrap">
            <a href="https://m.juooo.com/cardproduct/index" class="featured-item">
                <img src="images/board1.png" alt="欢聚橙卡">
            </a>
            <a href="https://m.juooo.com/Student/index" class="featured-item">
                <img src="images/board2.png" alt="学生专区">
            </a>
            <a href="http://zhuanti.juooo.com/zhuanti/mtouch/zhuanti/2017/BE-YOUTH/" class="featured-item">
                <img src="images/board3.png" alt="be-youth">
            </a>
        </div>
        <div class="bg-board"></div>
    </div>
    <!-- 主打区域end -->

    <!-- 热门专区 -->
    <div class="hot-area">
        <div class="area-title"></div>
        <div class="show-wrap">

        </div>
    </div>
    <!-- 热门专区end -->
    <!-- 逛逛聚橙 -->
    <div class="view-juooo">
        <a href="https://m.juooo.com/" class="view-btn">逛逛聚橙网</a>
    </div>
    <!-- 逛逛聚橙end -->
    <div class="top"></div>
    <script type="text/javascript">
        (function () {
            function goPAGE() {
                if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                    if (window.location.href == "http://zhuanti.juooo.com/zhuanti/2017/1212/") {
                        window.location.href = "http://zhuanti.juooo.com/zhuanti/mtouch/zhuanti/2017/1212/";
                    }
                }
                else {
                    if (window.location.href == "http://zhuanti.juooo.com/zhuanti/mtouch/zhuanti/2017/1212/") {
                        window.location.href = "http://zhuanti.juooo.com/zhuanti/2017/1212/"
                    }
                }
            }

            goPAGE();
        })()
    </script>
    <script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script>
        wx.config({
            debug: false,
            appId: '<?php echo $signPackage["appId"];?>',
            timestamp: <?php echo $signPackage["timestamp"];?>,
            nonceStr: '<?php echo $signPackage["nonceStr"];?>',
                signature: '<?php echo $signPackage["signature"];?>',
                jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareQZone'
            ]
        });
        wx.ready(function () {
            // 在这里调用 API

            var data = {
                title: '12.12精彩演出1元秒杀，全场领券立减¥200！', // 分享标题
                desc: '聚橙网吃土节 吃土撒欢购', // 分享描述
                link: location.href, // 分享链接
                imgUrl: 'http://zhuanti.juooo.com/zhuanti/mtouch/zhuanti/2017/1212/images/share.jpg' // 分享图标
            };

            //分享朋友圈
            wx.onMenuShareTimeline(data);

            //分享给微信好友
            wx.onMenuShareAppMessage(data);

            //分享到QQ
            wx.onMenuShareQQ(data);

            //分享到QQ空间
            wx.onMenuShareQZone(data);
        });
    </script>    
    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/swiper-3.4.2.min.js"></script>
    <script src="js/parallax.min.js"></script>
    <script src="js/main.js"></script>

    <!--//移动端统计代码-->
    <div style="display: none;">
        <script>
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?71a86e97964adcd89108b19df922708a";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        </script>
        <script src='http://s23.cnzz.com/stat.php?id=612289&web_id=612289&show=pic' language='JavaScript' charset='gb2312'></script>
    </div>    

</body>
</html>