const unionid = new URL(location).searchParams.get("unionid");
const openid = new URL(location).searchParams.get("openid");
const code = new URL(location).searchParams.get("code");
const local = new URL(location).searchParams.get("local");

if (!local) {
  if (openid && code && unionid) {
    $.post(
      "http://tjk11-survey.brilliantidea.cn/api/v1/tjk11-hall/check-k11-member",
      {
        unionid,
      },
      function (user) {
        if (!user.data.is_member) {
          location.replace(
            `http://test.app.klub11.com/?r=page/auth&account_id=118&_redirecturl=http://tjk11-hall.brilliantidea.cn`
          );
        } else {
          $.post(
            "http://tjk11-survey.brilliantidea.cn/api/v1/tjk11-hall/get-weixin-userinfo",
            {
              openid,
              code,
            },
            function (user) {
              window.city = user.data.city;
              console.log("city", window.city);
            }
          );
          $.post(
            "http://tjk11-survey.brilliantidea.cn/api/v1/tjk11-hall/get-jsconfig",
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
                jsApiList: [
                  "updateAppMessageShareData",
                  "updateTimelineShareData",
                  "onMenuShareTimeline",
                  "onMenuShareAppMessage",
                  "getLocation"
                ],
              });
            }
          );
        }
      }
    );
  } else {
    $.post(
      "http://tjk11-survey.brilliantidea.cn/api/v1/tjk11-hall/get-weixin-oauth",
      {
        redirect_url: `http://tjk11-hall.brilliantidea.cn/`,
      },
      function (data) {
        const { apiUrl, ...param } = data.data;
        // TODO: 可加过度动画
        location.replace(
          apiUrl + "/v1/oauth2/authorize-base?" + $.param(param)
        );
      }
    );
  }

  wx.ready(function () {
    wx.onMenuShareTimeline({
      title: "天津K11 select艺术典藏线上艺术空间", // 分享标题
      desc: "即可领略天津K11 select的艺术典藏",
      link: "http://tjk11-hall.brilliantidea.cn", // 分享链接
      imgUrl: "http://tjk11-hall.brilliantidea.cn/sources/share.jpg", // 分享图标
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
      imgUrl: "http://tjk11-hall.brilliantidea.cn/sources/share.jpg", // 分享图标
      success: function () {
        //alert("成功");
      },
      cancel: function () {
        //alert("失败")
      },
    });
  });

  window.index = true;
}
