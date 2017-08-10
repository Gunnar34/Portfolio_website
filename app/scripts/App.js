import React from 'react';
import SideNav from './sideNav';
import Content from './content';
import { styles } from './styles.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {foo: 'bar'};
  }
  render() {
    return (
      <div>
        <SideNav />
        <Content style={styles.padding} />
      </div>
    );
  }
}
