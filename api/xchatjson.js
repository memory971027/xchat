const {
	Buffer
} = require('buffer');
const allowedWxids = require('./wxid-list.json');

const parseJsonBody = (event) => {
	try {
		return JSON.parse(event.body || '{}');
	} catch (error) {
		return null;
	}
};

const getRequestWxid = (body) => {
	if (!body || typeof body !== 'object') {
		return '';
	}

	return String(body.wxid || body.wxId || '').trim();
};

const getAllowedWxid = (item) => {
	if (typeof item === 'string') {
		return item.trim();
	}

	if (!item || typeof item !== 'object') {
		return '';
	}

	return String(item.wxid || item.wxId || '').trim();
};

const isAllowedWxid = (wxid) => {
	return allowedWxids.some((item) => getAllowedWxid(item) === wxid);
};

exports.handler = async (event, context) => {
	const method = event.httpMethod;
	const body = parseJsonBody(event);
	console.log("接收到的数据", event.body);
	let responseData;
	let headers = {
		'Content-Type': 'application/json'
	};

	if (method === 'POST') {
		if (!body) {
			return {
				statusCode: 400,
				headers,
				body: JSON.stringify({
					code: 1,
					message: 'Invalid JSON body'
				})
			};
		}

		const wxid = getRequestWxid(body);
		if (!isAllowedWxid(wxid)) {
			return {
				statusCode: 403,
				headers,
				body: JSON.stringify({
					code: 1,
					message: 'wxid not allowed'
				})
			};
		}

		responseData = {
			code: 0,
			data: {
				"updateVersionTip": "适配微信8.0.76成功，请点击重启",
				"configId": 4,
				"avatarUtilConfig": {
					"singleInstanceEnumClass": "ml1.t",
					"showAvatarMethodName": "Dg",
					"avatarDrawableClass": "nl1.e",
					"avatarUserNameFiledName": "e",
					"avatarPaintFiledName": "i",
					"selectMediaMethodName": "f8",
					"mediaItemListFieldName": "m",
					"getMediaItemMethodName": "D",
					"mediaPathFieldName": "e",
					"servicesHelperClass": "pa5.n0",
					"avatarServicesClass": "nv.b0",
					"createServicesMethod": "c",
					"getDefaultAvatarMethod": "nj",
					"bitmapUtilClass": "com.tencent.mm.sdk.platformtools.x",
					"getBitmapByFilePathMethod": "J"
				},
				"fakeDiceConfig": {
					"randomIntClass": "com.tencent.mm.sdk.platformtools.t8",
					"randomIntMethodName": "R",
					"randomIntMethodArgs": [
						"int",
						"int"
					],
					"stackIdentity": "n22.h.d",
					"stackIdentityClass": "n22.h",
					"stackIdentityMethodName": "d",
					"stackIdentityMethodArgs": [
						"com.tencent.mm.storage.emotion.EmojiInfo"
					],
					"clickListenerClass": "or.r0",
					"dataWrapperFieldName": "d",
					"dataFieldName": "e",
					"realDataFieldName": "b",
					"realDataValueFieldName": "field_name"
				},
				"forbidRevokeCircleMsg": {
					"snsSqlHelperClass": "com.tencent.mm.plugin.sns.storage.p2",
					"snsSqlRawQueryMethodName": "B",
					"snsSqlExecSQLMethodName": "A",
					"snsSqlUpdateMethod": "q",
					"sqlBeanClass": "com.tencent.mm.protobuf.f",
					"fakeLikeConfig": {
						"userBeanClass": "a65.ha6",
						"userFiledId": "d",
						"userFiledName": "h",
						"showMenuHelperClass": "ym5.r",
						"showMenuHelperMethod": [
							"j"
						],
						"createMenuClass": [
							"com.tencent.mm.plugin.sns.ui.listener.n"
						],
						"menuClickInterface": "kc5.t4",
						"menuClickDataField": "d",
						"menuClickDataGetWrapperMethod": "c",
						"menuClickDataGetSnsInfoMethod": "O0",
						"menuClickDataGetContextMethod": "b"
					},
					"transferSnsConfig": {
						"snsVideoClass": "com.tencent.mm.plugin.sns.model.y6",
						"getDownloadVideoPathMethodName": "o",
						"getVideoThumbPathMethodName": "q",
						"fileListFieldName": "h",
						"mediaUtilsClassName": "com.tencent.mm.plugin.sns.model.i1",
						"getSnsDirectPathMethodName": "l",
						"downLoadManagerClass": "com.tencent.mm.plugin.sns.model.m0",
						"notifyFinishMethodName": "s",
						"objFactoryClass": "com.tencent.mm.storage.r7",
						"createTimeLineObjMethodName": "d",
						"snsCreateTimeField": "b",
						"snsHelperClass": "com.tencent.mm.plugin.sns.model.l4",
						"getDownloadManagerClass": "Rj",
						"startDownloadMethodName": "d",
						"mediaTypeFieldName": "e",
						"requestConfigClass": "fb4.s0",
						"setDecodeTypeMethodName": "d",
						"getSnsServerMethodName": "Zj",
						"refreshTimelineMethodName": "w",
						"refreshTimelineUserName": "@__weixintimtline",
						"refreshTimelineSourceType": 5,
						"refreshTimelineUseNullCallback": true,
						"snsCommentUpdateEventClass": "com.tencent.mm.autogen.events.SnsCommentUpdateEvent",
						"snsCommentUpdateEventDataField": "g",
						"snsCommentUpdateEventSnsIdField": "a",
						"snsCommentUpdateEventPublishMethod": "e"
					}
				},
				"imPadConfigBean": {
					"checkPadClass": "com.tencent.kinda.framework.app.KindaPlatformUtil",
					"checkPadMethodName": "isPad",
					"checkPadArgClass": ""
				},
				"logConfig": {
					"commonLogMethodName": [
						"j",
						"e",
						"q"
					],
					"errorLogMethodName": "n",
					"logUtilClazz": "com.tencent.mm.sdk.platformtools.m2"
				},
				"revokeConfig": {
					"sqliteDatabaseClazz": "com.tencent.wcdb.database.SQLiteDatabase",
					"messageSqlHelperClazz": "com.tencent.mm.storage.f9",
					"messageSqlInsertMethodName": "I9",
					"messageClazz": "com.tencent.mm.storage.e9",
					"conversationSqlHelperClazz": "com.tencent.mm.storage.l4",
					"conversationConstructorArgClazz": "s85.k0",
					"revokeTipFieldName": "x0",
					"revokeType": 268445456,
					"cancelRecordMethod": "b"
				},
				"scanQrConfig": {
					"barStringHandlerClass": "h14.f",
					"handleMethodName": "b",
					"methodNameArgsClass": [
						"android.app.Activity",
						"u04.e",
						"com.tencent.mm.plugin.scanner.view.s",
						"java.lang.String",
						"boolean",
						"int",
						"java.lang.String",
						"android.os.Bundle",
						"int",
						"boolean",
						"int",
						"boolean",
						"boolean",
						"int",
						"java.util.ArrayList"
					]
				},
				"showTimeConfig": {
					"holderHelperClass": "com.tencent.mm.ui.chatting.r7",
					"holderMethodName": "h",
					"holderMethodNameArgsClass": [
						"po5.s0",
						"po5.c",
						"int",
						"int",
						"boolean",
						"java.util.List"
					],
					"messageFieldName": "d.b",
					"viewFieldName": "itemView",
					"contextWrapperFieldName": "f",
					"themeWrapperFieldName": "c",
					"getTargetClassMethodName": "a",
					"themeConfigClass": "w85.f",
					"themeConfigFieldName": "m",
					"isHasBgFieldName": "d",
					"isLightBgFieldName": "e",
					"textColorFieldName": "a",
					"footerQuoteMethodName": "D",
					"bindNewChatFragmentMethodName": "y0",
					"chattingBackgroundComponentCLassName": "",
					"setBgDrawableMethodName": "",
					"rootViewFieldName": "d",
					"ivBgId": 2131300105,
					"chattingUIViewId": 2131300106,
					"actionBarViewId": 2131296471,
					"findVIewByIdMethodName": "c",
					"switchChatFooterMethodName": "y1"
				},
				"themeHookerConfig": {
					"bitmapUtilClass": "com.tencent.mm.sdk.platformtools.x",
					"getCircleBitmapMethodName": "t0"
				},
				"userInfoUtilConfig": {
					"userInfoUtilsClass": "e01.z1",
					"getUserInfoMapMethod": "q"
				},
				"autoLoginConfig": {
					"enabledPreferenceKey": "1022",
					"recentMsgPreferenceKey": "1023",
					"statusKey": "xchat.feature.auto_login_8076",
					"autoLoginUiClass": "com.tencent.mm.plugin.webwx.ui.ExtDeviceWXLoginUI",
					"initViewMethod": "initView",
					"resumeMethod": "onResume",
					"sceneEndMethod": "onSceneEnd",
					"sceneEndMethodParams": [
						"int",
						"int",
						"java.lang.String",
						"com.tencent.mm.modelbase.m1"
					],
					"autoLoginCbField": "A",
					"recentMsgCbField": "C",
					"recentMsgSupportedField": "r",
					"loginSceneField": "d",
					"autoLoginMethod": "S6",
					"scheduledStateTag": "xchat_auto_login_scheduled",
					"actionDelayMs": "500"
				},
				"voipLimitConfig": {
					"enabledPreferenceKey": "1056",
					"statusKey": "com.xchat.compat.VoipLimitCompat",
					"deviceOccupyClass": "iq.b",
					"isUsingVoipMethodName": "F",
					"isUsingVoipMethodParams": [
						"android.content.Context",
						"boolean"
					],
					"isUsingVoipMethodParamCount": "2",
					"isUsingCameraMethodName": "i",
					"isUsingCameraMethodParams": [
						"android.content.Context",
						"boolean",
						"android.os.Bundle"
					],
					"isUsingCameraMethodParamCount": "3"
				},
				"transferVoiceConfig": {
					"createMenuClass": "com.tencent.mm.ui.chatting.viewitems.m0",
					"createMenuMethodName": "a",
					"createMenuArgs": [
						"kc5.g4",
						"android.view.View",
						"android.view.ContextMenu$ContextMenuInfo"
					],
					"msgStorageFieldName": "a.d.b",
					"addMenuItemMethodName": "c",
					"transferIconIdName": "icons_filled_share",
					"transferIconResourceType": "raw",
					"transferIconResourceId": "0x7f0f0629",
					"menuGroupGetterMethodName": "d",
					"transferMenuItemId": "0x4e0",
					"transferMenuItemOrder": "0",
					"transferMenuItemTitle": "转发",
					"messageTypeFieldName": "field_type",
					"voiceMessageType": "34",
					"onMenuClickClass": "com.tencent.mm.ui.chatting.viewitems.p0",
					"menuSelectMethodName": "onMMMenuItemSelected",
					"menuCreateParam0": "kc5.g4",
					"menuCreateParam1": "android.view.View",
					"menuCreateParam2": "android.view.ContextMenu$ContextMenuInfo",
					"menuSelectParam0": "android.view.MenuItem",
					"msgWrapperFieldName": "d",
					"messageGetterMethodName": "c",
					"messageImagePathFieldName": "field_imgPath",
					"messageContentFieldName": "field_content",
					"selectConversationClass": "com.tencent.mm.ui.transmit.SelectConversationUI",
					"selectUserMethodName": "u7",
					"selectUserParam0": "java.lang.String",
					"voiceLogicClass": "y21.x0",
					"recorderClass": "tl.p0",
					"recorderDurationMethodName": "c",
					"createNewVoiceMethodName": "g",
					"getVoiceFullPathMethodName": "Mj",
					"insertVoiceMethodName": "t",
					"insertVoiceMethodParams": [
						"java.lang.String",
						"int",
						"int",
						"com.tencent.mm.storage.e9"
					],
					"voiceDatabaseHelperClass": "y21.p0",
					"getVoiceServiceMethodName": "kj",
					"sendVoiceToServiceMethodName": "e",
					"handleFavItemClick": "n7",
					"favApiLogicClass": "d82.x1",
					"getFavDetailMethodName": "J",
					"voiceFullPathFieldName": "V",
					"remoteVoiceFileName": "T",
					"remoteVoiceFileType": "K",
					"voiceLengthFieldName": "y",
					"voiceMsgTagFieldName": "a",
					"toUserFieldName": "T",
					"storageUtilClass": "ur.s",
					"getPathMethodName": "c",
					"showPopupMenuHelperClass": "ym5.r",
					"showAtLocationMethodName": "p",
					"itemWrapperFieldName": "z",
					"popupWindowBlackStyleFieldName": "C",
					"dispatchSceneClass": "com.tencent.mm.modelbase.m1",
					"voiceBusinessType": "in5.y",
					"voiceTypeFiledName": "j",
					"voiceLengthInSendParamsFieldName": "h",
					"voiceServiceManagerClass": "pa5.n0",
					"voiceServiceTypeClass": "qh3.u0",
					"voiceServiceFactoryMethodName": "c",
					"voiceServiceImplementationClass": "h90.b",
					"chatMenuListenerClasses": [
						"com.tencent.mm.ui.chatting.b5",
						"com.tencent.mm.ui.chatting.gallery.e0",
						"com.tencent.mm.ui.chatting.j0",
						"com.tencent.mm.ui.chatting.presenter.d",
						"com.tencent.mm.ui.chatting.presenter.f1",
						"com.tencent.mm.ui.chatting.presenter.f4",
						"com.tencent.mm.ui.chatting.presenter.g0",
						"com.tencent.mm.ui.chatting.presenter.n3",
						"com.tencent.mm.ui.chatting.presenter.p2",
						"com.tencent.mm.ui.chatting.presenter.v3",
						"com.tencent.mm.ui.chatting.presenter.x0",
						"com.tencent.mm.ui.chatting.presenter.x2",
						"com.tencent.mm.ui.chatting.tc",
						"com.tencent.mm.ui.chatting.z4",
						"com.tencent.mm.ui.chatting.component.jg",
						"com.tencent.mm.ui.chatting.component.l5",
						"com.tencent.mm.ui.chatting.component.pc",
						"com.tencent.mm.ui.chatting.nc",
						"com.tencent.mm.ui.chatting.qc",
						"com.tencent.mm.ui.chatting.uc",
						"com.tencent.mm.ui.chatting.viewitems.bj",
						"com.tencent.mm.ui.chatting.viewitems.bm",
						"com.tencent.mm.ui.chatting.viewitems.kd",
						"com.tencent.mm.ui.chatting.viewitems.kp",
						"com.tencent.mm.ui.chatting.viewitems.kq",
						"com.tencent.mm.ui.chatting.viewitems.mb",
						"com.tencent.mm.ui.chatting.viewitems.mf",
						"com.tencent.mm.ui.chatting.viewitems.p0",
						"com.tencent.mm.ui.chatting.viewitems.rf",
						"com.tencent.mm.ui.chatting.viewitems.rl",
						"com.tencent.mm.ui.chatting.viewitems.rp",
						"com.tencent.mm.ui.chatting.viewitems.tq",
						"com.tencent.mm.ui.chatting.viewitems.ub",
						"com.tencent.mm.ui.chatting.viewitems.vl",
						"com.tencent.mm.ui.chatting.viewitems.zc",
						"com.tencent.mm.ui.chatting.viewitems.zo",
						"com.tencent.mm.ui.chatting.w",
						"com.tencent.mm.ui.chatting.x4",
						"com.tencent.mm.ui.chatting.yd",
						"com.tencent.mm.ui.chatting.viewitems.mvvmview.mediagroup.p0"
					],
					"chatMenuListenerMethodName": "onMMMenuItemSelected",
					"nativeForwardVoiceMethodName": "r"
				},
				"fakeMoneyConfig": {
					"tickerMoneyClass": "com.tencent.mm.plugin.wallet_core.ui.view.WcPayMoneyLoadingView",
					"setMoneyMethodName": "g"
				},
				"hideLimitConfig": {
					"hideImageIds": [
						2131310133,
						2131297028
					]
				},
				"autoDownloadPhotoConfig": {
					"initDownloadBtnMethodName": "t9",
					"autoDownloadButtonFieldName": "y1"
				},
				"conversationConfig": {
					"conversationDatabaseClass": "com.tencent.mm.storage.l4",
					"constructorArgs": [
						"s85.k0"
					],
					"databaseFieldName": "d",
					"databaseProviderStaticClass": "e01.d9",
					"databaseProviderStaticMethod": "b",
					"databaseProviderDatabaseMethod": "s",
					"databaseWrapperInterfaceClass": "s85.k0",
					"baseAdapterClass": "com.tencent.mm.ui.s9",
					"setCursorMethod": "t",
					"userNameFixClass": "com.tencent.mm.sdk.platformtools.m8",
					"fixUserNameMethod": "n",
					"mainAdapterFieldName": "v",
					"conversationObjClass": "com.tencent.mm.storage.k4",
					"setParentRefMethodName": "Q",
					"placedTopMethodName": "S",
					"unsetPlacedTopMethodName": "V",
					"conversationStorageMethod": "r",
					"clearUnreadByTalkerMethod": "b0",
					"isPlacedTopMethod": "K",
					"userNameCheckUtilClass": "com.tencent.mm.storage.z3",
					"isFoldMethodName": "L3",
					"foldDetailFragmentClass": "com.tencent.mm.ui.conversation.ConvBoxServiceConversationUI$ConvBoxServiceConversationFmUI",
					"mainConversationClickListenerCLass": "com.tencent.mm.ui.conversation.s2",
					"listViewFieldName": "e",
					"adapterFieldName": "d",
					"getItemMethodName": "getItem",
					"foldDetailAdapterClass": "com.tencent.mm.ui.conversation.s0",
					"foldDetailAdapterArgs": [
						"android.content.Context",
						"java.lang.String",
						"com.tencent.mm.ui.y9"
					],
					"messageGroupDetailAdapterClass": "com.tencent.mm.ui.conversation.t0",
					"messageGroupDetailAdapterCallbackClass": "com.tencent.mm.ui.y9",
					"messageGroupDetailRefreshMethod": "p",
					"messageGroupDetailSetCursorMethod": "r",
					"messageGroupDetailFragmentClass": "com.tencent.mm.ui.conversation.ConvBoxServiceConversationUI$ConvBoxServiceConversationFmUI",
					"messageGroupDetailFragmentResumeMethod": "onResume",
					"messageGroupDetailFragmentAdapterField": "adapter",
					"messageGroupDetailFragmentGroupField": "superUsername",
					"messageGroupDetailFragmentActivityMethod": "getActivity",
					"messageGroupDetailActivityIntentMethod": "getIntent",
					"messageGroupDetailIntentStringExtraMethod": "getStringExtra",
					"messageGroupMainClickListenerClass": "com.tencent.mm.ui.conversation.w2",
					"messageGroupMainClickMethod": "onItemClick",
					"messageGroupMainClickListViewField": "e",
					"messageGroupMainClickAdapterField": "d",
					"messageGroupMainUiClass": "com.tencent.mm.ui.conversation.MainUI",
					"messageGroupMainUiCreateMethod": "m0",
					"messageGroupMainUiCreateArg": "android.os.Bundle",
					"messageGroupMainUiResumeMethod": "onResume",
					"messageGroupDetailClickListenerClass": "com.tencent.mm.ui.conversation.l0",
					"messageGroupDetailClickMethod": "onItemClick",
					"messageGroupDetailClickListenerFragmentField": "d",
					"messageGroupDetailFragmentAdapterField": "adapter",
					"messageGroupDetailFragmentUiField": "ui",
					"messageGroupDetailActivityClass": "com.tencent.mm.ui.conversation.ConvBoxServiceConversationUI",
					"messageGroupContactUserExtraKey": "Contact_User",
					"messageGroupMainAdapterGetItemMethod": "f",
					"messageGroupAdapterGetItemMethod": "getItem",
					"messageGroupMainAdapterDataSourceMethod": "d",
					"messageGroupMainAdapterCacheField": "q",
					"messageGroupMainCacheIndexField": "b",
					"messageGroupMainCacheMapField": "c",
					"messageGroupMainCacheRowsField": "d",
					"messageGroupMainAdapterMvvmListField": "p",
					"messageGroupMvvmListItemsField": "o",
					"messageGroupMvvmListRemoveMethod": "t",
					"messageGroupRowConversationField": "d",
					"messageGroupMainAdapterAvatarCacheField": "u",
					"messageGroupDataSourceRowCacheField": "s",
					"messageGroupDataSourceBuildRowMethod": "h",
					"messageGroupDataSourceUpdateMethod": "k",
					"messageGroupDataSourceInsertEvent": "2",
					"messageGroupDataSourceUpdateEvent": "3",
					"messageGroupMutedPromptAttrFlag": "2097152",
					"messageGroupConversationMuteUnreadField": "field_unReadMuteCount",
					"messageGroupConversationAttrFlagField": "field_attrflag",
					"messageGroupMutedPromptClearValue": "0",
					"messageGroupDetailStartChattingMethod": "startChatting",
					"messageGroupStatusKey": "xchat.feature.message_group_8076",
					"conversationUsernameMethod": "i1",
					"conversationUsernameField": "field_username",
					"mainItemCreateMenuClass": "com.tencent.mm.ui.conversation.r3",
					"userNameFieldNameFromCreateMenu": "g",
					"conversationObjFieldName": "h",
					"mainItemClickClass": "com.tencent.mm.ui.conversation.p3",
					"createMenuFieldName": "d",
					"userNameFieldNameFromClickListener": "g",
					"messageGroupFeatureSwitchKey": "",
					"messageGroupDefaultEnabled": "true",
					"messageGroupMenuCreateMethod": "onCreateContextMenu",
					"messageGroupMenuCreateContextMenuParameter": "android.view.ContextMenu",
					"messageGroupMenuCreateViewParameter": "android.view.View",
					"messageGroupMenuCreateContextInfoParameter": "android.view.ContextMenu$ContextMenuInfo",
					"messageGroupMenuSelectMethod": "onMMMenuItemSelected",
					"messageGroupMenuSelectItemParameter": "android.view.MenuItem",
					"messageGroupMenuSelectPositionParameter": "int",
					"messageGroupMenuItemId": "10086",
					"messageGroupMenuGroupId": "0",
					"messageGroupMenuOrder": "-1",
					"messageGroupMenuTitle": "\u6dfb\u52a0\u81f3\u5206\u7ec4",
					"messageGroupEditMenuItemId": "10088",
					"messageGroupEditMenuGroupId": "0",
					"messageGroupEditMenuOrder": "-1",
					"messageGroupEditMenuTitle": "\u4fee\u6539\u5206\u7ec4",
					"messageGroupDissolveMenuItemId": "10087",
					"messageGroupDissolveMenuGroupId": "0",
					"messageGroupDissolveMenuOrder": "-1",
					"messageGroupDissolveMenuTitle": "\u89e3\u6563\u5206\u7ec4",
					"messageGroupRequireExistingGroup": "true",
					"messageGroupSkipTalker": "conversationboxservice",
					"messageGroupSkipGroupRows": "true",
					"messageGroupDialogSelectMode": "true",
					"messageGroupDismissListenerMode": "4",
					"foldDetailCreateMenuClass": "com.tencent.mm.ui.conversation.n0",
					"fragmentWrapperFieldName": "e",
					"fragmentFieldName": "d",
					"foldDetailClickListenerClass": "com.tencent.mm.ui.conversation.p0",
					"longClickListenerFieldName": "d",
					"fragmentFieldNameFromClickListener": "d",
					"messageGroupDetailMenuCreateMethod": "onCreateContextMenu",
					"messageGroupDetailMenuSelectMethod": "onMMMenuItemSelected",
					"messageGroupDetailMenuCreatorOwnerField": "e",
					"messageGroupDetailMenuOwnerFragmentField": "d",
					"messageGroupDetailMenuSelectOwnerField": "d",
					"messageGroupDetailFragmentTalkerField": "talker",
					"messageGroupDetailFragmentAdapterFieldForMenu": "adapter",
					"messageGroupDetailFragmentActivityMethodForMenu": "thisActivity",
					"messageGroupRemoveMenuItemId": "10092",
					"messageGroupRemoveMenuGroupId": "0",
					"messageGroupRemoveMenuOrder": "-1",
					"messageGroupRemoveMenuTitle": "\u79fb\u51fa\u5206\u7ec4",
					"sqlRawQueryMethod": "B",
					"sqlUpdateMethod": "q",
					"sqlUpdateMethodParams": [
						"java.lang.String",
						"android.content.ContentValues",
						"java.lang.String",
						"java.lang.String[]"
					],
					"sqlDeleteMethod": "",
					"sqlDeleteWhereMethod": "delete",
					"sqlDeleteHookMethod": "delete",
					"sqlInsertMethod": "m",
					"refreshTargetConversationMethodName": "b",
					"adapterListDataFieldName": "g",
					"adapterClearUsersMapFieldName": "e",
					"getUnreadCountUtilClass": "com.tencent.mm.ui.conversation.w3",
					"getUnreadCountTypeMethodName": "b",
					"messageGroupConversationConvertMethod": "convertFrom",
					"messageGroupTotalUnreadClass": "com.tencent.mm.ui.conversation.w3",
					"messageGroupTotalUnreadMethod": "c",
					"messageGroupUnreadMapClass": "e01.h2",
					"messageGroupUnreadMapMethod": "f",
					"messageGroupUnreadMapFilter": "1",
					"messageGroupConversationUnreadMethod": "d1",
					"onSelectUserClickMethod": "u7",
					"isMultiSelectFieldName": "O1",
					"selectUserAdapter": "kl5.a",
					"resetDataMethodName": "r",
					"uiWrapperFieldName": "d",
					"cursorFieldName": "n",
					"messageGroupLegacyTransferClass": "com.tencent.mm.ui.transmit.SelectConversationUI",
					"messageGroupLegacyTransferMethod": "u7",
					"messageGroupLegacyTransferParam": "java.lang.String",
					"messageGroupTransferFolderClass": "com.tencent.mm.ui.transmit.ConvBoxTransmitUI",
					"messageGroupTransferFolderCreateMethod": "onCreate",
					"messageGroupTransferFolderCreateParam": "android.os.Bundle",
					"messageGroupTransferGroupExtra": "x_chat_fold_name",
					"messageGroupTransferMultiExtra": "KIsMultiSelect",
					"messageGroupTransferSelectedExtra": "Select_Conv_User",
					"messageGroupTransferSelectedField": "P1",
					"messageGroupTransferSelectedDelimiter": ",",
					"messageGroupTransferLegacyRequestCode": "7",
					"messageGroupTransferModernRequestCode": "2306836",
					"newTransferUiClickListenerClass": "jk5.i2",
					"newTransferUiOnClickMethod": "j",
					"newTransferUiOnClickMethodParams": [
						"android.view.View",
						"po5.c",
						"int"
					],
					"newItemGetUserNameMethod": "f",
					"newTransferUiActivityFieldName": "e",
					"messageGroupTransferControllerField": "d",
					"messageGroupTransferControllerPrepareMethod": "f7",
					"messageGroupRecentProviderClass": "com.tencent.mm.ui.transmit.recent.i",
					"messageGroupRecentProviderBuildMethod": "a",
					"messageGroupRecentProviderCacheMethod": "b",
					"messageGroupRecentUsernameField": "d",
					"messageGroupRecentFinalBuilderClass": "com.tencent.mm.ui.mvvm.uic.conversation.recent.o",
					"messageGroupRecentFinalBuilderMethod": "invoke",
					"messageGroupRecentFinalOwnerField": "d",
					"messageGroupRecentFinalListField": "d",
					"messageGroupRecentFinalAvatarListField": "h",
					"messageGroupRecentFinalItemDataField": "d",
					"messageGroupRecentFinalUsernameField": "a",
					"messageGroupRecentFinalAdapterField": "f",
					"messageGroupRecentFinalNotifyMethod": "notifyDataSetChanged",
					"contactUtilClass": "e01.e2",
					"allFoldUserNameSetFieldName": "a",
					"getUnreadCountFromDatabaseUtilClass": "com.tencent.mm.ui.conversation.o3",
					"getUnreadCountFromDatabaseUtilConstructorParams": [
						"com.tencent.mm.ui.conversation.ConversationListView"
					],
					"refreshUnreadCountFromDbMethodName": "b",
					"getMainTabFromMainUiMethodName": "C7",
					"refreshMainTabUnreadMethodName": "n",
					"groupAvatarHook0Class": "com.tencent.mm.feature.avatar.w",
					"groupAvatarHook0Method": "ij",
					"groupAvatarHook0Args": [
						"android.widget.ImageView",
						"java.lang.String",
						"java.lang.String"
					],
					"groupAvatarHook1Class": "com.tencent.mm.feature.avatar.w",
					"groupAvatarHook1Method": "mj",
					"groupAvatarHook1Args": [
						"android.widget.ImageView",
						"java.lang.String"
					],
					"groupAvatarHook2Class": "com.tencent.mm.feature.avatar.w",
					"groupAvatarHook2Method": "nj",
					"groupAvatarHook2Args": [
						"android.widget.ImageView",
						"java.lang.String",
						"float"
					],
					"messageGroupMainRowBinderClass": "fh5.g0",
					"messageGroupMainRowBindMethod": "a",
					"messageGroupMainRowBindArgs": [
						"int",
						"fh5.n",
						"fh5.x",
						"com.tencent.mm.storage.k4"
					]
				},
				"advancedPinConfig": {
					"featureSwitchKey": "1059",
					"featureDefaultEnabled": "true",
					"statusKey": "xchat.feature.advanced_pin_8076",
					"menuCreateClass": "com.tencent.mm.ui.conversation.r3",
					"menuCreateMethod": "onCreateContextMenu",
					"menuCreateContextMenuParameter": "android.view.ContextMenu",
					"menuCreateViewParameter": "android.view.View",
					"menuCreateContextInfoParameter": "android.view.ContextMenu$ContextMenuInfo",
					"menuCreateTalkerField": "g",
					"menuSelectClass": "com.tencent.mm.ui.conversation.p3",
					"menuSelectMethod": "onMMMenuItemSelected",
					"menuSelectItemParameter": "android.view.MenuItem",
					"menuSelectPositionParameter": "int",
					"menuSelectOwnerField": "d",
					"menuSelectTalkerField": "g",
					"popupClass": "ym5.r",
					"popupMethod": "g",
					"popupViewParameter": "android.view.View",
					"popupPositionParameter": "int",
					"popupIdParameter": "long",
					"popupMenuCreateParameter": "android.view.View$OnCreateContextMenuListener",
					"popupMenuSelectParameter": "kc5.t4",
					"popupMenuCreateArgIndex": "3",
					"popupMenuSelectArgIndex": "4",
					"popupXParameter": "int",
					"popupYParameter": "int",
					"conversationFindMethod": "p",
					"conversationValuesMethod": "convertTo",
					"conversationFlagGetterMethod": "G0",
					"conversationFlagSetterMethod": "A1",
					"conversationTimeGetterMethod": "w0",
					"conversationUpdateObjectMethod": "W",
					"conversationUpdateObjectNoRecomputeMethod": "X",
					"conversationStorageDatabaseField": "d",
					"conversationTable": "rconversation",
					"conversationFlagField": "flag",
					"conversationTimeField": "conversationTime",
					"conversationWhereClause": "username=?",
					"conversationUpdateMethod": "q",
					"conversationNotifyMethod": "b",
					"conversationNotifyEventId": "3",
					"advancedFlagMask": "4683743612465315840",
					"advancedFlagValue": "4711687759799816694",
					"placeMenuId": "10090",
					"unplaceMenuId": "10091",
					"menuGroupId": "0",
					"menuOrder": "-1",
					"placeTitle": "高级置顶",
					"unplaceTitle": "取消高级置顶"
				},
				"hideContactConfig": {
					"notifyUtilClass": "com.tencent.mm.booter.notification.x",
					"notifyMethodNameV2": "a",
					"notifyMethodParams": [
						"com.tencent.mm.storage.e9"
					],
					"contactAdapterClass": "zn3.t0",
					"contactAdapterConstructorParams": [
						"com.tencent.mm.plugin.mvvmlist.MvvmList",
						"po5.s",
						"boolean"
					],
					"mvvmListFieldName": "H",
					"ftsUtilClass": "com.tencent.mm.plugin.fts.o",
					"ftsSearchMethod": "o",
					"appForeBackListener": "com.tencent.matrix.lifecycle.owners.x",
					"setTitleMethodName": "u",
					"tvTitleFieldName": "e",
					"mvvmListRefreshMethodName": "q",
					"aliasFieldName": "l",
					"notifyVoipUtilClass": "com.tencent.mm.plugin.voip.model.h2",
					"notifyVoipMethodName": "C",
					"notifyVoipMethodParams": [
						"[B"
					],
					"friendType": [
						2049,
						524291,
						8454147
					],
					"getRoomIdNetClass": "",
					"getRoomIdEndMethodParam": [],
					"voipDataWrapperFieldName": "d",
					"getVoipDataMethodName": "L",
					"voipConfigClass": "a65.sz6",
					"usernameFieldNameFromVoip": "i",
					"checkRecentUserDataUtilClass": "com.tencent.mm.ui.contact.t8",
					"checkRecentUserDataMethodName": "a",
					"recentUserDataFieldName": "d",
					"recentUserNameFieldName": "a",
					"chatHistorySizeAdapterClass": "nw1.t2",
					"chatHistoryListDataFieldName": "e",
					"chatHistoryDataUsernameFiled": "a"
				},
				"showWxIdConfig": {
					"initContactInfoMethodName": "ks3.u9",
					"initContactInfoMethodParams": [
						"com.tencent.mm.plugin.profile.ui.NormalProfileHeaderPreference",
						"android.view.View"
					],
					"aliasFieldName": "m"
				},
				"mainMenuConfigBean": {
					"mainMenuHelperClass": "com.tencent.mm.ui.rg",
					"handleMenuItemMethod": "b",
					"itemSparseArrayFieldName": "s",
					"menuAdapterFieldName": "r",
					"dismissMenuMethodName": "a",
					"menuItemClass": "com.tencent.mm.ui.pg",
					"menuItemConstructorParams": [
						"int",
						"java.lang.String",
						"java.lang.String",
						"int",
						"int"
					],
					"menuItemWrapperClass": "com.tencent.mm.ui.og",
					"homeUiClass": "com.tencent.mm.ui.HomeUI",
					"homeUiRefreshMethod": "o",
					"homeUiMenuHelperField": "k",
					"menuItemClickMethod": "onItemClick",
					"menuItemClickMethodParams": [
						"android.widget.AdapterView",
						"android.view.View",
						"int",
						"long"
					],
					"menuItemWrapperItemField": "b",
					"menuItemTextField": "a"
				},
				"preventUpdateConfigBean": {
					"updateManagerClass": "mw2.b0",
					"updateMethodName": "h",
					"updateMethodParams": [
						"long",
						"java.lang.String",
						"boolean"
					]
				},
				"sendMp3ConfigBean": {
					"voiceInputChangeViewField": "q",
					"targetUsernameFieldName": "d"
				},
				"autoReceiveMoneyConfigBean": {
					"xmlParseUtilClass": "com.tencent.mm.sdk.platformtools.aa",
					"parseDataMethodName": "d",
					"netWorkUtilClass": "hm0.j1",
					"getInstanceMethodName": "d",
					"netSceneQueueFieldName": "b",
					"runGetTransferMoneyTaskMethodName": "h",
					"runGetRedPacketTaskMethodName": "g",
					"getRedPacketIdentifyTaskClass": "com.tencent.mm.plugin.luckymoney.model.i6",
					"getRedPacketIdentifyHookClass": "com.tencent.mm.plugin.luckymoney.model.h6",
					"getRedPacketIdentifyTaskConstructorParams": [
						"int",
						"long",
						"long",
						"int",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String",
						"int",
						"java.lang.String",
						"java.lang.String",
						"int",
						"int",
						"java.lang.String",
						"java.lang.String",
						"int"
					],
					"redPacketIdentifyFieldName": "",
					"transferMoneyTaskClass": "com.tencent.mm.plugin.remittance.model.n0",
					"transferMoneyTaskConstructorParams": [
						"java.lang.String",
						"java.lang.String",
						"int",
						"java.lang.String",
						"java.lang.String",
						"int",
						"java.lang.String",
						"int",
						"java.lang.String",
						"java.util.Map",
						"long",
						"java.lang.String",
						"java.lang.String"
					],
					"redPacketTaskClass": "com.tencent.mm.plugin.luckymoney.model.l6",
					"redPacketTaskConstructorParams": [
						"int",
						"int",
						"java.lang.String",
						"java.lang.String",
						"int",
						"java.lang.String",
						"java.lang.String"
					],
					"redPacketOpenTaskClass": "com.tencent.mm.plugin.luckymoney.model.f6",
					"redPacketOpenTaskConstructorParams": [
						"int",
						"int",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String",
						"java.lang.String"
					],
					"getXmlStrFromMsgObjMethodName": "sysmsg",
					"receiverNameFieldName": ".sysmsg.paymsg.tousername",
					"transferMemoFieldName": ".msg.appmsg.wcpayinfo.pay_memo",
					"talkerIdFieldName": ".sysmsg.paymsg.tousername",
					"transferAppMsgContentFieldName": ".sysmsg.paymsg.appmsgcontent",
					"transferAppMsgParseRoot": "msg",
					"transferIdInAppMsgFieldName": ".msg.appmsg.wcpayinfo.transferid",
					"transferPaySubtypeFieldName": ".msg.appmsg.wcpayinfo.paysubtype",
					"transferReceiverNameInAppMsgFieldName": ".msg.appmsg.wcpayinfo.receiver_username",
					"transactionIdFieldName": ".msg.appmsg.wcpayinfo.transcationid",
					"totalFeeFieldName": ".msg.appmsg.wcpayinfo.total_fee",
					"invalidTimeFieldName": ".msg.appmsg.wcpayinfo.invalidtime",
					"payerNameFieldName": ".msg.appmsg.wcpayinfo.payer_username",
					"nativeUrlFieldName": "r1",
					"receiveTitleFieldName": "k1"
				},
				"timedMsgConfigBean": {
					"uploadMsgUtilClass": "y11.s1",
					"createUploadMsgMethodName": "a",
					"userUtilClass": "e01.x9",
					"getUserTypeMethodName": "z",
					"userTypeFieldName": "e",
					"isFromChatFieldName": "f",
					"toUserFieldName": "b",
					"msgTextFieldName": "d",
					"extDataMapFieldName": "h",
					"doSendMethodName": "b",
					"sendTextTaskClass": "y11.r0",
					"sendTextTaskConstructorParams": [
						"java.lang.String",
						"java.lang.String",
						"int",
						"int",
						"long"
					],
					"sendTextQueueClass": "hm0.j1",
					"sendTextGetInstanceMethodName": "d",
					"sendTextQueueMethodName": "g",
					"transferPhotoUtilsObj": "",
					"transferMsgObjFieldName": "p",
					"transferPhotoMethodName": "K2",
					"sendTipMsgUtilClass": "com.tencent.mm.plugin.luckymoney.model.m5",
					"sendTipMsgMethodName": "q"
				},
				"utilConfigBean": {
					"emojiUtilConfigBean": {
						"emojiInfoClass": "com.tencent.mm.storage.emotion.EmojiInfo",
						"emojiInfoConstructorParams": [
							"java.lang.String"
						],
						"emojiPathUtilClass": "ur.s",
						"getEmojiPathMethodName": "c",
						"emojiUploadServicesClass": "com.tencent.mm.feature.emoji.b0",
						"sendEmojiMethodName": "Bj",
						"emojiDecodeUtilClass": "com.tencent.mm.feature.emoji.b0",
						"emojiDecodeUtilGetInstanceMethodName": "mj",
						"decodeEmojiDataMethodName": "z"
					},
					"deviceOccupyConfig": {
						"deviceOccupyClass": "iq.b",
						"isUsingVoipMethodName": "F",
						"isUsingVoipMethodParams": [
							"android.content.Context",
							"boolean"
						],
						"isUsingCameraMethodName": "i",
						"isUsingCameraMethodParams": [
							"android.content.Context",
							"boolean",
							"android.os.Bundle"
						]
					},
					"snsUtilConfig": {
						"mmActivityClass": "com.tencent.mm.ui.MMActivity",
						"addTextOptionMenuMethodName": "addTextOptionMenu",
						"addTextOptionMenuMethodParams": [
							"int",
							"java.lang.String",
							"android.view.MenuItem$OnMenuItemClickListener",
							"android.view.View$OnLongClickListener",
							"android.view.View$OnTouchListener",
							"com.tencent.mm.ui.fb"
						]
					},
					"receiveMsgUtilConfig": {
						"notificationClass": "com.tencent.mm.booter.notification.x",
						"receiveMsgMethodName": "a",
						"receiveMsgMethodParams": [
							"com.tencent.mm.storage.e9"
						],
						"receiveMsgParam0": "com.tencent.mm.storage.e9",
						"msgSourceFieldName": "G",
						"notificationDispatcherClass": "com.tencent.mm.booter.notification.m0",
						"notificationDispatcherMethodName": "b",
						"notificationDispatcherMethodParams": [
							"java.lang.String",
							"com.tencent.mm.storage.e9",
							"int",
							"boolean"
						],
						"contactUtilClass": "e01.e2",
						"contactDisplayNameMethod": "I"
					}
				},
				"preventSendingStatusConfigBean": {
					"netClass": "com.tencent.mm.modelsimple.g0",
					"doSceneParams": [
						"com.tencent.mm.network.s",
						"com.tencent.mm.modelbase.u0"
					]
				},
				"chatRoomConfig": {
					"chatRoomMemberDataClass": "com.tencent.mm.storage.a3",
					"setMemberListMethodName": "d1",
					"chatRoomOldMemberListMethod": "I0",
					"chatRoomOldRecordMethod": "H0",
					"chatRoomTableName": "chatroom",
					"chatRoomNameColumn": "chatroomname",
					"chatRoomMemberListColumn": "memberlist",
					"chatRoomMemberCountColumn": "memberCount",
					"chatRoomDataColumn": "roomdata",
					"chatRoomOldQuerySql": "SELECT memberlist,memberCount,roomdata FROM chatroom WHERE chatroomname = ?",
					"chatRoomUpdateDbClasses": [
						"com.tencent.wcdb.compat.SQLiteDatabase",
						"com.tencent.wcdb.database.SQLiteDatabase"
					],
					"chatRoomUpdateMethodName": "updateWithOnConflict",
					"chatRoomMemberDataItemClass": "com.tencent.mm.storage.z2",
					"chatRoomNameFieldName": "field_chatroomname",
					"chatRoomMemberListFieldName": "field_memberlist",
					"chatRoomMemberCountFieldName": "field_memberCount",
					"chatRoomDataFieldName": "field_roomdata",
					"logClass": "com.tencent.mars.xlog.Log",
					"logMethodName": "i",
					"updateMemberDisplayNameLogTag": "ChatroomDisplayNameCache",
					"updateMemberDisplayNameLogContent": "update cache set %s=%s",
					"roomMemberDisplayNameParseMethod": "t0",
					"roomMemberDisplayNameMapFieldName": "n2",
					"roomMemberDisplayNameMethodName": "y0",
					"roomMemberDisplayNameFieldName": "e",
					"groupMemberFallbackName": "群友",
					"groupJoinSuffix": "加入了群聊",
					"groupLeaveSuffix": "退出了群聊",
					"groupNicknameClearSuffix": "清空了他在此群内的昵称",
					"groupNicknameSetPrefix": "设置群内昵称为\"",
					"groupNicknameSetSuffix": "\"",
					"groupReminderStatusKey": "xchat.feature.group_reminder",
					"groupNicknameStatusKey": "xchat.feature.group_nickname",
					"groupReminderEnabledPreferenceKey": "1043",
					"groupNicknameEnabledPreferenceKey": "1044"
				},
				"taskConfig": {
					"statusKey": "xchat.feature.task",
					"enabledPreferenceKey": "1058",
					"intentAction": "com.xchat.task.EXECUTE",
					"taskIdExtra": "taskId",
					"fallbackMinDelayMs": "1000",
					"duplicateWindowMs": "3000",
					"actionStepDelayMs": "500",
					"galleryOwnerFlagExtra": "x_chat_open_by_me",
					"gallerySelectionFlagExtra": "x_chat_select_img",
					"galleryCallbackField": "x_chat_output_img_path",
					"galleryCallbackInstanceField": "add",
					"galleryResultImageListExtra": "key_select_image_list",
					"galleryResultCropImageListExtra": "CropImage_OutputPath_List",
					"galleryResultCropImageExtra": "CropImage_OutputPath",
					"galleryResultVideoListExtra": "key_select_video_list",
					"galleryResultFileListExtra": "key_select_file_list",
					"galleryResultMultiPicExtra": "key_select_multi_pic_item",
					"galleryResultMixMediaExtra": "key_select_mix_media_list",
					"galleryRequireExistingPath": "false",
					"galleryAcceptContentUri": "true",
					"galleryAcceptNonAbsolutePath": "true",
					"galleryMaterializeContentUri": "true",
					"galleryDecodeEncodedFilePath": "true",
					"galleryUriCachePrefix": "xchat_task_img_",
					"galleryUriCacheSuffix": ".jpg",
					"textActionType": "0",
					"imageActionType": "1",
					"emojiActionType": "2",
					"textApiActionType": "3",
					"imageApiActionType": "4",
					"snsActionType": "5",
					"emojiFallbackMaxCount": "0",
					"emojiPreloadMaxCount": "20",
					"emojiFallbackFilterInvalidThumb": "false"
				},
				"groupRoleConfig": {
					"bindClass": "ve5.g",
					"bindMethod": "h",
					"bindParameterTypes": [
						"po5.s0",
						"po5.c",
						"int",
						"int",
						"boolean",
						"java.util.List"
					],
					"itemBindClass": "com.tencent.mm.ui.chatting.viewitems.a0",
					"itemBindMethod": "o",
					"itemBindParameterTypes": [
						"com.tencent.mm.ui.chatting.viewitems.g0",
						"fd5.d",
						"com.tencent.mm.storage.e9",
						"java.lang.String"
					],
					"bindHolderArgumentIndex": "0",
					"bindItemArgumentIndex": "1",
					"itemBindHolderArgumentIndex": "0",
					"itemBindMessageArgumentIndex": "2",
					"itemBindSenderArgumentIndex": "3",
					"bindItemClass": "ye5.d",
					"bindItemParamsField": "d",
					"bindParamsClass": "dg5.a",
					"bindParamsMessageField": "b",
					"messageClass": "com.tencent.mm.storage.e9",
					"messageTalkerMethod": "N0",
					"messageIsSendMethod": "z0",
					"incomingIsSendValue": "0",
					"messageContentMethod": "j",
					"messageChatroomSuffix": "@chatroom",
					"messageSenderDelimiter": ":\n",
					"holderItemViewField": "itemView",
					"viewHolderClass": "com.tencent.mm.ui.chatting.viewitems.g0",
					"holderUserTextField": "userTV",
					"serviceRegistryClass": "hm0.j1",
					"serviceGetMethod": "s",
					"serviceInterfaceClass": "cw1.f",
					"serviceImplementationClass": "bw1.a",
					"serviceStorageMethod": "a",
					"storageClass": "com.tencent.mm.storage.a3",
					"storageGetChatroomMethod": "H0",
					"chatroomClass": "com.tencent.mm.storage.z2",
					"roomOwnerMethod": "K0",
					"roomAdminMethod": "G0"
				},
				"hookTargets": {
					"wechatPackage": "com.tencent.mm",
					"galleryAlbumPreviewUiClass": "com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI",
					"galleryAlbumPreviewSelectMethod": "J7",
					"galleryAlbumPreviewResultMethod": "Q7",
					"galleryAlbumPreviewResultIntentArgClass": "android.content.Intent",
					"galleryImagePreviewUiClass": "com.tencent.mm.plugin.gallery.ui.ImagePreviewUI",
					"galleryActivityResultHookClass": "android.app.Activity",
					"galleryActivityResultMethod": "setResult",
					"galleryActivityResultIntentArgClass": "android.content.Intent",
					"galleryImageGalleryUiClass": "com.tencent.mm.ui.chatting.gallery.ImageGalleryUI",
					"snsFindMoreFriendsUiClass": "com.tencent.mm.ui.FindMoreFriendsUI",
					"snsFindMoreRedDotMethod": "a1",
					"snsAutoRefreshHelperClass": "com.tencent.mm.plugin.sns.model.l4",
					"snsAutoRefreshGetServerMethod": "Zj",
					"snsAutoRefreshMethod": "e",
					"snsAutoRefreshUserName": "@__weixintimtline",
					"snsAutoRefreshSourceType": "1",
					"snsSqlHelperClass": "com.tencent.mm.plugin.sns.storage.p2",
					"snsSqlRawQueryMethodName": "B",
					"snsSqlExecSQLMethodName": "A",
					"snsSqlUpdateMethodName": "q",
					"snsSqlDeleteMethodName": "delete",
					"snsDataDbHelperClass": "com.tencent.mm.plugin.sns.model.l4",
					"snsDataDbGetterMethod": "vj",
					"snsProfileWidgetClass": "com.tencent.mm.plugin.profile.e0",
					"snsProfileWidgetAttachMethod": "Q",
					"snsProfilePreferenceScreenClass": "com.tencent.mm.ui.base.preference.r",
					"snsProfileContactClass": "com.tencent.mm.storage.y3",
					"snsProfileContactUserMethod": "d1",
					"snsProfileShowPreferenceMethod": "l",
					"snsProfilePreferenceKey": "contact_profile_sns",
					"snsDetailTimeUtilClass": "com.tencent.mm.plugin.sns.ui.et",
					"snsDetailTimeUtilTimelineMethod": "b",
					"snsDetailTimeFormat": "yyyy-MM-dd HH:mm:ss",
					"snsDetailTimeTextFormat": "$time | $originalText",
					"snsInfoStorageClass": "com.tencent.mm.plugin.sns.storage.f2",
					"snsStorageSetMethod": "M3",
					"snsStorageUpdateBySnsIdMethod": "T3",
					"snsStorageUpdateByLocalMethod": "b4",
					"editMenuDispatchClass": "com.tencent.mm.ui.chatting.viewitems.q0",
					"editMenuDispatchMethod": "g",
					"editMenuContextClass": "kc5.g4",
					"editMenuContextClearMethod": "clear",
					"editMenuItemClass": "kc5.h4",
					"editMenuItemCallbackMethod": "c",
					"editMenuDialogClass": "com.tencent.mm.ui.widget.dialog.u0",
					"editMenuDialogMethod": "onItemClick",
					"chatMenuItemClickMethod": "onItemClick",
					"messageStorageClass": "com.tencent.mm.storage.e9",
					"audioPickerResultActivityClass": "com.tencent.mm.ui.LauncherUI",
					"audioPickerResultFallbackActivityClass": "com.tencent.mm.ui.chatting.ChattingUI",
					"audioPickerResultMethod": "onActivityResult",
					"friendAvatarPickerResultActivityClass": "com.tencent.mm.plugin.profile.ui.ContactInfoUI",
					"contactInfoActivityClass": "com.tencent.mm.plugin.profile.ui.ContactInfoUI",
					"chattingUiClass": "com.tencent.mm.ui.chatting.ChattingUI",
					"homeUiClass": "com.tencent.mm.ui.HomeUI",
					"chatFooterClass": "com.tencent.mm.pluginsdk.ui.chat.ChatFooter",
					"chatActionFooterConstructorArg0": "android.content.Context",
					"chatActionFooterConstructorArg1": "android.util.AttributeSet",
					"chatFooterDetachMethod": "onDetachedFromWindow",
					"chatFooterSetQuoteMethod": "F",
					"chatFooterSetUserNameMethod": "setUserName",
					"chatActionFooterSetUserNameArg0": "java.lang.String",
					"chatActionMenuCreateClass": "com.tencent.mm.ui.chatting.viewitems.m0",
					"chatActionMenuCreateMethod": "a",
					"chatActionMenuCreateArg0": "kc5.g4",
					"chatActionMenuCreateArg1": "android.view.View",
					"chatActionMenuCreateArg2": "android.view.ContextMenu$ContextMenuInfo",
					"chatActionMenuSelectClass": "com.tencent.mm.ui.chatting.viewitems.p0",
					"chatActionMenuSelectMethod": "onMMMenuItemSelected",
					"chatActionMenuSelectArg0": "android.view.MenuItem",
					"chatActionBindClass": "com.tencent.mm.ui.chatting.viewitems.a0",
					"chatActionBindMethod": "H",
					"chatActionBindArg0": "fd5.d",
					"chatActionBindArg1": "android.view.View",
					"chatActionBindArg2": "java.lang.Object",
					"chatActionHolderBindMethod": "l",
					"chatActionHolderBindArg0": "com.tencent.mm.ui.chatting.viewitems.g0",
					"chatActionHolderBindArg2": "fd5.d",
					"chatActionHolderBindArg3": "com.tencent.mm.storage.e9",
					"chatFooterVoiceButtonField": "q",
					"emojiPathSingletonField": "a",
					"emojiServiceManagerClass": "pa5.n0",
					"emojiServiceFactoryMethod": "c",
					"emojiFeatureServiceClass": "com.tencent.mm.feature.emoji.b0",
					"emojiFeatureDecodeServiceMethod": "mj",
					"emojiFeatureDecodeBytesMethod": "z",
					"emojiFeatureLoadByMd5Method": "N",
					"emojiStorageManagerClass": "com.tencent.mm.storage.m5",
					"emojiStorageManagerGetMethod": "f",
					"emojiStorageAccessorMethod": "c",
					"emojiStorageLoadByMd5Method": "G1",
					"emojiStorageLoadOrCreateMethod": "N0",
					"emojiStorageListMethod": "t1",
					"emojiInfoCatalogField": "field_catalog",
					"emojiFavoriteCatalog": "81",
					"emojiInfoGroupIdField": "field_groupId",
					"emojiExcludeGroupIds": "50,49",
					"emojiInfoMd5Field": "field_md5",
					"emojiInfoMd5Method": "getMd5",
					"emojiInfoThumbBitmapMethod": "t0",
					"emojiFeatureSendMethod": "Bj",
					"msgIdTalkerClass": "com.tencent.mm.plugin.msg.MsgIdTalker",
					"msgIdTalkerDefaultField": "g",
					"chatToolbarPanelClass": "com.tencent.mm.pluginsdk.ui.chat.AppPanel",
					"chatToolbarPanelConstructorArg0": "android.content.Context",
					"chatToolbarPanelConstructorArg1": "android.util.AttributeSet",
					"chatToolbarPanelInitGridMethod": "n",
					"chatToolbarPanelInitGridArg0": "com.tencent.mm.pluginsdk.ui.chat.AppPanel",
					"chatToolbarPanelFlipperField": "r",
					"chatToolbarFooterClass": "com.tencent.mm.pluginsdk.ui.chat.ChatFooter",
					"chatToolbarFooterConstructorArg0": "android.content.Context",
					"chatToolbarFooterConstructorArg1": "android.util.AttributeSet",
					"chatToolbarFooterConstructorArg2": "int",
					"chatToolbarFooterGetPanelMethod": "getAppPanel",
					"chatToolbarFooterContainerPath": "0,1",
					"albumScanFeatureKey": "1016",
					"albumScanBundleClass": "com.tencent.mm.plugin.scanner.ui.BaseScanUI",
					"albumScanBundleMethod": "T6",
					"albumScanBundleParams": [
						"com.tencent.mm.plugin.scanner.ui.BaseScanUI",
						"java.lang.String",
						"jd0.c3",
						"com.tencent.qbar.WxQBarResult",
						"int",
						"com.tencent.qbar.ScanIdentifyReportInfo"
					],
					"albumScanRouteClass": "h14.u",
					"albumScanRouteMethod": "g",
					"albumScanRouteParams": [
						"android.app.Activity",
						"java.lang.String",
						"int",
						"int",
						"int",
						"java.lang.String",
						"int",
						"int",
						"u04.e",
						"com.tencent.mm.plugin.scanner.view.s",
						"android.os.Bundle",
						"boolean",
						"int",
						"boolean",
						"com.tencent.qbar.ScanIdentifyReportInfo",
						"a65.pb0"
					],
					"albumScanRouteSourceArgIndex": "3",
					"albumScanRouteSceneArgIndex": "4",
					"albumScanAlbumSourceValue": "1",
					"albumScanAlbumSceneValue": "34",
					"albumScanBarcodeClass": "h14.f",
					"albumScanBarcodeMethod": "b",
					"albumScanBarcodeParams": [
						"android.app.Activity",
						"u04.e",
						"com.tencent.mm.plugin.scanner.view.s",
						"java.lang.String",
						"boolean",
						"int",
						"java.lang.String",
						"android.os.Bundle",
						"int",
						"boolean",
						"int",
						"boolean",
						"boolean",
						"int",
						"java.util.ArrayList"
					],
					"albumScanBarcodeSelectArgIndex": "4",
					"albumScanBarcodeRequestSceneArgIndex": "8",
					"albumScanBarcodeModeArgIndex": "13",
					"albumScanBarcodeCameraSelectValue": "false",
					"albumScanBarcodeCameraRequestSceneValue": "0",
					"albumScanBarcodeAlbumModeValue": "1",
					"albumScanBarcodeCameraModeValue": "0",
					"albumScanRequestClass": "com.tencent.mm.plugin.scanner.model.f0",
					"albumScanRequestParamsInt": [
						"int",
						"java.lang.String",
						"int",
						"int",
						"int",
						"a65.km"
					],
					"albumScanRequestParamsString": [
						"java.lang.String",
						"java.lang.String",
						"int",
						"int",
						"int",
						"a65.km"
					],
					"albumScanRequestWrapperField": "e",
					"albumScanRequestPacketField": "a",
					"albumScanRequestBodyField": "a",
					"albumScanRequestSceneField": "f",
					"albumScanRequestSourceField": "g",
					"albumScanRequestLocalAlbumField": "h",
					"albumScanRequestCameraSceneValue": "0",
					"albumScanRequestCameraSourceValue": "0",
					"albumScanRequestCameraLocalAlbumValue": "false",
					"albumScanSourceBundleKey": "qbar_string_scan_source",
					"albumScanCameraSourceValue": "0",
					"albumScanCameraSceneValue": "4",
					"albumScanImageSourceBundleKey": "result_image_source",
					"albumScanCameraImageSourceValue": "1",
					"albumScanOfflineTipsBundleKey": "key_offline_scan_show_tips",
					"albumScanOfflineTipsValue": "false",
					"virtualLocationListenerClass0": "k11.u",
					"virtualLocationListenerClass1": "k11.t",
					"virtualLocationListenerClass2": "mf.c",
					"virtualLocationChangedMethod": "onLocationChanged",
					"virtualLocationPickerClass": "com.tencent.mm.plugin.location.ui.RedirectUI",
					"virtualLocationPickerResultMethod": "onActivityResult",
					"snsUploadUiClass": "com.tencent.mm.plugin.sns.ui.SnsUploadUI",
					"snsListenerClass": "com.tencent.mm.plugin.sns.ui.listener.c",
					"snsHelperClass": "com.tencent.mm.plugin.sns.model.l4",
					"snsContextMenuClass": "xd4.j",
					"snsContextMenuMethod": "onCreateContextMenu",
					"snsContextMenuClickClass": "xd4.c",
					"snsContextMenuClickMethod": "onMMMenuItemSelected",
					"snsMenuClickDataFieldName": "d",
					"snsMenuDataWrapperMethod": "c",
					"snsMenuDataInfoMethod": "b1",
					"snsMenuUserNameMethod": "getUserName",
					"snsMenuSnsIdFieldName": "field_snsId",
					"snsMenuContextMethod": "b",
					"snsListenerUserNameFieldName": "f",
					"snsListenerContextFieldName": "h",
					"snsHelperGetInstanceMethod": "aj",
					"snsHelperGetInfoMethod": "v2",
					"snsLifecycleMethod": "onCreate",
					"snsObjectClass": "com.tencent.mm.protocal.protobuf.SnsObject",
					"timeLineObjectClass": "com.tencent.mm.protocal.protobuf.TimeLineObject",
					"snsInfoName": "SnsInfo",
					"snsProtoAttrBufField": "attrBuf",
					"snsObjectIdField": "snsId",
					"snsObjectLikeUserListField": "LikeUserList",
					"snsObjectLikeUserListCountField": "LikeUserListCount",
					"snsObjectLikeCountField": "LikeCount",
					"snsObjectLikeFlagField": "LikeFlag",
					"snsInfoSetLikeFlagMethod": "setLikeFlag",
					"snsLikeUserClass": "a65.ha6",
					"snsLikeUserIdField": "d",
					"snsLikeUserAliasField": "e",
					"snsLikeUserDisplayNameField": "h",
					"snsLikeUserNickNameField": "o",
					"timeLineContentObjField": "ContentObj",
					"timeLineContentDescField": "ContentDesc",
					"timeLineContentField": "content",
					"snsMediaListField": "h",
					"snsContentObjTypeField": "e",
					"snsFinderObjectField": "o",
					"snsFinderXmlUtilClass": "tz2.i5",
					"snsFinderObjectToXmlMethod": "f",
					"snsFinderGetStringMethod": "getString",
					"snsFinderGetIntegerMethod": "getInteger",
					"snsFinderObjectIdIndex": "0",
					"snsFinderNatureFlagIndex": "25",
					"snsFinderContentTypeIndex": "31",
					"snsFinderContentTypeMegaValue": "2",
					"snsTimelineTypeFinderDefault": "28",
					"snsTimelineTypeFinderNature": "50",
					"snsTimelineTypeFinderMega": "59",
					"snsUploadTypeFinderDefault": "17",
					"snsUploadTypeFinderNature": "38",
					"snsUploadTypeFinderMega": "45",
					"snsFinderObjectXmlKey": "ksnsupload_finder_object_xml",
					"snsFinderPostFromSnsTypeKey": "finder_post_from_sns_type",
					"snsFinderPostFromSnsTypeValue": "3",
					"snsFinderFeedIdKey": "finder_feed_id",
					"snsFinderNeedReportKey": "ksnsupload_finder_need_report",
					"snsNeedResultKey": "need_result",
					"snsUploadLinkKey": "Ksnsupload_link",
					"snsUploadLinkDescKey": "ksnsupload_link_desc",
					"snsUploadTypeKey": "Ksnsupload_type",
					"snsSightPathKey": "KSightPath",
					"snsSightThumbPathKey": "KSightThumbPath",
					"snsMediaPathListKey": "sns_kemdia_path_list",
					"snsSingleMediaPathKey": "sns_kemdia_path",
					"snsFilterIdKey": "KFilterId",
					"snsPostManuKey": "KSnsPostManu",
					"snsTouchCameraTimeKey": "KTouchCameraTime",
					"snsFromKey": "KSnsFrom",
					"snsFromValue": "17",
					"snsTakePhotoKey": "Kis_take_photo",
					"snsSightMd5Key": "sight_md5",
					"snsVfsUtilClass": "com.tencent.mm.vfs.w6",
					"snsFileMd5Method": "p",
					"snsDraftFlagKey": "Kis_from_sns_drafg_stg",
					"snsDescriptionKey": "Kdescription",
					"snsStringSeqMethod": "getStringSeq",
					"snsStringSeqField": "field_stringSeq",
					"snsIdUtilClass": "fb4.z0",
					"snsIdLongToStringMethod": "t0",
					"snsCommentUpdateEventClass": "com.tencent.mm.autogen.events.SnsCommentUpdateEvent",
					"snsCommentUpdateEventDataField": "g",
					"snsCommentUpdateEventSnsIdField": "a",
					"snsCommentUpdateEventCommentField": "b",
					"snsCommentUpdateEventPublishMethod": "e",
					"snsCreateTimeField": "field_createTime",
					"snsContentField": "field_content",
					"snsSourceTypeField": "sourceType",
					"protoParseFromMethod": "parseFrom",
					"protoToByteArrayMethod": "toByteArray",
					"snsGetLocalIdMethod": "getLocalid",
					"activityCreateMethod": "onCreate",
					"activityStartMethod": "onStart",
					"activityStopMethod": "onStop",
					"activityResumeMethod": "onResume",
					"activityWindowFocusChangedMethod": "onWindowFocusChanged",
					"activityDestroyMethod": "onDestroy",
					"imageViewSetScaleTypeMethod": "setScaleType",
					"imageViewScaleTypeClass": "android.widget.ImageView$ScaleType",
					"multiTouchImageViewClass": "com.tencent.mm.ui.base.MultiTouchImageView",
					"mainTabUiClass": "com.tencent.mm.ui.MainTabUI",
					"mainTabUiRefreshMethod": "d",
					"launcherBottomTabViewClass": "com.tencent.mm.ui.LauncherUIBottomTabView",
					"bottomTabConstructorArg0": "android.content.Context",
					"bottomTabSelectMethod": "setTo",
					"bottomTabUpdateMainUnreadMethod": "k",
					"bottomTabUpdateContactUnreadMethod": "i",
					"bottomTabUpdateFindUnreadMethod": "j",
					"bottomTabUpdateSettingsUnreadMethod": "l",
					"bottomTabFinderBadgeMethod": "h",
					"bottomTabFriendPointMethod": "f",
					"bottomTabContainerField": "E",
					"bottomTabCurrentIndexField": "d",
					"bottomTabItemViewField": "d",
					"bottomTabItemTextField": "f",
					"bottomTabItemField0": "f",
					"bottomTabItemField1": "h",
					"bottomTabItemField2": "g",
					"bottomTabItemField3": "i",
					"frostedContentViewClass": "com.tencent.mm.ui.FrostedContentView",
					"frostedBlurMethod": "a",
					"brightnessDelegateClass": "com.tencent.kinda.framework.app.UIPagePlatformFuncDelegateImpl",
					"brightnessUtilityClass": "com.tencent.kinda.framework.app.KindaPlatformUtil",
					"brightnessSetScreenBrightnessMethod": "setScreenBrightness",
					"brightnessGetSystemBrightnessPercentMethod": "getSystemBrightnessPercent",
					"brightnessWindowClass": "com.android.internal.policy.PhoneWindow",
					"brightnessWindowSetAttributesMethod": "setAttributes",
					"brightnessWindowLayoutParamsClass": "android.view.WindowManager$LayoutParams",
					"tinkerInternalsClass": "com.tencent.tinker.loader.shareutil.ShareTinkerInternals",
					"tinkerEnabledMethodPrefix": "isTinkerEnable",
					"tinkerCleanPatchMethod": "cleanPatch",
					"notificationClass": "com.tencent.mm.booter.notification.x",
					"receiveMsgMethodName": "a",
					"receiveMsgParam0": "com.tencent.mm.storage.e9",
					"msgSourceFieldName": "G",
					"browserSnsTransparentUiClass": "com.tencent.mm.plugin.sns.ui.SnsTransparentUI",
					"browserWebViewUiClass": "com.tencent.mm.plugin.webview.ui.tools.WebViewUI",
					"browserActivityCreateMethod": "onCreate",
					"browserActivityCreateBundleClass": "android.os.Bundle",
					"mainTabViewPagerField": "mViewPager",
					"mainTabBottomTabViewId": "0x7f093c64",
					"chatFooterQuoteMethod": "y1",
					"mainMenuRefreshMethod": "o",
					"mmFragmentActivityClass": "com.tencent.mm.ui.MMFragmentActivity",
					"imageCropUiClass": "com.tencent.mm.plugin.gallery.picker.view.ImageCropUI",
					"launcherUiClass": "com.tencent.mm.ui.LauncherUI",
					"sendImgProxyUiClass": "com.tencent.mm.ui.chatting.SendImgProxyUI",
					"chatQ3Class": "com.tencent.mm.ui.chatting.q3",
					"voipZidlClass": "com.tencent.mm.plugin.voipmp.platform.ZIDL_ibmKH7hbMB",
					"setUserNameMethod": "setUserName",
					"onAttachedToWindowMethod": "onAttachedToWindow",
					"finishMethod": "finish",
					"initViewMethod": "initView",
					"timeAdapterClass": "com.tencent.mm.view.recyclerview.WxRecyclerAdapter",
					"timeAdapterBindMethod": "p0",
					"timeAdapterHolderClass": "po5.s0",
					"timeNativeFinalBindClass": "ve5.g",
					"timeNativeFinalBindMethod": "h",
					"timeNativeFinalHolderClass": "po5.s0",
					"timeNativeFinalItemClass": "po5.c",
					"timeNativeFinalPayloadClass": "java.util.List",
					"timeNativeFinalArgumentCount": "6",
					"timeNativeFinalMessageArgIndex": "1",
					"timeNativeFinalMessagePath": "d.b",
					"timeNativeVisibilityHookClass": "android.view.View",
					"timeNativeVisibilityHookMethod": "setVisibility",
					"timeNativePaddingHookClass": "android.view.View",
					"timeNativePaddingHookMethod": "setPadding",
					"timeNativeBackgroundResourceHookClass": "android.view.View",
					"timeNativeBackgroundResourceHookMethod": "setBackgroundResource",
					"timeNativeBackgroundColorHookClass": "android.view.View",
					"timeNativeBackgroundColorHookMethod": "setBackgroundColor",
					"timeNativeTextColorHookClass": "android.widget.TextView",
					"timeNativeTextColorHookMethod": "setTextColor",
					"timeHolderArgIndex": "0",
					"timePositionArgIndex": "1",
					"timeHolderViewFieldName": "itemView",
					"timeAdapterDataClass": "",
					"timeAdapterPayloadClass": "",
					"timeAdapterDataPath": "I.o",
					"timeAdapterGetMessageMethod": "J0",
					"timeMessageArgIndex": "1",
					"timeMessagePath": "d.b",
					"timeViewId": "0x7f091092",
					"timeContentRootViewId": "0x7f090fa7",
					"timeViewTagFieldName": "",
					"timeCreateTimeFieldName": "field_createTime",
					"timeIsSendFieldName": "field_isSend",
					"timeMillisThreshold": "100000000000",
					"timeActualEnabledPreferenceKey": "1010",
					"timeActualAllowedTypeFieldName": "field_type",
					"timeActualAllowedTypes": "1,3,34,43,47,48,49,62,419430449,436207665",
					"timeActualRequireAvatar": "true",
					"timeActualAvatarViewId": "0x7f090f40",
					"timeActualHorizontalMarginDp": "12",
					"timeActualTopMarginDp": "0",
					"timeCenterStyleEnabledPreferenceKey": "1025",
					"timeCenterStylePreferenceKey": "1026",
					"timeRenderStylePreferenceKey": "1013",
					"timeDebugViewPosition": "false",
					"timeAncestorScanDepth": "6",
					"timeReanchorAfterLayout": "false",
					"timeReanchorDelayMs": "0",
					"timeReanchorSecondDelayMs": "0",
					"timeReanchorThirdDelayMs": "0",
					"timeCenterFallbackToAnyView": "false",
					"timePreviousSystemTimeSiblingScanCount": "5",
					"timeInjectedNativeVerticalRule": "3",
					"timeInjectedFallbackVerticalRule": "2",
					"timeInjectedNativeTranslationDp": "0",
					"timeInjectedFallbackTranslationDp": "0",
					"timeInjectedVerticalRule": "3",
					"timeUseNativeParentHost": "true",
					"timeRequireRelativeLayoutHost": "true",
					"timeReflowFollowingSiblings": "true",
					"timeStatusKey": "xchat.feature.message_time_8076",
					"stateSaveGuardEnabled": "true",
					"stateSaveGuardActivityClass": "androidx.activity.ComponentActivity",
					"stateSaveGuardMethod": "onSaveInstanceState",
					"stateSaveGuardStateKey": "androidx.lifecycle.BundlableSavedStateRegistry.key",
					"stateSaveGuardMaxParcelBytes": "262144",
					"chatActionStatusKey": "xchat.feature.chat_action_8076",
					"chatActionLegacyStatusKey": "o1.c",
					"G": "G",
					"getMsgId": "getMsgId",
					"field_msgId": "field_msgId",
					"c": "c",
					"getType": "getType",
					"a": "a",
					"d": "d",
					"getContent": "getContent",
					"S1": "S1",
					"getString": "getString",
					"content": "content",
					"field_content": "field_content",
					"getImgPath": "getImgPath",
					"field_imgPath": "field_imgPath",
					"imgPath": "imgPath",
					"P0": "P0",
					"getTalker": "getTalker",
					"field_talker": "field_talker",
					"field_talkerUserName": "field_talkerUserName",
					"getMsgType": "getMsgType",
					"field_type": "field_type",
					"type": "type",
					"convertView": "convertView",
					"checkBox": "checkBox",
					"f": "f",
					"setContent": "setContent",
					"chatActionMediaTransferFirst": "true",
					"imageSendParamClass": "h70.i0",
					"imageSendParamSceneField": "a",
					"imageSendParamSceneValue": "4",
					"imageSendSelfClass": "e01.z1",
					"imageSendSelfMethod": "r",
					"imageSendTaskClass": "o70.g",
					"imageSendTaskImageType": "0",
					"imageSendTaskSourceField": "j",
					"imageSendTaskSourceValue": "media_generate_send_img",
					"imageSendServiceManagerClass": "pa5.n0",
					"imageSendServiceClass": "at.d1",
					"imageSendServiceFactoryMethod": "c",
					"imageSendServiceSendMethod": "Cj",
					"imagePathThumbnailDirPrefix": "THUMBNAIL_DIRPATH://",
					"imagePathThumbnailNamePrefix": "th_",
					"imagePathServiceSuffixValue": "",
					"imagePathServiceManagerClass": "pa5.n0",
					"imagePathServiceClass": "qh3.u0",
					"imagePathServiceFactoryMethod": "c",
					"imagePathBusinessClass": "in5.f0",
					"imagePathBusinessField": "i",
					"imagePathServiceResolveMethod": "tj",
					"mediaPreloadImageType": "3",
					"mediaPreloadVideoType": "43",
					"mediaPreloadVoiceType": "34",
					"mediaPreloadMessageClass": "com.tencent.mm.storage.e9",
					"mediaPreloadMessageConvertMethod": "convertFrom",
					"mediaPreloadServiceManagerClass": "pa5.n0",
					"mediaPreloadServiceFactoryMethod": "c",
					"mediaPreloadImageServiceClass": "qh3.u0",
					"mediaPreloadImageMethod": "lj",
					"mediaPreloadVideoLogicClass": "v21.d3",
					"mediaPreloadVideoMethodPrimary": "K",
					"mediaPreloadVideoMethodSecondary": "L",
					"mediaPreloadVoiceManagerClass": "y21.p0",
					"mediaPreloadVoiceServiceGetter": "kj",
					"mediaPreloadVoiceServiceStartMethod": "e",
					"mediaPreloadSnsEnabled": "true",
					"mediaPreloadSnsTimelineMethod": "getTimeLine",
					"mediaPreloadSnsDefaultCreateTime": "0",
					"mediaPreloadSnsStatusKey": "xchat.feature.sns_forbid_delete_preload",
					"videoSendServiceManagerClass": "pa5.n0",
					"videoSendServiceClass": "qh3.u0",
					"videoSendServiceFactoryMethod": "c",
					"videoSendBusinessClass": "in5.f0",
					"videoSendBusinessField": "s",
					"videoSendPathMethod": "Fj",
					"videoSendThreadClass": "com.tencent.mm.pluginsdk.model.c3",
					"videoSendSceneValue": "2",
					"videoSendThreadStartMethod": "start",
					"videoSendSearchRootSuffix": "/MicroMsg",
					"videoSendSearchMaxDepth": "8"
				},
				"globalBackgroundConfig": {
					"enabledPreferenceKey": "xchat_global_bg_enabled",
					"autoBackgroundPreferenceKey": "1049",
					"opacityPreferenceKey": "xchat_global_bg_opacity",
					"reloadOnApply": "true",
					"defaultOpacityPercent": "10",
					"minOpacityPercent": "1",
					"maxOpacityPercent": "80"
				},
				"friendAvatarConfig": {
					"enabledPreferenceKey": "xchat_friend_avatar_enabled",
					"statusKey": "xchat.feature.friend_avatar_8076",
					"storageDirName": "XChatFriendAvatar",
					"contactInfoActivityClass": "com.tencent.mm.plugin.profile.ui.ContactInfoUI",
					"contactInfoActivityClassContains": ".plugin.profile.ui.ContactInfoUI",
					"contactUserExtraKeyCount": "5",
					"contactUserExtraKeys": [
						"Contact_User",
						"Chat_User",
						"RoomInfo_Id",
						"room_name",
						"Contact_ChatRoomId"
					],
					"pickerAction": "android.intent.action.GET_CONTENT",
					"pickerType": "image/*",
					"pickerCategory": "android.intent.category.OPENABLE",
					"pickerRequestBase": "10086",
					"avatarCornerRadiusDp": "4",
					"avatarDecodeMaxPx": "256",
					"friendAvatarRowHookClass": "fh5.g0",
					"friendAvatarRowHookMethod": "a",
					"friendAvatarRowHookArgs": [
						"int",
						"fh5.n",
						"fh5.x",
						"com.tencent.mm.storage.k4"
					],
					"friendAvatarRowHolderArgIndex": "1",
					"friendAvatarRowConversationArgIndex": "3",
					"friendAvatarRowAvatarField0": "a",
					"friendAvatarRowAvatarField1": "f386886a",
					"friendAvatarHook0Class": "com.tencent.mm.feature.avatar.w",
					"friendAvatarHook0Method": "ij",
					"friendAvatarHook0Args": [
						"android.widget.ImageView",
						"java.lang.String",
						"java.lang.String"
					],
					"friendAvatarHook1Class": "com.tencent.mm.feature.avatar.w",
					"friendAvatarHook1Method": "mj",
					"friendAvatarHook1Args": [
						"android.widget.ImageView",
						"java.lang.String"
					],
					"friendAvatarHook2Class": "com.tencent.mm.feature.avatar.w",
					"friendAvatarHook2Method": "nj",
					"friendAvatarHook2Args": [
						"android.widget.ImageView",
						"java.lang.String",
						"float"
					],
					"friendAvatarHook3Class": "com.tencent.mm.feature.avatar.w",
					"friendAvatarHook3Method": "hj",
					"friendAvatarHook3Args": [
						"android.widget.ImageView",
						"java.lang.String"
					],
					"friendAvatarHook4Class": "com.tencent.mm.feature.avatar.w",
					"friendAvatarHook4Method": "kj",
					"friendAvatarHook4Args": [
						"android.widget.ImageView",
						"java.lang.String",
						"boolean"
					],
					"friendAvatarHook5Class": "com.tencent.mm.feature.avatar.w",
					"friendAvatarHook5Method": "lj",
					"friendAvatarHook5Args": [
						"android.widget.ImageView",
						"java.lang.String"
					],
					"friendAvatarHook6Class": "com.tencent.mm.pluginsdk.ui.u",
					"friendAvatarHook6Method": "a",
					"friendAvatarHook6Args": [
						"android.widget.ImageView",
						"java.lang.String"
					],
					"friendAvatarHook7Class": "com.tencent.mm.pluginsdk.ui.u",
					"friendAvatarHook7Method": "b",
					"friendAvatarHook7Args": [
						"android.widget.ImageView",
						"java.lang.String",
						"float",
						"boolean"
					],
					"friendAvatarHook8Class": "com.tencent.mm.pluginsdk.ui.u",
					"friendAvatarHook8Method": "d",
					"friendAvatarHook8Args": [
						"android.widget.ImageView",
						"java.lang.String"
					]
				},
				"featureSwitches": {
					"snsForbidRevoke": true,
					"autoBackground": true,
					"friendAvatar": true,
					"messageTime": true,
					"xchat.feature.hot_update": true
				},
				"compatModules": [{
						"class": "com.xchat.compat.HotUpdateCompat",
						"method": "run",
						"args": [
							"application",
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.AutoLogin8076Compat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.AutoReceiveCompat",
						"method": "run",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.MessageDbCompat",
						"method": "run",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.ContactWxidCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.GalleryCompat",
						"method": "run",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.SnsCompat",
						"method": "run",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.SnsAutoRefreshCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.SnsDetailTimeCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.GroupRoleCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.GlobalBackgroundCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.FriendAvatarCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.GroupReminderCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.SecretFriendCompat",
						"method": "run",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.PadCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.BasicFeatureCompat",
						"method": "install",
						"args": [
							"application",
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.TypingCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.TaskCompat",
						"method": "install",
						"args": [
							"application"
						]
					},
					{
						"class": "com.xchat.compat.ActivityStateGuardCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"enabled": true,
						"class": "com.xchat.compat.VoiceEntry8076Compat",
						"method": "install8076",
						"args": [
							"classLoader"
						]
					},
					{
						"enabled": true,
						"class": "com.xchat.compat.JsonActionCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.ChatToolbarCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.MePageCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.MessageGroup8076Compat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.NavBarCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.VirtualLocationCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"enabled": true,
						"class": "com.xchat.compat.WeKitNavBridge",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.TimeDisplay8076Compat",
						"method": "install",
						"args": [
							"classLoader"
						]
					},
					{
						"class": "com.xchat.compat.AdvancedPinCompat",
						"method": "install",
						"args": [
							"classLoader"
						]
					}
				],
				"versionName": "xchat-8076",
				"saveTime": 1748757659000,
				"isCacheConfig": false,
				"saveVersionCode": 8076,
				"imei": "e9c81201ba98e270",
				"wxId": "",
				"editMsgConfig": {
					"getAdapterMethodName": "getAdapter",
					"getInnerAdapterFieldName": "g",
					"dateListFieldName": "M",
					"refreshAllMethodName": "j"
				},
				"hookStatusAliases": {
					"Lo1.c": "xchat.feature.message_time_8076",
					"1022": "xchat.feature.auto_login_8076",
					"c0.b": "1022",
					"C0.b": "1032",
					"K1.a": "xchat.feature.browser",
					"D1.a": "com.xchat.compat.VoiceEntry8076Compat",
					"f0.a": "f0.a",
					"com.xchat.task.m": "xchat.feature.task",
					"com.xchat.compat.SnsDetailTimeCompat": "xchat.feature.sns_detail_time_8076",
					"o1.c": "xchat.feature.chat_action_8076",
					"com.xchat.compat.JsonActionCompat": "xchat.feature.chat_action_8076",
					"R0.a": "xchat.feature.message_group_8076",
					"T0.c": "xchat.feature.message_group_8076",
					"LR0/a;": "xchat.feature.message_group_8076",
					"LT0/c;": "xchat.feature.message_group_8076",
					"com.xchat.compat.MessageGroup8076Compat": "xchat.feature.message_group_8076",
					"com.xchat.compat.MessageGroupMenu8076Compat": "xchat.feature.message_group_8076",
					"xchat.feature.message_group_8076": "xchat.feature.message_group_8076",
					"xchat.feature.advanced_pin_8076": "xchat.feature.advanced_pin_8076",
					"com.xchat.compat.FriendAvatarCompat": "xchat.feature.friend_avatar_8076",
					"xchat.feature.friend_avatar_8076": "xchat.feature.friend_avatar_8076"
				}
			},
			message: null
		};
	} else if (method === 'GET') {
		responseData = {
			code: 0,
			data: 'GET 方法不支持'
		};
	} else {
		return {
			statusCode: 405,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				code: 1,
				message: 'Method Not Allowed'
			})
		};
	}

	return {
		statusCode: 200,
		headers,
		body: JSON.stringify(responseData)
	};
};
