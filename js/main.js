
$(function () {

    var seckillData = null;
    //var timeForSeckill = getServerDate(); //用于秒杀判断状态的时间
    var timeForSeckill = null;
    var time7 = new Date('2017/12/07 00:00:00');
    var time11 = new Date('2017/12/11 00:00:00');
    var time12 = new Date('2017/12/12 00:00:00');
    var time13 = new Date('2017/12/13 00:00:00');
    var time14 = new Date('2017/12/14 00:00:00');
    initData();
    
    //初始化重力感应插件
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    /**
     * 初始化时间轮播
     * time: 2017/12/3
     * author: LiuWei
     */
    function initTimeSwiper() {
        var timeSwiper = new Swiper('.time-swiper', {
            freeMode: true,
            freeModeMomentumRatio: 0.5,
            slidesPerView: 'auto',
            onInit: function () {
                $('.time-swiper .swiper-slide').eq(0).addClass('active');
                $('.time-swiper .swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)');
            }
        });
    }

    /**
     * 初始化数据
     * time: 2017/12/3
     */
    function initData() {
        $.ajax({
            type: 'get',
            url: 'http://activity.juooo.com/doubleTwelve/nowTime',
            async: false,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (res) {
                if(res.code=='time'){
                    timeForSeckill = new Date(res.data * 1000);
                    initSeckill();
                    console.log(timeForSeckill);
                }else{
                    return new Date();
                    timeForSeckill = new Date();
                    initSeckill();
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, textStatus, errorThrown);
                timeForSeckill = new Date();
                initSeckill();
            }
        })
    }

    //滚动时导航栏
    var navTop = $('.js-navbar').offset().top;
    var navHeight = $('.js-navbar').height();
    $(window).on('scroll',function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > navTop){
            $('.js-navbar').addClass('fix-top');
            $('.navbar.is-placeholder').show();
        }else{
            $('.js-navbar').removeClass('fix-top');
            $('.navbar.is-placeholder').hide();
        }

        //楼层导航
        var couponTop = $('.coupon-area').offset().top;
        var seckillTop = $('.seckill-area').offset().top;
        var concertTop = $('.concert-area').offset().top;
        var discountTop = $('.discount-area').offset().top;
        var hotTop = $('.hot-area').offset().top;
        var buffer = 200;
        if (scrollTop + buffer > couponTop && scrollTop + buffer < seckillTop) {
            $('.js-navbar .nav-item').eq(0).addClass('active').siblings().removeClass('active');
        } else if (scrollTop + buffer > seckillTop && scrollTop + buffer < concertTop) {
            $('.js-navbar .nav-item').eq(1).addClass('active').siblings().removeClass('active');
        } else if (scrollTop + buffer > concertTop && scrollTop + buffer < discountTop) {
            $('.js-navbar .nav-item').eq(2).addClass('active').siblings().removeClass('active');
        } else if (scrollTop + buffer > discountTop && scrollTop + buffer < hotTop) {
            $('.js-navbar .nav-item').eq(3).addClass('active').siblings().removeClass('active');
        } else if (scrollTop + buffer > hotTop) {
            $('.js-navbar .nav-item').eq(4).addClass('active').siblings().removeClass('active');
        }
    })

        //是否在微信内打开  
    function isWeixin() {  
        var ua = navigator.userAgent.toLowerCase();  
        if (ua.match(/MicroMessenger/i) == "micromessenger") {  
            return true;  
        } else {  
            return false;  
        }  
    }
    /**
     * 获取数据
     * author: LiuWei
     * time: 2017/12/2
     * @param {any} params 
     */
    function getHotShow() {
        $.ajax({
            type: 'post',
            url: 'http://www.ilout.com/juooo/1212.php',
            dataType: 'jsonp',
            jsonp:'callback',
            success: function (res) {
                var dataArray = res;
                var dataHtml = '';
                for(var i=0;i<dataArray.length;i++){
                    dataHtml += '<a href="https://m.juooo.com/search/searchresult?k=' + dataArray[i][5] + '" class="show-item">';
                    dataHtml += '<div class="img-wrap">';
                    dataHtml += '<img src="' + dataArray[i][2] +'" alt="">';
                    dataHtml += '</div>';
                    dataHtml += '<div class="show-title">' + dataArray[i][1] +'</div>';
                    dataHtml += '<div class="show-time">时间：' + dataArray[i][4]+'</div>';
                    dataHtml +=        '<div class="price-wrap">';
                    dataHtml +=            '<p class="show-price tar">';
                    dataHtml +=                '<span class="yuan">&yen;</span>';
                    dataHtml += '<span class="now-num">' + parseFloat(dataArray[i][3]) +'</span>';
                    dataHtml +=                '<span class="disc-suf">起</span>';
                    dataHtml +=            '</p>';
                    dataHtml +=        '</div>';
                    dataHtml +='</a>';
                }
                $('.hot-area .show-wrap').html(dataHtml);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, textStatus, errorThrown);
            }
        })        
    }

    //点击城市时
    $('.city-swiper').on('click','.swiper-slide',function () {
        if ($(this).hasClass('remark')){
            return false;
        }
        $(this).addClass('active').siblings().removeClass('active');
        getDisountShow($(this).attr('data-id'));
    })

    //点击切换日期时
    $('.date-tab').on('click','.date-item',function(){
        $(this).addClass('active').siblings().removeClass('active');
        var tabIndex = $(this).index();
        if (tabIndex == 0){
            if (timeForSeckill.getTime() > time7.getTime() && timeForSeckill.getTime() < time12.getTime()){
                getSeckillShow(timeForSeckill,false);
            } else if (timeForSeckill.getTime() < time7.getTime()) {
                getSeckillShow(time7,false);
            }else{
                getSeckillShow(time11,false);
            }
        }else if(tabIndex == 1){
            getSeckillShow(time12,true);
        }else{
            getSeckillShow(time13,true);
        }
    })

    //点击切换时间点
    $('.time-swiper').on('click', '.swiper-slide', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var timeKey = $(this).attr('data-key');
        tabSeckillShow(seckillData[timeKey]);
    })

    //点击导航定位
    $('.nav-item').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        var domClass = $(this).attr('data-anchor');
        var domTop = $('.' + domClass).offset().top;
        $('body,html').animate({ scrollTop : domTop - navHeight});
    })

    //点击查看背包
    var pressTimer = null;
    $('.circle-tip').on('touchstart',function (e) {
        e.preventDefault();
        e.stopPropagation();
        pressTimer = setTimeout(function () {
                        $('.package-pop').addClass('active');
                    },600)
    }).on('touchend',function(e){
        e.preventDefault();
        e.stopPropagation();
        clearTimeout(pressTimer);
        $('.package-pop').removeClass('active');
    })

    
    $('.top').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('body,html').animate({
            scrollTop: 0
        });
    })

    getHotShow();
   //正式服地址
   
    var getCouponUrl = 'http://m.juooo.com/theme/dbElevenGet?passWxWebOauth=1'; //优惠券接口地址
    var getSeckillUrl = 'http://activity.juooo.com/DoubleTwelve/getSeckillList';
    var getDisountUrl = 'http://activity.juooo.com/doubleTwelve/getSchedularListsByActivityId';
    var getTimeUrl = 'http://activity.juooo.com/doubleTwelve/nowTime';


    //点击领取优惠券
    $('.ticket-wrap').on('click', '.ticket-item', function () {
        var that = $(this);
        var ticketId = that.attr('data-id');
        if(that.hasClass('disabled')){
            return false;
        }
        $.ajax({
            type: 'post',
            url: getCouponUrl,
            data: {
                'cid': ticketId
            },
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (res) {
                if (res.code == 300){
                    window.location.href = 'http://m.juooo.com/passport/login?return_url='+ window.location.href +'';
                } else if (res.code == 200) {
                    var msg = res.msg;
                    var timeStamp = new Date().getTime();
                    $(that).addClass('disabled').find('.get-btn').text('已领取');
                    $('body').append('<div class="dialog dialog' + timeStamp + '">' + msg + '</div>');
                    setTimeout(function () {
                       $('.dialog' + timeStamp).remove();
                    },2000)
                }else{
                    var msg = res.msg;
                    var timeStamp = new Date().getTime();
                    $('body').append('<div class="dialog dialog' + timeStamp + '">' + msg + '</div>');
                    setTimeout(function () {
                        $('.dialog' + timeStamp).remove();
                    }, 2000)
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('error');
                console.log(XMLHttpRequest, textStatus, errorThrown);
            }
        })
    })



    function cutTimeStr(timeStr){
        var hm = timeStr.split(' ')[1];//获取时分
        return hm.substring(0,hm.length-3);
    }

    //初始化数据，初始化优惠券



    function initSeckill() {
        if (timeForSeckill.getTime() > time7.getTime() && timeForSeckill.getTime() < time12.getTime()) {
            //6号至11号
            getSeckillShow(timeForSeckill, false);
            $('.date-tab .date-item').eq(0).addClass('active');
        } else if (timeForSeckill.getTime() > time12.getTime() && timeForSeckill.getTime() < time13.getTime()) {
            getSeckillShow(time12, true);
            $('.date-tab .date-item').eq(1).addClass('active');
            $('.ticket-wrap .ticket-item').hide();
            $('#ticket12').show();
            $('#ticket13').addClass('disabled').show().find('.get-btn').text('即将开始');
        } else if (timeForSeckill.getTime() > time13.getTime() && timeForSeckill.getTime() < time14.getTime()) {
            getSeckillShow(time13, true);
            $('.date-tab .date-item').eq(2).addClass('active');
            $('.ticket-wrap .ticket-item').hide();
            $('#ticket13').show();
            $('#ticket12').addClass('disabled').show().find('.get-btn').text('已结束');
        } else if (timeForSeckill.getTime() < time7.getTime()) {
            getSeckillShow(time7, false);
            $('.date-tab .date-item').eq(0).addClass('active');
            $('.time-swiper .swiper-wrapper').html('<div class="sec-title"></div>');
        } else {
            getSeckillShow(time13, true);
            $('.date-tab .date-item').eq(2).addClass('active');
        }
    }


    /**
     * 获取秒杀模块数据
     * author: LiuWei
     * time: 2017/12/3
     */
    function getSeckillShow(timeObj,flag) {
        //var serverTime = getServerDate();
        var theYear = timeObj.getFullYear();
        var theMonth = timeObj.getMonth() + 1;
        var theDay = timeObj.getDate();
        var alertStr = theYear + '-' + theMonth + '-' + theDay;
        var dataJson = {
            time: theYear + '-' + theMonth + '-' + theDay
        }
        $.ajax({
            type: 'post',
            url: getSeckillUrl,
            data: dataJson,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (res) {
                if(res.code == 200){
                    var dataObj = res.data.list;
                    //console.log(dataObj)
                    seckillData = dataObj;
                    var timeArray = [];
                    var timeHtml = ''
                    for (key in dataObj){
                        var timeStr = cutTimeStr(key);
                        timeArray.push({
                            timeKey: key,
                            timeText: timeStr
                        });
                        timeHtml += '<div class = "swiper-slide" data-key="' + key + '">';
                        timeHtml += '<span>' + timeStr + '</span>';
                        timeHtml += '</div>';
                    }
                    //console.log(timeHtml)
                    if(flag){
                        $('.time-swiper .swiper-wrapper').html(timeHtml);
                        initTimeSwiper();
                    }else{
                        $('.time-swiper .swiper-wrapper').html('<div class="sec-title"></div>');
                        $('.time-swiper .swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)');
                    }
                    tabSeckillShow(dataObj[timeArray[0].timeKey]);
                }else{
                    //console.log(res.code);
                }
                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, textStatus, errorThrown);
            }
        })
    }


    function tabSeckillShow(showArray) {
        var showHtml = '';
        for(var i=0;i<showArray.length;i++){
            var showSatus = checkStatus(showArray[i]);
            /* if (showSatus == 1){
                showHtml += '<a href="https://m.juooo.com/ticket/' + showArray[i].schedular_id + '" class="show-item">';
            }else{
                showHtml += '<a href="javascript:;" class="show-item">';
            } */
            showHtml += '<a href="https://m.juooo.com/ticket/' + showArray[i].schedular_id + '" class="show-item">';
            showHtml +=    '<div class="img-wrap">';
            showHtml += '<img src="' + showArray[i].schedular_pic + '" alt="">';
            if (showSatus == 0) {
                showHtml += '<div class="sellout"></div>';//已抢光
            }
            showHtml +=    '</div>';
            showHtml += '<div class="show-title">' + showArray[i].schedular_name + '</div>';
            showHtml +=    '<div class="price-wrap">';
            showHtml +=        '<p class="show-price">';
            showHtml +=            '<span class="yuan">&yen;</span>';
            showHtml += '<span class="now-num">' + showArray[i].seckill_ticket_price + '</span>';
            showHtml += '<span class="old-num">' + showArray[i].ticket_price + '</span>';
            showHtml +=        '</p>';
            switch (showSatus) {
                case 0:
                    showHtml += '<span class="btn over-btn">已结束</span>';
                    break;
                case 2:
                    showHtml += '<span class="btn wait-btn">即将开始</span>';
                    break;
                default:
                    showHtml += '<span class="btn buy-btn">立即购买</span>';
                    break;
            }
            showHtml +=    '</div>';
            showHtml +='</a>';
        }
        $('.seckill-area .show-wrap').html(showHtml);
    }
    /**
     * 检查状态
     * time:2017/12/3
     * author: LiuWei
     * @param {any} 0为已告罄或者结束，1为立即购买，2为即将开始
     */
    function checkStatus(showObj) {
        if (showObj.limit_stock < 1){
            return 0;
        }else{
            var startTime = new Date(showObj.seckill_start_time.replace(/\./g, '\/')).getTime();
            var endTime = new Date(showObj.seckill_end_time.replace(/\./g, '\/')).getTime();
            if ( timeForSeckill>startTime && timeForSeckill<endTime){
                return 1;
            } else if (timeForSeckill<startTime){
                return 2;
            }else{
                return 0;
            }
        }
    }

    getDiscountCity();
    /**
     * 获取折扣城市区
     * athor: LiuWei
     * time: 2017/12/4
     */
    function getDiscountCity() {
        $.ajax({
            type: 'get',
            url: getDisountUrl,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (res) {
                //console.log(res);
                if (res.code == 200) {
                    var cityObj = res.data;
                    var cityHtml = '<div class="swiper-slide remark"><span>城市：</span></div>';
                    var initCityId = '1';
                    for (key in cityObj){
                        cityHtml += '<div class="swiper-slide" data-id="' + cityObj[key].city_id + '">'
                        cityHtml += '<span>' + cityObj[key].city_name + '</span>';
                        cityHtml += '</div>';
                        if (cityObj[key].city_name=='深圳'){
                            initCityId = cityObj[key].city_id;
                        }
                    }
                    $('.city-swiper .swiper-wrapper').html(cityHtml);
                    var citySwiper = new Swiper('.city-swiper', {
                        freeMode: true,
                        freeModeMomentumRatio: 0.5,
                        slidesPerView: 'auto',
                        onInit: function () {
                            //$('.city-swiper .swiper-slide').eq(1).addClass('active');
                            var initCity = $('.city-swiper .swiper-slide[data-id=' + initCityId + ']')
                            initCity.addClass('active');
                            getDisountShow(initCityId);
                        }
                    });

                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, textStatus, errorThrown);
            }
        })
    }
    /**
     * 获取折扣演出数据
     * author：LiuWei
     * time: 2017/12/4
     * @param {any} cityName 
     */
    function getDisountShow(cityId) {
        $.ajax({
            type: 'get',
            url: getDisountUrl,
            data: {
                city_id: cityId
            },
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (res) {
                //console.log(res);
                if(res.code == 200){
                    var dataArray = res.data;
                    var dataHtml = '';
                    for(var i=0;i<dataArray.length;i++){
                        dataHtml += '<a href="https://m.juooo.com/ticket/' + dataArray[i].id + '" class="show-item">';
                        dataHtml += '<div class="img-wrap">';
                        dataHtml += '<img src="' + dataArray[i].pic + '" alt="">';
                        dataHtml += '</div>';
                        dataHtml += '<div class="show-title">' + dataArray[i].schedular_name + '</div>';
                        dataHtml += '<div class="price-wrap">';
                        dataHtml +=     '<p class="show-price">';
                        dataHtml += '<span class="disc-num">' + dataArray[i].lowest_discount / 10 + '</span>';
                        dataHtml +=         '<span class="disc-suf">折起</span>';
                        dataHtml +=     '</p>';
                        dataHtml +=     '<span class="btn buy-btn">立即购买</span>';
                        dataHtml += '</div>';
                        dataHtml += '</a>';
                    }
                    $('.discount-area .show-wrap').html(dataHtml);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, textStatus, errorThrown);
            }
        })
    }

})