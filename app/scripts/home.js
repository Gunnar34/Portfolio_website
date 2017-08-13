import React from 'react';
import Img from '!!file!../../images/noah2.jpg';
import Img2 from '!!file!../../images/comp.jpg';
import { Row, Col, Visible } from 'react-grid-system';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <div style={{
        backgroundImage: 'url(' + Img2 + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 'calc(100vw - 15px)',
        height: 'calc(100vh - 74px)'
      }}>
        <Row>
          <Col offset={{md: 1, sm: 1, xs: 2}} xs={6} sm={4} md={5} lg={3} xl={2} style={{
            backgroundColor: '#FFF',
            textAlign: 'center',
            marginTop: '20px',
            borderRadius: '10%',
          }}>
            <img src={Img} style={{
              borderRadius: '50%',
              height: '25vh',
              width: '20vh'
            }}/>
            <Visible md sm xs>
              <Row>
                <h1 style={{fontSize: '54px'}}>Skilled In</h1>
                <Col xs={4}>
                  <ul style={{fontSize: '36px'}}>
                    <li>React.js</li>
                    <li>Angular.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>jQuery</li>
                    <li>postgresSQL</li>
                  </ul>
                </Col>
              </Row>
            </Visible>
          </Col>
        </Row>
      </div>
    );
  }
}
