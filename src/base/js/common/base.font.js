/**
 * 用途:字体图标
 * 日期：2018/5/31
 * @import common/bsteel.common.js
 */
; (function (M, window) {
	if (location.href.indexOf('frontPage') !== -1) { //前台icon
		M.define('Font', {
			close_empty: '&#xe61f;', //空心-关闭
			arrow_down_empty: '&#xe636;', //空心-下箭头
			arrow_up_empty: '&#xe6ec;', //空心-上箭头
			arrow_left_empty: '&#xe60c;',  //空心-左箭头
			arrow_right_empty: '&#xe60d;',  //空心-右箭头
			arrow_down_fill: '&#xe64d;', //实心-下箭头
			arrow_up_fill: '&#xe6f6;', //实心-上箭头
			arrow_left_fill: '&#xe6f1;',  //实心-左箭头
			arrow_right_fill: '&#xe6f7;', //实心-右箭头
			close_fill: '&#xe634;', //实心-圆形叉叉
			check_empty: '&#xe666;', //空心-对勾
			check_fill_lighter: '&#xe666;', //实心-精细对勾
			error_fill_circle: '&#xe665;', //实心-圆形感叹号
			error_fill_triangle: '&#xe665;',  //实心-三角感叹号
			return_top_empty: '&#xe6f4;'	 //空心-返回顶部
		});
	} else {
		M.define('Font', { //后台icon
			close_empty: '&#xe61f;', //空心-关闭
			arrow_down_empty: '&#xe636;', //空心-下箭头
			arrow_up_empty: '&#xe6ec;', //空心-上箭头
			arrow_left_empty: '&#xe60c;',  //空心-左箭头
			arrow_right_empty: '&#xe60d;',  //空心-右箭头
			arrow_down_fill: '&#xe64d;', //实心-下箭头
			arrow_up_fill: '&#xe6f6;', //实心-上箭头
			arrow_left_fill: '&#xe6f1;',  //实心-左箭头
			arrow_right_fill: '&#xe6f7;', //实心-右箭头
			close_fill: '&#xe634;', //实心-圆形叉叉
			check_empty: '&#xe64b;', //空心-对勾
			check_fill_lighter: '&#xe64b;', //实心-精细对勾
			error_fill_circle: '&#xe63a;', //实心-圆形感叹号
			error_fill_triangle: '&#xe63a;',  //实心-三角感叹号
			return_top_empty: '&#xe6f4;'	 //空心-返回顶部
		});
	}
})(window.jQuery || window.Zepto || window.xQuery, window);
