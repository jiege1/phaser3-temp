
import Phaser from 'phaser';
import Base from 'game/common/models/base';
import Stage from './stage';

export default class App extends Base {

  game;

  constructor(props) {
    super({...props, type: 'app'});
    this.init();
  }

  init() {
    const stage = new Stage({ type: 'stage' });
    this.game = new Phaser.Game({
      type: Phaser.AUTO, // webGL or canvas
      width: this.props.width,
      height: this.props.height,
      parent: this.props.container,
      scene: {
        preload() {
          stage.preload(this);
        },
        create() {
          stage.create();
        },
        update() {
          stage.update();
        },
      },
    });
    this.addChild(stage);
  }


}
