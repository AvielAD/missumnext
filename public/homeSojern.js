(function () {
    var params = {};
    /* Please do not modify the below code. */
    var cid = [];
    var paramsArr = [];
    var cidParams = [];
    var pl = document.createElement('script');
    var defaultParams = {"vid":"hot"};
    for(key in defaultParams) { params[key] = defaultParams[key]; };
    for(key in cidParams) { cid.push(params[cidParams[key]]); };
    params.cid = cid.join('|');
    for(key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) };
    pl.type = 'text/javascript';
    pl.async = true;
    pl.src = 'https://beacon.sojern.com/pixel/p/321398?f_v=v6_js&p_v=1&' + paramsArr.join('&');
    (document.getElementsByTagName('head')[0] || 
    document.getElementsByTagName('body')[0]).appendChild(pl);
    })();