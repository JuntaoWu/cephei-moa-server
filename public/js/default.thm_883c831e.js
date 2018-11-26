window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/components/ActorUI.exml'] = window.skins.ActorUI = (function (_super) {
	__extends(ActorUI, _super);
	var ActorUI$Skin1 = 	(function (_super) {
		__extends(ActorUI$Skin1, _super);
		function ActorUI$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		}
		var _proto = ActorUI$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "content";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.name = "normalBg";
			t.source = "head_bg";
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.name = "masterBg";
			t.source = "head_bg2";
			t.visible = false;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.name = "colorImage";
			t.source = "red";
			t.x = -20;
			t.y = -15;
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.name = "selfMark";
			t.source = "self-mark";
			t.visible = false;
			t.x = 50;
			t.y = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = -40;
			t.horizontalCenter = 0;
			t.name = "nickName";
			t.size = 25;
			t.text = "";
			t.textColor = 0x000000;
			return t;
		};
		return ActorUI$Skin1;
	})(eui.Skin);

	function ActorUI() {
		_super.call(this);
		this.skinParts = ["btnActor"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.btnActor_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.enabled"],[0],this.btnActor,"enabled");
	}
	var _proto = ActorUI.prototype;

	_proto.btnActor_i = function () {
		var t = new eui.Button();
		this.btnActor = t;
		t.anchorOffsetX = 0;
		t.height = 130;
		t.width = 130;
		t.skinName = ActorUI$Skin1;
		return t;
	};
	return ActorUI;
})(eui.Skin);generateEUI.paths['resource/components/CityItemRenderer.exml'] = window.skins.CityItemRenderer = (function (_super) {
	__extends(CityItemRenderer, _super);
	function CityItemRenderer() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
	}
	var _proto = CityItemRenderer.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 2;
		t.right = 2;
		t.source = "club_box_2";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return CityItemRenderer;
})(eui.Skin);generateEUI.paths['resource/components/ClubListItemRenderer.exml'] = window.skins.ClubListItemRenderer = (function (_super) {
	__extends(ClubListItemRenderer, _super);
	function ClubListItemRenderer() {
		_super.call(this);
		this.skinParts = [];
		
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.clubName"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.time"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.phone"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.attr"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.game_1"],[0],this._Image6,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.game_2"],[0],this._Image7,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.game_3"],[0],this._Image8,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.game_4"],[0],this._Image9,"source");
	}
	var _proto = ClubListItemRenderer.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 350;
		t.source = "club_box";
		t.width = 600;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 35;
		t.textColor = 0x000000;
		t.y = 30;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 50;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.source = "club_lv3";
		t.y = 115;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 210;
		t.y = 100;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.source = "club_time";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.size = 24;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 35;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 210;
		t.y = 140;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "club_phone";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.size = 24;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 35;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 210;
		t.y = 180;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "club_attr";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.lineSpacing = 5;
		t.size = 24;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 310;
		t.x = 35;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 10;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.y = 250;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.x = 140;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.x = 280;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.x = 420;
		return t;
	};
	return ClubListItemRenderer;
})(eui.Skin);generateEUI.paths['resource/components/GameRoundSkin.exml'] = window.skins.GameProcessSkin = (function (_super) {
	__extends(GameProcessSkin, _super);
	function GameProcessSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Group8_i()];
	}
	var _proto = GameProcessSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "game-box-border";
		t.percentWidth = 100;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label1_i(),this._Group1_i(),this._Group2_i(),this._Group7_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "第一轮";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 40;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "你是";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 30;
		t.text = "木户加奈";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 125;
		t.x = 52;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = ",选择1个你要鉴定的宝物";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 180;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 80;
		t.elementsContent = [this._Label5_i(),this._Image2_i(),this._Label6_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "点击";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "auth2";
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = ",开始本轮";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 110;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 434;
		t.y = 150;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label7_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bg2";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label8_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "bg2";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.y = 200;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label9_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "bg2";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.y = 200;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Label10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "bg2";
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	return GameProcessSkin;
})(eui.Skin);generateEUI.paths['resource/components/PopupWindowSkin.exml'] = window.skins.PopupWindowSkin = (function (_super) {
	__extends(PopupWindowSkin, _super);
	var PopupWindowSkin$Skin2 = 	(function (_super) {
		__extends(PopupWindowSkin$Skin2, _super);
		function PopupWindowSkin$Skin2() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = PopupWindowSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-confirm";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupWindowSkin$Skin2;
	})(eui.Skin);

	function PopupWindowSkin() {
		_super.call(this);
		this.skinParts = ["closeButton"];
		
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.closeButton_i()];
	}
	var _proto = PopupWindowSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(70,70,470,280);
		t.scaleX = 0.88;
		t.source = "small-dialog-background";
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.horizontalCenter = 0;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.skinName = PopupWindowSkin$Skin2;
		return t;
	};
	return PopupWindowSkin;
})(eui.Skin);generateEUI.paths['resource/components/RankListItemRenderer.exml'] = window.skins.RankListItemRenderer = (function (_super) {
	__extends(RankListItemRenderer, _super);
	function RankListItemRenderer() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group2_i(),this._Image4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.rankRes"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.rankRes"],[0],this._Image1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotTopThree"],[0],this._Group1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.data.key"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.avatarUrl"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.nickName"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.col1"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.col2"],[0],this._Label4,"text");
	}
	var _proto = RankListItemRenderer.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 25;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image3_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 110;
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.source = "bg2";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 45;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 110;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 120;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.height = 30;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.width = 165;
		t.x = 245;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.bold = true;
		t.size = 35;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 410;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.right = 0;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "sep";
		return t;
	};
	return RankListItemRenderer;
})(eui.Skin);generateEUI.paths['resource/components/RoleItemRenderer.exml'] = window.skins.RoleItemRenderer = (function (_super) {
	__extends(RoleItemRenderer, _super);
	function RoleItemRenderer() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.res"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
	}
	var _proto = RoleItemRenderer.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.width = 150;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 22;
		t.textColor = 0x020202;
		return t;
	};
	return RoleItemRenderer;
})(eui.Skin);generateEUI.paths['resource/components/Shade.exml'] = window.skins.Shade = (function (_super) {
	__extends(Shade, _super);
	function Shade() {
		_super.call(this);
		this.skinParts = ["rect"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Shade.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.rect_i()];
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.alpha = 0.4;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	return Shade;
})(eui.Skin);generateEUI.paths['resource/components/TermItemRenderer.exml'] = window.skins.TermItemRenderer = (function (_super) {
	__extends(TermItemRenderer, _super);
	function TermItemRenderer() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.description"],[0],this._Label2,"text");
	}
	var _proto = TermItemRenderer.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 580;
		t.elementsContent = [this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.size = 32;
		t.textColor = 0x020202;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.lineSpacing = 10;
		t.size = 28;
		t.textColor = 0x020202;
		t.width = 580;
		t.y = 35;
		return t;
	};
	return TermItemRenderer;
})(eui.Skin);generateEUI.paths['resource/components/ValidateItemRenderer.exml'] = window.skins.ValidateItemRenderer = (function (_super) {
	__extends(ValidateItemRenderer, _super);
	function ValidateItemRenderer() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.selected"],[0],this._Image2,"visible");
	}
	var _proto = ValidateItemRenderer.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg2";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "bg3";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	return ValidateItemRenderer;
})(eui.Skin);generateEUI.paths['resource/components/VoteAntiquesRenderer.exml'] = window.skins.VoteAntiquesRenderer = (function (_super) {
	__extends(VoteAntiquesRenderer, _super);
	function VoteAntiquesRenderer() {
		_super.call(this);
		this.skinParts = ["voteDetail"];
		
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.bg"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.antRes"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.isReal"],[0],this._Image3,"source");
	}
	var _proto = VoteAntiquesRenderer.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.elementsContent = [this._Group1_i(),this.voteDetail_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.horizontalCenter = 0;
		t.width = 180;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.bottom = 10;
		t.right = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		return t;
	};
	_proto.voteDetail_i = function () {
		var t = new eui.DataGroup();
		this.voteDetail = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.y = 200;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 6;
		t.orientation = "rows";
		t.requestedColumnCount = 4;
		t.verticalAlign = "contentJustify";
		t.verticalGap = 2;
		return t;
	};
	return VoteAntiquesRenderer;
})(eui.Skin);generateEUI.paths['resource/components/VoteNumRenderer.exml'] = window.skins.VoteNumRenderer = (function (_super) {
	__extends(VoteNumRenderer, _super);
	function VoteNumRenderer() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._BitmapLabel1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.voterColor"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.voteNum"],[0],this._BitmapLabel1,"text");
	}
	var _proto = VoteNumRenderer.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.font = "number_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return VoteNumRenderer;
})(eui.Skin);generateEUI.paths['resource/components/VotePeopleRenderer.exml'] = window.skins.VotePeopleRenderer = (function (_super) {
	__extends(VotePeopleRenderer, _super);
	function VotePeopleRenderer() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group3_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.voterUrl"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.voterColor"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.voterName"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.votedUrl"],[0],this._Image5,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.votedColor"],[0],this._Image7,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.votedName"],[0],this._Label2,"text");
	}
	var _proto = VotePeopleRenderer.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.elementsContent = [this._Group1_i(),this._Image4_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bottom = -40;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "vote1";
		t.x = 160;
		t.y = 70;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 200;
		t.y = 20;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bottom = -40;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		return t;
	};
	return VotePeopleRenderer;
})(eui.Skin);generateEUI.paths['resource/containers/AboutWindow.exml'] = window.skins.AboutWindow = (function (_super) {
	__extends(AboutWindow, _super);
	function AboutWindow() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgHeight"],[0],this._Image1,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.appVersion"],[0],this._Label1,"text");
	}
	var _proto = AboutWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "about";
		t.width = 640;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		t.y = 600;
		return t;
	};
	return AboutWindow;
})(eui.Skin);generateEUI.paths['resource/containers/BarWindow.exml'] = window.skins.BarWindow = (function (_super) {
	__extends(BarWindow, _super);
	var BarWindow$Skin3 = 	(function (_super) {
		__extends(BarWindow$Skin3, _super);
		function BarWindow$Skin3() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = BarWindow$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return BarWindow$Skin3;
	})(eui.Skin);

	function BarWindow() {
		_super.call(this);
		this.skinParts = ["provinceGroup","cityGroup","districtGroup","headGroup","listClub","contentScroller","listProvince","listCity","listDistrict","backButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.navigationBar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.province"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.city"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.district"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.showListProvince"],[0],this._Group3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.showListCity"],[0],this._Group4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.showListDistrict"],[0],this._Group5,"visible");
	}
	var _proto = BarWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 175;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 30;
		t.elementsContent = [this._Label1_i(),this._Image2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "桌游吧";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "club_location";
		t.x = 90;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 610;
		t.y = 75;
		t.elementsContent = [this.provinceGroup_i(),this.cityGroup_i(),this.districtGroup_i()];
		return t;
	};
	_proto.provinceGroup_i = function () {
		var t = new eui.Group();
		this.provinceGroup = t;
		t.anchorOffsetY = 0;
		t.left = 5;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "club_box_1";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.cityGroup_i = function () {
		var t = new eui.Group();
		this.cityGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "club_box_1";
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.districtGroup_i = function () {
		var t = new eui.Group();
		this.districtGroup = t;
		t.right = 5;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "club_box_1";
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetY = 0;
		t.height = 790;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.width = 600;
		t.y = 175;
		t.viewport = this.listClub_i();
		return t;
	};
	_proto.listClub_i = function () {
		var t = new eui.List();
		this.listClub = t;
		t.width = 600;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 30;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.anchorOffsetY = 0;
		t.left = 20;
		t.width = 180;
		t.y = 150;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.maxHeight = 350;
		t.scrollPolicyH = "off";
		t.width = 180;
		t.viewport = this.listProvince_i();
		return t;
	};
	_proto.listProvince_i = function () {
		var t = new eui.List();
		this.listProvince = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.width = 180;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.horizontalCenter = 0;
		t.width = 180;
		t.y = 150;
		t.elementsContent = [this._Scroller2_i()];
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.maxHeight = 350;
		t.scrollPolicyH = "off";
		t.width = 180;
		t.viewport = this.listCity_i();
		return t;
	};
	_proto.listCity_i = function () {
		var t = new eui.List();
		this.listCity = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.width = 180;
		t.layout = this._VerticalLayout3_i();
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		this._Group5 = t;
		t.right = 20;
		t.width = 180;
		t.y = 150;
		t.elementsContent = [this._Scroller3_i()];
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.maxHeight = 350;
		t.scrollPolicyH = "off";
		t.width = 180;
		t.viewport = this.listDistrict_i();
		return t;
	};
	_proto.listDistrict_i = function () {
		var t = new eui.List();
		this.listDistrict = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.width = 180;
		t.layout = this._VerticalLayout4_i();
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this.backButton_i()];
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = BarWindow$Skin3;
		return t;
	};
	return BarWindow;
})(eui.Skin);generateEUI.paths['resource/containers/GameRoleList.exml'] = window.skins.GameRoleList = (function (_super) {
	__extends(GameRoleList, _super);
	function GameRoleList() {
		_super.call(this);
		this.skinParts = ["roleList"];
		
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GameRoleList.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 540;
		t.horizontalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this.roleList_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "game-box-border";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "录入身份";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.text = "选择对应图标，录入抽到的身份";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto.roleList_i = function () {
		var t = new eui.DataGroup();
		this.roleList = t;
		t.horizontalCenter = 0;
		t.y = 60;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 0;
		t.orientation = "columns";
		t.requestedColumnCount = 4;
		t.verticalGap = 10;
		return t;
	};
	return GameRoleList;
})(eui.Skin);generateEUI.paths['resource/containers/GameScreen.exml'] = window.skins.GameScreen = (function (_super) {
	__extends(GameScreen, _super);
	var GameScreen$Skin4 = 	(function (_super) {
		__extends(GameScreen$Skin4, _super);
		function GameScreen$Skin4() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Label1_i(),this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
			
			eui.Binding.$bindProperties(this, ["hostComponent.parent.isMasterClient"],[0],this._Label1,"text");
		}
		var _proto = GameScreen$Skin4.prototype;

		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.textColor = 0x000000;
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "back_2";
			t.verticalCenter = 0;
			return t;
		};
		return GameScreen$Skin4;
	})(eui.Skin);

	var GameScreen$Skin5 = 	(function (_super) {
		__extends(GameScreen$Skin5, _super);
		function GameScreen$Skin5() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "role1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.bottom = 0;
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "许愿";
			t.textColor = 0x020202;
			return t;
		};
		return GameScreen$Skin5;
	})(eui.Skin);

	var GameScreen$Skin6 = 	(function (_super) {
		__extends(GameScreen$Skin6, _super);
		function GameScreen$Skin6() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "role2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.bottom = 0;
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "方震";
			t.textColor = 0x020202;
			return t;
		};
		return GameScreen$Skin6;
	})(eui.Skin);

	var GameScreen$Skin7 = 	(function (_super) {
		__extends(GameScreen$Skin7, _super);
		function GameScreen$Skin7() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "role3";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.bottom = 0;
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "姬云浮";
			t.textColor = 0x020202;
			return t;
		};
		return GameScreen$Skin7;
	})(eui.Skin);

	var GameScreen$Skin8 = 	(function (_super) {
		__extends(GameScreen$Skin8, _super);
		function GameScreen$Skin8() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "role4-5";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.bottom = 0;
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "黄烟烟";
			t.textColor = 0x020202;
			return t;
		};
		return GameScreen$Skin8;
	})(eui.Skin);

	var GameScreen$Skin9 = 	(function (_super) {
		__extends(GameScreen$Skin9, _super);
		function GameScreen$Skin9() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "role4-5";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.bottom = 0;
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "木户加奈";
			t.textColor = 0x020202;
			return t;
		};
		return GameScreen$Skin9;
	})(eui.Skin);

	var GameScreen$Skin10 = 	(function (_super) {
		__extends(GameScreen$Skin10, _super);
		function GameScreen$Skin10() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "role6";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.bottom = 0;
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "老朝奉";
			t.textColor = 0x020202;
			return t;
		};
		return GameScreen$Skin10;
	})(eui.Skin);

	var GameScreen$Skin11 = 	(function (_super) {
		__extends(GameScreen$Skin11, _super);
		function GameScreen$Skin11() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "role7";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.bottom = 0;
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "药不然";
			t.textColor = 0x020202;
			return t;
		};
		return GameScreen$Skin11;
	})(eui.Skin);

	var GameScreen$Skin12 = 	(function (_super) {
		__extends(GameScreen$Skin12, _super);
		function GameScreen$Skin12() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "role8";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.bottom = 0;
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "郑国渠";
			t.textColor = 0x020202;
			return t;
		};
		return GameScreen$Skin12;
	})(eui.Skin);

	var GameScreen$Skin13 = 	(function (_super) {
		__extends(GameScreen$Skin13, _super);
		function GameScreen$Skin13() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Label1_i()];
			
			eui.Binding.$bindProperties(this, ["hostComponent.maxPlayers"],[0],this._Label1,"text");
		}
		var _proto = GameScreen$Skin13.prototype;

		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.bold = true;
			t.fontFamily = "SimHei";
			t.size = 25;
			t.textColor = 0x000000;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			t.x = 130;
			return t;
		};
		return GameScreen$Skin13;
	})(eui.Skin);

	var GameScreen$Skin14 = 	(function (_super) {
		__extends(GameScreen$Skin14, _super);
		function GameScreen$Skin14() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin14.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin14;
	})(eui.Skin);

	var GameScreen$Skin15 = 	(function (_super) {
		__extends(GameScreen$Skin15, _super);
		function GameScreen$Skin15() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin15.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin15;
	})(eui.Skin);

	var GameScreen$Skin16 = 	(function (_super) {
		__extends(GameScreen$Skin16, _super);
		function GameScreen$Skin16() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin16.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin16;
	})(eui.Skin);

	var GameScreen$Skin17 = 	(function (_super) {
		__extends(GameScreen$Skin17, _super);
		function GameScreen$Skin17() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin17.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin17;
	})(eui.Skin);

	var GameScreen$Skin18 = 	(function (_super) {
		__extends(GameScreen$Skin18, _super);
		function GameScreen$Skin18() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin18.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin18;
	})(eui.Skin);

	var GameScreen$Skin19 = 	(function (_super) {
		__extends(GameScreen$Skin19, _super);
		function GameScreen$Skin19() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin19.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin19;
	})(eui.Skin);

	var GameScreen$Skin20 = 	(function (_super) {
		__extends(GameScreen$Skin20, _super);
		function GameScreen$Skin20() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin20.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin20;
	})(eui.Skin);

	var GameScreen$Skin21 = 	(function (_super) {
		__extends(GameScreen$Skin21, _super);
		function GameScreen$Skin21() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin21.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin21;
	})(eui.Skin);

	var GameScreen$Skin22 = 	(function (_super) {
		__extends(GameScreen$Skin22, _super);
		function GameScreen$Skin22() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin22.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin22;
	})(eui.Skin);

	var GameScreen$Skin23 = 	(function (_super) {
		__extends(GameScreen$Skin23, _super);
		function GameScreen$Skin23() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin23.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin23;
	})(eui.Skin);

	var GameScreen$Skin24 = 	(function (_super) {
		__extends(GameScreen$Skin24, _super);
		function GameScreen$Skin24() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin24.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin24;
	})(eui.Skin);

	var GameScreen$Skin25 = 	(function (_super) {
		__extends(GameScreen$Skin25, _super);
		function GameScreen$Skin25() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin25.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin25;
	})(eui.Skin);

	var GameScreen$Skin26 = 	(function (_super) {
		__extends(GameScreen$Skin26, _super);
		function GameScreen$Skin26() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "botton";
			return t;
		};
		return GameScreen$Skin26;
	})(eui.Skin);

	var GameScreen$Skin27 = 	(function (_super) {
		__extends(GameScreen$Skin27, _super);
		function GameScreen$Skin27() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin27.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin27;
	})(eui.Skin);

	var GameScreen$Skin28 = 	(function (_super) {
		__extends(GameScreen$Skin28, _super);
		function GameScreen$Skin28() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin28.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin28;
	})(eui.Skin);

	var GameScreen$Skin29 = 	(function (_super) {
		__extends(GameScreen$Skin29, _super);
		function GameScreen$Skin29() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin29.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin29;
	})(eui.Skin);

	var GameScreen$Skin30 = 	(function (_super) {
		__extends(GameScreen$Skin30, _super);
		function GameScreen$Skin30() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin30.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin30;
	})(eui.Skin);

	var GameScreen$Skin31 = 	(function (_super) {
		__extends(GameScreen$Skin31, _super);
		function GameScreen$Skin31() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin31.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin31;
	})(eui.Skin);

	var GameScreen$Skin32 = 	(function (_super) {
		__extends(GameScreen$Skin32, _super);
		function GameScreen$Skin32() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin32.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin32;
	})(eui.Skin);

	var GameScreen$Skin33 = 	(function (_super) {
		__extends(GameScreen$Skin33, _super);
		function GameScreen$Skin33() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin33.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin33;
	})(eui.Skin);

	var GameScreen$Skin34 = 	(function (_super) {
		__extends(GameScreen$Skin34, _super);
		function GameScreen$Skin34() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Group1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image3","scaleX",0.9),
						new eui.SetProperty("_Image3","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin34.prototype;

		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 180;
			t.name = "antique-group";
			t.width = 180;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-normal";
			t.source = "bg2";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.name = "antique-selected";
			t.source = "bg3";
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			this._Image3 = t;
			t.horizontalCenter = 0;
			t.name = "antique-content";
			t.source = "t1";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.name = "antique-label";
			t.size = 28;
			t.text = "";
			t.textColor = 0x020202;
			t.verticalCenter = 0;
			t.x = 185;
			return t;
		};
		return GameScreen$Skin34;
	})(eui.Skin);

	var GameScreen$Skin35 = 	(function (_super) {
		__extends(GameScreen$Skin35, _super);
		function GameScreen$Skin35() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
			];
		}
		var _proto = GameScreen$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "self_info";
			return t;
		};
		return GameScreen$Skin35;
	})(eui.Skin);

	var GameScreen$Skin36 = 	(function (_super) {
		__extends(GameScreen$Skin36, _super);
		function GameScreen$Skin36() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
			];
		}
		var _proto = GameScreen$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "game-record";
			return t;
		};
		return GameScreen$Skin36;
	})(eui.Skin);

	var GameScreen$Skin37 = 	(function (_super) {
		__extends(GameScreen$Skin37, _super);
		function GameScreen$Skin37() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.maxHeight = 100;
			t.maxWidth = 100;
			t.name = "content";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "normalBg";
			t.source = "head_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "masterBg";
			t.source = "head_bg2";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.source = "red";
			t.x = -20;
			t.y = -15;
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.name = "selfMark";
			t.source = "self-mark";
			t.visible = false;
			t.x = 50;
			t.y = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = -40;
			t.height = 35;
			t.horizontalCenter = 0;
			t.name = "nickName";
			t.text = "";
			t.textColor = 0x000000;
			t.width = 140;
			return t;
		};
		return GameScreen$Skin37;
	})(eui.Skin);

	var GameScreen$Skin38 = 	(function (_super) {
		__extends(GameScreen$Skin38, _super);
		function GameScreen$Skin38() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.maxHeight = 100;
			t.maxWidth = 100;
			t.name = "content";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "normalBg";
			t.source = "head_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "masterBg";
			t.source = "head_bg2";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.source = "orange";
			t.x = -20;
			t.y = -15;
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.name = "selfMark";
			t.source = "self-mark";
			t.visible = false;
			t.x = 50;
			t.y = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = -40;
			t.height = 35;
			t.horizontalCenter = 0;
			t.name = "nickName";
			t.text = "";
			t.textColor = 0x000000;
			t.width = 140;
			return t;
		};
		return GameScreen$Skin38;
	})(eui.Skin);

	var GameScreen$Skin39 = 	(function (_super) {
		__extends(GameScreen$Skin39, _super);
		function GameScreen$Skin39() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.maxHeight = 100;
			t.maxWidth = 100;
			t.name = "content";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "normalBg";
			t.source = "head_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "masterBg";
			t.source = "head_bg2";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.source = "yellow";
			t.x = -20;
			t.y = -15;
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.name = "selfMark";
			t.source = "self-mark";
			t.visible = false;
			t.x = 50;
			t.y = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = -40;
			t.height = 35;
			t.horizontalCenter = 0;
			t.name = "nickName";
			t.text = "";
			t.textColor = 0x000000;
			t.width = 140;
			return t;
		};
		return GameScreen$Skin39;
	})(eui.Skin);

	var GameScreen$Skin40 = 	(function (_super) {
		__extends(GameScreen$Skin40, _super);
		function GameScreen$Skin40() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.maxHeight = 100;
			t.maxWidth = 100;
			t.name = "content";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "normalBg";
			t.source = "head_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "masterBg";
			t.source = "head_bg2";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.source = "green";
			t.x = -20;
			t.y = -15;
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.name = "selfMark";
			t.source = "self-mark";
			t.visible = false;
			t.x = 50;
			t.y = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = -40;
			t.height = 35;
			t.horizontalCenter = 0;
			t.name = "nickName";
			t.text = "";
			t.textColor = 0x000000;
			t.width = 140;
			return t;
		};
		return GameScreen$Skin40;
	})(eui.Skin);

	var GameScreen$Skin41 = 	(function (_super) {
		__extends(GameScreen$Skin41, _super);
		function GameScreen$Skin41() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.maxHeight = 100;
			t.maxWidth = 100;
			t.name = "content";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "normalBg";
			t.source = "head_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "masterBg";
			t.source = "head_bg2";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.source = "blue";
			t.x = -20;
			t.y = -15;
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.name = "selfMark";
			t.source = "self-mark";
			t.visible = false;
			t.x = 50;
			t.y = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = -40;
			t.height = 35;
			t.horizontalCenter = 0;
			t.name = "nickName";
			t.text = "";
			t.textColor = 0x000000;
			t.width = 140;
			return t;
		};
		return GameScreen$Skin41;
	})(eui.Skin);

	var GameScreen$Skin42 = 	(function (_super) {
		__extends(GameScreen$Skin42, _super);
		function GameScreen$Skin42() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.maxHeight = 100;
			t.maxWidth = 100;
			t.name = "content";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "normalBg";
			t.source = "head_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "masterBg";
			t.source = "head_bg2";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.source = "purple";
			t.x = -20;
			t.y = -15;
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.name = "selfMark";
			t.source = "self-mark";
			t.visible = false;
			t.x = 50;
			t.y = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = -40;
			t.height = 35;
			t.horizontalCenter = 0;
			t.name = "nickName";
			t.text = "";
			t.textColor = 0x000000;
			t.width = 140;
			return t;
		};
		return GameScreen$Skin42;
	})(eui.Skin);

	var GameScreen$Skin43 = 	(function (_super) {
		__extends(GameScreen$Skin43, _super);
		function GameScreen$Skin43() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.maxHeight = 100;
			t.maxWidth = 100;
			t.name = "content";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "normalBg";
			t.source = "head_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "masterBg";
			t.source = "head_bg2";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.source = "white";
			t.x = -20;
			t.y = -15;
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.name = "selfMark";
			t.source = "self-mark";
			t.visible = false;
			t.x = 50;
			t.y = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = -40;
			t.height = 35;
			t.horizontalCenter = 0;
			t.name = "nickName";
			t.text = "";
			t.textColor = 0x000000;
			t.width = 140;
			return t;
		};
		return GameScreen$Skin43;
	})(eui.Skin);

	var GameScreen$Skin44 = 	(function (_super) {
		__extends(GameScreen$Skin44, _super);
		function GameScreen$Skin44() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		}
		var _proto = GameScreen$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.maxHeight = 100;
			t.maxWidth = 100;
			t.name = "content";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "normalBg";
			t.source = "head_bg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image3_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.name = "masterBg";
			t.source = "head_bg2";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		_proto._Image4_i = function () {
			var t = new eui.Image();
			t.source = "black";
			t.x = -20;
			t.y = -15;
			return t;
		};
		_proto._Image5_i = function () {
			var t = new eui.Image();
			t.name = "selfMark";
			t.source = "self-mark";
			t.visible = false;
			t.x = 50;
			t.y = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bottom = -40;
			t.height = 35;
			t.horizontalCenter = 0;
			t.name = "nickName";
			t.text = "";
			t.textColor = 0x000000;
			t.width = 140;
			return t;
		};
		return GameScreen$Skin44;
	})(eui.Skin);

	var GameScreen$Skin45 = 	(function (_super) {
		__extends(GameScreen$Skin45, _super);
		function GameScreen$Skin45() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-help";
			return t;
		};
		return GameScreen$Skin45;
	})(eui.Skin);

	var GameScreen$Skin46 = 	(function (_super) {
		__extends(GameScreen$Skin46, _super);
		function GameScreen$Skin46() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-1-players-enough";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin46;
	})(eui.Skin);

	var GameScreen$Skin47 = 	(function (_super) {
		__extends(GameScreen$Skin47, _super);
		function GameScreen$Skin47() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-2-master-confirm";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin47;
	})(eui.Skin);

	var GameScreen$Skin48 = 	(function (_super) {
		__extends(GameScreen$Skin48, _super);
		function GameScreen$Skin48() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-3-set-identity";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin48;
	})(eui.Skin);

	var GameScreen$Skin49 = 	(function (_super) {
		__extends(GameScreen$Skin49, _super);
		function GameScreen$Skin49() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-2-master-confirm";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin49;
	})(eui.Skin);

	var GameScreen$Skin50 = 	(function (_super) {
		__extends(GameScreen$Skin50, _super);
		function GameScreen$Skin50() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-1-players-enough";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin50;
	})(eui.Skin);

	var GameScreen$Skin51 = 	(function (_super) {
		__extends(GameScreen$Skin51, _super);
		function GameScreen$Skin51() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "enter-info";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin51;
	})(eui.Skin);

	var GameScreen$Skin52 = 	(function (_super) {
		__extends(GameScreen$Skin52, _super);
		function GameScreen$Skin52() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-3-set-identity";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin52;
	})(eui.Skin);

	var GameScreen$Skin53 = 	(function (_super) {
		__extends(GameScreen$Skin53, _super);
		function GameScreen$Skin53() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-start";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin53;
	})(eui.Skin);

	var GameScreen$Skin54 = 	(function (_super) {
		__extends(GameScreen$Skin54, _super);
		function GameScreen$Skin54() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
			];
		}
		var _proto = GameScreen$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 131;
			t.source = "auth3";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin54;
	})(eui.Skin);

	var GameScreen$Skin55 = 	(function (_super) {
		__extends(GameScreen$Skin55, _super);
		function GameScreen$Skin55() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GameScreen$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "skip";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin55;
	})(eui.Skin);

	var GameScreen$Skin56 = 	(function (_super) {
		__extends(GameScreen$Skin56, _super);
		function GameScreen$Skin56() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "skip";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin56;
	})(eui.Skin);

	var GameScreen$Skin57 = 	(function (_super) {
		__extends(GameScreen$Skin57, _super);
		function GameScreen$Skin57() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-4-others-process";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin57;
	})(eui.Skin);

	var GameScreen$Skin58 = 	(function (_super) {
		__extends(GameScreen$Skin58, _super);
		function GameScreen$Skin58() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "talk_over";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin58;
	})(eui.Skin);

	var GameScreen$Skin59 = 	(function (_super) {
		__extends(GameScreen$Skin59, _super);
		function GameScreen$Skin59() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "talking";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin59;
	})(eui.Skin);

	var GameScreen$Skin60 = 	(function (_super) {
		__extends(GameScreen$Skin60, _super);
		function GameScreen$Skin60() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "auth_png";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin60;
	})(eui.Skin);

	var GameScreen$Skin61 = 	(function (_super) {
		__extends(GameScreen$Skin61, _super);
		function GameScreen$Skin61() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "vote-clear";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin61;
	})(eui.Skin);

	var GameScreen$Skin62 = 	(function (_super) {
		__extends(GameScreen$Skin62, _super);
		function GameScreen$Skin62() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "vote_over";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin62;
	})(eui.Skin);

	var GameScreen$Skin63 = 	(function (_super) {
		__extends(GameScreen$Skin63, _super);
		function GameScreen$Skin63() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "auth_png";
			t.percentWidth = 100;
			return t;
		};
		return GameScreen$Skin63;
	})(eui.Skin);

	function GameScreen() {
		_super.call(this);
		this.skinParts = ["gameBackground","btnQuit","topNavigationBar","btnjs1","btnjs2","btnjs3","btnjs4","btnjs5","btnjs6","btnjs7","btnjs8","Anim1","Anim2","Anim3","Anim4","antiquesRound1","Anim5","Anim6","Anim7","Anim8","antiquesRound2","Anim9","Anim10","Anim11","Anim12","antiquesRound3","btnSkill","ybrskill1","ybrskill2","ybrskill3","ybrskill4","ybrskill5","ybrskill6","ybrskill7","ybrskill8","fangzhenskill1","fangzhenskill2","fangzhenskill3","fangzhenskill4","fangzhenskill5","fangzhenskill6","fangzhenskill7","fangzhenskill8","zgqskill1","zgqskill2","zgqskill3","zgqskill4","touren_note","shunwei1","shunwei2","shunwei3","shunwei4","shunwei5","shunwei6","shunwei7","shunwei8","processingActorUI","piaoshu","toupiao1","toupiao2","toupiao3","toupiao4","toupiao11","toupiao21","toupiao31","toupiao41","btnGameInfo","btnGameRecord","contentArea","btnSeat1","btnSeat2","btnSeat3","btnSeat4","btnSeat5","btnSeat6","btnSeat7","btnSeat8","seatArea","btnGuide","startjs","startgame","btnAuth","btnSkipAuth","btnSkipSkill","onespeakend","onegameend","qingkong","toupiaoqueren","startno2","navigationBar"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.gameBackground_i(),this.topNavigationBar_i(),this.contentArea_i(),this.seatArea_i(),this.navigationBar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.roomName"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.currentPlayers"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.maxPlayers"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.isPhasePreparing"],[0],this._Group2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRoleOrMasterClient"],[0],this._Group4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRole"],[0],this.btnjs1,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRole"],[0],this.btnjs2,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRoleandEight"],[0],this.btnjs3,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRole"],[0],this.btnjs4,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRole"],[0],this.btnjs5,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRole"],[0],this.btnjs6,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRole"],[0],this.btnjs7,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRoleandSeven"],[0],this.btnjs8,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isAllRolesReadyAndNormalClient"],[0],this._Group7,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isPhaseGameInProgress"],[0],this._Group44,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isFirstRound"],[0],this._Label13,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isSecondRound"],[0],this._Label14,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isThirdRound"],[0],this._Label15,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isMyTurn"],[0],this._Group31,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isAuthing"],[0],this._Group10,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.role.name"],[0],this._Label17,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.role.roleDescription"],[0],this._Label18,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.role.authRes"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.role.roleSubDescription"],[0],this._Label20,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.isAuthing"],[0],this._Group23,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isFirstRound"],[0],this.antiquesRound1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim1,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim2,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim3,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim4,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isSecondRound"],[0],this.antiquesRound2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim5,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim6,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim7,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim8,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isThirdRound"],[0],this.antiquesRound3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim9,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim10,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim11,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotFangZhen"],[0],this.Anim12,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isSkilling"],[0],this._Group24,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingSkillingTarget"],[0],this._Group28,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isYaoBuran"],[0],this._Group25,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isFangZhen"],[0],this._Group26,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isZhengGuoqu"],[0],this._Group27,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingNextOrVotingPerson"],[0],this._Group29,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingNextText"],[0],this.touren_note,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isLastPlayer"],[0],this._Group30,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isOthersTurn"],[0],this._Group32,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.processingPlayer.colorName"],[0],this._Label26,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.processingPlayer.name"],[0],this._Label28,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.isVoting"],[0],this._Group38,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isVoteEnd"],[0],this._Group39,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.voteing"],[0],this._Label33,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.isSpeaking"],[0],this._Group40,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isWaitNextTurn"],[0],this._Group41,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isNormalClient"],[0],this._Label35,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isMasterClient"],[0],this._Label36,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isWaitTouRen"],[0],this._Group42,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isNormalClient"],[0],this._Label37,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isMasterClient"],[0],this._Label38,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isWaitOthersTouRen"],[0],this._Group43,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.canChooseSeat"],[0],this.btnSeat1,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.canChooseSeat"],[0],this.btnSeat2,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.canChooseSeat"],[0],this.btnSeat3,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.canChooseSeat"],[0],this.btnSeat4,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.canChooseSeat"],[0],this.btnSeat5,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.canChooseSeat"],[0],this.btnSeat6,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.canChooseSeat"],[0],this.btnSeat7,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.canChooseSeat"],[0],this.btnSeat8,"enabled");
		eui.Binding.$bindProperties(this, ["hostComponent.isNormalClient"],[0],this._Group46,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isWaiting"],[0],this._Button2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isAllReady"],[0],this._Button3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRole"],[0],this._Group45,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.roleing"],[0],this._Label40,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.isAllRolesReady"],[0],this._Button5,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isMasterClient"],[0],this._Group48,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isWaiting"],[0],this._Button6,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isAllReady"],[0],this.startjs,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isChoosingRole"],[0],this._Group47,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.roleing"],[0],this._Label41,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.isAllRolesReady"],[0],this.startgame,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isPhaseGameInProgress"],[0],this._Group56,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isMyTurn"],[0],this._Group52,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isAuthing"],[0],this._Group50,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.role.isAuth"],[0],this.btnAuth,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.role.isSkip"],[0],this.btnSkipAuth,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isSkilling"],[0],this._Group51,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isOthersTurn"],[0],this._Button8,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isSpeaking"],[0],this._Group53,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isMasterClient"],[0],this.onespeakend,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isNormalClient"],[0],this._Button9,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isLastPlayer"],[0],this.onegameend,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isVoting"],[0],this._Group54,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isWaitNextTurnOrWaitTouRen"],[0],this._Group55,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isMasterClient"],[0],this.startno2,"visible");
	}
	var _proto = GameScreen.prototype;

	_proto.gameBackground_i = function () {
		var t = new eui.Image();
		this.gameBackground = t;
		t.height = 1386;
		t.source = "start-background";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topNavigationBar_i = function () {
		var t = new eui.Group();
		this.topNavigationBar = t;
		t.percentWidth = 100;
		t.elementsContent = [this.btnQuit_i(),this._Label1_i(),this._Group1_i()];
		return t;
	};
	_proto.btnQuit_i = function () {
		var t = new eui.Button();
		this.btnQuit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.width = 100;
		t.x = 20;
		t.skinName = GameScreen$Skin4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 80;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.horizontalCenter = -30;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "/";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.horizontalCenter = 30;
		t.textColor = 0x000000;
		return t;
	};
	_proto.contentArea_i = function () {
		var t = new eui.Group();
		this.contentArea = t;
		t.height = 540;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 50;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group2_i(),this._Group4_i(),this._Group7_i(),this._Group44_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "meihua";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "game-box-border";
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.height = 540;
		t.horizontalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "选座";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "点击对应颜色的座位\n入座或换座\n选好座位后等待房主开局";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 244.5;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label7_i(),this._Label8_i(),this._Group3_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "录入身份";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.text = "选择对应图标，录入抽到的身份";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 40;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 75;
		t.elementsContent = [this.btnjs1_i(),this.btnjs2_i(),this.btnjs3_i(),this.btnjs4_i(),this.btnjs5_i(),this.btnjs6_i(),this.btnjs7_i(),this.btnjs8_i()];
		return t;
	};
	_proto.btnjs1_i = function () {
		var t = new eui.Button();
		this.btnjs1 = t;
		t.height = 210;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 150;
		t.skinName = GameScreen$Skin5;
		return t;
	};
	_proto.btnjs2_i = function () {
		var t = new eui.Button();
		this.btnjs2 = t;
		t.height = 210;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 150;
		t.x = 140;
		t.skinName = GameScreen$Skin6;
		return t;
	};
	_proto.btnjs3_i = function () {
		var t = new eui.Button();
		this.btnjs3 = t;
		t.height = 210;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 150;
		t.x = 280;
		t.skinName = GameScreen$Skin7;
		return t;
	};
	_proto.btnjs4_i = function () {
		var t = new eui.Button();
		this.btnjs4 = t;
		t.height = 210;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 150;
		t.x = 420;
		t.skinName = GameScreen$Skin8;
		return t;
	};
	_proto.btnjs5_i = function () {
		var t = new eui.Button();
		this.btnjs5 = t;
		t.height = 210;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 150;
		t.y = 210;
		t.skinName = GameScreen$Skin9;
		return t;
	};
	_proto.btnjs6_i = function () {
		var t = new eui.Button();
		this.btnjs6 = t;
		t.height = 210;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 150;
		t.x = 140;
		t.y = 210;
		t.skinName = GameScreen$Skin10;
		return t;
	};
	_proto.btnjs7_i = function () {
		var t = new eui.Button();
		this.btnjs7 = t;
		t.height = 210;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 150;
		t.x = 280;
		t.y = 210;
		t.skinName = GameScreen$Skin11;
		return t;
	};
	_proto.btnjs8_i = function () {
		var t = new eui.Button();
		this.btnjs8 = t;
		t.height = 210;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 150;
		t.x = 420;
		t.y = 210;
		t.skinName = GameScreen$Skin12;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		this._Group7 = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label9_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "即将开始第一轮";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.y = 160;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 360;
		t.elementsContent = [this._Label10_i()];
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "等待房主确定";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 360;
		t.elementsContent = [this._Label11_i(),this._Image3_i(),this._Label12_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "点击";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "auth2";
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = ",开始本轮";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 110;
		return t;
	};
	_proto._Group44_i = function () {
		var t = new eui.Group();
		this._Group44 = t;
		t.height = 560;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Group31_i(),this._Group32_i(),this._Group38_i(),this._Group39_i(),this._Group40_i(),this._Group41_i(),this._Group42_i(),this._Group43_i(),this.btnGameInfo_i(),this.btnGameRecord_i()];
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		this._Label13 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "第一轮";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		this._Label14 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "第二轮";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		this._Label15 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "第三轮";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		this._Group31 = t;
		t.elementsContent = [this._Group10_i(),this._Group23_i(),this._Group24_i(),this._Group28_i(),this._Group29_i(),this._Group30_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		this._Group10 = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.y = 40;
		t.elementsContent = [this._Label16_i(),this._Label17_i(),this._Label18_i()];
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "你是";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		this._Label17 = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 125;
		t.x = 52;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		this._Label18 = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 180;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 80;
		t.elementsContent = [this._Label19_i(),this._Image4_i(),this._Label20_i(),this._Button1_i()];
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "点击";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		this._Label20 = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 110;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.skinName = GameScreen$Skin13;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		this._Group23 = t;
		t.horizontalCenter = 0;
		t.y = 120;
		t.elementsContent = [this.antiquesRound1_i(),this.antiquesRound2_i(),this.antiquesRound3_i()];
		return t;
	};
	_proto.antiquesRound1_i = function () {
		var t = new eui.Group();
		this.antiquesRound1 = t;
		t.elementsContent = [this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.Anim1_i()];
		return t;
	};
	_proto.Anim1_i = function () {
		var t = new eui.Button();
		this.Anim1 = t;
		t.skinName = GameScreen$Skin14;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.elementsContent = [this.Anim2_i()];
		return t;
	};
	_proto.Anim2_i = function () {
		var t = new eui.Button();
		this.Anim2 = t;
		t.skinName = GameScreen$Skin15;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.y = 200;
		t.elementsContent = [this.Anim3_i()];
		return t;
	};
	_proto.Anim3_i = function () {
		var t = new eui.Button();
		this.Anim3 = t;
		t.skinName = GameScreen$Skin16;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.y = 200;
		t.elementsContent = [this.Anim4_i()];
		return t;
	};
	_proto.Anim4_i = function () {
		var t = new eui.Button();
		this.Anim4 = t;
		t.skinName = GameScreen$Skin17;
		return t;
	};
	_proto.antiquesRound2_i = function () {
		var t = new eui.Group();
		this.antiquesRound2 = t;
		t.elementsContent = [this._Group15_i(),this._Group16_i(),this._Group17_i(),this._Group18_i()];
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.Anim5_i()];
		return t;
	};
	_proto.Anim5_i = function () {
		var t = new eui.Button();
		this.Anim5 = t;
		t.skinName = GameScreen$Skin18;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.elementsContent = [this.Anim6_i()];
		return t;
	};
	_proto.Anim6_i = function () {
		var t = new eui.Button();
		this.Anim6 = t;
		t.skinName = GameScreen$Skin19;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.y = 200;
		t.elementsContent = [this.Anim7_i()];
		return t;
	};
	_proto.Anim7_i = function () {
		var t = new eui.Button();
		this.Anim7 = t;
		t.skinName = GameScreen$Skin20;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.y = 200;
		t.elementsContent = [this.Anim8_i()];
		return t;
	};
	_proto.Anim8_i = function () {
		var t = new eui.Button();
		this.Anim8 = t;
		t.skinName = GameScreen$Skin21;
		return t;
	};
	_proto.antiquesRound3_i = function () {
		var t = new eui.Group();
		this.antiquesRound3 = t;
		t.elementsContent = [this._Group19_i(),this._Group20_i(),this._Group21_i(),this._Group22_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.Anim9_i()];
		return t;
	};
	_proto.Anim9_i = function () {
		var t = new eui.Button();
		this.Anim9 = t;
		t.skinName = GameScreen$Skin22;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.elementsContent = [this.Anim10_i()];
		return t;
	};
	_proto.Anim10_i = function () {
		var t = new eui.Button();
		this.Anim10 = t;
		t.skinName = GameScreen$Skin23;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.y = 200;
		t.elementsContent = [this.Anim11_i()];
		return t;
	};
	_proto.Anim11_i = function () {
		var t = new eui.Button();
		this.Anim11 = t;
		t.skinName = GameScreen$Skin24;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.y = 200;
		t.elementsContent = [this.Anim12_i()];
		return t;
	};
	_proto.Anim12_i = function () {
		var t = new eui.Button();
		this.Anim12 = t;
		t.skinName = GameScreen$Skin25;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		this._Group24 = t;
		t.horizontalCenter = 0;
		t.y = 40;
		t.elementsContent = [this._Label21_i(),this._Label22_i(),this._Image5_i(),this._Label23_i(),this.btnSkill_i()];
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "点击技能图标发动技能，或者点击跳过按钮不使用技能";
		t.textColor = 0x000000;
		t.width = 500;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "点击";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "skip2";
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.text = "跳过";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 110;
		return t;
	};
	_proto.btnSkill_i = function () {
		var t = new eui.Button();
		this.btnSkill = t;
		t.y = 100;
		t.skinName = GameScreen$Skin26;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		this._Group28 = t;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 80;
		t.elementsContent = [this._Label24_i(),this._Group25_i(),this._Group26_i(),this._Group27_i()];
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "选择技能发动目标";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		this._Group25 = t;
		t.horizontalCenter = 0;
		t.y = 50;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.ybrskill1_i(),this.ybrskill2_i(),this.ybrskill3_i(),this.ybrskill4_i(),this.ybrskill5_i(),this.ybrskill6_i(),this.ybrskill7_i(),this.ybrskill8_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 20;
		t.requestedColumnCount = 4;
		t.requestedRowCount = 2;
		t.verticalGap = 40;
		return t;
	};
	_proto.ybrskill1_i = function () {
		var t = new game.ActorUI();
		this.ybrskill1 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.ybrskill2_i = function () {
		var t = new game.ActorUI();
		this.ybrskill2 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.ybrskill3_i = function () {
		var t = new game.ActorUI();
		this.ybrskill3 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.ybrskill4_i = function () {
		var t = new game.ActorUI();
		this.ybrskill4 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.ybrskill5_i = function () {
		var t = new game.ActorUI();
		this.ybrskill5 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.ybrskill6_i = function () {
		var t = new game.ActorUI();
		this.ybrskill6 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.ybrskill7_i = function () {
		var t = new game.ActorUI();
		this.ybrskill7 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.ybrskill8_i = function () {
		var t = new game.ActorUI();
		this.ybrskill8 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		this._Group26 = t;
		t.horizontalCenter = 0;
		t.y = 50;
		t.layout = this._TileLayout2_i();
		t.elementsContent = [this.fangzhenskill1_i(),this.fangzhenskill2_i(),this.fangzhenskill3_i(),this.fangzhenskill4_i(),this.fangzhenskill5_i(),this.fangzhenskill6_i(),this.fangzhenskill7_i(),this.fangzhenskill8_i()];
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 20;
		t.requestedColumnCount = 4;
		t.requestedRowCount = 2;
		t.verticalGap = 40;
		return t;
	};
	_proto.fangzhenskill1_i = function () {
		var t = new game.ActorUI();
		this.fangzhenskill1 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.fangzhenskill2_i = function () {
		var t = new game.ActorUI();
		this.fangzhenskill2 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.fangzhenskill3_i = function () {
		var t = new game.ActorUI();
		this.fangzhenskill3 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.fangzhenskill4_i = function () {
		var t = new game.ActorUI();
		this.fangzhenskill4 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.fangzhenskill5_i = function () {
		var t = new game.ActorUI();
		this.fangzhenskill5 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.fangzhenskill6_i = function () {
		var t = new game.ActorUI();
		this.fangzhenskill6 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.fangzhenskill7_i = function () {
		var t = new game.ActorUI();
		this.fangzhenskill7 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto.fangzhenskill8_i = function () {
		var t = new game.ActorUI();
		this.fangzhenskill8 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		this._Group27 = t;
		t.horizontalCenter = 0;
		t.y = 50;
		t.layout = this._TileLayout3_i();
		t.elementsContent = [this.zgqskill1_i(),this.zgqskill2_i(),this.zgqskill3_i(),this.zgqskill4_i()];
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 20;
		t.requestedColumnCount = 2;
		t.requestedRowCount = 2;
		t.verticalGap = 40;
		return t;
	};
	_proto.zgqskill1_i = function () {
		var t = new eui.Button();
		this.zgqskill1 = t;
		t.skinName = GameScreen$Skin27;
		return t;
	};
	_proto.zgqskill2_i = function () {
		var t = new eui.Button();
		this.zgqskill2 = t;
		t.skinName = GameScreen$Skin28;
		return t;
	};
	_proto.zgqskill3_i = function () {
		var t = new eui.Button();
		this.zgqskill3 = t;
		t.skinName = GameScreen$Skin29;
		return t;
	};
	_proto.zgqskill4_i = function () {
		var t = new eui.Button();
		this.zgqskill4 = t;
		t.skinName = GameScreen$Skin30;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		this._Group29 = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this.touren_note_i(),this.shunwei1_i(),this.shunwei2_i(),this.shunwei3_i(),this.shunwei4_i(),this.shunwei5_i(),this.shunwei6_i(),this.shunwei7_i(),this.shunwei8_i()];
		return t;
	};
	_proto.touren_note_i = function () {
		var t = new eui.Label();
		this.touren_note = t;
		t.horizontalCenter = 0;
		t.text = "选择下一位行动的玩家";
		t.textColor = 0x000000;
		t.y = 30;
		return t;
	};
	_proto.shunwei1_i = function () {
		var t = new game.ActorUI();
		this.shunwei1 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto.shunwei2_i = function () {
		var t = new game.ActorUI();
		this.shunwei2 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 133;
		t.y = 100;
		return t;
	};
	_proto.shunwei3_i = function () {
		var t = new game.ActorUI();
		this.shunwei3 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 266;
		t.y = 100;
		return t;
	};
	_proto.shunwei4_i = function () {
		var t = new game.ActorUI();
		this.shunwei4 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 399;
		t.y = 100;
		return t;
	};
	_proto.shunwei5_i = function () {
		var t = new game.ActorUI();
		this.shunwei5 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 350;
		return t;
	};
	_proto.shunwei6_i = function () {
		var t = new game.ActorUI();
		this.shunwei6 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 133;
		t.y = 350;
		return t;
	};
	_proto.shunwei7_i = function () {
		var t = new game.ActorUI();
		this.shunwei7 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 266;
		t.y = 350;
		return t;
	};
	_proto.shunwei8_i = function () {
		var t = new game.ActorUI();
		this.shunwei8 = t;
		t.enabled = true;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 399;
		t.y = 350;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		this._Group30 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label25_i()];
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.text = "你是最后一名行动的玩家，点击下方按钮，进入发言阶段。";
		t.textColor = 0x000000;
		t.width = 300;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		this._Group32 = t;
		t.x = 50;
		t.y = 200;
		t.elementsContent = [this.processingActorUI_i(),this._Label26_i(),this._Label27_i(),this._Label28_i(),this._Label29_i()];
		return t;
	};
	_proto.processingActorUI_i = function () {
		var t = new game.ActorUI();
		this.processingActorUI = t;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		this._Label26 = t;
		t.textColor = 0x000000;
		t.x = 200;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.text = "玩家";
		t.textColor = 0x000000;
		t.x = 317;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		this._Label28 = t;
		t.textColor = 0x000000;
		t.x = 200;
		t.y = 32;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.text = "正在鉴定宝物";
		t.textColor = 0x000000;
		t.x = 200;
		t.y = 78;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		this._Group38 = t;
		t.horizontalCenter = 0;
		t.y = 100;
		t.elementsContent = [this._Label30_i(),this._Group33_i(),this._Group34_i(),this._Group35_i(),this._Group36_i(),this._Group37_i(),this.toupiao11_i(),this.toupiao21_i(),this.toupiao31_i(),this.toupiao41_i()];
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "点击对应宝物录入投票数";
		t.textColor = 0x000000;
		t.y = -60;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = -15;
		t.elementsContent = [this._Label31_i(),this.piaoshu_i()];
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.right = 90;
		t.size = 24;
		t.text = "剩余票数";
		t.textColor = 0x000000;
		return t;
	};
	_proto.piaoshu_i = function () {
		var t = new eui.Label();
		this.piaoshu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 0;
		t.size = 24;
		t.text = "0/2";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 90;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.toupiao1_i()];
		return t;
	};
	_proto.toupiao1_i = function () {
		var t = new eui.Button();
		this.toupiao1 = t;
		t.skinName = GameScreen$Skin31;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.x = 280;
		t.elementsContent = [this.toupiao2_i()];
		return t;
	};
	_proto.toupiao2_i = function () {
		var t = new eui.Button();
		this.toupiao2 = t;
		t.skinName = GameScreen$Skin32;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.y = 200;
		t.elementsContent = [this.toupiao3_i()];
		return t;
	};
	_proto.toupiao3_i = function () {
		var t = new eui.Button();
		this.toupiao3 = t;
		t.skinName = GameScreen$Skin33;
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.x = 280;
		t.y = 200;
		t.elementsContent = [this.toupiao4_i()];
		return t;
	};
	_proto.toupiao4_i = function () {
		var t = new eui.Button();
		this.toupiao4 = t;
		t.skinName = GameScreen$Skin34;
		return t;
	};
	_proto.toupiao11_i = function () {
		var t = new eui.Label();
		this.toupiao11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 185;
		t.y = 120;
		return t;
	};
	_proto.toupiao21_i = function () {
		var t = new eui.Label();
		this.toupiao21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 10;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 120;
		return t;
	};
	_proto.toupiao31_i = function () {
		var t = new eui.Label();
		this.toupiao31 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 185;
		t.y = 320;
		return t;
	};
	_proto.toupiao41_i = function () {
		var t = new eui.Label();
		this.toupiao41 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 10;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 320;
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		this._Group39 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label32_i(),this._Label33_i()];
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "等待其他玩家进行投票中...";
		t.textColor = 0x000000;
		t.verticalCenter = -20;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		this._Label33 = t;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		t.verticalCenter = 20;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		this._Group40 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label34_i()];
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.text = "正在发言中...";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		this._Group41 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label35_i(),this._Label36_i()];
		return t;
	};
	_proto._Label35_i = function () {
		var t = new eui.Label();
		this._Label35 = t;
		t.text = "等待房主确定开始下一轮";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label36_i = function () {
		var t = new eui.Label();
		this._Label36 = t;
		t.text = "点击按钮开始下一轮";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		this._Group42 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label37_i(),this._Label38_i()];
		return t;
	};
	_proto._Label37_i = function () {
		var t = new eui.Label();
		this._Label37 = t;
		t.text = "等待房主确定开始鉴人环节";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label38_i = function () {
		var t = new eui.Label();
		this._Label38 = t;
		t.text = "点击按钮开始鉴人环节";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		this._Group43 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label39_i()];
		return t;
	};
	_proto._Label39_i = function () {
		var t = new eui.Label();
		t.text = "等待其他玩家投票";
		t.textColor = 0x000000;
		return t;
	};
	_proto.btnGameInfo_i = function () {
		var t = new eui.Button();
		this.btnGameInfo = t;
		t.bottom = 0;
		t.horizontalCenter = -70;
		t.skinName = GameScreen$Skin35;
		return t;
	};
	_proto.btnGameRecord_i = function () {
		var t = new eui.Button();
		this.btnGameRecord = t;
		t.bottom = 0;
		t.horizontalCenter = 70;
		t.skinName = GameScreen$Skin36;
		return t;
	};
	_proto.seatArea_i = function () {
		var t = new eui.Group();
		this.seatArea = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.width = 590;
		t.x = 25;
		t.y = 620;
		t.elementsContent = [this.btnSeat1_i(),this.btnSeat2_i(),this.btnSeat3_i(),this.btnSeat4_i(),this.btnSeat5_i(),this.btnSeat6_i(),this.btnSeat7_i(),this.btnSeat8_i()];
		return t;
	};
	_proto.btnSeat1_i = function () {
		var t = new eui.Button();
		this.btnSeat1 = t;
		t.anchorOffsetX = 0;
		t.height = 130;
		t.width = 130;
		t.skinName = GameScreen$Skin37;
		return t;
	};
	_proto.btnSeat2_i = function () {
		var t = new eui.Button();
		this.btnSeat2 = t;
		t.height = 130;
		t.width = 130;
		t.x = 155;
		t.skinName = GameScreen$Skin38;
		return t;
	};
	_proto.btnSeat3_i = function () {
		var t = new eui.Button();
		this.btnSeat3 = t;
		t.height = 130;
		t.width = 130;
		t.x = 310;
		t.skinName = GameScreen$Skin39;
		return t;
	};
	_proto.btnSeat4_i = function () {
		var t = new eui.Button();
		this.btnSeat4 = t;
		t.height = 130;
		t.width = 130;
		t.x = 465;
		t.skinName = GameScreen$Skin40;
		return t;
	};
	_proto.btnSeat5_i = function () {
		var t = new eui.Button();
		this.btnSeat5 = t;
		t.height = 130;
		t.width = 130;
		t.y = 190;
		t.skinName = GameScreen$Skin41;
		return t;
	};
	_proto.btnSeat6_i = function () {
		var t = new eui.Button();
		this.btnSeat6 = t;
		t.height = 130;
		t.width = 130;
		t.x = 158;
		t.y = 190;
		t.skinName = GameScreen$Skin42;
		return t;
	};
	_proto.btnSeat7_i = function () {
		var t = new eui.Button();
		this.btnSeat7 = t;
		t.height = 130;
		t.width = 130;
		t.x = 317;
		t.y = 190;
		t.skinName = GameScreen$Skin43;
		return t;
	};
	_proto.btnSeat8_i = function () {
		var t = new eui.Button();
		this.btnSeat8 = t;
		t.height = 130;
		t.width = 130;
		t.x = 470;
		t.y = 190;
		t.skinName = GameScreen$Skin44;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 130;
		t.width = 640;
		t.y = 1059;
		t.elementsContent = [this.btnGuide_i(),this._Group57_i()];
		return t;
	};
	_proto.btnGuide_i = function () {
		var t = new eui.Button();
		this.btnGuide = t;
		t.skinName = GameScreen$Skin45;
		return t;
	};
	_proto._Group57_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.right = 0;
		t.width = 520;
		t.y = 0;
		t.elementsContent = [this._Group49_i(),this._Group56_i()];
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.elementsContent = [this._Group46_i(),this._Group48_i()];
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		this._Group46 = t;
		t.percentWidth = 100;
		t.elementsContent = [this._Button2_i(),this._Button3_i(),this._Group45_i(),this._Button5_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		this._Button2 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin46;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		this._Button3 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin47;
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		this._Group45 = t;
		t.percentWidth = 100;
		t.elementsContent = [this._Button4_i(),this._Label40_i()];
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin48;
		return t;
	};
	_proto._Label40_i = function () {
		var t = new eui.Label();
		this._Label40 = t;
		t.right = 30;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		this._Button5 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin49;
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		this._Group48 = t;
		t.percentWidth = 100;
		t.elementsContent = [this._Button6_i(),this.startjs_i(),this._Group47_i(),this.startgame_i()];
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		this._Button6 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin50;
		return t;
	};
	_proto.startjs_i = function () {
		var t = new eui.Button();
		this.startjs = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin51;
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		this._Group47 = t;
		t.percentWidth = 100;
		t.elementsContent = [this._Button7_i(),this._Label41_i()];
		return t;
	};
	_proto._Button7_i = function () {
		var t = new eui.Button();
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin52;
		return t;
	};
	_proto._Label41_i = function () {
		var t = new eui.Label();
		this._Label41 = t;
		t.right = 30;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.startgame_i = function () {
		var t = new eui.Button();
		this.startgame = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin53;
		return t;
	};
	_proto._Group56_i = function () {
		var t = new eui.Group();
		this._Group56 = t;
		t.percentWidth = 100;
		t.elementsContent = [this._Group52_i(),this._Button8_i(),this._Group53_i(),this.onegameend_i(),this._Group54_i(),this._Group55_i()];
		return t;
	};
	_proto._Group52_i = function () {
		var t = new eui.Group();
		this._Group52 = t;
		t.percentWidth = 100;
		t.elementsContent = [this._Group50_i(),this._Group51_i()];
		return t;
	};
	_proto._Group50_i = function () {
		var t = new eui.Group();
		this._Group50 = t;
		t.percentWidth = 100;
		t.elementsContent = [this.btnAuth_i(),this.btnSkipAuth_i()];
		return t;
	};
	_proto.btnAuth_i = function () {
		var t = new eui.Button();
		this.btnAuth = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin54;
		return t;
	};
	_proto.btnSkipAuth_i = function () {
		var t = new eui.Button();
		this.btnSkipAuth = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin55;
		return t;
	};
	_proto._Group51_i = function () {
		var t = new eui.Group();
		this._Group51 = t;
		t.percentWidth = 100;
		t.elementsContent = [this.btnSkipSkill_i()];
		return t;
	};
	_proto.btnSkipSkill_i = function () {
		var t = new eui.Button();
		this.btnSkipSkill = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin56;
		return t;
	};
	_proto._Button8_i = function () {
		var t = new eui.Button();
		this._Button8 = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin57;
		return t;
	};
	_proto._Group53_i = function () {
		var t = new eui.Group();
		this._Group53 = t;
		t.percentWidth = 100;
		t.elementsContent = [this.onespeakend_i(),this._Button9_i()];
		return t;
	};
	_proto.onespeakend_i = function () {
		var t = new eui.Button();
		this.onespeakend = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin58;
		return t;
	};
	_proto._Button9_i = function () {
		var t = new eui.Button();
		this._Button9 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin59;
		return t;
	};
	_proto.onegameend_i = function () {
		var t = new eui.Button();
		this.onegameend = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin60;
		return t;
	};
	_proto._Group54_i = function () {
		var t = new eui.Group();
		this._Group54 = t;
		t.percentWidth = 100;
		t.elementsContent = [this.qingkong_i(),this.toupiaoqueren_i()];
		return t;
	};
	_proto.qingkong_i = function () {
		var t = new eui.Button();
		this.qingkong = t;
		t.left = 0;
		t.percentWidth = 49;
		t.skinName = GameScreen$Skin61;
		return t;
	};
	_proto.toupiaoqueren_i = function () {
		var t = new eui.Button();
		this.toupiaoqueren = t;
		t.right = 0;
		t.percentWidth = 49;
		t.skinName = GameScreen$Skin62;
		return t;
	};
	_proto._Group55_i = function () {
		var t = new eui.Group();
		this._Group55 = t;
		t.percentWidth = 100;
		t.elementsContent = [this.startno2_i()];
		return t;
	};
	_proto.startno2_i = function () {
		var t = new eui.Button();
		this.startno2 = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin63;
		return t;
	};
	return GameScreen;
})(eui.Skin);generateEUI.paths['resource/containers/GuideGameProcessWindow.exml'] = window.skins.GuideGameProcessWindow = (function (_super) {
	__extends(GuideGameProcessWindow, _super);
	var GuideGameProcessWindow$Skin64 = 	(function (_super) {
		__extends(GuideGameProcessWindow$Skin64, _super);
		function GuideGameProcessWindow$Skin64() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideGameProcessWindow$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideGameProcessWindow$Skin64;
	})(eui.Skin);

	function GuideGameProcessWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","winJudgeButton","contentScroller","closeButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this.navigationBar_i()];
	}
	var _proto = GuideGameProcessWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "游戏流程";
		t.textColor = 0x020202;
		t.y = 30;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.y = 35;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.winJudgeButton_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "manual21";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "manual22";
		t.y = 912;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "manual23";
		t.y = 1886;
		return t;
	};
	_proto.winJudgeButton_i = function () {
		var t = new eui.Button();
		this.winJudgeButton = t;
		t.alpha = 0;
		t.height = 240;
		t.horizontalCenter = 0;
		t.width = 340;
		t.y = 2320;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 1130;
		t.elementsContent = [this.closeButton_i()];
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = GuideGameProcessWindow$Skin64;
		return t;
	};
	return GuideGameProcessWindow;
})(eui.Skin);generateEUI.paths['resource/containers/GuideGameTermWindow.exml'] = window.skins.GuideGameTermWindow = (function (_super) {
	__extends(GuideGameTermWindow, _super);
	var GuideGameTermWindow$Skin65 = 	(function (_super) {
		__extends(GuideGameTermWindow$Skin65, _super);
		function GuideGameTermWindow$Skin65() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideGameTermWindow$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideGameTermWindow$Skin65;
	})(eui.Skin);

	function GuideGameTermWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","termList","contentScroller","closeButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this.navigationBar_i()];
	}
	var _proto = GuideGameTermWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "游戏术语";
		t.textColor = 0x020202;
		t.y = 30;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetY = 0;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.y = 70;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 580;
		t.elementsContent = [this.termList_i()];
		return t;
	};
	_proto.termList_i = function () {
		var t = new eui.List();
		this.termList = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 35;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 1130;
		t.elementsContent = [this.closeButton_i()];
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = GuideGameTermWindow$Skin65;
		return t;
	};
	return GuideGameTermWindow;
})(eui.Skin);generateEUI.paths['resource/containers/GuideRoleSkillWindow.exml'] = window.skins.GuideRoleSkillWindow = (function (_super) {
	__extends(GuideRoleSkillWindow, _super);
	var GuideRoleSkillWindow$Skin66 = 	(function (_super) {
		__extends(GuideRoleSkillWindow$Skin66, _super);
		function GuideRoleSkillWindow$Skin66() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideRoleSkillWindow$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideRoleSkillWindow$Skin66;
	})(eui.Skin);

	function GuideRoleSkillWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","contentScroller","closeButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this.navigationBar_i()];
	}
	var _proto = GuideRoleSkillWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "技能介绍";
		t.textColor = 0x020202;
		t.y = 30;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetY = 0;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.y = 70;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "manual31";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "manual32";
		t.y = 1154;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "manual33";
		t.y = 2107;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 1130;
		t.elementsContent = [this.closeButton_i()];
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = GuideRoleSkillWindow$Skin66;
		return t;
	};
	return GuideRoleSkillWindow;
})(eui.Skin);generateEUI.paths['resource/containers/GuideVideoWindow.exml'] = window.skins.GuideVideoWindow = (function (_super) {
	__extends(GuideVideoWindow, _super);
	var GuideVideoWindow$Skin67 = 	(function (_super) {
		__extends(GuideVideoWindow$Skin67, _super);
		function GuideVideoWindow$Skin67() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
			];
		}
		var _proto = GuideVideoWindow$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.scaleX = 0.88;
			t.scaleY = 0.88;
			t.source = "video1";
			return t;
		};
		return GuideVideoWindow$Skin67;
	})(eui.Skin);

	var GuideVideoWindow$Skin68 = 	(function (_super) {
		__extends(GuideVideoWindow$Skin68, _super);
		function GuideVideoWindow$Skin68() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
			];
		}
		var _proto = GuideVideoWindow$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.scaleX = 0.88;
			t.scaleY = 0.88;
			t.source = "video2";
			return t;
		};
		return GuideVideoWindow$Skin68;
	})(eui.Skin);

	var GuideVideoWindow$Skin69 = 	(function (_super) {
		__extends(GuideVideoWindow$Skin69, _super);
		function GuideVideoWindow$Skin69() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
			];
		}
		var _proto = GuideVideoWindow$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.scaleX = 0.88;
			t.scaleY = 0.88;
			t.source = "video3";
			return t;
		};
		return GuideVideoWindow$Skin69;
	})(eui.Skin);

	var GuideVideoWindow$Skin70 = 	(function (_super) {
		__extends(GuideVideoWindow$Skin70, _super);
		function GuideVideoWindow$Skin70() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideVideoWindow$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideVideoWindow$Skin70;
	})(eui.Skin);

	function GuideVideoWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","btnVideo1","btnVideo2","btnVideo3","contentScroller","closeButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this.navigationBar_i()];
	}
	var _proto = GuideVideoWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "视频教程";
		t.textColor = 0x020202;
		t.y = 30;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.y = 80;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this.btnVideo1_i(),this.btnVideo2_i(),this.btnVideo3_i()];
		return t;
	};
	_proto.btnVideo1_i = function () {
		var t = new eui.Button();
		this.btnVideo1 = t;
		t.horizontalCenter = 0;
		t.skinName = GuideVideoWindow$Skin67;
		return t;
	};
	_proto.btnVideo2_i = function () {
		var t = new eui.Button();
		this.btnVideo2 = t;
		t.horizontalCenter = 0;
		t.y = 290;
		t.skinName = GuideVideoWindow$Skin68;
		return t;
	};
	_proto.btnVideo3_i = function () {
		var t = new eui.Button();
		this.btnVideo3 = t;
		t.horizontalCenter = 0;
		t.y = 580;
		t.skinName = GuideVideoWindow$Skin69;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 1130;
		t.elementsContent = [this.closeButton_i()];
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = GuideVideoWindow$Skin70;
		return t;
	};
	return GuideVideoWindow;
})(eui.Skin);generateEUI.paths['resource/containers/GuideWindow.exml'] = window.skins.GuideWindow = (function (_super) {
	__extends(GuideWindow, _super);
	var GuideWindow$Skin71 = 	(function (_super) {
		__extends(GuideWindow$Skin71, _super);
		function GuideWindow$Skin71() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideWindow$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "manual1";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideWindow$Skin71;
	})(eui.Skin);

	var GuideWindow$Skin72 = 	(function (_super) {
		__extends(GuideWindow$Skin72, _super);
		function GuideWindow$Skin72() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideWindow$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "manual2";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideWindow$Skin72;
	})(eui.Skin);

	var GuideWindow$Skin73 = 	(function (_super) {
		__extends(GuideWindow$Skin73, _super);
		function GuideWindow$Skin73() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideWindow$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "manual3";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideWindow$Skin73;
	})(eui.Skin);

	var GuideWindow$Skin74 = 	(function (_super) {
		__extends(GuideWindow$Skin74, _super);
		function GuideWindow$Skin74() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideWindow$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "manual4";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideWindow$Skin74;
	})(eui.Skin);

	var GuideWindow$Skin75 = 	(function (_super) {
		__extends(GuideWindow$Skin75, _super);
		function GuideWindow$Skin75() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideWindow$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "manual5";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideWindow$Skin75;
	})(eui.Skin);

	var GuideWindow$Skin76 = 	(function (_super) {
		__extends(GuideWindow$Skin76, _super);
		function GuideWindow$Skin76() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideWindow$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideWindow$Skin76;
	})(eui.Skin);

	function GuideWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","videoButton","gameProcessButton","roleSkillButton","winJudgeButton","gameTermButton","contentScroller","closeButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this.navigationBar_i()];
	}
	var _proto = GuideWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "指南";
		t.textColor = 0x020202;
		t.y = 30;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetY = 0;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.y = 70;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this.videoButton_i(),this.gameProcessButton_i(),this.roleSkillButton_i(),this.winJudgeButton_i(),this.gameTermButton_i()];
		return t;
	};
	_proto.videoButton_i = function () {
		var t = new eui.Button();
		this.videoButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.skinName = GuideWindow$Skin71;
		return t;
	};
	_proto.gameProcessButton_i = function () {
		var t = new eui.Button();
		this.gameProcessButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.y = 225;
		t.skinName = GuideWindow$Skin72;
		return t;
	};
	_proto.roleSkillButton_i = function () {
		var t = new eui.Button();
		this.roleSkillButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.y = 455;
		t.skinName = GuideWindow$Skin73;
		return t;
	};
	_proto.winJudgeButton_i = function () {
		var t = new eui.Button();
		this.winJudgeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.y = 685;
		t.skinName = GuideWindow$Skin74;
		return t;
	};
	_proto.gameTermButton_i = function () {
		var t = new eui.Button();
		this.gameTermButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 0;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.y = 685;
		t.skinName = GuideWindow$Skin75;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 1130;
		t.elementsContent = [this.closeButton_i()];
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = GuideWindow$Skin76;
		return t;
	};
	return GuideWindow;
})(eui.Skin);generateEUI.paths['resource/containers/GuideWinJudgeWindow.exml'] = window.skins.GuideWinJudgeWindow = (function (_super) {
	__extends(GuideWinJudgeWindow, _super);
	var GuideWinJudgeWindow$Skin77 = 	(function (_super) {
		__extends(GuideWinJudgeWindow$Skin77, _super);
		function GuideWinJudgeWindow$Skin77() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = GuideWinJudgeWindow$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return GuideWinJudgeWindow$Skin77;
	})(eui.Skin);

	function GuideWinJudgeWindow() {
		_super.call(this);
		this.skinParts = ["closeButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.navigationBar_i()];
	}
	var _proto = GuideWinJudgeWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "manual41";
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 1130;
		t.elementsContent = [this.closeButton_i()];
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = GuideWinJudgeWindow$Skin77;
		return t;
	};
	return GuideWinJudgeWindow;
})(eui.Skin);generateEUI.paths['resource/containers/JoinWindow.exml'] = window.skins.JoinWindow = (function (_super) {
	__extends(JoinWindow, _super);
	function JoinWindow() {
		_super.call(this);
		this.skinParts = ["overlay","txtRoomName","closeButton","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
	}
	var _proto = JoinWindow.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this.txtRoomName_i(),this.closeButton_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "small-dialog-background";
		t.top = 0;
		return t;
	};
	_proto.txtRoomName_i = function () {
		var t = new eui.TextInput();
		this.txtRoomName = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.label = "Confirm join this room";
		t.x = 214.5;
		t.y = 416.67;
		return t;
	};
	return JoinWindow;
})(eui.Skin);generateEUI.paths['resource/containers/LoadingUI.exml'] = window.skins.LoadingUI = (function (_super) {
	__extends(LoadingUI, _super);
	var LoadingUI$Skin78 = 	(function (_super) {
		__extends(LoadingUI$Skin78, _super);
		function LoadingUI$Skin78() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoadingUI$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-anonymouslogin";
			t.percentWidth = 100;
			return t;
		};
		return LoadingUI$Skin78;
	})(eui.Skin);

	var LoadingUI$Skin79 = 	(function (_super) {
		__extends(LoadingUI$Skin79, _super);
		function LoadingUI$Skin79() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoadingUI$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-wxlogin";
			t.percentWidth = 100;
			return t;
		};
		return LoadingUI$Skin79;
	})(eui.Skin);

	function LoadingUI() {
		_super.call(this);
		this.skinParts = ["loadingBackground","loadingText","labelText","loadingLabel","progressBg","progressBar","groupLoading","btnAnonymousLogin","btnLogin"];
		
		this.width = 640;
		this.elementsContent = [this.loadingBackground_i(),this.groupLoading_i(),this.btnAnonymousLogin_i(),this.btnLogin_i()];
	}
	var _proto = LoadingUI.prototype;

	_proto.loadingBackground_i = function () {
		var t = new eui.Image();
		this.loadingBackground = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "loading-background";
		t.top = 0;
		return t;
	};
	_proto.groupLoading_i = function () {
		var t = new eui.Group();
		this.groupLoading = t;
		t.width = 640;
		t.elementsContent = [this.loadingLabel_i(),this.progressBg_i(),this.progressBar_i()];
		return t;
	};
	_proto.loadingLabel_i = function () {
		var t = new eui.Group();
		this.loadingLabel = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this.loadingText_i(),this.labelText_i()];
		return t;
	};
	_proto.loadingText_i = function () {
		var t = new eui.Label();
		this.loadingText = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.left = 0;
		t.text = "数据加载中，请等待...";
		t.textColor = 0xfdb449;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelText_i = function () {
		var t = new eui.Label();
		this.labelText = t;
		t.fontFamily = "Arial";
		t.text = "Loading...";
		t.textColor = 0x000000;
		t.x = 316;
		return t;
	};
	_proto.progressBg_i = function () {
		var t = new eui.Image();
		this.progressBg = t;
		t.height = 60;
		t.source = "progress-bg";
		t.width = 640;
		return t;
	};
	_proto.progressBar_i = function () {
		var t = new eui.Image();
		this.progressBar = t;
		t.height = 60;
		t.source = "progress";
		t.width = 640;
		return t;
	};
	_proto.btnAnonymousLogin_i = function () {
		var t = new eui.Button();
		this.btnAnonymousLogin = t;
		t.visible = false;
		t.width = 640;
		t.skinName = LoadingUI$Skin78;
		return t;
	};
	_proto.btnLogin_i = function () {
		var t = new eui.Button();
		this.btnLogin = t;
		t.visible = false;
		t.width = 640;
		t.skinName = LoadingUI$Skin79;
		return t;
	};
	return LoadingUI;
})(eui.Skin);generateEUI.paths['resource/containers/MoreGameWindow.exml'] = window.skins.MoreGameWindow = (function (_super) {
	__extends(MoreGameWindow, _super);
	var MoreGameWindow$Skin80 = 	(function (_super) {
		__extends(MoreGameWindow$Skin80, _super);
		function MoreGameWindow$Skin80() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = MoreGameWindow$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "more-item1";
			t.verticalCenter = 0;
			return t;
		};
		return MoreGameWindow$Skin80;
	})(eui.Skin);

	var MoreGameWindow$Skin81 = 	(function (_super) {
		__extends(MoreGameWindow$Skin81, _super);
		function MoreGameWindow$Skin81() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = MoreGameWindow$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "more-item2";
			t.verticalCenter = 0;
			return t;
		};
		return MoreGameWindow$Skin81;
	})(eui.Skin);

	var MoreGameWindow$Skin82 = 	(function (_super) {
		__extends(MoreGameWindow$Skin82, _super);
		function MoreGameWindow$Skin82() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = MoreGameWindow$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return MoreGameWindow$Skin82;
	})(eui.Skin);

	function MoreGameWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","backItem1","backItem2","contentScroller","backButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this.navigationBar_i()];
	}
	var _proto = MoreGameWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "更多游戏";
		t.textColor = 0x020202;
		t.y = 30;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.y = 110;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.backItem1_i(),this.backItem2_i()];
		return t;
	};
	_proto.backItem1_i = function () {
		var t = new eui.Button();
		this.backItem1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.skinName = MoreGameWindow$Skin80;
		return t;
	};
	_proto.backItem2_i = function () {
		var t = new eui.Button();
		this.backItem2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 300;
		t.skinName = MoreGameWindow$Skin81;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this.backButton_i()];
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = MoreGameWindow$Skin82;
		return t;
	};
	return MoreGameWindow;
})(eui.Skin);generateEUI.paths['resource/containers/NoticeWindow.exml'] = window.skins.NoticeWindow = (function (_super) {
	__extends(NoticeWindow, _super);
	var NoticeWindow$Skin83 = 	(function (_super) {
		__extends(NoticeWindow$Skin83, _super);
		function NoticeWindow$Skin83() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = NoticeWindow$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return NoticeWindow$Skin83;
	})(eui.Skin);

	function NoticeWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","contentScroller","backButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this.navigationBar_i()];
	}
	var _proto = NoticeWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "公告";
		t.textColor = 0x020202;
		t.y = 30;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.width = 600;
		t.y = 110;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this.backButton_i()];
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = NoticeWindow$Skin83;
		return t;
	};
	return NoticeWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupAppraisalWindow.exml'] = window.skins.PopupAppraisalWindow = (function (_super) {
	__extends(PopupAppraisalWindow, _super);
	function PopupAppraisalWindow() {
		_super.call(this);
		this.skinParts = ["overlay","appraisalGroup","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.result.source"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.result.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.result.resultLabel"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.result.resultRes"],[0],this._Label3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.result.resultRes"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.result2"],[0],this._Group4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.result2.source"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.result2.name"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.result2.resultLabel"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.result2.resultRes"],[0],this._Label6,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.result2.resultRes"],[0],this._Image4,"source");
	}
	var _proto = PopupAppraisalWindow.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new game.PopupWindowWrapper();
		this.container = t;
		t.height = 650;
		t.skinName = "skins.PopupWindowSkin";
		t.elementsContent = [this.appraisalGroup_i()];
		return t;
	};
	_proto.appraisalGroup_i = function () {
		var t = new eui.Group();
		this.appraisalGroup = t;
		t.horizontalCenter = 0;
		t.y = 120;
		t.elementsContent = [this._Group2_i(),this._Group4_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 500;
		t.elementsContent = [this._Group1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Image2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 180;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 170;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.size = 28;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 250;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.bold = true;
		t.size = 24;
		t.text = "鉴定结果为";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 250;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.x = 400;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.horizontalCenter = 0;
		t.width = 500;
		t.y = 180;
		t.elementsContent = [this._Group3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Image4_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.width = 180;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.bold = true;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 170;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.bold = true;
		t.size = 28;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 250;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.bold = true;
		t.size = 24;
		t.text = "鉴定结果为";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 250;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.x = 400;
		return t;
	};
	return PopupAppraisalWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupFangWindow.exml'] = window.skins.PopupFangWindow = (function (_super) {
	__extends(PopupFangWindow, _super);
	function PopupFangWindow() {
		_super.call(this);
		this.skinParts = ["overlay","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.seat.url"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.seat.color"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.seat.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.message"],[0],this._Label2,"text");
	}
	var _proto = PopupFangWindow.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new game.PopupWindowWrapper();
		this.container = t;
		t.skinName = "skins.PopupWindowSkin";
		t.elementsContent = [this._Group1_i(),this._Label2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 130;
		t.x = 150;
		t.y = 90;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.maxHeight = 100;
		t.maxWidth = 100;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "head_bg";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bottom = -40;
		t.height = 35;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		t.width = 140;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.textColor = 0x020202;
		t.width = 250;
		t.x = 300;
		t.y = 137;
		return t;
	};
	return PopupFangWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupGameInfoWindow.exml'] = window.skins.PopupGameInfoWindow = (function (_super) {
	__extends(PopupGameInfoWindow, _super);
	function PopupGameInfoWindow() {
		_super.call(this);
		this.skinParts = ["overlay","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.avatarUrl"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.selfColor"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.nickName"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.role.camp"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.role.name"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.teammate"],[0],this._Group6,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.teammate.avatarUrl"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.teammate.color"],[0],this._Image6,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.teammate.nickName"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.teammate.name"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.role.res"],[0],this._Image7,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.role.skillDescription"],[0],this._Label8,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.fang"],[0],this._Group10,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.fang.actorUrl"],[0],this._Image9,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.fang.color"],[0],this._Image11,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.fang.name"],[0],this._Label9,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.fang.result"],[0],this._Label10,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.r1"],[0],this._Group12,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.r1.source"],[0],this._Image13,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.r1.resultRes"],[0],this._Image14,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.r1.resultLabel"],[0],this._Label11,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.r2"],[0],this._Group14,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.r2.source"],[0],this._Image16,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.r2.resultRes"],[0],this._Image17,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.r2.resultLabel"],[0],this._Label12,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.skillText"],[0],this._Label13,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.yaoSkill"],[0],this._Group15,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.yaoSkill.url"],[0],this._Image18,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.yaoSkill.color"],[0],this._Image20,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.yaoSkill.name"],[0],this._Label14,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.zhengSkill"],[0],this._Group16,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.zhengSkill.source"],[0],this._Image21,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.text"],[0],this._Label15,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.firstRound.text"],[0],this._Label15,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.fang"],[0],this._Group20,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.fang.actorUrl"],[0],this._Image23,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.fang.color"],[0],this._Image25,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.fang.name"],[0],this._Label16,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.fang.result"],[0],this._Label17,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.r1"],[0],this._Group22,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.r1.source"],[0],this._Image27,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.r1.resultRes"],[0],this._Image28,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.r1.resultLabel"],[0],this._Label18,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.r2"],[0],this._Group24,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.r2.source"],[0],this._Image30,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.r2.resultRes"],[0],this._Image31,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.r2.resultLabel"],[0],this._Label19,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.skillText"],[0],this._Label20,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.yaoSkill"],[0],this._Group25,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.yaoSkill.url"],[0],this._Image32,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.yaoSkill.color"],[0],this._Image34,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.yaoSkill.name"],[0],this._Label21,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.zhengSkill"],[0],this._Group26,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.zhengSkill.source"],[0],this._Image35,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.text"],[0],this._Label22,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.secondRound.text"],[0],this._Label22,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.fang"],[0],this._Group30,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.fang.actorUrl"],[0],this._Image37,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.fang.color"],[0],this._Image39,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.fang.name"],[0],this._Label23,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.fang.result"],[0],this._Label24,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.r1"],[0],this._Group32,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.r1.source"],[0],this._Image41,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.r1.resultRes"],[0],this._Image42,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.r1.resultLabel"],[0],this._Label25,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.r2"],[0],this._Group34,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.r2.source"],[0],this._Image44,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.r2.resultRes"],[0],this._Image45,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.r2.resultLabel"],[0],this._Label26,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.skillText"],[0],this._Label27,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.yaoSkill"],[0],this._Group35,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.yaoSkill.url"],[0],this._Image46,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.yaoSkill.color"],[0],this._Image48,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.yaoSkill.name"],[0],this._Label28,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.zhengSkill"],[0],this._Group36,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.zhengSkill.source"],[0],this._Image49,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.text"],[0],this._Label29,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.thirdRound.text"],[0],this._Label29,"visible");
	}
	var _proto = PopupGameInfoWindow.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new game.PopupWindowWrapper();
		this.container = t;
		t.height = 1000;
		t.skinName = "skins.PopupWindowSkin";
		t.elementsContent = [this._Group3_i(),this._Group6_i(),this._Group8_i(),this._Group18_i(),this._Group28_i(),this._Group38_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 100;
		t.y = 60;
		t.elementsContent = [this._Label1_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "你";
		t.textColor = 0x000000;
		t.x = 30;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.y = 45;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 100;
		t.y = 45;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0x000000;
		t.y = 35;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0x000000;
		t.y = 70;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		this._Group6 = t;
		t.right = 100;
		t.y = 60;
		t.elementsContent = [this._Label5_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.right = 20;
		t.size = 28;
		t.text = "队友";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.y = 45;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.right = 100;
		t.y = 45;
		t.elementsContent = [this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.bold = true;
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "top";
		t.width = 105;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "top";
		t.width = 105;
		t.y = 70;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.left = 100;
		t.y = 255;
		t.elementsContent = [this._Image7_i(),this._Group7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.verticalCenter = 0;
		t.x = 115;
		t.elementsContent = [this._Label8_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 350;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.left = 100;
		t.y = 460;
		t.elementsContent = [this._Image8_i(),this._Group17_i(),this._Label15_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "round1";
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.elementsContent = [this._Group10_i(),this._Group12_i(),this._Group14_i(),this._Label13_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		this._Group10 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = 0;
		t.x = 50;
		t.elementsContent = [this._Group9_i(),this._Label10_i()];
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Label9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		this._Image11 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.bottom = -40;
		t.horizontalCenter = 0;
		t.size = 40;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		this._Label10 = t;
		t.bold = true;
		t.size = 50;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 150;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		this._Group12 = t;
		t.verticalCenter = 0;
		t.x = 50;
		t.elementsContent = [this._Group11_i(),this._Image14_i(),this._Label11_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 180;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		this._Image13 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		this._Image14 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.x = 96;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		this._Label11 = t;
		t.bold = true;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		this._Group14 = t;
		t.verticalCenter = 0;
		t.x = 230;
		t.elementsContent = [this._Group13_i(),this._Image17_i(),this._Label12_i()];
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 180;
		t.elementsContent = [this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		this._Image16 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		this._Image17 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.x = 96;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		this._Label12 = t;
		t.bold = true;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		this._Label13 = t;
		t.bold = true;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 250;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		this._Group15 = t;
		t.height = 130;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.width = 130;
		t.x = 350;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Label14_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		this._Image18 = t;
		t.horizontalCenter = 0;
		t.maxHeight = 100;
		t.maxWidth = 100;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "head_bg";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		this._Image20 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		this._Label14 = t;
		t.bottom = -40;
		t.height = 35;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		t.width = 140;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		this._Group16 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.x = 350;
		t.elementsContent = [this._Image21_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		this._Image21 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		this._Label15 = t;
		t.bold = true;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 50;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.left = 100;
		t.y = 575;
		t.elementsContent = [this._Image22_i(),this._Group27_i(),this._Label22_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "round2";
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.elementsContent = [this._Group20_i(),this._Group22_i(),this._Group24_i(),this._Label20_i(),this._Group25_i(),this._Group26_i()];
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		this._Group20 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = 0;
		t.x = 50;
		t.elementsContent = [this._Group19_i(),this._Label17_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Label16_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		this._Image23 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		this._Image25 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		this._Label16 = t;
		t.bottom = -40;
		t.horizontalCenter = 0;
		t.size = 40;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		this._Label17 = t;
		t.bold = true;
		t.size = 50;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 150;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		this._Group22 = t;
		t.verticalCenter = 0;
		t.x = 50;
		t.elementsContent = [this._Group21_i(),this._Image28_i(),this._Label18_i()];
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 180;
		t.elementsContent = [this._Image26_i(),this._Image27_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		this._Image27 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		this._Image28 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.x = 96;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		this._Label18 = t;
		t.bold = true;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		this._Group24 = t;
		t.verticalCenter = 0;
		t.x = 230;
		t.elementsContent = [this._Group23_i(),this._Image31_i(),this._Label19_i()];
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 180;
		t.elementsContent = [this._Image29_i(),this._Image30_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		this._Image30 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		this._Image31 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.x = 96;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		this._Label19 = t;
		t.bold = true;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		this._Label20 = t;
		t.bold = true;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 250;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		this._Group25 = t;
		t.height = 130;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.width = 130;
		t.x = 350;
		t.elementsContent = [this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Label21_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		this._Image32 = t;
		t.horizontalCenter = 0;
		t.maxHeight = 100;
		t.maxWidth = 100;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "head_bg";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		this._Image34 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		this._Label21 = t;
		t.bottom = -40;
		t.height = 35;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		t.width = 140;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		this._Group26 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.x = 350;
		t.elementsContent = [this._Image35_i()];
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		this._Image35 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		this._Label22 = t;
		t.bold = true;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 50;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.left = 100;
		t.y = 690;
		t.elementsContent = [this._Image36_i(),this._Group37_i(),this._Label29_i()];
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.source = "round3";
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.elementsContent = [this._Group30_i(),this._Group32_i(),this._Group34_i(),this._Label27_i(),this._Group35_i(),this._Group36_i()];
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		this._Group30 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = 0;
		t.x = 50;
		t.elementsContent = [this._Group29_i(),this._Label24_i()];
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Label23_i()];
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		this._Image37 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		this._Image39 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		this._Label23 = t;
		t.bottom = -40;
		t.horizontalCenter = 0;
		t.size = 40;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		this._Label24 = t;
		t.bold = true;
		t.size = 50;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 150;
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		this._Group32 = t;
		t.verticalCenter = 0;
		t.x = 50;
		t.elementsContent = [this._Group31_i(),this._Image42_i(),this._Label25_i()];
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 180;
		t.elementsContent = [this._Image40_i(),this._Image41_i()];
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		this._Image41 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		this._Image42 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.x = 96;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		this._Label25 = t;
		t.bold = true;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		this._Group34 = t;
		t.verticalCenter = 0;
		t.x = 230;
		t.elementsContent = [this._Group33_i(),this._Image45_i(),this._Label26_i()];
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 180;
		t.elementsContent = [this._Image43_i(),this._Image44_i()];
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		this._Image44 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		this._Image45 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.x = 96;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		this._Label26 = t;
		t.bold = true;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 100;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		this._Label27 = t;
		t.bold = true;
		t.size = 22;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 250;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		this._Group35 = t;
		t.height = 130;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.width = 130;
		t.x = 350;
		t.elementsContent = [this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Label28_i()];
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		this._Image46 = t;
		t.horizontalCenter = 0;
		t.maxHeight = 100;
		t.maxWidth = 100;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "head_bg";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		this._Image48 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		this._Label28 = t;
		t.bottom = -40;
		t.height = 35;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		t.width = 140;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		this._Group36 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.x = 350;
		t.elementsContent = [this._Image49_i()];
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		this._Image49 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		this._Label29 = t;
		t.bold = true;
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 50;
		return t;
	};
	return PopupGameInfoWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupHandleWindow.exml'] = window.skins.PopupHandleWindow = (function (_super) {
	__extends(PopupHandleWindow, _super);
	var PopupHandleWindow$Skin84 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin84, _super);
		function PopupHandleWindow$Skin84() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = PopupHandleWindow$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "white_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.horizontalCenter = 0;
			t.scaleX = 0.8;
			t.scaleY = 0.8;
			t.source = "black_2";
			t.verticalCenter = 0;
			return t;
		};
		return PopupHandleWindow$Skin84;
	})(eui.Skin);

	var PopupHandleWindow$Skin85 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin85, _super);
		function PopupHandleWindow$Skin85() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = PopupHandleWindow$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "white_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.horizontalCenter = 0;
			t.scaleX = 0.8;
			t.scaleY = 0.8;
			t.source = "black_2";
			t.verticalCenter = 0;
			return t;
		};
		return PopupHandleWindow$Skin85;
	})(eui.Skin);

	var PopupHandleWindow$Skin86 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin86, _super);
		function PopupHandleWindow$Skin86() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = PopupHandleWindow$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "white_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.horizontalCenter = 0;
			t.scaleX = 0.8;
			t.scaleY = 0.8;
			t.source = "black_2";
			t.verticalCenter = 0;
			return t;
		};
		return PopupHandleWindow$Skin86;
	})(eui.Skin);

	var PopupHandleWindow$Skin87 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin87, _super);
		function PopupHandleWindow$Skin87() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = PopupHandleWindow$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "cancel";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupHandleWindow$Skin87;
	})(eui.Skin);

	var PopupHandleWindow$Skin88 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin88, _super);
		function PopupHandleWindow$Skin88() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = PopupHandleWindow$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "ok";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupHandleWindow$Skin88;
	})(eui.Skin);

	var PopupHandleWindow$Skin89 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin89, _super);
		function PopupHandleWindow$Skin89() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = PopupHandleWindow$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-create-small";
			return t;
		};
		return PopupHandleWindow$Skin89;
	})(eui.Skin);

	function PopupHandleWindow() {
		_super.call(this);
		this.skinParts = ["overlay","sixButton","sevenButton","eightButton","closeButton","confirmButton","btnCreateRoom","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.message"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.message"],[0],this._Label1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isCreate"],[0],this._Group1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.message"],[0],this.confirmButton,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isCreate"],[0],this.btnCreateRoom,"visible");
	}
	var _proto = PopupHandleWindow.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Group1_i(),this.closeButton_i(),this.confirmButton_i(),this.btnCreateRoom_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.88;
		t.source = "small-dialog-background";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 45;
		t.textColor = 0x020202;
		t.y = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.y = 100;
		t.elementsContent = [this._Label2_i(),this.sixButton_i(),this._Label3_i(),this.sevenButton_i(),this._Label4_i(),this.eightButton_i(),this._Label5_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 20;
		t.text = "游戏人数";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		return t;
	};
	_proto.sixButton_i = function () {
		var t = new eui.ToggleButton();
		this.sixButton = t;
		t.x = 120;
		t.skinName = PopupHandleWindow$Skin84;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 20;
		t.text = "6人";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 185;
		return t;
	};
	_proto.sevenButton_i = function () {
		var t = new eui.ToggleButton();
		this.sevenButton = t;
		t.x = 220;
		t.skinName = PopupHandleWindow$Skin85;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 20;
		t.text = "7人";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 285;
		return t;
	};
	_proto.eightButton_i = function () {
		var t = new eui.ToggleButton();
		this.eightButton = t;
		t.selected = true;
		t.x = 320;
		t.skinName = PopupHandleWindow$Skin86;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 20;
		t.text = "8人";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 385;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 90;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.skinName = PopupHandleWindow$Skin87;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 280;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.skinName = PopupHandleWindow$Skin88;
		return t;
	};
	_proto.btnCreateRoom_i = function () {
		var t = new eui.Button();
		this.btnCreateRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 280;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.skinName = PopupHandleWindow$Skin89;
		return t;
	};
	return PopupHandleWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupNumberKeyboard.exml'] = window.skins.PopupNumberKeyboard = (function (_super) {
	__extends(PopupNumberKeyboard, _super);
	var PopupNumberKeyboard$Skin90 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin90, _super);
		function PopupNumberKeyboard$Skin90() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin90.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "1";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin90;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin91 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin91, _super);
		function PopupNumberKeyboard$Skin91() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin91.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "2";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin91;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin92 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin92, _super);
		function PopupNumberKeyboard$Skin92() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin92.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "3";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin92;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin93 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin93, _super);
		function PopupNumberKeyboard$Skin93() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin93.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "4";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin93;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin94 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin94, _super);
		function PopupNumberKeyboard$Skin94() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin94.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "5";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin94;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin95 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin95, _super);
		function PopupNumberKeyboard$Skin95() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin95.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "6";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin95;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin96 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin96, _super);
		function PopupNumberKeyboard$Skin96() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin96.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "7";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin96;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin97 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin97, _super);
		function PopupNumberKeyboard$Skin97() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin97.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "8";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin97;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin98 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin98, _super);
		function PopupNumberKeyboard$Skin98() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin98.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "9";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin98;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin99 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin99, _super);
		function PopupNumberKeyboard$Skin99() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._BitmapLabel1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin99.prototype;

		_proto._BitmapLabel1_i = function () {
			var t = new eui.BitmapLabel();
			t.font = "numberKeyboard_fnt";
			t.text = "0";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin99;
	})(eui.Skin);

	var PopupNumberKeyboard$Skin100 = 	(function (_super) {
		__extends(PopupNumberKeyboard$Skin100, _super);
		function PopupNumberKeyboard$Skin100() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Rect1_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Rect1","visible",false)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Rect1","visible",true)
					])
			];
		}
		var _proto = PopupNumberKeyboard$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "num_del";
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			this._Rect1 = t;
			t.alpha = 0.4;
			t.fillColor = 0x4E4E4E;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		return PopupNumberKeyboard$Skin100;
	})(eui.Skin);

	function PopupNumberKeyboard() {
		_super.call(this);
		this.skinParts = ["overlay","cancel","confirm","num1","num2","num3","num4","num5","num6","num7","num8","num9","num0","delete","container"];
		
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.showText"],[0],this._Image2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.roomName"],[0],this._BitmapLabel1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.roomName"],[0],this._BitmapLabel1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.roomName"],[0],this.confirm,"visible");
	}
	var _proto = PopupNumberKeyboard.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._BitmapLabel1_i(),this.cancel_i(),this.confirm_i(),this.num1_i(),this.num2_i(),this.num3_i(),this.num4_i(),this.num5_i(),this.num6_i(),this.num7_i(),this.num8_i(),this.num9_i(),this.num0_i(),this.delete_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "number-keyboard-bg";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "input_room";
		t.y = 30;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this._BitmapLabel1 = t;
		t.font = "number_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.y = 25;
		return t;
	};
	_proto.cancel_i = function () {
		var t = new eui.Image();
		this.cancel = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "input_cancel";
		t.x = 60;
		t.y = 30;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Image();
		this.confirm = t;
		t.right = 60;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "input_ok";
		t.y = 30;
		return t;
	};
	_proto.num1_i = function () {
		var t = new eui.Button();
		this.num1 = t;
		t.y = 90;
		t.skinName = PopupNumberKeyboard$Skin90;
		return t;
	};
	_proto.num2_i = function () {
		var t = new eui.Button();
		this.num2 = t;
		t.horizontalCenter = 0;
		t.y = 90;
		t.skinName = PopupNumberKeyboard$Skin91;
		return t;
	};
	_proto.num3_i = function () {
		var t = new eui.Button();
		this.num3 = t;
		t.right = 0;
		t.y = 90;
		t.skinName = PopupNumberKeyboard$Skin92;
		return t;
	};
	_proto.num4_i = function () {
		var t = new eui.Button();
		this.num4 = t;
		t.y = 190;
		t.skinName = PopupNumberKeyboard$Skin93;
		return t;
	};
	_proto.num5_i = function () {
		var t = new eui.Button();
		this.num5 = t;
		t.horizontalCenter = 0;
		t.y = 190;
		t.skinName = PopupNumberKeyboard$Skin94;
		return t;
	};
	_proto.num6_i = function () {
		var t = new eui.Button();
		this.num6 = t;
		t.right = 0;
		t.y = 190;
		t.skinName = PopupNumberKeyboard$Skin95;
		return t;
	};
	_proto.num7_i = function () {
		var t = new eui.Button();
		this.num7 = t;
		t.y = 295;
		t.skinName = PopupNumberKeyboard$Skin96;
		return t;
	};
	_proto.num8_i = function () {
		var t = new eui.Button();
		this.num8 = t;
		t.horizontalCenter = 0;
		t.y = 295;
		t.skinName = PopupNumberKeyboard$Skin97;
		return t;
	};
	_proto.num9_i = function () {
		var t = new eui.Button();
		this.num9 = t;
		t.right = 0;
		t.y = 295;
		t.skinName = PopupNumberKeyboard$Skin98;
		return t;
	};
	_proto.num0_i = function () {
		var t = new eui.Button();
		this.num0 = t;
		t.horizontalCenter = 0;
		t.y = 395;
		t.skinName = PopupNumberKeyboard$Skin99;
		return t;
	};
	_proto.delete_i = function () {
		var t = new eui.Button();
		this.delete = t;
		t.right = 0;
		t.y = 395;
		t.skinName = PopupNumberKeyboard$Skin100;
		return t;
	};
	return PopupNumberKeyboard;
})(eui.Skin);generateEUI.paths['resource/containers/PopupPromptWindow.exml'] = window.skins.PopupPromptWindow = (function (_super) {
	__extends(PopupPromptWindow, _super);
	var PopupPromptWindow$Skin101 = 	(function (_super) {
		__extends(PopupPromptWindow$Skin101, _super);
		function PopupPromptWindow$Skin101() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
			];
		}
		var _proto = PopupPromptWindow$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "auth3";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupPromptWindow$Skin101;
	})(eui.Skin);

	function PopupPromptWindow() {
		_super.call(this);
		this.skinParts = ["overlay","closeButton","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.message"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.isStart"],[0],this._Label2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isStart"],[0],this.closeButton,"visible");
	}
	var _proto = PopupPromptWindow.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new game.PopupWindowWrapper();
		this.container = t;
		t.skinName = "skins.PopupWindowSkin";
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this.closeButton_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.textColor = 0x020202;
		t.width = 400;
		t.y = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "开始本轮鉴宝";
		t.textColor = 0x020202;
		t.y = 100;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 59;
		t.skinName = PopupPromptWindow$Skin101;
		return t;
	};
	return PopupPromptWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupRoleWindow.exml'] = window.skins.PopupRoleWindow = (function (_super) {
	__extends(PopupRoleWindow, _super);
	var PopupRoleWindow$Skin102 = 	(function (_super) {
		__extends(PopupRoleWindow$Skin102, _super);
		function PopupRoleWindow$Skin102() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = PopupRoleWindow$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "cancel";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupRoleWindow$Skin102;
	})(eui.Skin);

	var PopupRoleWindow$Skin103 = 	(function (_super) {
		__extends(PopupRoleWindow$Skin103, _super);
		function PopupRoleWindow$Skin103() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = PopupRoleWindow$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "ok";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupRoleWindow$Skin103;
	})(eui.Skin);

	function PopupRoleWindow() {
		_super.call(this);
		this.skinParts = ["overlay","closeButton","confirmButton","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.role.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.role.res"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.role.skillDescription"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.promptInfo"],[0],this._Label3,"text");
	}
	var _proto = PopupRoleWindow.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.height = 730;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.closeButton_i(),this.confirmButton_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(77,70,462,280);
		t.scaleX = 0.88;
		t.source = "small-dialog-background";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 200;
		t.horizontalCenter = 0;
		t.top = 65;
		t.elementsContent = [this._Label1_i(),this._Image2_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 48;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.lineSpacing = 8;
		t.size = 22;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 450;
		t.y = 240;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		t.y = 350;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 90;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.skinName = PopupRoleWindow$Skin102;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 280;
		t.scaleX = 0.88;
		t.scaleY = 0.88;
		t.skinName = PopupRoleWindow$Skin103;
		return t;
	};
	return PopupRoleWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupRoundWindow.exml'] = window.skins.PopupRoundWindow = (function (_super) {
	__extends(PopupRoundWindow, _super);
	function PopupRoundWindow() {
		_super.call(this);
		this.skinParts = ["overlay","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.roundText"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.ant1"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.ant2"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.ant3"],[0],this._Image6,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.ant4"],[0],this._Image8,"source");
	}
	var _proto = PopupRoundWindow.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new game.PopupWindowWrapper();
		this.container = t;
		t.height = 900;
		t.skinName = "skins.PopupWindowSkin";
		t.elementsContent = [this._Group1_i(),this._Group6_i(),this._Label3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 61;
		t.elementsContent = [this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "本轮宝物";
		t.textColor = 0x000000;
		t.y = 35;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 400;
		t.y = 200;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.width = 180;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.right = 0;
		t.width = 180;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.width = 180;
		t.y = 200;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.right = 0;
		t.width = 180;
		t.y = 200;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 196;
		t.horizontalCenter = 0;
		t.text = "摆好后开始游戏";
		t.textColor = 0x000000;
		return t;
	};
	return PopupRoundWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupVoteRecordWindow.exml'] = window.skins.PopupVoteRecordWindow = (function (_super) {
	__extends(PopupVoteRecordWindow, _super);
	var PopupVoteRecordWindow$Skin104 = 	(function (_super) {
		__extends(PopupVoteRecordWindow$Skin104, _super);
		function PopupVoteRecordWindow$Skin104() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = PopupVoteRecordWindow$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupVoteRecordWindow$Skin104;
	})(eui.Skin);

	function PopupVoteRecordWindow() {
		_super.call(this);
		this.skinParts = ["orderGroup1","orderGroup2","orderGroup3","roundGroup1","roundGroup2","roundGroup3","backButton","navigationBar"];
		
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group4_i(),this._Group8_i(),this.navigationBar_i()];
	}
	var _proto = PopupVoteRecordWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 40;
		t.elementsContent = [this._Label1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "鉴定顺序";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.y = 40;
		t.elementsContent = [this._Label2_i(),this.orderGroup1_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 26;
		t.text = "第一轮";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.orderGroup1_i = function () {
		var t = new eui.DataGroup();
		this.orderGroup1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.width = 790;
		t.x = 100;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 6;
		t.orientation = "rows";
		t.requestedColumnCount = 8;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.y = 100;
		t.elementsContent = [this._Label3_i(),this.orderGroup2_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 26;
		t.text = "第二轮";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.orderGroup2_i = function () {
		var t = new eui.DataGroup();
		this.orderGroup2 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.width = 790;
		t.x = 100;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 6;
		t.orientation = "rows";
		t.requestedColumnCount = 8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.y = 160;
		t.elementsContent = [this._Label4_i(),this.orderGroup3_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 26;
		t.text = "第三轮";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.orderGroup3_i = function () {
		var t = new eui.DataGroup();
		this.orderGroup3 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.verticalCenter = 0;
		t.width = 790;
		t.x = 100;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 6;
		t.orientation = "rows";
		t.requestedColumnCount = 8;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 260;
		t.elementsContent = [this._Label5_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "宝物信息";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.y = 40;
		t.elementsContent = [this._Image2_i(),this.roundGroup1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "round1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roundGroup1_i = function () {
		var t = new eui.DataGroup();
		this.roundGroup1 = t;
		t.verticalCenter = 0;
		t.width = 520;
		t.x = 50;
		t.layout = this._TileLayout4_i();
		return t;
	};
	_proto._TileLayout4_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 15;
		t.orientation = "rows";
		t.requestedColumnCount = 4;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.y = 250;
		t.elementsContent = [this._Image3_i(),this.roundGroup2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "round2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roundGroup2_i = function () {
		var t = new eui.DataGroup();
		this.roundGroup2 = t;
		t.verticalCenter = 0;
		t.width = 520;
		t.x = 50;
		t.layout = this._TileLayout5_i();
		return t;
	};
	_proto._TileLayout5_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 15;
		t.orientation = "rows";
		t.requestedColumnCount = 4;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.y = 460;
		t.elementsContent = [this._Image4_i(),this.roundGroup3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "round3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roundGroup3_i = function () {
		var t = new eui.DataGroup();
		this.roundGroup3 = t;
		t.verticalCenter = 0;
		t.width = 520;
		t.x = 50;
		t.layout = this._TileLayout6_i();
		return t;
	};
	_proto._TileLayout6_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 15;
		t.orientation = "rows";
		t.requestedColumnCount = 4;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this.backButton_i()];
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = PopupVoteRecordWindow$Skin104;
		return t;
	};
	return PopupVoteRecordWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupVoteResultWindow.exml'] = window.skins.PopupVoteResultWindow = (function (_super) {
	__extends(PopupVoteResultWindow, _super);
	function PopupVoteResultWindow() {
		_super.call(this);
		this.skinParts = ["overlay","voteGroup","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.round"],[0],this._Image1,"source");
	}
	var _proto = PopupVoteResultWindow.prototype;

	_proto.overlay_i = function () {
		var t = new game.Shade();
		this.overlay = t;
		return t;
	};
	_proto.container_i = function () {
		var t = new game.PopupWindowWrapper();
		this.container = t;
		t.height = 780;
		t.skinName = "skins.PopupWindowSkin";
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 60;
		t.elementsContent = [this._Label1_i(),this._Group1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "投票结果";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 35;
		t.elementsContent = [this._Image1_i(),this.voteGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.verticalCenter = 0;
		return t;
	};
	_proto.voteGroup_i = function () {
		var t = new eui.DataGroup();
		this.voteGroup = t;
		t.verticalCenter = 0;
		t.x = 50;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 30;
		t.requestedRowCount = 2;
		t.verticalGap = 30;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 160;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "得票第1和第2的宝物会被保护起来";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "公布得票第2的宝物";
		t.textColor = 0x020202;
		t.y = 25;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "若出现平票，则生肖顺序靠前的兽首得票更高";
		t.textColor = 0x020202;
		t.y = 50;
		return t;
	};
	return PopupVoteResultWindow;
})(eui.Skin);generateEUI.paths['resource/containers/RankWindow.exml'] = window.skins.RankWindow = (function (_super) {
	__extends(RankWindow, _super);
	var RankWindow$Skin105 = 	(function (_super) {
		__extends(RankWindow$Skin105, _super);
		function RankWindow$Skin105() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = RankWindow$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return RankWindow$Skin105;
	})(eui.Skin);

	function RankWindow() {
		_super.call(this);
		this.skinParts = ["rateTimeFilter","gameTypeFilter","roleFilter","otherFilter","headGroup","rankList","contentScroller","rateTimeList","gameTypeList","roleList","otherList","backButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.navigationBar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.rateTime"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.gameType"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.role"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.other"],[0],this._Label5,"text");
	}
	var _proto = RankWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 180;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i(),this._Group1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "排行";
		t.textColor = 0x020202;
		t.y = 30;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 620;
		t.y = 75;
		t.elementsContent = [this.rateTimeFilter_i(),this.gameTypeFilter_i(),this.roleFilter_i(),this.otherFilter_i()];
		return t;
	};
	_proto.rateTimeFilter_i = function () {
		var t = new eui.Group();
		this.rateTimeFilter = t;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 140;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 1;
		t.right = 1;
		t.source = "club_box_1";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.left = 0;
		t.right = 30;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gameTypeFilter_i = function () {
		var t = new eui.Group();
		this.gameTypeFilter = t;
		t.verticalCenter = 0;
		t.width = 140;
		t.x = 160;
		t.elementsContent = [this._Image3_i(),this._Label3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 1;
		t.right = 1;
		t.source = "club_box_1";
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.left = 0;
		t.right = 30;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.roleFilter_i = function () {
		var t = new eui.Group();
		this.roleFilter = t;
		t.verticalCenter = 0;
		t.width = 140;
		t.x = 320;
		t.elementsContent = [this._Image4_i(),this._Label4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 1;
		t.right = 1;
		t.source = "club_box_1";
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.left = 0;
		t.right = 30;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.otherFilter_i = function () {
		var t = new eui.Group();
		this.otherFilter = t;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 140;
		t.elementsContent = [this._Image5_i(),this._Label5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 1;
		t.right = 1;
		t.source = "club_box_1";
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.left = 0;
		t.right = 30;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.anchorOffsetY = 0;
		t.height = 790;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.width = 600;
		t.y = 180;
		t.viewport = this.rankList_i();
		return t;
	};
	_proto.rankList_i = function () {
		var t = new eui.List();
		this.rankList = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.left = 10;
		t.y = 150;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.maxHeight = 350;
		t.scrollPolicyH = "off";
		t.viewport = this.rateTimeList_i();
		return t;
	};
	_proto.rateTimeList_i = function () {
		var t = new eui.List();
		this.rateTimeList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.width = 140;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 140;
		t.horizontalGap = 0;
		t.orientation = "rows";
		t.requestedColumnCount = 1;
		t.verticalGap = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 170;
		t.y = 150;
		t.elementsContent = [this._Scroller2_i()];
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.maxHeight = 350;
		t.scrollPolicyH = "off";
		t.viewport = this.gameTypeList_i();
		return t;
	};
	_proto.gameTypeList_i = function () {
		var t = new eui.List();
		this.gameTypeList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.width = 140;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 140;
		t.horizontalGap = 0;
		t.orientation = "rows";
		t.requestedColumnCount = 1;
		t.verticalGap = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 330;
		t.y = 150;
		t.elementsContent = [this._Scroller3_i()];
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.maxHeight = 350;
		t.scrollPolicyH = "off";
		t.viewport = this.roleList_i();
		return t;
	};
	_proto.roleList_i = function () {
		var t = new eui.List();
		this.roleList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.width = 140;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 140;
		t.horizontalGap = 0;
		t.orientation = "rows";
		t.requestedColumnCount = 1;
		t.verticalGap = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.right = 10;
		t.y = 150;
		t.elementsContent = [this._Scroller4_i()];
		return t;
	};
	_proto._Scroller4_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.maxHeight = 350;
		t.scrollPolicyH = "off";
		t.viewport = this.otherList_i();
		return t;
	};
	_proto.otherList_i = function () {
		var t = new eui.List();
		this.otherList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.width = 140;
		t.layout = this._TileLayout4_i();
		return t;
	};
	_proto._TileLayout4_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 140;
		t.horizontalGap = 0;
		t.orientation = "rows";
		t.requestedColumnCount = 1;
		t.verticalGap = 0;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this.backButton_i()];
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = RankWindow$Skin105;
		return t;
	};
	return RankWindow;
})(eui.Skin);generateEUI.paths['resource/containers/ResultWindow.exml'] = window.skins.ResultWindow = (function (_super) {
	__extends(ResultWindow, _super);
	var ResultWindow$Skin106 = 	(function (_super) {
		__extends(ResultWindow$Skin106, _super);
		function ResultWindow$Skin106() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = ResultWindow$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "share2";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return ResultWindow$Skin106;
	})(eui.Skin);

	var ResultWindow$Skin107 = 	(function (_super) {
		__extends(ResultWindow$Skin107, _super);
		function ResultWindow$Skin107() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = ResultWindow$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "ok3";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return ResultWindow$Skin107;
	})(eui.Skin);

	function ResultWindow() {
		_super.call(this);
		this.skinParts = ["borderBg","roundGroup1","roundGroup2","roundGroup3","voteGroup","totalScoreGroup","contentScroller","shareButton","confirmButton","navigationBar"];
		
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.borderBg_i(),this.contentScroller_i(),this.navigationBar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.campRes"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.winResult"],[0],this._Image6,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.winRes"],[0],this._Image8,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.findAntiqueScore"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.roleXu.url"],[0],this._Image12,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.roleXu.color"],[0],this._Image14,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.roleLao.url"],[0],this._Image15,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.roleLao.color"],[0],this._Image17,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.roleFang.url"],[0],this._Image18,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.roleFang.color"],[0],this._Image20,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.showFindPeople"],[0],this._Group11,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.showFindPeople"],[0],this._Group20,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.voteLao.voterUrl"],[0],this._Image21,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.voteLao.voterColor"],[0],this._Image23,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.voteLao.votedUrl"],[0],this._Image25,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.voteLao.votedColor"],[0],this._Image27,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.voteLao.votedName"],[0],this._Label9,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.voteYao.voterUrl"],[0],this._Image28,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.voteYao.voterColor"],[0],this._Image30,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.voteYao.votedUrl"],[0],this._Image32,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.voteYao.votedColor"],[0],this._Image34,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.voteYao.votedName"],[0],this._Label12,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.showFindPeople"],[0],this._Group21,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.findPeopleScore"],[0],this._Label14,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.totalScore"],[0],this._Label16,"text");
	}
	var _proto = ResultWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.borderBg_i = function () {
		var t = new eui.Image();
		this.borderBg = t;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(90,160,540,960);
		t.source = "border_red";
		t.y = -40;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.y = 40;
		t.viewport = this._Group22_i();
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.width = 560;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group10_i(),this._Group11_i(),this._Group20_i(),this._Group21_i(),this.totalScoreGroup_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 40;
		t.elementsContent = [this._Group1_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "jzj";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "true2";
		t.x = 75;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.x = 180;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "teasure12";
		t.x = 180;
		t.y = 47;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.horizontalCenter = 0;
		t.y = 110;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "meihua";
		t.y = 200;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.horizontalCenter = 0;
		t.y = 260;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 5;
		t.y = 730;
		t.elementsContent = [this._Image9_i(),this.roundGroup1_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "round1";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.roundGroup1_i = function () {
		var t = new eui.DataGroup();
		this.roundGroup1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 520;
		t.x = 50;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.orientation = "rows";
		t.requestedColumnCount = 4;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.left = 5;
		t.y = 900;
		t.elementsContent = [this._Image10_i(),this.roundGroup2_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "round2";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.roundGroup2_i = function () {
		var t = new eui.DataGroup();
		this.roundGroup2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 520;
		t.x = 50;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.orientation = "rows";
		t.requestedColumnCount = 4;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.left = 5;
		t.y = 1070;
		t.elementsContent = [this._Image11_i(),this.roundGroup3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "round3";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.roundGroup3_i = function () {
		var t = new eui.DataGroup();
		this.roundGroup3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = 0;
		t.width = 520;
		t.x = 50;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.orientation = "rows";
		t.requestedColumnCount = 4;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 1250;
		t.elementsContent = [this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "鉴宝部分许愿方得分";
		t.textColor = 0x050505;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.textColor = 0xa50606;
		t.x = 315;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 1310;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.elementsContent = [this._Label3_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "许愿";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		this._Image12 = t;
		t.height = 135;
		t.width = 135;
		t.y = 50;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		t.y = 50;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		this._Image14 = t;
		t.x = -20;
		t.y = 35;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 170;
		t.elementsContent = [this._Label4_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "老朝奉";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		this._Image15 = t;
		t.height = 135;
		t.width = 135;
		t.y = 50;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		t.y = 50;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		this._Image17 = t;
		t.x = -20;
		t.y = 35;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 340;
		t.elementsContent = [this._Label5_i(),this._Image18_i(),this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "方震";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		this._Image18 = t;
		t.height = 135;
		t.width = 135;
		t.y = 50;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		t.y = 50;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		this._Image20 = t;
		t.x = -20;
		t.y = 35;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		this._Group11 = t;
		t.horizontalCenter = 0;
		t.y = 1510;
		t.elementsContent = [this._Label6_i(),this.voteGroup_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "许愿方投票结果";
		t.textColor = 0x050505;
		return t;
	};
	_proto.voteGroup_i = function () {
		var t = new eui.DataGroup();
		this.voteGroup = t;
		t.y = 30;
		t.layout = this._TileLayout4_i();
		return t;
	};
	_proto._TileLayout4_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 15;
		t.orientation = "columns";
		t.requestedColumnCount = 2;
		t.verticalGap = 10;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		this._Group20 = t;
		t.horizontalCenter = 0;
		t.y = 2020;
		t.elementsContent = [this._Group15_i(),this._Group19_i()];
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.elementsContent = [this._Label7_i(),this._Group14_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "老朝奉找许愿";
		t.textColor = 0x050505;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.y = 40;
		t.elementsContent = [this._Group12_i(),this._Image24_i(),this._Group13_i()];
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Label8_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		this._Image21 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		this._Image23 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bottom = -40;
		t.horizontalCenter = 0;
		t.text = "老朝奉";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "vote1";
		t.verticalCenter = 0;
		t.x = 140;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 182;
		t.elementsContent = [this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Label9_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		this._Image25 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		this._Image27 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.bottom = -40;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.elementsContent = [this._Label10_i(),this._Group18_i()];
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "药不然找方震";
		t.textColor = 0x050505;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.y = 40;
		t.elementsContent = [this._Group16_i(),this._Image31_i(),this._Group17_i()];
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Label11_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		this._Image28 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		this._Image30 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bottom = -40;
		t.horizontalCenter = 0;
		t.text = "药不然";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "vote1";
		t.verticalCenter = 0;
		t.x = 140;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 182;
		t.elementsContent = [this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Label12_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		this._Image32 = t;
		t.height = 135;
		t.width = 135;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.height = 135;
		t.source = "head_bg";
		t.width = 135;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		this._Image34 = t;
		t.x = -20;
		t.y = -15;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		this._Label12 = t;
		t.bottom = -40;
		t.horizontalCenter = 0;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		this._Group21 = t;
		t.horizontalCenter = 0;
		t.y = 2210;
		t.elementsContent = [this._Label13_i(),this._Label14_i()];
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.text = "鉴人部分许愿方得分";
		t.textColor = 0x050505;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		this._Label14 = t;
		t.textColor = 0xa50606;
		t.x = 315;
		return t;
	};
	_proto.totalScoreGroup_i = function () {
		var t = new eui.Group();
		this.totalScoreGroup = t;
		t.horizontalCenter = 0;
		t.y = 2320;
		t.elementsContent = [this._Label15_i(),this._Label16_i(),this._Label17_i()];
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "许愿方总分";
		t.textColor = 0x050505;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		this._Label16 = t;
		t.textColor = 0xa50606;
		t.x = 220;
		t.y = 1;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.y = 150;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this.shareButton_i(),this.confirmButton_i()];
		return t;
	};
	_proto.shareButton_i = function () {
		var t = new eui.Button();
		this.shareButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 70;
		t.skinName = ResultWindow$Skin106;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 70;
		t.skinName = ResultWindow$Skin107;
		return t;
	};
	return ResultWindow;
})(eui.Skin);generateEUI.paths['resource/containers/SettingWindow.exml'] = window.skins.SettingWindow = (function (_super) {
	__extends(SettingWindow, _super);
	var SettingWindow$Skin108 = 	(function (_super) {
		__extends(SettingWindow$Skin108, _super);
		function SettingWindow$Skin108() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = SettingWindow$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return SettingWindow$Skin108;
	})(eui.Skin);

	function SettingWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","shareButton","aboutButton","backButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this._Group1_i(),this.navigationBar_i()];
	}
	var _proto = SettingWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "关于";
		t.textColor = 0x020202;
		t.y = 30;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image2_i(),this.shareButton_i(),this.aboutButton_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "setting2";
		t.width = 640;
		return t;
	};
	_proto.shareButton_i = function () {
		var t = new eui.Button();
		this.shareButton = t;
		t.alpha = 0;
		t.height = 235;
		t.width = 290;
		t.x = 20;
		t.y = 370;
		return t;
	};
	_proto.aboutButton_i = function () {
		var t = new eui.Button();
		this.aboutButton = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 235;
		t.width = 290;
		t.x = 330;
		t.y = 370;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this.backButton_i()];
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = SettingWindow$Skin108;
		return t;
	};
	return SettingWindow;
})(eui.Skin);generateEUI.paths['resource/containers/StartScreen.exml'] = window.skins.StartScreen = (function (_super) {
	__extends(StartScreen, _super);
	var StartScreen$Skin109 = 	(function (_super) {
		__extends(StartScreen$Skin109, _super);
		function StartScreen$Skin109() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-create";
			return t;
		};
		return StartScreen$Skin109;
	})(eui.Skin);

	var StartScreen$Skin110 = 	(function (_super) {
		__extends(StartScreen$Skin110, _super);
		function StartScreen$Skin110() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-join";
			return t;
		};
		return StartScreen$Skin110;
	})(eui.Skin);

	var StartScreen$Skin111 = 	(function (_super) {
		__extends(StartScreen$Skin111, _super);
		function StartScreen$Skin111() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-game";
			return t;
		};
		return StartScreen$Skin111;
	})(eui.Skin);

	var StartScreen$Skin112 = 	(function (_super) {
		__extends(StartScreen$Skin112, _super);
		function StartScreen$Skin112() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-view";
			return t;
		};
		return StartScreen$Skin112;
	})(eui.Skin);

	var StartScreen$Skin113 = 	(function (_super) {
		__extends(StartScreen$Skin113, _super);
		function StartScreen$Skin113() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = StartScreen$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-board";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.horizontalCenter = 0;
			t.text = "公告";
			t.textColor = 0x000000;
			t.y = 70;
			return t;
		};
		return StartScreen$Skin113;
	})(eui.Skin);

	var StartScreen$Skin114 = 	(function (_super) {
		__extends(StartScreen$Skin114, _super);
		function StartScreen$Skin114() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = StartScreen$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-rank";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.horizontalCenter = 0;
			t.text = "排行";
			t.textColor = 0x000000;
			t.y = 130;
			return t;
		};
		return StartScreen$Skin114;
	})(eui.Skin);

	var StartScreen$Skin115 = 	(function (_super) {
		__extends(StartScreen$Skin115, _super);
		function StartScreen$Skin115() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = StartScreen$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-game-bar";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.horizontalCenter = 0;
			t.text = "桌游吧";
			t.textColor = 0x000000;
			t.y = 130;
			return t;
		};
		return StartScreen$Skin115;
	})(eui.Skin);

	var StartScreen$Skin116 = 	(function (_super) {
		__extends(StartScreen$Skin116, _super);
		function StartScreen$Skin116() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = StartScreen$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-settings";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.horizontalCenter = 0;
			t.text = "关于";
			t.textColor = 0x000000;
			t.y = 70;
			return t;
		};
		return StartScreen$Skin116;
	})(eui.Skin);

	function StartScreen() {
		_super.call(this);
		this.skinParts = ["startBackground","txtOpenId","btnChangeOpenId","headGroup","btnCreateRoom","btnJoinRoom","btnTanbao","btnViewMore","contentScroller","btnNotice","btnRank","btnGuide","btnSetting","navigationBar"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.startBackground_i(),this.headGroup_i(),this.contentScroller_i(),this.navigationBar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.isDebugPlatform"],[0],this._Group1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isWxPlatform"],[0],this._Group2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.avatarUrl"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.nickName"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.isNativePlatform"],[0],this._Group3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.avatarUrl"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.avatarUrl"],[0],this._Image3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.nickName"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.nickName"],[0],this._Label2,"visible");
	}
	var _proto = StartScreen.prototype;

	_proto.startBackground_i = function () {
		var t = new eui.Image();
		this.startBackground = t;
		t.bottom = -2;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 2;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 220;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "userinfo-background";
		t.verticalCenter = 0;
		t.width = 640;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.txtOpenId_i(),this.btnChangeOpenId_i()];
		return t;
	};
	_proto.txtOpenId_i = function () {
		var t = new eui.TextInput();
		this.txtOpenId = t;
		t.left = 0;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnChangeOpenId_i = function () {
		var t = new eui.Button();
		this.btnChangeOpenId = t;
		t.label = "更换测试Id";
		t.x = 325;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 120;
		t.verticalCenter = 0;
		t.width = 120;
		t.x = 75;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.size = 70;
		t.textColor = 0x050505;
		t.verticalCenter = 0;
		t.width = 390;
		t.x = 240;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 120;
		t.verticalCenter = 0;
		t.width = 120;
		t.x = 75;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.size = 70;
		t.textColor = 0x050505;
		t.verticalCenter = 0;
		t.x = 240;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = -15;
		t.source = "navigation-bar";
		t.percentWidth = 100;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.horizontalCenter = 0;
		t.y = 240;
		t.viewport = this._Group7_i();
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 350;
		t.horizontalCenter = 0;
		t.width = 620;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.btnCreateRoom_i(),this.btnJoinRoom_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "assistant-bg";
		t.top = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "title-assistant";
		t.y = 60;
		return t;
	};
	_proto.btnCreateRoom_i = function () {
		var t = new eui.Button();
		this.btnCreateRoom = t;
		t.left = 30;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.y = 160;
		t.skinName = StartScreen$Skin109;
		return t;
	};
	_proto.btnJoinRoom_i = function () {
		var t = new eui.Button();
		this.btnJoinRoom = t;
		t.right = 30;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.y = 160;
		t.skinName = StartScreen$Skin110;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 350;
		t.width = 620;
		t.y = 375;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.btnTanbao_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "game-bg";
		t.top = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "title-tanbao";
		t.y = 60;
		return t;
	};
	_proto.btnTanbao_i = function () {
		var t = new eui.Button();
		this.btnTanbao = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 180;
		t.skinName = StartScreen$Skin111;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 350;
		t.width = 620;
		t.y = 750;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.btnViewMore_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "game-bg";
		t.top = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "title-more";
		t.y = 60;
		return t;
	};
	_proto.btnViewMore_i = function () {
		var t = new eui.Button();
		this.btnViewMore = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 180;
		t.skinName = StartScreen$Skin112;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 170;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this._Image11_i(),this.btnNotice_i(),this.btnRank_i(),this.btnGuide_i(),this.btnSetting_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "navigation-bar";
		t.top = -20;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnNotice_i = function () {
		var t = new eui.Button();
		this.btnNotice = t;
		t.left = 17;
		t.verticalCenter = 0;
		t.skinName = StartScreen$Skin113;
		return t;
	};
	_proto.btnRank_i = function () {
		var t = new eui.Button();
		this.btnRank = t;
		t.verticalCenter = 0;
		t.x = 180;
		t.skinName = StartScreen$Skin114;
		return t;
	};
	_proto.btnGuide_i = function () {
		var t = new eui.Button();
		this.btnGuide = t;
		t.verticalCenter = 0;
		t.x = 380;
		t.skinName = StartScreen$Skin115;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new eui.Button();
		this.btnSetting = t;
		t.right = 20;
		t.verticalCenter = 0;
		t.skinName = StartScreen$Skin116;
		return t;
	};
	return StartScreen;
})(eui.Skin);generateEUI.paths['resource/containers/UserInfoWindow.exml'] = window.skins.UserInfoWindow = (function (_super) {
	__extends(UserInfoWindow, _super);
	var UserInfoWindow$Skin117 = 	(function (_super) {
		__extends(UserInfoWindow$Skin117, _super);
		function UserInfoWindow$Skin117() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
			];
		}
		var _proto = UserInfoWindow$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return UserInfoWindow$Skin117;
	})(eui.Skin);

	function UserInfoWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","content","backButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.content_i(),this.navigationBar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.avatarUrl"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.nickName"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.winPlay"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.failPlay"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.totalPlay"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.totalWinRate"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.gameWinRate6"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.gameWinRate7"],[0],this._Label8,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.gameWinRate8"],[0],this._Label9,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.campXuWinRate"],[0],this._Label10,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.campLaoWinRate"],[0],this._Label11,"text");
	}
	var _proto = UserInfoWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start-background";
		t.top = 0;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 240;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i(),this._Group1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "我的信息";
		t.textColor = 0x020202;
		t.y = 25;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 170;
		t.horizontalCenter = 0;
		t.y = 70;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 160;
		t.horizontalCenter = 0;
		t.source = "userinfo-background";
		t.verticalCenter = 0;
		t.width = 620;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 110;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 75;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.size = 60;
		t.textColor = 0x050505;
		t.verticalCenter = 0;
		t.x = 240;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.anchorOffsetY = 0;
		t.height = 700;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 245;
		t.elementsContent = [this._Group8_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "meihua";
		t.y = 50;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "sep";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "score2";
		t.y = 10;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.bold = true;
		t.horizontalCenter = -105;
		t.y = 45;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.bold = true;
		t.horizontalCenter = 105;
		t.y = 45;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.textColor = 0x020202;
		t.y = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.y = 150;
		t.elementsContent = [this._Image7_i(),this._Label6_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "win_rate";
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.horizontalCenter = 0;
		t.y = 60;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 154;
		t.y = 150;
		t.elementsContent = [this._Image8_i(),this._Label7_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "room6";
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.horizontalCenter = 0;
		t.y = 60;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.left = 308;
		t.y = 150;
		t.elementsContent = [this._Image9_i(),this._Label8_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "room7";
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.horizontalCenter = 0;
		t.y = 60;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.right = 0;
		t.y = 150;
		t.elementsContent = [this._Image10_i(),this._Label9_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "room8";
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.horizontalCenter = 0;
		t.y = 60;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.left = 60;
		t.y = 350;
		t.elementsContent = [this._Image11_i(),this._Label10_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "team_xu_2";
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		this._Label10 = t;
		t.horizontalCenter = 0;
		t.y = 55;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.right = 60;
		t.y = 350;
		t.elementsContent = [this._Image12_i(),this._Label11_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "team_lao_2";
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		this._Label11 = t;
		t.horizontalCenter = 0;
		t.y = 55;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 135;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this.backButton_i()];
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 630;
		t.skinName = UserInfoWindow$Skin117;
		return t;
	};
	return UserInfoWindow;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);