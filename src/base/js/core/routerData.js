define(function () {
	return [
		{
			path: '/workbench',
			title: '工作台',
			component: window.bsteel.path.routerUrl + 'template/workbench/index.html'
		},
		{
			path: '/workbench-owner',
			title: '货主工作台',
			component: window.bsteel.path.routerUrl + 'template/workbench/workbench-owner.html'
		},
		{
			path: '/workbench-warehouse',
			title: '仓储工作台',
			component: window.bsteel.path.routerUrl + 'template/workbench/workbench-warehouse.html'
		},
		/** 签名 **/
		{
			path: '/sign/signPreview',
			title: '签署预览',
			component: window.bsteel.path.routerUrl + 'template/sign/signPreview.html'
		},
		{
			path: '/sign/contractPreview',
			title: '合同预览',
			component: window.bsteel.path.routerUrl + 'template/sign/contractPreview.html'
		},
		/** 仓单文本查看 **/
		{
			path: '/warehouse/warehouseReceiptPreview',
			title: '仓单查看',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouseReceiptPreview.html'
		},
		/** 合同管理 **/
		{
			path: '/billsManage/signBillsManage/list',
			title: '合同查询',
			component: window.bsteel.path.routerUrl + 'template/billsManage/signBillsManage/list.html'
		},
		/** 物流管理 **/
		{
			path: '/logisticsManage/deliveryManage/buyerDelivery/list',
			title: '买家提货申请管理',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/deliveryManage/buyerDelivery/list.html'
		},
		{
			path: '/logisticsManage/deliveryManage/sellerDelivery/list',
			title: '卖家提货申请管理',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/deliveryManage/sellerDelivery/list.html'
		},
		{
			path: '/logisticsManage/deliveryManage/buyerDelivery/addDelivery',
			title: '新增提货申请',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/deliveryManage/buyerDelivery/addDelivery.html'
		},
		{
			path: '/logisticsManage/deliveryManage/buyerDelivery/deliveryDetail',
			title: '提单详情',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/deliveryManage/buyerDelivery/deliveryDetail.html'
		},
		{
			path: '/logisticsManage/deliveryManage/sellerDelivery/deliveryDetail',
			title: '提单详情',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/deliveryManage/sellerDelivery/deliveryDetail.html'
		},
		{
			path: '/logisticsManage/sendManage/sellerSendManage/list',
			title: '卖家发货单管理',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/sendManage/sellerSendManage/list.html'
		},

		{
			path: '/logisticsManage/sendManage/sellerSendManage/addDispatchBill',
			title: '新增发货单',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/sendManage/sellerSendManage/addDispatchBill.html'
		},
		{
			path: '/logisticsManage/sendManage/sellerSendManage/sendDetail',
			title: '发货单详情',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/sendManage/sellerSendManage/sendDetail.html'
		},
		{
			path: '/logisticsManage/sendManage/buyerSendManage/list',
			title: '买家发货单管理',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/sendManage/buyerSendManage/list.html'
		},
		{
			path: '/logisticsManage/sendManage/buyerSendManage/sendDetail',
			title: '发货单详情',
			component: window.bsteel.path.routerUrl + 'template/logisticsManage/sendManage/buyerSendManage/sendDetail.html'
		},
		/** 资金管理 **/
		{
			path: '/fundsManage/cashierDesk',
			title: '收银台',
			component: window.bsteel.path.routerUrl + 'template/fundsManage/cashierDesk.html'
		},
		{
			path: '/fundsManage/fundsDetail',
			title: '资金往来明细',
			component: window.bsteel.path.routerUrl + 'template/fundsManage/fundsDetail.html'
		},
		{
			path: '/fundsManage/account',
			title: '我的账户',
			component: window.bsteel.path.routerUrl + 'template/fundsManage/account.html'
		},
		{
			path: '/fundsManage/bindCard',
			title: '绑定银行卡',
			component: window.bsteel.path.routerUrl + 'template/fundsManage/bindCard.html'
		},
		{
			path: '/fundsManage/bankAgreement',
			title: '开户协议',
			component: window.bsteel.path.routerUrl + 'template/fundsManage/bankAgreement.html'
		},
		/** 商场管理 **/
		{
			path: '/shop/cart',
			title: '购物车',
			component: window.bsteel.path.routerUrl + 'template/shop/cart.html'
		},
		{
			path: '/shop/orderConfirm',
			title: '订单确认',
			component: window.bsteel.path.routerUrl + 'template/shop/orderConfirm.html'
		},
		/** 订单管理 **/
		{
			path: '/orderManage/orderListBuy/orderList',
			title: '订单列表(买家)',
			component: window.bsteel.path.routerUrl + 'template/orderManage/orderListBuy/orderList.html'
		},
		{
			path: '/orderManage/orderListBuy/orderDetail',
			title: '订单详情',
			component: window.bsteel.path.routerUrl + 'template/orderManage/orderListBuy/orderDetail.html'
		},
		{
			path: '/orderManage/orderListSold/orderList',
			title: '订单列表(卖家)',
			component: window.bsteel.path.routerUrl + 'template/orderManage/orderListSold/orderList.html'
		},
		{
			path: '/orderManage/orderListSold/orderDetail',
			title: '订单详情',
			component: window.bsteel.path.routerUrl + 'template/orderManage/orderListSold/orderDetail.html'
		},
		/** 挂牌管理 **/
		{
			path: '/trade/hangoutList',
			title: '挂牌管理',
			component: window.bsteel.path.routerUrl + 'template/trade/hangoutList.html'
		},
		{
			path: '/trade/hangoutDetail',
			title: '库存挂牌详情',
			component: window.bsteel.path.routerUrl + 'template/trade/hangoutDetail.html'
		},
		{
			path: '/trade/hangoutPreview',
			title: '挂牌预览',
			component: '../../../template/trade/hangoutPreview.html'
		},
		{
			path: '/trade/productInfo',
			title: '商品信息',
			component: window.bsteel.path.routerUrl + 'template/trade/productInfo.html'
		},
		{
			path: '/trade/receiptDetail',
			title: '仓单挂牌详情',
			component: window.bsteel.path.routerUrl + 'template/trade/receiptDetail.html'
		},
		{
			path: '/trade/receiptHangout',
			title: '仓单挂牌',
			component: window.bsteel.path.routerUrl + 'template/trade/receiptHangout.html'
		},
		{
			path: '/trade/reposHangout',
			title: '库存挂牌',
			component: window.bsteel.path.routerUrl + 'template/trade/reposHangout.html'
		},
		{
			path: '/trade/selectHangout',
			title: '选择挂牌',
			component: window.bsteel.path.routerUrl + 'template/trade/selectHangout.html'
		},
		{
			path: '/member/bizGroup-list',
			title: '员工管理',
			component: window.bsteel.path.routerUrl + 'template/member/bizGroup-list.html'
		},
		{
			path: '/member/staff-list',
			title: '员工管理',
			component: window.bsteel.path.routerUrl + 'template/member/staff-list.html'
		},
		{
			path: '/member/organize-relation',
			title: '组织关系管理',
			component: window.bsteel.path.routerUrl + 'template/member/organize-relation.html'
		},
		{
			path: '/member/querySub-list',
			title: '接收人列表',
			component: window.bsteel.path.routerUrl + 'template/member/querySub-list.html'
		},
		{
			path: '/member/registered',
			title: '企业注册',
			component: window.bsteel.path.routerUrl + 'template/member/registered.html'
		},
		{
			path: '/member/invoice',
			title: '发票管理',
			component: window.bsteel.path.routerUrl + 'template/member/invoice.html'
		},
		{
			path: '/member/personal-detail',
			title: '个人信息',
			component: window.bsteel.path.routerUrl + 'template/member/personal-detail.html'
		},
		{
			path: '/member/safety-set-list',
			title: '安全设置',
			component: window.bsteel.path.routerUrl + 'template/member/safety-set-list.html'
		},
		{
			path: '/member/admin-transfer',
			title: '管理员转让',
			component: window.bsteel.path.routerUrl + 'template/member/admin-transfer.html'
		},
		{
			path: '/member/password-setting',
			title: '密码设置',
			component: window.bsteel.path.routerUrl + 'template/member/password-setting.html'
		},
		{
			path: '/member/moblie-setting',
			title: '手机设置',
			component: window.bsteel.path.routerUrl + 'template/member/moblie-setting.html'
		},
		{
			path: '/member/mailbox-setting',
			title: '邮箱设置',
			component: window.bsteel.path.routerUrl + 'template/member/mailbox-setting.html'
		},
		{
			path: '/member/contract-password-setting',
			title: '合同签署密码设置',
			component: window.bsteel.path.routerUrl + 'template/member/contract-password-setting.html'
		},
		{
			path: '/member/pay-password-setting',
			title: '支付密码',
			component: window.bsteel.path.routerUrl + 'template/member/pay-password-setting.html'
		},

		{
			path: '/member/post',
			title: '岗位管理',
			component: window.bsteel.path.routerUrl + 'template/member/post.html'
		},
		{
			path: '/member/distribution-authority-post',
			title: '授权管理',
			component: window.bsteel.path.routerUrl + 'template/member/distribution-authority-post.html'
		},
		{
			path: '/member/user',
			title: '用户授权',
			component: window.bsteel.path.routerUrl + 'template/member/user.html'
		},

		{
			path: '/member/message-list',
			title: '消息管理',
			component: window.bsteel.path.routerUrl + 'template/member/message-list.html'
		},
		{
			path: '/member/collection-shop',
			title: '收藏的店铺',
			component: window.bsteel.path.routerUrl + 'template/member/collection-shop.html'
		},
		{
			path: '/member/collection-commodity',
			title: '收藏的商品',
			component: window.bsteel.path.routerUrl + 'template/member/collection-commodity.html'
		},
		{
			path: '/member/commodity',
			title: '商品列表',
			component: window.bsteel.path.routerUrl + 'template/commodity/commodity-list.html'
		},
		{
			path: '/warehouse/warehouse-list',
			title: '仓库管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-list.html'
		},
		{
			path: '/warehouse/warehouse-detail',
			title: '仓库详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-detail.html'
		},
		{
			path: '/commodity/commodity-list',
			title: '商品列表',
			component: window.bsteel.path.routerUrl + 'template/commodity/commodity-list.html'
		},
		{
			path: '/commodity/commodity-detail',
			title: '商品编辑',
			component: window.bsteel.path.routerUrl + 'template/commodity/commodity-detail.html'
		},
		{
			path: '/warehouse/warehouse-receipt-list',
			title: '仓单申请管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-receipt-list.html'
		},
		{
			path: '/warehouse/warehouse-receipt-add',
			title: '仓单申请',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-receipt-add.html'
		},
		{
			path: '/warehouse/warehouse-receipt-detail',
			title: '仓单详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-receipt-detail.html'
		},
		{
			path: '/warehouse/warehouse-receipt-add-material',
			title: '仓单补充材料',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-receipt-add-material.html'
		},

		{
			path: '/warehouse/selection-in-stock',
			title: '库存选择',
			component: window.bsteel.path.routerUrl + 'template/warehouse/selection-in-stock.html'
		},
		{
			path: '/warehouse/storage/storage-list',
			title: '仓储服务',
			component: window.bsteel.path.routerUrl + 'template/warehouse/storage/storage-list.html'
		},
		{
			path: '/member/commodity',
			title: '商品列表',
			component: window.bsteel.path.routerUrl + 'template/commodity/commodity-list.html'
		},
		{
			path: '/warehouse/warehouse-list',
			title: '仓库管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-list.html'
		},
		{
			path: '/warehouse/warehouse-detail',
			title: '仓库详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-detail.html'
		},
		{
			path: '/commodity/commodity-list',
			title: '商品列表',
			component: window.bsteel.path.routerUrl + 'template/commodity/commodity-list.html'
		},
		{
			path: '/commodity/commodity-detail',
			title: '商品编辑',
			component: window.bsteel.path.routerUrl + 'template/commodity/commodity-detail.html'
		},
		{
			path: '/warehouse/warehouse-receipt-list',
			title: '仓单申请管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-receipt-list.html'
		},
		{
			path: '/warehouse/storage/storage-list',
			title: '仓储服务',
			component: window.bsteel.path.routerUrl + 'template/warehouse/storage/storage-list.html'
		},

		{
			path: '/warehouse/storage/storage-detail',
			title: '仓储服务详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/storage/storage-detail.html'
		},
		{
			path: '/warehouse/storage/selection-list',
			title: '在线选库',
			component: window.bsteel.path.routerUrl + 'template/warehouse/storage/selection-list.html'
		},
		{
			path: '/warehouse/storage/warehouse-detail',
			title: '仓库详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/storage/warehouse-detail.html'
		},
		{
			path: '/member/company/company-attest',
			title: '企业认证',
			component: window.bsteel.path.routerUrl + 'template/member/company/company-attest.html'
		},
		{
			path: '/member/company/attest',
			title: '企业认证',
			component: window.bsteel.path.routerUrl + 'template/member/company/attest.html'
		},
		{
			path: '/member/company/attest-record',
			title: '认证记录',
			component: window.bsteel.path.routerUrl + 'template/member/company/attest-record.html'
		},
		{
			path: '/member/company/record-details',
			title: '认证详情',
			component: window.bsteel.path.routerUrl + 'template/member/company/record-details.html'
		},
		{
			path: '/member/company/attest-pay',
			title: '认证打款',
			component: window.bsteel.path.routerUrl + 'template/member/company/attest-pay.html'
		},

		{
			path: '/store/store-list',
			title: '店铺列表',
			component: window.bsteel.path.routerUrl + 'template/store/store-list.html'
		},
		{
			path: '/store/store-details',
			title: '店铺详情',
			component: window.bsteel.path.routerUrl + 'template/store/store-details.html'
		},
		{
			path: '/store/store-construction',
			title: '店铺装修',
			component: window.bsteel.path.routerUrl + 'template/store/store-construction.html'
		},
		{
			path: '/warehouse/storage/storage-detail',
			title: '仓储服务详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/storage/storage-detail.html'
		},
		{
			path: '/warehouse/storage/selection-list',
			title: '在线选库',
			component: window.bsteel.path.routerUrl + 'template/warehouse/storage/selection-list.html'
		},
		{
			path: '/warehouse/storage/warehouse-detail',
			title: '仓库详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/storage/warehouse-detail.html'
		},
		{
			path: '/member/company/company-attest',
			title: '企业认证',
			component: window.bsteel.path.routerUrl + 'template/member/company/company-attest.html'
		},
		{
			path: '/member/company/attest',
			title: '认证变更',
			component: window.bsteel.path.routerUrl + 'template/member/company/attest.html'
		},
		{
			path: '/store/store-list',
			title: '店铺列表',
			component: window.bsteel.path.routerUrl + 'template/store/store-list.html'
		},
		{
			path: '/store/store-details',
			title: '店铺详情',
			component: window.bsteel.path.routerUrl + 'template/store/store-details.html'
		},
		{
			path: '/store/store-construction',
			title: '店铺装修',
			component: window.bsteel.path.routerUrl + 'template/store/store-construction.html'
		},
		{
			path: '/protocol/protocol-list',
			title: '我的协议',
			component: window.bsteel.path.routerUrl + 'template/protocol/protocol-list.html'
		},
		{
			path: '/protocol/protocol-details',
			title: '协议详情',
			component: window.bsteel.path.routerUrl + 'template/protocol/protocol-details.html'
		},
		//客户管理
		{
			path: '/customer/customer-list',
			title: '客户管理',
			component: window.bsteel.path.routerUrl + 'template/customer/customer-list.html'
		},
		{
			path: '/customer/customer-details',
			title: '客户服务详情',
			component: window.bsteel.path.routerUrl + 'template/customer/customer-details.html'
		},
		{
			path: '/customer/customer-add',
			title: '客户服务新增',
			component: window.bsteel.path.routerUrl + 'template/customer/customer-add.html'
		},
		{
			path: '/customer/customerHangoutList',
			title: '客户服务服务',
			component: window.bsteel.path.routerUrl + 'template/customer/customerHangoutList.html'
		},
		{
			path: '/warehouse/transferApply/list',
			title: '仓储-过户申请查询',
			component: window.bsteel.path.routerUrl + 'template/warehouse/transferApply/list.html'
		},
		{
			path: '/warehouse/transferApply/detail',
			title: '仓储-过户申请详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/transferApply/detail.html'
		},
		{
			path: '/warehouse/transferApply/detailStatus',
			title: '仓储-过户申请详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/transferApply/detailStatus.html'
		},




		{
			path: '/owner/transfer/list',
			title: '过户单管理',
			component: window.bsteel.path.routerUrl + 'template/owner/transfer/list.html'
		},
		{
			path: '/owner/transferFee/list',
			title: '过户费查询',
			component: window.bsteel.path.routerUrl + 'template/owner/transferFee/list.html'
		},

		{
			path: '/owner/transferApply/list',
			title: '过户申请查询',
			component: window.bsteel.path.routerUrl + 'template/owner/transferApply/list.html'
		},
		{
			path: '/owner/transferApply/detail',
			title: '过户申请详情',
			component: window.bsteel.path.routerUrl + 'template/owner/transferApply/detail.html'
		},
		{
			path: '/owner/transferApply/detailStatus',
			title: '过户申请详情',
			component: window.bsteel.path.routerUrl + 'template/owner/transferApply/detailStatus.html'
		},
		{
			path: '/storage/warehouse/reservation/out/list',
			title: '出库预约',
			component: '../../../template/storage/warehouse/reservation/out/list.html'
		},
		{
			path: '/storage/warehouse/reservation/out/detail',
			title: '出库预约查看详情',
			component: '../../../template/storage/warehouse/reservation/out/detail.html'
		},
		{
			path: '/storage/warehouse/reservation/out/save',
			title: '新增出库预约',
			component: '../../../template/storage/warehouse/reservation/out/save.html'
		},
		{
			path: '/storage/warehouse/reservation/out/audit',
			title: '出库预约审核',
			component: '../../../template/storage/warehouse/reservation/out/audit.html'
		},
		{
			path: '/owner/warehouse/reservation/out/list',
			title: '出库预约',
			component: '../../../template/owner/warehouse/reservation/out/list.html'
		},
		{
			path: '/owner/warehouse/reservation/out/detail',
			title: '出库预约查看详情',
			component: '../../../template/owner/warehouse/reservation/out/detail.html'
		},
		{
			path: '/owner/warehouse/reservation/out/save',
			title: '新增出库预约',
			component: '../../../template/owner/warehouse/reservation/out/save.html'
		},
		{
			path: '/owner/warehouse/reservation/out/cloudSign',
			title: '出库预约云签',
			component: '../../../template/owner/warehouse/reservation/out/cloudSign.html'
		},
		{
			path: '/owner/warehouse/reservation/out/update',
			title: '编辑出库预约',
			component: '../../../template/owner/warehouse/reservation/out/update.html'
		},
		{
			path: '/owner/warehouse/mystock/actualOutList',
			title: '出库记录查询',
			component: '../../../template/owner/warehouse/mystock/actualOutList.html'
		},
		{
			path: '/owner/warehouse/mystock/actualOutDetail',
			title: '出库记录详情',
			component: '../../../template/owner/warehouse/mystock/actualOutDetail.html'
		},
		{
			path: '/owner/warehouse/reservation/in/list',
			title: '入库预约',
			component: '../../../template/owner/warehouse/reservation/in/list.html'
		},
		{
			path: '/owner/transfer/list',
			title: '过户单管理',
			component: '../../../template/owner/transfer/list.html'
		},
		{
			path: '/owner/transfer/detail',
			title: '过户单明细',
			component: '../../../template/owner/transfer/detail.html'
		},
		{
			path: '/owner/transfer/confirm',
			title: '过户协议预览',
			component: '../../../template/owner/transfer/confirm.html'
		},
		{
			path: '/owner/transferFee/list',
			title: '过户费查询',
			component: '../../../template/owner/transferFee/list.html'
		},
		{
			path: '/owner/transferFee/detail',
			title: '过户费明细',
			component: '../../../template/owner/transferFee/detail.html'
		},
		{
			path: '/owner/assignee/list',
			title: '待确认',
			component: '../../../template/owner/assignee/list.html'
		},
		{
			path: '/owner/assignee/list/detailOneOnOne',
			title: '过户申请确认',
			component: '../../../template/owner/assignee/detailOneOnOne.html'
		},
		{
			path: '/owner/assignee/list/detailChainType',
			title: '过户申请确认',
			component: '../../../template/owner/assignee/detailChainType.html'
		},
		{
			path: '/owner/assignee/list/detail',
			title: '过户申请确认',
			component: '../../../template/owner/assignee/detail.html'
		},
		{
			path: '/owner/assignee/list/confirm',
			title: '过户协议签署',
			component: '../../../template/owner/assignee/confirm.html'
		},
		{
			path: '/storage/transferFee/list',
			title: '过户费查询',
			component: '../../../template/storage/transferFee/list.html'
		},
		{
			path: '/storage/transferFee/detail',
			title: '过户费明细',
			component: '../../../template/storage/transferFee/detail.html'
		},
		{
			path: '/stock/appointIn/list',
			title: '入库预约',
			component: window.bsteel.path.routerUrl + 'template/storage/warehouse/reservation/in/list.html'
		},
		{
			path: '/stock/appointIn/add',
			title: '新增入库预约',
			component: window.bsteel.path.routerUrl + 'template/storage/warehouse/reservation/in/add.html'
		},
		{
			path: '/stock/appointIn/detail',
			title: '入库预约详情/审核',
			component: window.bsteel.path.routerUrl + 'template/storage/warehouse/reservation/in/detail.html'
		},
		{
			path: '/owner/appointIn/list',
			title: '入库预约',
			component: window.bsteel.path.routerUrl + 'template/owner/warehouse/reservation/in/list.html'
		},
		{
			path: '/owner/appointIn/add',
			title: '新增入库预约',
			component: window.bsteel.path.routerUrl + 'template/owner/warehouse/reservation/in/add.html'
		},
		{
			path: '/owner/appointIn/detail',
			title: '入库预约详情',
			component: window.bsteel.path.routerUrl + 'template/owner/warehouse/reservation/in/detail.html'
		},
		{
			path: '/owner/appointIn/detailTemporary',
			title: '入库预约详情未提交',
			component: window.bsteel.path.routerUrl + 'template/owner/warehouse/reservation/in/detail_temporary.html'
		},
		{
			path: '/owner/appointIn/detailSubmit',
			title: '入库预约详情已提交',
			component: window.bsteel.path.routerUrl + 'template/owner/warehouse/reservation/in/detail_submit.html'
		},
		{
			path: '/owner/appointIn/update',
			title: '入库预约修改',
			component: window.bsteel.path.routerUrl + 'template/owner/warehouse/reservation/in/update.html'
		},
		{
			path: '/storage/transfer/list',
			title: '过户单管理',
			component: '../../../template/storage/transfer/list.html'
		},
		{
			path: '/storage/transfer/detail',
			title: '过户单明细',
			component: '../../../template/storage/transfer/detail.html'
		},
		{
			path: '/storage/transfer/confirm',
			title: '过户协议预览',
			component: '../../../template/storage/transfer/confirm.html'
		},
		{
			path: '/storage/warehouse/stock-list',
			title: '库存信息',
			component: '../../../template/storage/warehouseManage/stock/list.html'
		},
		{
			path: '/owner/stock/list',
			title: '我的库存',
			component: window.bsteel.path.routerUrl + 'template/owner/warehouse/mystock/list.html'
		},
		{
			path: '/storage/stock/list',
			title: '库存信息',
			component: window.bsteel.path.routerUrl + 'template/storage/dataSync/stock/list.html'
		},
		{
			path: '/storage/stockLock/list',
			title: '库存锁定信息',
			component: window.bsteel.path.routerUrl + 'template/storage/dataSync/stocklock/list.html'
		},
		{
			path: '/storage/actualOut/list',
			title: '出库信息',
			component: window.bsteel.path.routerUrl + 'template/storage/dataSync/out/list.html'
		},
		{
			path: '/storage/actualOut/outDetail',
			title: '出库信息详情',
			component: window.bsteel.path.routerUrl + 'template/storage/dataSync/out/outDetail.html'
		},
		{
			path: '/storage/actualIn/list',
			title: '入库信息',
			component: window.bsteel.path.routerUrl + 'template/storage/dataSync/in/list.html'
		},
		{
			path: '/storage/actualIn/inDetail',
			title: '入库信息详情',
			component: window.bsteel.path.routerUrl + 'template/storage/dataSync/in/inDetail.html'
		},
		{
			path: '/storage/stockChange/list',
			title: '库存变更事务',
			component: window.bsteel.path.routerUrl + 'template/storage/dataSync/stockChange/list.html'
		},
		{
			path: '/storage/stockWarn/list',
			title: '库存信息核验',
			component: window.bsteel.path.routerUrl + 'template/storage/dataSync/stockWarn/list.html'
		},
		{
			path: '/storage/stockLock/lockDetail',
			title: '库存锁定详情',
			component: window.bsteel.path.routerUrl + 'template/storage/dataSync/stocklock/lockDetail.html'
		},
		{
			path: '/storage/transferApply/stockList',
			title: '过户申请库存选择',
			component: window.bsteel.path.routerUrl + 'template/storage/transferApply/stockList.html'
		},
		{
			path: '/storage/transferApply/detail',
			title: '过户申请审核两两',
			component: window.bsteel.path.routerUrl + 'template/storage/transferApply/detail.html'
		},
		{
			path: '/storage/transferApply/detailChainType',
			title: '过户申请审核链式',
			component: window.bsteel.path.routerUrl + 'template/storage/transferApply/detailChainType.html'
		},
		{
			path: '/owner/actualIn/in/list',
			title: '入库记录',
			component: window.bsteel.path.routerUrl + 'template/owner/warehouse/mystock/actualIn_list.html'
		},
		{
			path: '/owner/actualIn/in/detail',
			title: '入库记录详情',
			component: window.bsteel.path.routerUrl + 'template/owner/warehouse/mystock/actualInDetail.html'
		},
		// 仓单转让管理 ==================start=======================
		{
			path: '/warehouse/transferManage/list',
			title: '仓单转让管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/transferManage/list.html'
		},
		{
			path: '/warehouse/transferManage/detail',
			title: '仓单转让详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/transferManage/detail.html'
		},
		{
			path: '/warehouse/transferManage/transfer',
			title: '仓单转让申请',
			component: window.bsteel.path.routerUrl + 'template/warehouse/transferManage/transfer.html'
		},
		{
			path: '/warehouse/assigneeManage/list',
			title: '仓单转让管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/assigneeManage/list.html'
		},
		{
			path: '/warehouse/assigneeManage/detail',
			title: '仓单转让详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/assigneeManage/detail.html'
		},
		// 仓单受让管理 ==================end=======================


		//	仓单审核管理

		{
			path: '/warehouse/warehouseReceiptReview/warehouse-receipt-list',
			title: '仓单初审管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouseReceiptReview/warehouse-receipt-list.html'
		},
		{
			path: '/warehouse/warehouseReceiptReview/review',
			title: '仓单初审',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouseReceiptReview/review.html'
		},
		{
			path: '/warehouse/warehouseReceiptReview/reexamine-list',
			title: '仓单复审管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouseReceiptReview/reexamine-list.html'
		},
		{
			path: '/warehouse/warehouseReceiptReview/reexamine',
			title: '仓单复审',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouseReceiptReview/reexamine.html'
		},
		{
			path: '/warehouse/warehouseReceiptReview/review-details',
			title: '仓单审核详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouseReceiptReview/review-details.html'
		},

		// 仓单提货申请管理 ==================start=======================
		{
			path: '/warehouse/deliveryApply/list',
			title: '提货申请管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/deliveryApply/list.html'
		},
		{
			path: '/warehouse/deliveryApply/detail',
			title: '提货详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/deliveryApply/detail.html'
		},
		{
			path: '/warehouse/deliveryApply/add',
			title: '新增提货申请',
			component: window.bsteel.path.routerUrl + 'template/warehouse/deliveryApply/add.html'
		},
		// 仓单提货申请管理 ==================end=======================

		//仓储方-仓单提货管理 ==================start=======================
		{
			path: '/receiptManage/deliveryManage/list',
			title: '仓单提货管理',
			component: window.bsteel.path.routerUrl + 'template/receiptManage/deliveryManage/list.html'
		},
		{
			path: '/receiptManage/deliveryManage/confirm',
			title: '仓单确认页',
			component: window.bsteel.path.routerUrl + 'template/receiptManage/deliveryManage/confirm.html'
		},
		{
			path: '/receiptManage/deliveryManage/done',
			title: '已完成',
			component: window.bsteel.path.routerUrl + 'template/receiptManage/deliveryManage/done.html'
		},
		{
			path: '/receiptManage/deliveryManage/processing',
			title: '仓单提货处理页',
			component: window.bsteel.path.routerUrl + 'template/receiptManage/deliveryManage/processing.html'
		},
		{
			path: '/receiptManage/deliveryManage/detail',
			title: '仓单提货详情页',
			component: window.bsteel.path.routerUrl + 'template/receiptManage/deliveryManage/detail.html'
		},
		//仓储方-仓单提货管理 ==================end=======================

		//我的仓单

		{
			path: '/warehouse/myWarehouseReceipt/my-warehouse-receipt',
			title: '我的仓单',
			component: window.bsteel.path.routerUrl + 'template/warehouse/myWarehouseReceipt/my-warehouse-receipt.html'
		},
		{
			path: '/warehouse/myWarehouseReceipt/details',
			title: '仓单详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/myWarehouseReceipt/details.html'
		},
		//仓储------仓单管理

		{
			path: '/warehouse/warehousingReceiptList/warehousing-receipt-list',
			title: '仓单管理',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehousingReceiptList/warehousing-receipt-list.html'
		},
		{
			path: '/warehouse/warehousingReceiptList/details',
			title: '仓单详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehousingReceiptList/details.html'
		},
		//仓库服务-我的账号管理 ==================start=======================
		{
			path: '/owner/accountManage/list',
			title: '我的账号管理',
			component: window.bsteel.path.routerUrl + 'template/owner/accountManage/list.html'
		},
		{
			path: '/owner/accountManage/add',
			title: '新增账号',
			component: window.bsteel.path.routerUrl + 'template/owner/accountManage/add.html'
		},
		{
			path: '/owner/accountManage/share',
			title: '共享账户',
			component: window.bsteel.path.routerUrl + 'template/owner/accountManage/share.html'
		},
		{
			path: '/warehouse/warehouse-base-cost-list',
			title: '基础费用设置列表',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-base-cost-list.html'
		},
		{
			path: '/warehouse/warehouse-base-cost-detail',
			title: '基础费用设置详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-base-cost-detail.html'
		},
		//仓库服务-我的账号管理 ==================end=======================

		//仓储-仓单转让 ==================start=======================
		{
			path: '/receiptManage/transferManage/list',
			title: '仓单转让管理',
			component: window.bsteel.path.routerUrl + 'template/receiptManage/transferManage/list.html'
		},
		{
			path: '/receiptManage/transferManage/transferConfirm',
			title: '转让确认',
			component: window.bsteel.path.routerUrl + 'template/receiptManage/transferManage/transferConfirm.html'
		},
		{
			path: '/receiptManage/transferManage/receiptConfirm',
			title: '仓单确认',
			component: window.bsteel.path.routerUrl + 'template/receiptManage/transferManage/receiptConfirm.html'
		},
		{
			path: '/receiptManage/transferManage/detail',
			title: '仓单详情',
			component: window.bsteel.path.routerUrl + 'template/receiptManage/transferManage/detail.html'
		},
		//仓储-仓单转让 ==================end=======================

		{
			path: '/warehouse/warehouse-receipt-attest',
			title: '仓单认证',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-receipt-attest.html'
		},

		{
			path: '/warehouse/warehouse-receipt-attest-datail',
			title: '仓单认证详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/warehouse-receipt-attest-datail.html'
		},
		{
			path: '/warehouse/parameter-settings',
			title: '仓单认证详情',
			component: window.bsteel.path.routerUrl + 'template/warehouse/parameter-settings.html'
		},

	]
})
