
export default class Utils {

  /**
   * 按照 type 来查询最近的夫元素
   *
   * @param type
   * @param model
   * @returns {*}
   */
  static findParentModelByType(type, model) {

    if (!model.parent) {
      console.warn(`Not find parent model which type is ${type}`);
      return null;
    }

    if (model.parent.props.type === type) {
      return model.parent;
    }

    return Utils.findParentModelByType(type, model.parent);
  }

  /**
   * 查询 挂载在 stage 上的 Ticker
   *
   * @param model
   * @returns {*}
   */
  static findTicker(model) {
    const stage = Utils.findParentModelByType('stage', model);
    if (stage) {
      return stage.ticker;
    }
    return null;
  }

  /**
   * 查询App 下的 phaser-game
   *
   * @param model
   * @returns {*}
   */
  static findGame(model) {
    const app = Utils.findParentModelByType('app', model);
    if (app) {
      return app.game;
    }
    return null;
  }

  static findScene(model) {
    const stage = Utils.findParentModelByType('stage', model);
    if (stage) {
      return stage.scene;
    }
    return null;
  }

}