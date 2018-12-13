import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';
import App from 'game/app';

export default class Layout extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.app = new App({
      width: 1920,
      height: 1080,
      container: this.containerRef.current,
    });
  }

  render() {
    return (
      <div className={css.layout} ref={this.containerRef} id="phaser-container" />
    );
  }
}