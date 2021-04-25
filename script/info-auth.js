$(function () {
  $.post(
    "http://api.brilliantidea.cn/api/v1/wechat/9999",
    {
      url: location.href,
    },
    function (result) {
      window.jssdk = result.data;

      // 配置功能
      wx.config({
        debug: false,
        appId: jssdk.appId,
        timestamp: parseInt(jssdk.timestamp),
        nonceStr: jssdk.nonceStr,
        signature: jssdk.signature,
        jsApiList: jssdk.jsApiList,
        // jsApiList: [
        //   "onMenuShareTimeline", //分享给好友
        //   "onMenuShareAppMessage", //分享到朋友圈
        // ],
      });
    }
  );
  wx.ready(function () {
    wx.onMenuShareTimeline({
      title: "来天津K11 Select", // 分享标题
      desc: "揭秘艺术品故事",
      link: "http://tjk11-hall.brilliantidea.cn", // 分享链接
      imgUrl: "http://tjk11-hall.brilliantidea.cn/dist/share.jpg", // 分享图标
      success: function () {
        //alert("成功");
      },
      cancel: function () {
        alert("分享给好友失败\n" + JSON.stringify(window.jssdk));
      },
    });
    wx.onMenuShareAppMessage({
      title: "来天津K11 Select", // 分享标题
      desc: "揭秘艺术品故事",
      link: "http://tjk11-hall.brilliantidea.cn", // 分享链接
      imgUrl: "http://tjk11-hall.brilliantidea.cn/dist/share.jpg", // 分享图标
      success: function () {
        //alert("成功");
      },
      cancel: function () {
        //alert("失败")
      },
    });
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        // 天津 经度 117.2 纬度 39.13
        window.longitude = res.longitude // 经度
        window.latitude = res.latitude // 纬度
      },
      cancel: function () {
        alert("获取定位失败")
      },
     })
  });
});
