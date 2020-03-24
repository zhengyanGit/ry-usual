/**
 * 用途:配置JS路径和依赖关系
 * 日期：2018/05/10
 */
window.bsteel = window.bsteel || {};
window.bsteel.path = {
  //public:'http://10.70.64.1:8080/statics/',
  public: '../../',
  assets: '../',
  routerUrl: window.location.pathname.slice(0, window.location.pathname.indexOf('/template')) + '/',
};
// console.log('window.bsteel.path', window.bsteel.path)
require.config({
  baseUrl: window.bsteel.path.public,
  urlArgs: 't=1',
  paths: {
    jquery: 'base/js/core/jquery-1.7.2.min',
    easing: 'base/js/core/jquery.easing.1.3',
    parallax: 'base/js/core/jquery-parallax',
    mousewheel: 'base/js/core/jquery.mousewheel.min',
    template: 'base/js/core/template',
    common: 'base/js/common/base.common',
    routerData: 'base/js/core/routerData', //前台路由
    comm: 'template/res/js/private/common',
    calculator: 'base/js/common/base.calculator',
    base: 'base/js/common/base.static',
    font: 'base/js/common/base.font',
    calendar: 'base/js/common/ui/base.calendar.2.0.0',
    calendarTwo: 'base/js/common/ui/calendar',
    cityQuery: 'base/js/common/ui/base.city.query',
    confirm: 'base/js/common/ui/base.confirm',
    customDialog: 'base/js/common/ui/base.customDialog',
    drag: 'base/js/common/ui/base.drag',
    fuzzy: 'base/js/common/ui/base.fuzzy',
    fuzzyCompanyName: 'base/js/common/ui/base.fuzzy.fuzzyCompanyName',
    fuzzyEmployeeName: 'base/js/common/ui/base.fuzzy.fuzzyEmployeeName',
    fuzzyCustomerName: 'base/js/common/ui/base.fuzzy.fuzzyCustomerName',
    fuzzyBizGroup: 'base/js/common/ui/base.fuzzy.bizGroup',
    fuzzyQuery: 'base/js/common/ui/base.fuzzyQuery',
    loop: 'base/js/common/ui/base.loop',
    menu: 'base/js/core/base.menu',
    head: 'base/js/core/base.head',
    navbar: 'base/js/core/base.navbar',
    page: 'base/js/common/ui/base.page',
    scroll: 'base/js/common/ui/base.scroll',
    select: 'base/js/common/ui/base.select',
    slider: 'base/js/common/ui/base.slider',
    status: 'base/js/common/ui/base.status',
    time: 'base/js/common/ui/base.time',
    validate: 'base/js/common/ui/base.validate',
    waiting: 'base/js/common/ui/base.waiting',
    upload: 'base/js/common/ui/jquery.form',
    tab: 'base/js/common/ui/base.tab',
    form: 'base/js/common/ui/base.form',
    progressBar: 'base/js/common/ui/base.progressBar',
    creatTable: 'base/js/common/ui/base.creatTable',
    upload: 'base/js/common/ui/base.upload',
    renderView: 'base/js/common/ui/render.view',
    utils: 'base/js/lib/utils',
    plupload: 'base/js/core/plupload.full.min',
    TopEsa: 'base/js/core/TopEsa.minhttps-3.2.0.2',
    signMessage: 'base/js/core/signMessage',
    qrcode: 'base/js/core/jquery-qrcode-0.14.0.min',
    md5: 'base/js/core/md5',
    swiper: 'base/js/core/swiper.min',
    render: 'base/js/core/render',
    router: 'base/js/core/router',
    ueditorconfig: 'base/js/lib/ueditor/ueditor.config',
    ueditor: 'base/js/lib/ueditor/ueditor.all',
    zeroClipboard: 'base/js/lib/ueditor/third-party/zeroclipboard/ZeroClipboard',
    base64: 'base/js/core/base64',
    jscolor: 'base/js/core/jscolor',//拾色器
  },
  shim: {
    base64: {
      deps: ['jquery']
    },
    router: {
      deps: ['jquery', 'common']
    },
    md5: {
      deps: ['jquery']
    },
    renderView: {
      deps: ['jquery', 'render']
    },
    qrcode: {
      deps: ['jquery']
    },
    signMessage: {
      deps: ['jquery', 'TopEsa']
    },
    TopEsa: {
      deps: ['jquery']
    },
    plupload: {
      deps: ['jquery']
    },
    easing: {
      deps: ['jquery']
    },
    parallax: {
      deps: ['jquery']
    },
    mousewheel: {
      deps: ['jquery']
    },
    font: {
      deps: ['common']
    },
    comm: {
      deps: ['jquery', 'easing']
    },
    common: {
      deps: ['mousewheel', 'easing']
    },
    calendar: {
      deps: ['scroll']
    },
    calendarTwo: {
      deps: ['scroll']
    },
    cityQuery: {
      deps: ['common']
    },
    base: {
      deps: ['font', 'waiting']
    },
    loop: {
      deps: ['common']
    },
    confirm: {
      deps: ['drag', 'common', 'font']
    },
    customDialog: {
      deps: ['scroll', 'drag']
    },
    drag: {
      deps: ['common']
    },
    fuzzy: {
      deps: ['scroll']
    },
    fuzzyCompanyName: {
      deps: ['scroll']
    },
    fuzzyEmployeeName: {
      deps: ['scroll']
    },
    fuzzyQuery: {
      deps: ['scroll']
    },
    menu: {
      deps: ['common', 'jquery', 'utils']
    },
    head: {
      deps: ['common', 'jquery']
    },
    navbar: {
      deps: ['common', 'jquery']
    },
    upload: {
      deps: ['common', 'jquery']
    },
    page: {
      deps: ['common', 'font']
    },
    scroll: {
      deps: ['common']
    },
    select: {
      deps: ['scroll']
    },
    slider: {
      deps: ['common']
    },
    status: {
      deps: ['drag', 'common']
    },
    time: {
      deps: ['common']
    },
    validate: {
      deps: ['common']
    },
    waiting: {
      deps: ['common']
    },
    upload: {
      deps: ['common']
    },
    tab: {
      deps: ['common', 'base']
    },
    calculator: {
      deps: ['common']
    },
    form: {
      deps: ['validate', 'waiting']
    },
    creatTable: {
      deps: ['common', 'scroll']
    },
    progressBar: {
      deps: ['common']
    },
    ueditor: {
      deps: ['ueditorconfig', 'zeroClipboard']
    },
  }
});
