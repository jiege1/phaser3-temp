
import Spirit from 'game/common/models/sprite';
import Utils from 'game/common/utils';

export default class ImageSpirit extends Spirit {

  render() {
    const scene = Utils.findScene(this);
    const { width = 1920, height = 1080, x = 0, y = 0, name } = this.props;

    if (!name) {
      console.log(`${this.props.type} miss your name!`);
      return;
    }

    this.spirit = scene.add.sprite(x + width / 2, y + height / 2, name);
  }
}
