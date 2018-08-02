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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/components/RankListItemRenderer.exml'] = window.skins.RankListItemRenderer = (function (_super) {
	__extends(RankListItemRenderer, _super);
	function RankListItemRenderer() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group2_i(),this._Image4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.rankRes"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.rankRes"],[0],this._Image1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isNotTopThree"],[0],this._Group1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.data.key"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.score"],[0],this._Label3,"text");
	}
	var _proto = RankListItemRenderer.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 25;
		t.width = 630;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image3_i(),this._Label2_i(),this._Label3_i()];
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
		t.source = "rank_bg";
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
		t.height = 110;
		t.source = "btn-share";
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 120;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.size = 45;
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 250;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.right = 0;
		t.size = 45;
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
})(eui.Skin);generateEUI.paths['resource/containers/AboutWindow.exml'] = window.skins.AboutWindow = (function (_super) {
	__extends(AboutWindow, _super);
	function AboutWindow() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.imgHeight"],[0],this._Image1,"height");
	}
	var _proto = AboutWindow.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "about";
		t.width = 640;
		return t;
	};
	return AboutWindow;
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
})(eui.Skin);generateEUI.paths['resource/containers/GameScreen.exml'] = window.skins.GameScreen = (function (_super) {
	__extends(GameScreen, _super);
	var GameScreen$Skin1 = 	(function (_super) {
		__extends(GameScreen$Skin1, _super);
		function GameScreen$Skin1() {
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
		var _proto = GameScreen$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "back_2";
			t.verticalCenter = 0;
			return t;
		};
		return GameScreen$Skin1;
	})(eui.Skin);

	var GameScreen$Skin2 = 	(function (_super) {
		__extends(GameScreen$Skin2, _super);
		function GameScreen$Skin2() {
			_super.call(this);
			this.skinParts = ["content"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.content_i()];
		}
		var _proto = GameScreen$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "avatar-background";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "color-red";
			return t;
		};
		_proto.content_i = function () {
			var t = new eui.Image();
			this.content = t;
			t.x = 50;
			t.y = 50;
			return t;
		};
		return GameScreen$Skin2;
	})(eui.Skin);

	var GameScreen$Skin3 = 	(function (_super) {
		__extends(GameScreen$Skin3, _super);
		function GameScreen$Skin3() {
			_super.call(this);
			this.skinParts = ["content"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.content_i()];
		}
		var _proto = GameScreen$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "avatar-background";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "color-red";
			return t;
		};
		_proto.content_i = function () {
			var t = new eui.Image();
			this.content = t;
			t.x = 50;
			t.y = 50;
			return t;
		};
		return GameScreen$Skin3;
	})(eui.Skin);

	var GameScreen$Skin4 = 	(function (_super) {
		__extends(GameScreen$Skin4, _super);
		function GameScreen$Skin4() {
			_super.call(this);
			this.skinParts = ["content"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.content_i()];
		}
		var _proto = GameScreen$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "avatar-background";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "color-red";
			return t;
		};
		_proto.content_i = function () {
			var t = new eui.Image();
			this.content = t;
			t.x = 50;
			t.y = 50;
			return t;
		};
		return GameScreen$Skin4;
	})(eui.Skin);

	var GameScreen$Skin5 = 	(function (_super) {
		__extends(GameScreen$Skin5, _super);
		function GameScreen$Skin5() {
			_super.call(this);
			this.skinParts = ["content"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.content_i()];
		}
		var _proto = GameScreen$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "avatar-background";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "color-red";
			return t;
		};
		_proto.content_i = function () {
			var t = new eui.Image();
			this.content = t;
			t.x = 50;
			t.y = 50;
			return t;
		};
		return GameScreen$Skin5;
	})(eui.Skin);

	var GameScreen$Skin6 = 	(function (_super) {
		__extends(GameScreen$Skin6, _super);
		function GameScreen$Skin6() {
			_super.call(this);
			this.skinParts = ["content"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.content_i()];
		}
		var _proto = GameScreen$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "avatar-background";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "color-red";
			return t;
		};
		_proto.content_i = function () {
			var t = new eui.Image();
			this.content = t;
			t.x = 50;
			t.y = 50;
			return t;
		};
		return GameScreen$Skin6;
	})(eui.Skin);

	var GameScreen$Skin7 = 	(function (_super) {
		__extends(GameScreen$Skin7, _super);
		function GameScreen$Skin7() {
			_super.call(this);
			this.skinParts = ["content"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.content_i()];
		}
		var _proto = GameScreen$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "avatar-background";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "color-red";
			return t;
		};
		_proto.content_i = function () {
			var t = new eui.Image();
			this.content = t;
			t.x = 50;
			t.y = 50;
			return t;
		};
		return GameScreen$Skin7;
	})(eui.Skin);

	var GameScreen$Skin8 = 	(function (_super) {
		__extends(GameScreen$Skin8, _super);
		function GameScreen$Skin8() {
			_super.call(this);
			this.skinParts = ["content"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.content_i()];
		}
		var _proto = GameScreen$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "avatar-background";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "color-red";
			return t;
		};
		_proto.content_i = function () {
			var t = new eui.Image();
			this.content = t;
			t.x = 50;
			t.y = 50;
			return t;
		};
		return GameScreen$Skin8;
	})(eui.Skin);

	var GameScreen$Skin9 = 	(function (_super) {
		__extends(GameScreen$Skin9, _super);
		function GameScreen$Skin9() {
			_super.call(this);
			this.skinParts = ["content"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.content_i()];
		}
		var _proto = GameScreen$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "avatar-background";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "color-red";
			return t;
		};
		_proto.content_i = function () {
			var t = new eui.Image();
			this.content = t;
			t.x = 50;
			t.y = 50;
			return t;
		};
		return GameScreen$Skin9;
	})(eui.Skin);

	var GameScreen$Skin10 = 	(function (_super) {
		__extends(GameScreen$Skin10, _super);
		function GameScreen$Skin10() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-1-players-enough";
			return t;
		};
		return GameScreen$Skin10;
	})(eui.Skin);

	var GameScreen$Skin11 = 	(function (_super) {
		__extends(GameScreen$Skin11, _super);
		function GameScreen$Skin11() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-2-master-confirm";
			return t;
		};
		return GameScreen$Skin11;
	})(eui.Skin);

	var GameScreen$Skin12 = 	(function (_super) {
		__extends(GameScreen$Skin12, _super);
		function GameScreen$Skin12() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-3-set-identity";
			return t;
		};
		return GameScreen$Skin12;
	})(eui.Skin);

	var GameScreen$Skin13 = 	(function (_super) {
		__extends(GameScreen$Skin13, _super);
		function GameScreen$Skin13() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-1-players-enough";
			return t;
		};
		return GameScreen$Skin13;
	})(eui.Skin);

	var GameScreen$Skin14 = 	(function (_super) {
		__extends(GameScreen$Skin14, _super);
		function GameScreen$Skin14() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "enter-info";
			return t;
		};
		return GameScreen$Skin14;
	})(eui.Skin);

	var GameScreen$Skin15 = 	(function (_super) {
		__extends(GameScreen$Skin15, _super);
		function GameScreen$Skin15() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = GameScreen$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "wait-3-set-identity";
			return t;
		};
		return GameScreen$Skin15;
	})(eui.Skin);

	function GameScreen() {
		_super.call(this);
		this.skinParts = ["gameBackground","quitButton","btnjs1","btnjs2","btnjs3","btnjs4","btnjs5","btnjs6","btnjs7","btnjs8","shunwei1","shunwei2","shunwei3","shunwei4","shunwei5","shunwei6","shunwei7","shunwei8","Anim1","Anim2","Anim3","Anim4","btnSeat1","btnSeat2","btnSeat3","btnSeat4","btnSeat5","btnSeat6","btnSeat7","btnSeat8","startjs","startgame","navigationBar"];
		
		this.width = 640;
		this.elementsContent = [this.gameBackground_i(),this._Group2_i(),this._Group3_i(),this._Group24_i(),this._Group25_i(),this.navigationBar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.roomName"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.currentPlayers"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.maxPlayers"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.isNormalClient"],[0],this._Group26,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isWaiting"],[0],this._Button1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isAllReady"],[0],this._Button2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isBindingIdentity"],[0],this._Button3,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isMasterClient"],[0],this._Group27,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isWaiting"],[0],this._Button4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isAllReady"],[0],this._Button5,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.isBindingIdentity"],[0],this._Button6,"visible");
	}
	var _proto = GameScreen.prototype;

	_proto.gameBackground_i = function () {
		var t = new eui.Image();
		this.gameBackground = t;
		t.height = 1138;
		t.source = "seat-background";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.quitButton_i(),this._Label1_i(),this._Group1_i()];
		return t;
	};
	_proto.quitButton_i = function () {
		var t = new eui.Button();
		this.quitButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = GameScreen$Skin1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.textColor = 0x000000;
		t.x = 60;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 200;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "/";
		t.textColor = 0x000000;
		t.x = 101;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.textColor = 0x000000;
		t.x = 187;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 540;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 600;
		t.y = 50;
		t.elementsContent = [this._Image1_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "game-init-background";
		t.percentWidth = 100;
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
		t.size = 45;
		t.text = "点击对应颜色的座位\n入座或换座\n选好座位后等待房主开局";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 72.5;
		t.y = 244.5;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.height = 540;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 50;
		t.elementsContent = [this._Image2_i(),this._Group13_i(),this._Group15_i(),this._Group23_i(),this.btnjs1_i(),this.btnjs2_i(),this.btnjs3_i(),this.btnjs4_i(),this.btnjs5_i(),this.btnjs6_i(),this.btnjs7_i(),this.btnjs8_i(),this.shunwei1_i(),this.shunwei2_i(),this.shunwei3_i(),this.shunwei4_i(),this.shunwei5_i(),this.shunwei6_i(),this.shunwei7_i(),this.shunwei8_i(),this.Anim1_i(),this.Anim2_i(),this.Anim3_i(),this.Anim4_i()];
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
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.elementsContent = [this._Label7_i(),this._Label8_i(),this._Group12_i()];
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
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 60;
		t.elementsContent = [this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.width = 150;
		t.elementsContent = [this._Image3_i(),this._Label9_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "role1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "许愿";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.width = 150;
		t.x = 150;
		t.elementsContent = [this._Image4_i(),this._Label10_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "role2";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "方震";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.width = 150;
		t.x = 300;
		t.elementsContent = [this._Image5_i(),this._Label11_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "role3";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "姬云浮";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.width = 150;
		t.x = 450;
		t.elementsContent = [this._Image6_i(),this._Label12_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "role4-5";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "黄烟烟";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.width = 150;
		t.y = 220;
		t.elementsContent = [this._Image7_i(),this._Label13_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "role4-5";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "木户加奈";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.width = 150;
		t.x = 150;
		t.y = 220;
		t.elementsContent = [this._Image8_i(),this._Label14_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "role6";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "老朝奉";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.width = 150;
		t.x = 300;
		t.y = 220;
		t.elementsContent = [this._Image9_i(),this._Label15_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "role7";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "药不然";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.width = 150;
		t.x = 450;
		t.y = 220;
		t.elementsContent = [this._Image10_i(),this._Label16_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "role8";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "郑国渠";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.elementsContent = [this._Label17_i(),this._Group14_i()];
		return t;
	};
	_proto._Label17_i = function () {
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
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 360;
		t.elementsContent = [this._Label18_i(),this._Image11_i(),this._Label19_i()];
		return t;
	};
	_proto._Label18_i = function () {
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
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "auth2";
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto._Label19_i = function () {
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
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label20_i(),this._Group16_i(),this._Group17_i(),this._Group22_i()];
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "第一轮";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 40;
		t.elementsContent = [this._Label21_i(),this._Label22_i(),this._Label23_i()];
		return t;
	};
	_proto._Label21_i = function () {
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
	_proto._Label22_i = function () {
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
	_proto._Label23_i = function () {
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
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 80;
		t.elementsContent = [this._Label24_i(),this._Image12_i(),this._Label25_i()];
		return t;
	};
	_proto._Label24_i = function () {
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
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "auth2";
		t.verticalCenter = 0;
		t.x = 55;
		return t;
	};
	_proto._Label25_i = function () {
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
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 434;
		t.y = 150;
		t.elementsContent = [this._Group18_i(),this._Group19_i(),this._Group20_i(),this._Group21_i()];
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Label26_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "bg2";
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Label27_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "bg2";
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.y = 200;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this._Label28_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "bg2";
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 250;
		t.y = 200;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this._Label29_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "bg2";
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 175;
		return t;
	};
	_proto.btnjs1_i = function () {
		var t = new eui.Button();
		this.btnjs1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 60;
		t.y = 100;
		return t;
	};
	_proto.btnjs2_i = function () {
		var t = new eui.Button();
		this.btnjs2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.skinName = "skins.ButtonSkin";
		t.width = 100;
		t.x = 200;
		t.y = 100;
		return t;
	};
	_proto.btnjs3_i = function () {
		var t = new eui.Button();
		this.btnjs3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 340;
		t.y = 100;
		return t;
	};
	_proto.btnjs4_i = function () {
		var t = new eui.Button();
		this.btnjs4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 480;
		t.y = 100;
		return t;
	};
	_proto.btnjs5_i = function () {
		var t = new eui.Button();
		this.btnjs5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 60;
		t.y = 350;
		return t;
	};
	_proto.btnjs6_i = function () {
		var t = new eui.Button();
		this.btnjs6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 200;
		t.y = 350;
		return t;
	};
	_proto.btnjs7_i = function () {
		var t = new eui.Button();
		this.btnjs7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 340;
		t.y = 350;
		return t;
	};
	_proto.btnjs8_i = function () {
		var t = new eui.Button();
		this.btnjs8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 480;
		t.y = 350;
		return t;
	};
	_proto.shunwei1_i = function () {
		var t = new eui.Button();
		this.shunwei1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 70;
		t.y = 110;
		return t;
	};
	_proto.shunwei2_i = function () {
		var t = new eui.Button();
		this.shunwei2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.skinName = "skins.ButtonSkin";
		t.width = 100;
		t.x = 210;
		t.y = 110;
		return t;
	};
	_proto.shunwei3_i = function () {
		var t = new eui.Button();
		this.shunwei3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 350;
		t.y = 110;
		return t;
	};
	_proto.shunwei4_i = function () {
		var t = new eui.Button();
		this.shunwei4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 490;
		t.y = 110;
		return t;
	};
	_proto.shunwei5_i = function () {
		var t = new eui.Button();
		this.shunwei5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 70;
		t.y = 360;
		return t;
	};
	_proto.shunwei6_i = function () {
		var t = new eui.Button();
		this.shunwei6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 210;
		t.y = 360;
		return t;
	};
	_proto.shunwei7_i = function () {
		var t = new eui.Button();
		this.shunwei7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 350;
		t.y = 360;
		return t;
	};
	_proto.shunwei8_i = function () {
		var t = new eui.Button();
		this.shunwei8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "Button";
		t.width = 100;
		t.x = 490;
		t.y = 360;
		return t;
	};
	_proto.Anim1_i = function () {
		var t = new eui.Button();
		this.Anim1 = t;
		t.height = 200;
		t.label = "Button";
		t.width = 200;
		t.x = 60;
		t.y = 100;
		return t;
	};
	_proto.Anim2_i = function () {
		var t = new eui.Button();
		this.Anim2 = t;
		t.height = 200;
		t.label = "Button";
		t.width = 200;
		t.x = 340;
		t.y = 100;
		return t;
	};
	_proto.Anim3_i = function () {
		var t = new eui.Button();
		this.Anim3 = t;
		t.height = 200;
		t.label = "Button";
		t.width = 200;
		t.x = 60;
		t.y = 350;
		return t;
	};
	_proto.Anim4_i = function () {
		var t = new eui.Button();
		this.Anim4 = t;
		t.height = 200;
		t.label = "Button";
		t.width = 200;
		t.x = 340;
		t.y = 350;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 328.76;
		t.width = 632.97;
		t.x = 0;
		t.y = 701.03;
		t.elementsContent = [this.btnSeat1_i(),this.btnSeat2_i(),this.btnSeat3_i(),this.btnSeat4_i(),this.btnSeat5_i(),this.btnSeat6_i(),this.btnSeat7_i(),this.btnSeat8_i()];
		return t;
	};
	_proto.btnSeat1_i = function () {
		var t = new eui.Button();
		this.btnSeat1 = t;
		t.label = "";
		t.skinName = GameScreen$Skin2;
		return t;
	};
	_proto.btnSeat2_i = function () {
		var t = new eui.Button();
		this.btnSeat2 = t;
		t.x = 158;
		t.skinName = GameScreen$Skin3;
		return t;
	};
	_proto.btnSeat3_i = function () {
		var t = new eui.Button();
		this.btnSeat3 = t;
		t.x = 317;
		t.skinName = GameScreen$Skin4;
		return t;
	};
	_proto.btnSeat4_i = function () {
		var t = new eui.Button();
		this.btnSeat4 = t;
		t.x = 470;
		t.skinName = GameScreen$Skin5;
		return t;
	};
	_proto.btnSeat5_i = function () {
		var t = new eui.Button();
		this.btnSeat5 = t;
		t.y = 170;
		t.skinName = GameScreen$Skin6;
		return t;
	};
	_proto.btnSeat6_i = function () {
		var t = new eui.Button();
		this.btnSeat6 = t;
		t.x = 158;
		t.y = 170;
		t.skinName = GameScreen$Skin7;
		return t;
	};
	_proto.btnSeat7_i = function () {
		var t = new eui.Button();
		this.btnSeat7 = t;
		t.x = 317;
		t.y = 170;
		t.skinName = GameScreen$Skin8;
		return t;
	};
	_proto.btnSeat8_i = function () {
		var t = new eui.Button();
		this.btnSeat8 = t;
		t.x = 470;
		t.y = 170;
		t.skinName = GameScreen$Skin9;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.width = 640;
		t.y = 1059;
		t.elementsContent = [this._Group26_i(),this._Group27_i(),this.startjs_i(),this.startgame_i()];
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		this._Group26 = t;
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		this._Button1 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin10;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		this._Button2 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin11;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		this._Button3 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin12;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		this._Group27 = t;
		t.elementsContent = [this._Button4_i(),this._Button5_i(),this._Button6_i()];
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		this._Button4 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin13;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		this._Button5 = t;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin14;
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		this._Button6 = t;
		t.enabled = false;
		t.percentWidth = 100;
		t.skinName = GameScreen$Skin15;
		return t;
	};
	_proto.startjs_i = function () {
		var t = new eui.Button();
		this.startjs = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.label = "Button";
		t.width = 250;
		t.x = 300;
		t.y = 15;
		return t;
	};
	_proto.startgame_i = function () {
		var t = new eui.Button();
		this.startgame = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.label = "Button";
		t.width = 250;
		t.x = 300;
		t.y = 15;
		return t;
	};
	return GameScreen;
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
		t.text = "hahahah";
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
	function LoadingUI() {
		_super.call(this);
		this.skinParts = ["loadingBackground","labelText","loadingLabel","progressBg","progressBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this.loadingBackground_i(),this.loadingLabel_i(),this.progressBg_i(),this.progressBar_i()];
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
	_proto.loadingLabel_i = function () {
		var t = new eui.Group();
		this.loadingLabel = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label1_i(),this.labelText_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
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
		t.textColor = 0xffffff;
		t.x = 316;
		return t;
	};
	_proto.progressBg_i = function () {
		var t = new eui.Image();
		this.progressBg = t;
		t.height = 60;
		t.source = "progress-bg";
		t.percentWidth = 100;
		return t;
	};
	_proto.progressBar_i = function () {
		var t = new eui.Image();
		this.progressBar = t;
		t.height = 60;
		t.source = "progress";
		return t;
	};
	return LoadingUI;
})(eui.Skin);generateEUI.paths['resource/containers/NoticeWindow.exml'] = window.skins.NoticeWindow = (function (_super) {
	__extends(NoticeWindow, _super);
	var NoticeWindow$Skin16 = 	(function (_super) {
		__extends(NoticeWindow$Skin16, _super);
		function NoticeWindow$Skin16() {
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
		var _proto = NoticeWindow$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return NoticeWindow$Skin16;
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
		t.skinName = NoticeWindow$Skin16;
		return t;
	};
	return NoticeWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupWindowSkin.exml'] = window.skins.PopupWindowSkin = (function (_super) {
	__extends(PopupWindowSkin, _super);
	var PopupWindowSkin$Skin17 = 	(function (_super) {
		__extends(PopupWindowSkin$Skin17, _super);
		function PopupWindowSkin$Skin17() {
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
		var _proto = PopupWindowSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "ok_2";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupWindowSkin$Skin17;
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
		t.source = "small-dialog-background";
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 59;
		t.skinName = PopupWindowSkin$Skin17;
		return t;
	};
	return PopupWindowSkin;
})(eui.Skin);generateEUI.paths['resource/containers/PopupGameInfoWindow.exml'] = window.skins.PopupGameInfoWindow = (function (_super) {
	__extends(PopupGameInfoWindow, _super);
	function PopupGameInfoWindow() {
		_super.call(this);
		this.skinParts = ["overlay","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
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
		t.elementsContent = [this._Group2_i(),this._Group4_i(),this._Group6_i(),this._Group8_i(),this._Group10_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.y = 61;
		t.elementsContent = [this._Label1_i(),this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "你";
		t.textColor = 0x000000;
		t.x = 30;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "btn-help";
		t.y = 40;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 150;
		t.y = 44;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "测试1";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "许愿阵营";
		t.textColor = 0x000000;
		t.y = 40;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "许愿";
		t.textColor = 0x000000;
		t.y = 80;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.y = 235;
		t.elementsContent = [this._Image2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "huangyanyan";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.x = 150;
		t.elementsContent = [this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "许愿阵营";
		t.textColor = 0x000000;
		t.y = 40;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "许愿";
		t.textColor = 0x000000;
		t.y = 80;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.y = 400;
		t.elementsContent = [this._Image3_i(),this._Group5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "round1";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 51;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "t1";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "true";
		t.verticalCenter = 0;
		t.x = 96;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.y = 510;
		t.elementsContent = [this._Image6_i(),this._Group7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "round2";
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 51;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "t2";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "true";
		t.verticalCenter = 0;
		t.x = 96;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.y = 620;
		t.elementsContent = [this._Image9_i(),this._Group9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "round3";
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 51;
		t.elementsContent = [this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "t3";
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "true";
		t.verticalCenter = 0;
		t.x = 96;
		return t;
	};
	return PopupGameInfoWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupHandleWindow.exml'] = window.skins.PopupHandleWindow = (function (_super) {
	__extends(PopupHandleWindow, _super);
	var PopupHandleWindow$Skin18 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin18, _super);
		function PopupHandleWindow$Skin18() {
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
		var _proto = PopupHandleWindow$Skin18.prototype;

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
		return PopupHandleWindow$Skin18;
	})(eui.Skin);

	var PopupHandleWindow$Skin19 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin19, _super);
		function PopupHandleWindow$Skin19() {
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
		var _proto = PopupHandleWindow$Skin19.prototype;

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
		return PopupHandleWindow$Skin19;
	})(eui.Skin);

	var PopupHandleWindow$Skin20 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin20, _super);
		function PopupHandleWindow$Skin20() {
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
		var _proto = PopupHandleWindow$Skin20.prototype;

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
		return PopupHandleWindow$Skin20;
	})(eui.Skin);

	var PopupHandleWindow$Skin21 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin21, _super);
		function PopupHandleWindow$Skin21() {
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
		var _proto = PopupHandleWindow$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "cancel";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupHandleWindow$Skin21;
	})(eui.Skin);

	var PopupHandleWindow$Skin22 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin22, _super);
		function PopupHandleWindow$Skin22() {
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
		var _proto = PopupHandleWindow$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "ok";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupHandleWindow$Skin22;
	})(eui.Skin);

	var PopupHandleWindow$Skin23 = 	(function (_super) {
		__extends(PopupHandleWindow$Skin23, _super);
		function PopupHandleWindow$Skin23() {
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
		var _proto = PopupHandleWindow$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "btn-create-small";
			return t;
		};
		return PopupHandleWindow$Skin23;
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
		t.skinName = PopupHandleWindow$Skin18;
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
		t.skinName = PopupHandleWindow$Skin19;
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
		t.skinName = PopupHandleWindow$Skin20;
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
		t.left = 59;
		t.skinName = PopupHandleWindow$Skin21;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 280;
		t.skinName = PopupHandleWindow$Skin22;
		return t;
	};
	_proto.btnCreateRoom_i = function () {
		var t = new eui.Button();
		this.btnCreateRoom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 280;
		t.skinName = PopupHandleWindow$Skin23;
		return t;
	};
	return PopupHandleWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupPromptWindow.exml'] = window.skins.PopupPromptWindow = (function (_super) {
	__extends(PopupPromptWindow, _super);
	var PopupPromptWindow$Skin24 = 	(function (_super) {
		__extends(PopupPromptWindow$Skin24, _super);
		function PopupPromptWindow$Skin24() {
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
		var _proto = PopupPromptWindow$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "auth3";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupPromptWindow$Skin24;
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
		t.size = 45;
		t.textColor = 0x020202;
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
		t.skinName = PopupPromptWindow$Skin24;
		return t;
	};
	return PopupPromptWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupResultWindow.exml'] = window.skins.PopupResultWindow = (function (_super) {
	__extends(PopupResultWindow, _super);
	function PopupResultWindow() {
		_super.call(this);
		this.skinParts = ["overlay","appraisalGroup","voteGroup","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
	}
	var _proto = PopupResultWindow.prototype;

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
		t.elementsContent = [this.appraisalGroup_i(),this.voteGroup_i()];
		return t;
	};
	_proto.appraisalGroup_i = function () {
		var t = new eui.Group();
		this.appraisalGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 120;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 500;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 148;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "鉴定结果为";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 220;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "true";
		t.verticalCenter = 0;
		t.x = 379;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 500;
		t.y = 180;
		t.elementsContent = [this._Image3_i(),this._Label3_i(),this._Label4_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 148;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "鉴定结果为";
		t.textColor = 0x020202;
		t.verticalCenter = 0;
		t.x = 220;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "true";
		t.verticalCenter = 0;
		t.x = 379;
		return t;
	};
	_proto.voteGroup_i = function () {
		var t = new eui.Group();
		this.voteGroup = t;
		t.bottom = 170;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label5_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "投票结果";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 30;
		t.elementsContent = [this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image5_i(),this._Label6_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "鼠首";
		t.textColor = 0x020202;
		t.y = 150;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "false";
		t.y = 182;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 200;
		t.elementsContent = [this._Image7_i(),this._Label7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "t2";
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "牛首";
		t.textColor = 0x020202;
		t.y = 150;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "true";
		t.y = 181;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 350;
		t.elementsContent = [this._Label8_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "得票第1和第2的宝物会被保护起来";
		t.textColor = 0x020202;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "公布得票第2的宝物";
		t.textColor = 0x020202;
		t.y = 25;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "若出现平票，则生肖顺序靠前的兽首得票更高";
		t.textColor = 0x020202;
		t.y = 50;
		return t;
	};
	return PopupResultWindow;
})(eui.Skin);generateEUI.paths['resource/containers/PopupRoleWindow.exml'] = window.skins.PopupRoleWindow = (function (_super) {
	__extends(PopupRoleWindow, _super);
	var PopupRoleWindow$Skin25 = 	(function (_super) {
		__extends(PopupRoleWindow$Skin25, _super);
		function PopupRoleWindow$Skin25() {
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
		var _proto = PopupRoleWindow$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "cancel";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupRoleWindow$Skin25;
	})(eui.Skin);

	var PopupRoleWindow$Skin26 = 	(function (_super) {
		__extends(PopupRoleWindow$Skin26, _super);
		function PopupRoleWindow$Skin26() {
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
		var _proto = PopupRoleWindow$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "ok";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return PopupRoleWindow$Skin26;
	})(eui.Skin);

	function PopupRoleWindow() {
		_super.call(this);
		this.skinParts = ["overlay","closeButton","confirmButton","container"];
		
		this.width = 640;
		this.elementsContent = [this.overlay_i(),this.container_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.role.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.role.res"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.role.skill"],[0],this._Label2,"text");
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
		t.size = 22;
		t.textColor = 0x000000;
		t.y = 181;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 22;
		t.textColor = 0x000000;
		t.y = 227;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 59;
		t.skinName = PopupRoleWindow$Skin25;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 55;
		t.left = 280;
		t.skinName = PopupRoleWindow$Skin26;
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
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Label3_i()];
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
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "第一轮开始";
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
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 400;
		t.y = 200;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "t1";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "t2";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "t3";
		t.y = 200;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "t4";
		t.y = 200;
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
})(eui.Skin);generateEUI.paths['resource/containers/RankWindow.exml'] = window.skins.RankWindow = (function (_super) {
	__extends(RankWindow, _super);
	var RankWindow$Skin27 = 	(function (_super) {
		__extends(RankWindow$Skin27, _super);
		function RankWindow$Skin27() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "win_rate_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "win_rate_1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin27;
	})(eui.Skin);

	var RankWindow$Skin28 = 	(function (_super) {
		__extends(RankWindow$Skin28, _super);
		function RankWindow$Skin28() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "btn-role2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "btn-role";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin28;
	})(eui.Skin);

	var RankWindow$Skin29 = 	(function (_super) {
		__extends(RankWindow$Skin29, _super);
		function RankWindow$Skin29() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "jushu2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "jushu1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin29;
	})(eui.Skin);

	var RankWindow$Skin30 = 	(function (_super) {
		__extends(RankWindow$Skin30, _super);
		function RankWindow$Skin30() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "total_rate_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "total_rate_1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin30;
	})(eui.Skin);

	var RankWindow$Skin31 = 	(function (_super) {
		__extends(RankWindow$Skin31, _super);
		function RankWindow$Skin31() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "game6_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "game6_1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin31;
	})(eui.Skin);

	var RankWindow$Skin32 = 	(function (_super) {
		__extends(RankWindow$Skin32, _super);
		function RankWindow$Skin32() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "game7_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "game7_1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin32;
	})(eui.Skin);

	var RankWindow$Skin33 = 	(function (_super) {
		__extends(RankWindow$Skin33, _super);
		function RankWindow$Skin33() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "game8_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "game8_1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin33;
	})(eui.Skin);

	var RankWindow$Skin34 = 	(function (_super) {
		__extends(RankWindow$Skin34, _super);
		function RankWindow$Skin34() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "team_xu_4";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "team_xu_3";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin34;
	})(eui.Skin);

	var RankWindow$Skin35 = 	(function (_super) {
		__extends(RankWindow$Skin35, _super);
		function RankWindow$Skin35() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "team_lao_4";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "team_lao_3";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin35;
	})(eui.Skin);

	var RankWindow$Skin36 = 	(function (_super) {
		__extends(RankWindow$Skin36, _super);
		function RankWindow$Skin36() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "auth_rate_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "auth_rate_1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin36;
	})(eui.Skin);

	var RankWindow$Skin37 = 	(function (_super) {
		__extends(RankWindow$Skin37, _super);
		function RankWindow$Skin37() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "auth_player_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "auth_player_1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin37;
	})(eui.Skin);

	var RankWindow$Skin38 = 	(function (_super) {
		__extends(RankWindow$Skin38, _super);
		function RankWindow$Skin38() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "xu2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "xu1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin38;
	})(eui.Skin);

	var RankWindow$Skin39 = 	(function (_super) {
		__extends(RankWindow$Skin39, _super);
		function RankWindow$Skin39() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "fang2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "fang1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin39;
	})(eui.Skin);

	var RankWindow$Skin40 = 	(function (_super) {
		__extends(RankWindow$Skin40, _super);
		function RankWindow$Skin40() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "huang2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "huang1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin40;
	})(eui.Skin);

	var RankWindow$Skin41 = 	(function (_super) {
		__extends(RankWindow$Skin41, _super);
		function RankWindow$Skin41() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "mu2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "mu1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin41;
	})(eui.Skin);

	var RankWindow$Skin42 = 	(function (_super) {
		__extends(RankWindow$Skin42, _super);
		function RankWindow$Skin42() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "ji2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "ji1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin42;
	})(eui.Skin);

	var RankWindow$Skin43 = 	(function (_super) {
		__extends(RankWindow$Skin43, _super);
		function RankWindow$Skin43() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "lao2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "lao1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin43;
	})(eui.Skin);

	var RankWindow$Skin44 = 	(function (_super) {
		__extends(RankWindow$Skin44, _super);
		function RankWindow$Skin44() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "yao2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "yao1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin44;
	})(eui.Skin);

	var RankWindow$Skin45 = 	(function (_super) {
		__extends(RankWindow$Skin45, _super);
		function RankWindow$Skin45() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "zheng2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "zheng1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin45;
	})(eui.Skin);

	var RankWindow$Skin46 = 	(function (_super) {
		__extends(RankWindow$Skin46, _super);
		function RankWindow$Skin46() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [];
			this._Image1_i();
			
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.AddItems("_Image1","",0,"")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.AddItems("_Image2","",1,"")
					])
			];
		}
		var _proto = RankWindow$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 12;
			t.right = 0;
			t.source = "total_play_2";
			t.top = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.anchorOffsetX = 0;
			t.anchorOffsetY = 0;
			t.bottom = 0;
			t.left = 8;
			t.right = 0;
			t.source = "total_play_1";
			t.top = 0;
			return t;
		};
		return RankWindow$Skin46;
	})(eui.Skin);

	var RankWindow$Skin47 = 	(function (_super) {
		__extends(RankWindow$Skin47, _super);
		function RankWindow$Skin47() {
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
		var _proto = RankWindow$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return RankWindow$Skin47;
	})(eui.Skin);

	function RankWindow() {
		_super.call(this);
		this.skinParts = ["winRateButton","roleButton","gameNumButton","headGroup","rankList","contentScroller","backButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.contentScroller_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.navigationBar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.showWinRateSwitch"],[0],this._Group1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.showRoleSwitch"],[0],this._Group2,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.showGameNumSwitch"],[0],this._Group3,"visible");
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
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this._Label1_i(),this.winRateButton_i(),this.roleButton_i(),this.gameNumButton_i()];
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
	_proto.winRateButton_i = function () {
		var t = new eui.ToggleButton();
		this.winRateButton = t;
		t.left = 30;
		t.selected = true;
		t.y = 100;
		t.skinName = RankWindow$Skin27;
		return t;
	};
	_proto.roleButton_i = function () {
		var t = new eui.ToggleButton();
		this.roleButton = t;
		t.horizontalCenter = 0;
		t.y = 100;
		t.skinName = RankWindow$Skin28;
		return t;
	};
	_proto.gameNumButton_i = function () {
		var t = new eui.ToggleButton();
		this.gameNumButton = t;
		t.right = 30;
		t.y = 100;
		t.skinName = RankWindow$Skin29;
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
		t.y = 210;
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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 210;
		t.elementsContent = [this._ToggleButton1_i(),this._ToggleButton2_i(),this._ToggleButton3_i(),this._ToggleButton4_i()];
		return t;
	};
	_proto._ToggleButton1_i = function () {
		var t = new eui.ToggleButton();
		t.left = 0;
		t.width = 140;
		t.skinName = RankWindow$Skin30;
		return t;
	};
	_proto._ToggleButton2_i = function () {
		var t = new eui.ToggleButton();
		t.width = 140;
		t.x = 155;
		t.skinName = RankWindow$Skin31;
		return t;
	};
	_proto._ToggleButton3_i = function () {
		var t = new eui.ToggleButton();
		t.width = 140;
		t.x = 310;
		t.skinName = RankWindow$Skin32;
		return t;
	};
	_proto._ToggleButton4_i = function () {
		var t = new eui.ToggleButton();
		t.right = 0;
		t.width = 140;
		t.skinName = RankWindow$Skin33;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 210;
		t.elementsContent = [this._ToggleButton5_i(),this._ToggleButton6_i(),this._ToggleButton7_i(),this._ToggleButton8_i(),this._ToggleButton9_i(),this._ToggleButton10_i(),this._ToggleButton11_i(),this._ToggleButton12_i(),this._ToggleButton13_i(),this._ToggleButton14_i(),this._ToggleButton15_i(),this._ToggleButton16_i()];
		return t;
	};
	_proto._ToggleButton5_i = function () {
		var t = new eui.ToggleButton();
		t.left = 0;
		t.width = 190;
		t.skinName = RankWindow$Skin34;
		return t;
	};
	_proto._ToggleButton6_i = function () {
		var t = new eui.ToggleButton();
		t.horizontalCenter = 0;
		t.width = 190;
		t.skinName = RankWindow$Skin35;
		return t;
	};
	_proto._ToggleButton7_i = function () {
		var t = new eui.ToggleButton();
		t.right = 0;
		t.width = 190;
		t.skinName = RankWindow$Skin36;
		return t;
	};
	_proto._ToggleButton8_i = function () {
		var t = new eui.ToggleButton();
		t.left = 0;
		t.width = 190;
		t.y = 60;
		t.skinName = RankWindow$Skin37;
		return t;
	};
	_proto._ToggleButton9_i = function () {
		var t = new eui.ToggleButton();
		t.horizontalCenter = 0;
		t.width = 190;
		t.y = 60;
		t.skinName = RankWindow$Skin38;
		return t;
	};
	_proto._ToggleButton10_i = function () {
		var t = new eui.ToggleButton();
		t.right = 0;
		t.width = 190;
		t.y = 60;
		t.skinName = RankWindow$Skin39;
		return t;
	};
	_proto._ToggleButton11_i = function () {
		var t = new eui.ToggleButton();
		t.left = 0;
		t.width = 190;
		t.y = 120;
		t.skinName = RankWindow$Skin40;
		return t;
	};
	_proto._ToggleButton12_i = function () {
		var t = new eui.ToggleButton();
		t.horizontalCenter = 0;
		t.width = 190;
		t.y = 120;
		t.skinName = RankWindow$Skin41;
		return t;
	};
	_proto._ToggleButton13_i = function () {
		var t = new eui.ToggleButton();
		t.right = 0;
		t.width = 190;
		t.y = 120;
		t.skinName = RankWindow$Skin42;
		return t;
	};
	_proto._ToggleButton14_i = function () {
		var t = new eui.ToggleButton();
		t.left = 0;
		t.width = 190;
		t.y = 180;
		t.skinName = RankWindow$Skin43;
		return t;
	};
	_proto._ToggleButton15_i = function () {
		var t = new eui.ToggleButton();
		t.horizontalCenter = 0;
		t.width = 190;
		t.y = 180;
		t.skinName = RankWindow$Skin44;
		return t;
	};
	_proto._ToggleButton16_i = function () {
		var t = new eui.ToggleButton();
		t.right = 0;
		t.width = 190;
		t.y = 180;
		t.skinName = RankWindow$Skin45;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 210;
		t.elementsContent = [this._ToggleButton17_i()];
		return t;
	};
	_proto._ToggleButton17_i = function () {
		var t = new eui.ToggleButton();
		t.horizontalCenter = 0;
		t.selected = true;
		t.skinName = RankWindow$Skin46;
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
		t.skinName = RankWindow$Skin47;
		return t;
	};
	return RankWindow;
})(eui.Skin);generateEUI.paths['resource/containers/SettingWindow.exml'] = window.skins.SettingWindow = (function (_super) {
	__extends(SettingWindow, _super);
	var SettingWindow$Skin48 = 	(function (_super) {
		__extends(SettingWindow$Skin48, _super);
		function SettingWindow$Skin48() {
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
		var _proto = SettingWindow$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return SettingWindow$Skin48;
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
		t.text = "设置";
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
		t.skinName = SettingWindow$Skin48;
		return t;
	};
	return SettingWindow;
})(eui.Skin);generateEUI.paths['resource/containers/StartScreen.exml'] = window.skins.StartScreen = (function (_super) {
	__extends(StartScreen, _super);
	var StartScreen$Skin49 = 	(function (_super) {
		__extends(StartScreen$Skin49, _super);
		function StartScreen$Skin49() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-join-small";
			return t;
		};
		return StartScreen$Skin49;
	})(eui.Skin);

	var StartScreen$Skin50 = 	(function (_super) {
		__extends(StartScreen$Skin50, _super);
		function StartScreen$Skin50() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-create-small";
			return t;
		};
		return StartScreen$Skin50;
	})(eui.Skin);

	var StartScreen$Skin51 = 	(function (_super) {
		__extends(StartScreen$Skin51, _super);
		function StartScreen$Skin51() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
		}
		var _proto = StartScreen$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-join-small";
			return t;
		};
		return StartScreen$Skin51;
	})(eui.Skin);

	var StartScreen$Skin52 = 	(function (_super) {
		__extends(StartScreen$Skin52, _super);
		function StartScreen$Skin52() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = StartScreen$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-board";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.text = "公告";
			t.textColor = 0x000000;
			t.y = 70;
			return t;
		};
		return StartScreen$Skin52;
	})(eui.Skin);

	var StartScreen$Skin53 = 	(function (_super) {
		__extends(StartScreen$Skin53, _super);
		function StartScreen$Skin53() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = StartScreen$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-rank";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.text = "排行";
			t.textColor = 0x000000;
			t.y = 130;
			return t;
		};
		return StartScreen$Skin53;
	})(eui.Skin);

	var StartScreen$Skin54 = 	(function (_super) {
		__extends(StartScreen$Skin54, _super);
		function StartScreen$Skin54() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = StartScreen$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-guide";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.text = "指南";
			t.textColor = 0x000000;
			t.y = 130;
			return t;
		};
		return StartScreen$Skin54;
	})(eui.Skin);

	var StartScreen$Skin55 = 	(function (_super) {
		__extends(StartScreen$Skin55, _super);
		function StartScreen$Skin55() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Label1_i()];
		}
		var _proto = StartScreen$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "btn-settings";
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.text = "设置";
			t.textColor = 0x000000;
			t.y = 70;
			return t;
		};
		return StartScreen$Skin55;
	})(eui.Skin);

	function StartScreen() {
		_super.call(this);
		this.skinParts = ["startBackground","headGroup","btnJoinRoom","btnCreateRoom","btnJoin","contentScroller","btnNotice","btnRank","btnGuide","btnSetting","navigationBar"];
		
		this.height = 1386;
		this.width = 640;
		this.elementsContent = [this.startBackground_i(),this.headGroup_i(),this.contentScroller_i(),this.navigationBar_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.avatarUrl"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.nickName"],[0],this._Label1,"text");
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
		t.height = 200;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "userinfo-background";
		t.verticalCenter = 0;
		t.width = 640;
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
		t.x = 240;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.horizontalCenter = 0;
		t.y = 200;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 400;
		t.horizontalCenter = 0;
		t.width = 620;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this.btnJoinRoom_i(),this.btnCreateRoom_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "small-dialog-background";
		t.top = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "古董助手";
		t.textColor = 0x020202;
		t.y = 80;
		return t;
	};
	_proto.btnJoinRoom_i = function () {
		var t = new eui.Button();
		this.btnJoinRoom = t;
		t.left = 40;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 240;
		t.skinName = StartScreen$Skin49;
		return t;
	};
	_proto.btnCreateRoom_i = function () {
		var t = new eui.Button();
		this.btnCreateRoom = t;
		t.right = 40;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 240;
		t.skinName = StartScreen$Skin50;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.y = 410;
		t.elementsContent = [this._Image4_i(),this._Label3_i(),this.btnJoin_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "small-dialog-background";
		t.top = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "古董剧本游戏";
		t.textColor = 0x020202;
		t.y = 80;
		return t;
	};
	_proto.btnJoin_i = function () {
		var t = new eui.Button();
		this.btnJoin = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 240;
		t.skinName = StartScreen$Skin51;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new eui.Group();
		this.navigationBar = t;
		t.height = 160;
		t.width = 640;
		t.y = 1011;
		t.elementsContent = [this.btnNotice_i(),this.btnRank_i(),this.btnGuide_i(),this.btnSetting_i()];
		return t;
	};
	_proto.btnNotice_i = function () {
		var t = new eui.Button();
		this.btnNotice = t;
		t.left = 20;
		t.verticalCenter = 0;
		t.skinName = StartScreen$Skin52;
		return t;
	};
	_proto.btnRank_i = function () {
		var t = new eui.Button();
		this.btnRank = t;
		t.verticalCenter = 0;
		t.x = 180;
		t.skinName = StartScreen$Skin53;
		return t;
	};
	_proto.btnGuide_i = function () {
		var t = new eui.Button();
		this.btnGuide = t;
		t.verticalCenter = 0;
		t.x = 380;
		t.skinName = StartScreen$Skin54;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new eui.Button();
		this.btnSetting = t;
		t.right = 20;
		t.verticalCenter = 0;
		t.skinName = StartScreen$Skin55;
		return t;
	};
	return StartScreen;
})(eui.Skin);generateEUI.paths['resource/containers/UserInfoWindow.exml'] = window.skins.UserInfoWindow = (function (_super) {
	__extends(UserInfoWindow, _super);
	var UserInfoWindow$Skin56 = 	(function (_super) {
		__extends(UserInfoWindow$Skin56, _super);
		function UserInfoWindow$Skin56() {
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
		var _proto = UserInfoWindow$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "btn-back";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		return UserInfoWindow$Skin56;
	})(eui.Skin);

	function UserInfoWindow() {
		_super.call(this);
		this.skinParts = ["headGroup","content","backButton","navigationBar"];
		
		this.minHeight = 1386;
		this.minWidth = 450;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.headGroup_i(),this.content_i(),this.navigationBar_i()];
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
		t.height = 110;
		t.source = "btn-share";
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 75;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 60;
		t.text = "账号";
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
		t.bold = true;
		t.horizontalCenter = -105;
		t.text = "2";
		t.y = 45;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 105;
		t.text = "3";
		t.y = 45;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "共5局";
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
		t.horizontalCenter = 0;
		t.text = "40%";
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
		t.horizontalCenter = 0;
		t.text = "50%";
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
		t.horizontalCenter = 0;
		t.text = "10%";
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
		t.horizontalCenter = 0;
		t.text = "0%";
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
		t.horizontalCenter = 0;
		t.text = "0%";
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
		t.horizontalCenter = 0;
		t.text = "0%";
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
		t.skinName = UserInfoWindow$Skin56;
		return t;
	};
	return UserInfoWindow;
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