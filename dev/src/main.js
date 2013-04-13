enchant();

var core;

// クマスプライト
var Bear = Class.create(Sprite, {
	initialize: function(x, y) {
		Sprite.call(this, 32, 32);
		this.x = x;
		this.y = y;
		this.image = core.assets['images/chara1.png'];
	}
});

window.onload = function() {
	core = new Core(320, 320);
	core.fps = 24;
	core.touched = false;
	core.preload([
		'images/chara1.png'
	]);

	core.onload = function() {
		core.currentScene.backgroundColor = 'rgb(239, 228, 202)';

		spriteGroup = new Group();
		core.currentScene.addChild(spriteGroup);

		caption = new Label();
		caption.x = 6;
		caption.y = 40;
		caption.text = '白クマの方が手前に表示されているため重なっているあたりをクリックすると白クマが反応します。';
		core.currentScene.addChild(caption);

		// クマ１の表示
		var bear1 = new Bear(144-8, 96-8);
		bear1.on('touchend', function() {
			this.visible = !this.visible;
		})
		spriteGroup.addChild(bear1);

		// クマ２の表示
		var bear2 = new Bear(144+8, 96+8);
		bear2.frame = 5;
		bear2.on('touchend', function() {
			this.visible = !this.visible;
		})
		spriteGroup.addChild(bear2);

		caption = new Label();
		caption.x = 6;
		caption.y = 160;
		caption.text = 'touchEnabledという変数をfalseに設定しているためタッチに反応しません。';
		core.currentScene.addChild(caption);

		// クマ３の表示
		var bear3 = new Bear(144-8, 216-8);
		bear3.touchEnabled = false;
		bear3.on('touchend', function() {
			this.visible = !this.visible;
		})
		spriteGroup.addChild(bear3);
	};

//	core.debug();
	core.start();
};
