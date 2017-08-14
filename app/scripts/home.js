import React from 'react';
import { Link } from 'react-router-dom';
import Img2 from '!!file!../../images/comp.jpg';
import { Row, Col, Container } from 'react-grid-system';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { SocialIcon } from 'react-social-icons';
import IconButton from 'material-ui/IconButton';
import Folder from 'material-ui/svg-icons/file/folder-open';
import Mail from 'material-ui/svg-icons/communication/mail-outline';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <div>
        <div style={{
          backgroundImage: 'url(' + Img2 + ')',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          width: 'calc(100vw - 15px)',
          height: '100vh'
        }}>
          <Row>
            <Col md={3}>
              <h1 style={{color: '#FFF', marginLeft: '30px'}}>I Am Noah Rolf.</h1>
              <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Divider style={{backgroundColor: '#FFF', marginLeft: '30px', height: '3px'}} />
              </MuiThemeProvider>
              <h2 style={{color: '#FFF', marginLeft: '30px'}}>A full stack developer who builds interactive web applications that run across platforms and Devices</h2>
            </Col>
          </Row>
        </div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Container>
            <Row>
              <Col md={3} style={{textAlign: 'center'}}>
                <SocialIcon url="https://www.linkedin.com/in/noah-rolf/" style={{ height: 150, width: 150, margin: 40, marginBottom: 5 }}/>
                <h3 style={{color: '#fff'}}>linkedin</h3>
              </Col>
              <Col md={3} style={{textAlign: 'center'}}>
                <SocialIcon url="https://github.com/Gunnar34" color="#000" style={{ height: 150, width: 150, margin: 40, marginBottom: 5}}/>
                <h3 style={{color: '#fff'}}>Github</h3>
              </Col>
              <Col md={3} style={{textAlign: 'center'}}>
                <Link to="/resume" style={{ textDecoration: 'none'}}>
                  <IconButton style={{margin: 40, marginBottom: 5, height: 150, width: 150, padding: 0}} iconStyle={{height: 150, width: 150, margin: 0}}>
                    <Folder color="#BE1335" />
                  </IconButton>
                </Link>
                <h3 style={{color: '#fff'}}>Resume</h3>
              </Col>
              <Col md={3} style={{textAlign: 'center'}}>
                <Link to="/contact" style={{ textDecoration: 'none'}}>
                  <IconButton style={{margin: 40, marginBottom: 5, height: 150, width: 150, padding: 0}} iconStyle={{height: 150, width: 150, margin: 0}}>
                    <Mail color="#FDF10D" />
                  </IconButton>
                </Link>
                <h3 style={{color: '#fff'}}>Contact Me</h3>
              </Col>
            </Row>
          </Container>
        </MuiThemeProvider>
      </div>
    );
  }
}
