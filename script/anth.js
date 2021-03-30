$(function () {
  const unionid = new URL(location).searchParams.get("unionid");
  const openid = new URL(location).searchParams.get("openid");
  const code = new URL(location).searchParams.get("code");
  const local = new URL(location).searchParams.get("local");

  if (local) {
    return;
  }

  if (openid && code && unionid) {
    $.post(
      "http://tjk11-survey.brilliantidea.cn/api/v1/tjk11-hall/check-k11-member",
      {
        unionid,
      },
      function (user) {
        if (!user.data.is_member) {
          location.replace(
            "http://test.app.klub11.com/?r=page/auth&account_id=118&_redirecturl=http://tjk11-hall.brilliantidea.cn"
          );
        } else {
          $.post(
            "http://tjk11-survey.brilliantidea.cn/api/v1/tjk11-hall/get-weixin-userinfo",
            {
              openid,
              code,
            },
            function (user) {
              window.city = user?.data?.city;
              console.log("city", window.city);
            }
          );
        }
      }
    );
  } else {
    $.post(
      "http://tjk11-survey.brilliantidea.cn/api/v1/tjk11-hall/get-weixin-oauth",
      {
        redirect_url: "http://tjk11-hall.brilliantidea.cn/",
      },
      function (data) {
        const { apiUrl, ...param } = data.data;
        location.replace(
          apiUrl + "/v1/oauth2/authorize-base?" + $.param(param)
        );
      }
    );
  }
});
