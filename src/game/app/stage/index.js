
// import Phaser from 'phaser'
import Base from 'game/common/models/base';
import Ticker from 'game/common/models/ticker';
import mainBg from 'assets/images/mainBg.jpg';
import ImageSpirit from 'game/common/spirits/image';

export default class Stage extends Base {

  scene;

  constructor(props) {
    super(props);

    this.ticker = new Ticker({ parent: this });

  }

  preload(scene) {
    this.scene = scene;
    scene.load.image('mainBg', mainBg, 1920, 1080);
  }

  create() {

    // 添加背景
    this.addChild(new ImageSpirit({
      type: 'background',
      width: 1920,
      height: 1080,
      name: 'mainBg',
      x: 0,
      y: 0,
    }));


    // -----渲染
    this.children.forEach(item => {
      item.render();
    });
  }

  update() {
    // this.ticker.trigger();
  }

}
