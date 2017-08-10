import React from 'react';
import Img from '!!file!../../images/comp.jpg';
import { styles } from './styles.js';

const Home = () => (
  <div>
    <img style={styles.img} src={Img}/>
  </div>
);

export default Home;
