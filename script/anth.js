$(function() {
  const openid = new URL(location).searchParams.get('openid');
  const code = new URL(location).searchParams.get('code');
  const local = new URL(location).searchParams.get('local')

  if (local) {
    return;
  }

  if (openid && code) {
      $.post("http://tjk11-survey.brilliantidea.cn/api/v1/tjk11-hall/get-weixin-userinfo", {
        openid,
        code,
      }, function(user) {
        window.city = user?.data?.city;
        console.log('city', window.city);
      })
  } else {
    $.post("http://tjk11-survey.brilliantidea.cn/api/v1/tjk11-hall/get-weixin-oauth", {
      redirect_url: 'http://tjk11-hall-uat.brilliantidea.cn/', 
    }, function( data ) {
      const param = data.data;
      location.replace('https://api.klub11.com/v1/oauth2/authorize-base?' + $.param(param))
      console.log('data', JSON.stringify(data, null, 2));
    });
  }
})