

/**
 * @abstract
 *
 * 抽象类，必须在继承类中实现
 */
export default class Base {

  children = [];
  parent;

  constructor(props) {
    if (!props.type) {
      console.error('miss your type!');
      return;
    }
    this.props = props;
  }

  addChild(child) {
    this.children.push(child);
    child.parent = this;
  }

  removeChild(child) {
    this.children = this.children.filter(item => item !== child);
  }

  removeSelf() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

}