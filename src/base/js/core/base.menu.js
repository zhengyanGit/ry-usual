/**
 * 公共菜单
 * @import common/fx.common.js
 *
 * @index                     array        			(必须)高亮展示					          	默认 [null,null] 对应下标值为对应级别菜单
 * @refreshDOM			      function 				(可选)展开收拢后回调
 * @callback                  function            	(可选)初始化完成回调
 */
;
(function (M, window) {
  M.ui.define('menu', function () {
    function Menu (ops) {
      this.ops = ops;
      this.creat();
    }

    Menu.prototype = {
      constructor: Menu,
      creat: function () {
        if (this.ops.menu.length) {
          this.resolve();
          return this;
        }
        return null;
      },
      resolve: function () {
        var o = M('.ui-menu');
        var i = 0;
        var str = '';
        var len = this.ops.menu.length;
        for (; i < len; i++) {
          str += this.render(this.ops.menu[i], i);
        };
        var that = this;
        that.menuInfo(that, str, o);
      },
      menuInfo: function (that, str, o) {
        var strchildren = '<div class="ui-menu-content"><div class="ui-menu-main">' + str + '</div></div>';
        o.append(strchildren);

        var locStr = window.location.href;
        var urlStr = locStr.substring(locStr.indexOf('#!'));
        if (urlStr.indexOf('?') != -1) urlStr = urlStr.split('?')[0];
        for (var i = 0; i < that.ops.menu.length; i++) {
          for (var j = 0; j < that.ops.menu[i].children.length; j++) {
            if (that.ops.menu[i].children[j].path == urlStr) {
              that.ops.index = [i, j]
            }
          }
        }
        if (M.isNumeric(that.ops.index[0]) && that.ops.index[0] >= 0 && that.ops.index[0] <= that.ops.menu.length - 1) {
          if (M.isNumeric(that.ops.index[1])) {
            var current = M('.ui-menu-item').eq(that.ops.index[0]);
            current.addClass('active').find('.ui-menu-detail li').eq(that.ops.index[1]).addClass('active');
          }
        }

        $('.ui-menu-item').unbind('click').bind('click', this.showLi);
        $('.ui-menu-item').on('click', '.ui-menu-detail li', function (event) {
          $('.ui-menu-detail li').removeClass('active')
          $(this).addClass('active');
          $(this).parents('.ui-menu-item').addClass('active').siblings().removeClass('active');
          event.stopPropagation();
        });
        that.menuShow();
        M.isFunction(that.ops.callback) && that.ops.callback.call(that);
      },
      showLi: function () {
        if ($(this).find('.ui-menu-detail').is(':hidden')) {
          $(this).addClass('open').siblings().removeClass('open')
          $(this).find('.ui-menu-detail').stop().slideDown().siblings().find('.ui-menu-arrow').html('&#xe64d;');
          $(this).siblings().find('.ui-menu-detail').stop().slideUp().siblings().find('.ui-menu-arrow').html('&#xe614;');
        } else {
          $(this).removeClass('open');
          $(this).find('.ui-menu-detail').stop().slideUp().siblings().find('.ui-menu-arrow').html('&#xe614;');
        }
      },
      menuShow: function () {
        if ($('.ui-menu').hasClass('ui-menu-bg')) {
          M('.ui-menu-item').each(function () {
            if ($(this).hasClass('active')) {
              $(this).addClass('open').siblings().removeClass('open')
              $(this).find('.ui-menu-detail').stop().slideDown().siblings().find('.ui-menu-arrow').html('&#xe64d;');
              $(this).siblings().find('.ui-menu-detail').stop().slideUp().siblings().find('.ui-menu-arrow').html('&#xe614;');
            } else {
              $(this).removeClass('open');
              $(this).find('.ui-menu-detail').stop().slideUp().siblings().find('.ui-menu-arrow').html('&#xe614;');
            }
          });
        } else {
          $('.ui-menu').hover(
            function () {
              $('.ui-menu').stop().animate({ 'width': '200px' }, 300)
            },
            function () {
              $('.ui-menu').stop().animate({ 'width': '50px' }, 200)
              $('.ui-menu-item .ui-menu-detail').hide().siblings().find('.ui-menu-arrow').html('&#xe614;');
            }
          )
        };

      },
      render: function (data, i) {
        return M.renderHTML({
          name: 'li',
          proto: {
            'class': 'ui-menu-item'
          },
          html: M.renderHTML({
            name: 'a',
            proto: {
              'class': 'ui-menu-first',
              'href': ('children' in data) ? 'javascript:;' : data.path
            },
            html: M.renderHTML({
              name: 'i',
              proto: {
                'class': 'iconfont ui-menu-icon ' + data.fontsize + ''
              },
              html: data.icon
            }) + M.renderHTML({
              name: 'span',
              proto: {
                'class': 'text'
              },
              html: data.name
            }) + (('children' in data) ? M.renderHTML({
              name: 'i',
              proto: {
                'class': 'iconfont font14 ui-menu-arrow'
              },
              html: '&#xe614;'
            }) : '')
          }) + (('children' in data) ? this.renderSub(data.children) : '')
        })
      },
      renderSub: function (data) {
        for (var i = 0, str = ''; i < data.length; i++) {
          str += M.renderHTML({
            name: 'li',
            html: M.renderHTML({
              name: 'a',
              proto: {
                'href': ('children' in data) ? 'javascript:;' : data[i].path
              },
              html: data[i].name
            })
          });
        }

        return M.renderHTML({
          name: 'ul',
          proto: {
            'class': 'ui-menu-detail'
          },
          html: str
        });
      },
      destroy: function () {
        delete this;
      }
    };
    return {
      defaults: {
        index: own.fetch('menu').index || [],
        callback: function () { },
        url: null
      },
      saveIndex: function () {
        var childrenIndex = $(this).parent().children('li').index($(this));
        var menuIndex = $('.ui-menu-item').index($(this).parent().parent());
        var index = [menuIndex, childrenIndex];
        if (own.fetch('menu')) {
          var localMenu = own.fetch('menu');
          localMenu.index = index;
          own.save('menu', localMenu);
        }
      },
      passedMenu: function (arr) {
        if (!arr || arr.length == 0) { return { menu: [] } }
        var passedMenu = []
        for (var i = 0; i < arr.length; i++) {
          var menuOne = arr[i];
          if (menuOne.hidden !== true) {
            if (menuOne.children && menuOne.children.length > 0) {
              var SubMenu = [];
              for (var k = 0; k < menuOne.children.length; k++) {
                var children = menuOne.children[k];
                if (children.hidden !== true) {
                  SubMenu.push(children)
                }
              }
              menuOne.children = SubMenu;
              passedMenu.push(menuOne);
            } else {
              passedMenu.push(menuOne);
            }
          }
        }
        return {
          menu: passedMenu
        };
      },
      init: function (ops, context) {
        if ($('.ui-menu-content').length > 0) return;
        var that = this;
        var menuData = {
          "menu": [{
            "path": "/",
            "component": "HZZJGL",
            "name": "我的通宝",
            "iconCls": "&#xe654;",
            "hidden": false,
            "menuType": null,
            "children": [{
              "path": "#!/fundsManage/account",
              "component": "HZWDZH",
              "name": "我的通宝",
              "iconCls": "&#xe654;",
              "hidden": false,
              "menuType": "20",
              "children": null,
              "meta": {
                "login": false
              },
              "fontsize": null,
              "menuId": "8b4e9377ab4545b9ae9cfe79f7e0fe42"
            }],
            "meta": {
              "login": false
            },
            "fontsize": null,
            "menuId": "58f5d6bcc8134c7883f38abfd6c1e439",
            "icon": "&#xe654;"
          }, {
            "path": "/",
            "component": "HZDDGL",
            "name": "发票管理",
            "iconCls": "&#xe620;",
            "hidden": false,
            "menuType": null,
            "children": [{
              "path": "#!/orderManage/orderListBuy/orderList",
              "component": "HZDDLBMJ1",
              "name": "发票管理",
              "iconCls": "&#xe631;",
              "hidden": false,
              "menuType": "20",
              "children": null,
              "meta": {
                "login": false
              },
              "fontsize": null,
              "menuId": "1905268c4d8c4e848520aa4270a45132"
            }, {
              "path": "#!/orderManage/orderListSold/orderList",
              "component": "HZDDLBMJ2",
              "name": "验票记录",
              "iconCls": "&#xe631;",
              "hidden": false,
              "menuType": "20",
              "children": null,
              "meta": {
                "login": false
              },
              "fontsize": null,
              "menuId": "7f8ec69d7f844fa4ab302e5d905af59b"
            }],
            "meta": {
              "login": false
            },
            "fontsize": null,
            "menuId": "27963b6c5f9942198ff13b44a1d38971",
            "icon": "&#xe620;"
          }, {
            "path": "/",
            "component": "HZSPGL",
            "name": "协议管理",
            "iconCls": "&#xe632;",
            "hidden": false,
            "menuType": null,
            "children": [{
              "path": "#!/commodity/commodity-list",
              "component": "HZSPLLB",
              "name": "平台协议",
              "iconCls": "fa fa-address-card",
              "hidden": false,
              "menuType": "20",
              "children": null,
              "meta": {
                "login": false
              },
              "fontsize": null,
              "menuId": "956dde4661ca49cc909c2205cb4e1909"
            }],
            "meta": {
              "login": false
            },
            "fontsize": null,
            "menuId": "544fb3696be948619330179050468ef9",
            "icon": "&#xe632;"
          }]
        }



        if (menuData) {
          return new Menu(M.extend(true, {}, menuData, ops, this.defaults));
        } else {
          //return
          M.ajaxFn({
            //url:ops.url,
            url: M.interfacePath.basic + 't/rms/getMenuListByMember',
            type: 'POST',
            data: {
              // memberId: own.fetch('userInfo').comId,
              // userId: own.fetch('userInfo').userId,
              sysCode: '1',
              ext6: "2"
            },
            success: function (res) {
              var data = res.data;
              for (var index in data) {
                data[index].icon = data[index].iconCls
                //data[index].icon = '&#xe679;'
              }

              //根据后台返回 hidden 属性过滤菜单
              // var passedMenu = that.passedMenu(data.menu);
              var passedMenu = that.passedMenu(data);


              if (passedMenu.menu.length > 0) {
                localStorage.setItem('menu', JSON.stringify(passedMenu));
              }
              return new Menu(M.extend(true, {}, passedMenu, ops, this.defaults));
            }
          })
        }
      }
    };
  });
})(window.jQuery, window);
