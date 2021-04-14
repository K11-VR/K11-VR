$(function () {
  $.post(
    "http://api.brilliantidea.cn/api/v1/wechat/9999",
    {
      url: location.href,
    },
    function (result) {
      window.jssdk = result?.data;

      // 配置功能
      wx.config({
        debug: false,
        appId: jssdk.appId,
        timestamp: parseInt(jssdk.timestamp),
        nonceStr: jssdk.nonceStr,
        signature: jssdk.signature,
        jsApiList: [
          "onMenuShareTimeline", //分享给好友
          "onMenuShareAppMessage", //分享到朋友圈
        ],
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
        // alert("失败")
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
  });
});