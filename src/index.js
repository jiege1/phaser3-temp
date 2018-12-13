// __webpack_public_path__ = CFG.__publicPath__;
import React from 'react';
import ReactDom from 'react-dom';
import Layout from './layout';
import './index.less';


ReactDom.render(
  <Layout />,
  document.getElementById('root')
);