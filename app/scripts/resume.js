import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import PDF from '!!file!../../images/Resume.pdf';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function Resume() {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Container>
        <Row>
          <Col md={12}>
            <embed title="Resume" src={PDF} width="100%" style={{height: 'calc(100vh - 74px)'}}/>
          </Col>
        </Row>
      </Container>
    </MuiThemeProvider>
  );
}

export default Resume;
