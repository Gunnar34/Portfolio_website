import React from 'react';
import { Container, Row, Col, Visible } from 'react-grid-system';
import Img from '!!file!../../images/NoahEdit.jpg';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function About() {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Container>
        <Row>
          <Visible lg xl>
            <Col lg={12} style={{
              backgroundImage: 'url(' + Img + ')',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: 'calc(100vh - 74px)',
              backgroundPosition: 'center center'
            }}>
              <Row>
                <Col md={3} offset={{md: 1}}>
                  <h1 style={{color: '#FFF'}}>I Am Noah Rolf.</h1>
                  <Divider style={{backgroundColor: '#000'}} />
                  <h2 style={{color: '#FFF'}}>A full stack developer who builds interactive web applications that run across platforms and Devices</h2>
                </Col>
              </Row>
            </Col>
          </Visible>
          <Visible xs sm md>
            <Col md={12}>
              <div style={{backgroundColor: '#FFF', padding: '20px', marginTop: '10vh'}}>
                <h1 style={{color: '#777', fontSize: '54px'}}>I Am Noah Rolf.</h1>
                <Divider style={{backgroundColor: '#000'}} />
                <h2 style={{color: '#777', fontSize: '36px'}}>A full stack developer who builds interactive web applications that run across platforms and Devices</h2>
                <img src={Img} style={{width: '100%'}}/>
              </div>
            </Col>
          </Visible>
        </Row>
      </Container>
    </MuiThemeProvider>
  );
}

export default About;
