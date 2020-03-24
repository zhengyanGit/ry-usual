;
(function (M, window) {
  M.ui.define('head', function () {
    function Head (ops) {
      this.ops = ops;
      this.creat();
    }
    Head.prototype = {
      constructor: Head,
      creat: function () {
        if (this.ops) {
          this.resolve();
          this.addCssByLink();
          return this;
        }
        return null;
      },
      addCssByLink: function () {
        var doc = document;
        var link = doc.createElement("link");
        link.setAttribute("rel", "shortcut icon");
        link.setAttribute("type", "image/ico");
        link.setAttribute("href", "../res/images/favicon.ico");

        var heads = doc.getElementsByTagName("head");
        if (heads.length)
          heads[0].appendChild(link);
        else
          doc.documentElement.appendChild(link);
      },
      //"'+ $.interfacePath.hrefIp + '"
      resolve: function () {
        var O = $('.g-navbar');
        var str;
        str = '<div class="g-navbar-container"><div class="g-navbar-left">						<a href="javascript:;" class="logo"><img width="150px" src="../../base/images/logo.png" alt=""></a>						<a id="workbench" href="javascript:;"><i class="iconfont g-font12"></i> 工作台</a>						<a id="workbench" style="padding-left:10px;" href="javascript:;"><i class="iconfont g-font12"></i> 供应商工作台</a>					</div>					<div class="g-navbar-right">						<ul>							<li class="g-navbar-right-txt g-login">欢迎您！上海欧冶金融信息服务股份有限公司</li>							<li class="g-navbar-right-txt g-navbar-dropdown">								<a href="javascript:;">业务导航</a>								<div class="g-navbar-dropdown-box"></div>								<ul class="g-navbar-dropdown-content">									<li><a href="http://lc.ouyeelf.com" target="_blank">财富管理</a></li>									<li><a href="http://rz.ouyeelf.com/oyrz_finance_web" target="_blank">融资平台</a></li>									<li><a href="http://www.shdongchan.com" target="_blank">资产管理</a></li>									<li><a href="http://www.easternpay.com.cn" class="last" target="_blank">东方付通</a></li>								</ul>							</li>							<li class="g-navbar-right-txt">								<a href="javascript:;" class="js-exit">退出</a>							</li>						</ul>					</div>					<div class="g-clear"></div></div>';
        O.append(str);


        var userInfo = localStorage.getItem('userInfo');

        if (!userInfo) {
          $('.g-unlogin').show();
          //$('.g-login').hide();
        } else {
          userInfo = JSON.parse(userInfo);
          $('.g-unlogin').hide();//JSON.parse(userInfo).comName)
          $('.g-login').html('欢迎您！' + userInfo.comName + '&nbsp;&nbsp;' + userInfo.userName).show();
        }
        this.addEvent();
      },
      addEvent: function () {
        $('.g-navbar-dropdown').click(function () {
          if ($('.g-navbar-dropdown-content').is(':hidden')) {
            $('.g-navbar-dropdown-box').show();
            $('.g-navbar-dropdown-content').show().animate({ 'margin-top': '6px', 'opacity': '1' }, 300)
          } else {
            $('.g-navbar-dropdown-box').hide();
            $('.g-navbar-dropdown-content').animate({ 'margin-top': '30px', 'opacity': '0' }, 300, function () {
              $('.g-navbar-dropdown-content').hide();
            })
          }
        })
        $('.g-navbar-dropdown').unbind('mouseleave').bind('mouseleave', function () {
          $('.g-navbar-dropdown-box').hide();
          $('.g-navbar-dropdown-content').animate({ 'margin-top': '30px', 'opacity': '0' }, 300, function () {
            $('.g-navbar-dropdown-content').hide();
          })
        })
      }
    };
    return {
      init: function (ops, context) {
        var userData = localStorage.getItem('userInfo');
        //  var userData=own.fetch('userInfo');
        //if(userData){
        return new Head(M.extend(true, {}, JSON.parse(userData), ops));
        // }else{
        // 	M.ui.ajax.init({
        // 		url:M.getNormalPath('getInfo.json',4),
        // 		type:'get',
        // 		data:null,
        // 		success:function(data){
        // 			if(data.user){
        // 				localStorage.setItem('user', JSON.stringify(data));
        // 			}
        // 			return new Head(M.extend(true, {}, data, ops));
        // 		}
        // 	})
        // }
      }
    };
  });
})(window.jQuery, window);
