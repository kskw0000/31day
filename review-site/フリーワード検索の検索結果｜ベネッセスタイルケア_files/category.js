(function() {
try{
  var pref = location.pathname.match(/\/area_([^\/]+).*/);
  if (pref && pref[1]) {
    __gyr.CookieUtil.write('__gyrc_area', pref[1], __gyr.CookieUtil.days(30), 'benesse-style-care.co.jp');
  }
}catch(e){}
})();
