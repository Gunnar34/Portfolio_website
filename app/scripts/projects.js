import React from 'react';
import Img from '!!file!../../images/noah.jpg';
import Img2 from '!!file!../../images/dateNite.png';
import Img3 from '!!file!../../images/abamath.png';
import Img4 from '!!file!../../images/dateMobile.png';
import Img5 from '!!file!../../images/abaMobile.png';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Container, Row, Col, ClearFix } from 'react-grid-system';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} lg={8} style={{marginTop: '15px'}}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Card>
                <CardHeader
                  title="Full Stack Software Developer"
                  subtitle="Front-End Focus"
                  avatar={Img}
                />
                <CardMedia
                  overlay={<CardTitle title="Solo Project" subtitle="Prime Digital Academy" />}
                >
                  <img src={Img2} alt="" />
                </CardMedia>
                <CardTitle title="Date Nite" subtitle="A solution to the question “What do you want to do? I dunno what do you wanna do?”" />
                <CardText>
                  Tech used: AngularJS, Angular Materialize, jQuery, node.js, express, mongoDB, facebook graph API,
                  google places API, geolocation API, reverse geolocation API, google maps api, JavaScript, HTML5,
                  CSS,  ng-cal, moment.js, fb node package.
                  <br />
                  <br />
                  DateNite is fully mobile responsive as well as desktop. Users are able to register and login
                  to unique profiles, find events based on a default of current location and date, or by searching for
                  any location and any date. There is also a feature to find places, displayed in a map, this  defaults
                  to restaurants at the current location and can be searched through by choosing from a wide variety of
                  places, distances, or searching for a specific location. Both events and Places can be saved to a calendar
                  and viewed or deleted later.
                </CardText>
                <CardActions>
                  <a target="_blank" href="https://github.com/Gunnar34/solo"><FlatButton label="Github" /></a>
                  <a target="_blank" href="https://date-nite.herokuapp.com/"><FlatButton label="Deployment" /></a>
                </CardActions>
              </Card>
            </MuiThemeProvider>
          </Col>
          <Col xs={12} lg={4} style={{marginTop: '15px'}}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Card>
                <CardHeader
                  title="Full Stack Software Developer"
                  subtitle="Front-End Focus"
                  avatar={Img}
                />
                <CardMedia
                  overlay={<CardTitle title="Solo Project" subtitle="Prime Digital Academy" />}
                >
                  <img src={Img4} alt="" />
                </CardMedia>
              </Card>
            </MuiThemeProvider>
          </Col>
          <ClearFix lg xl />
          <Col xs={12} lg={8} style={{marginTop: '15px'}}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Card>
                <CardHeader
                  title="Full Stack Software Developer"
                  subtitle="Front-End Focus"
                  avatar={Img}
                />
                <CardMedia
                  overlay={<CardTitle title="Group Project" subtitle="Prime Digital Academy" />}
                >
                  <img src={Img3} alt="" />
                </CardMedia>
                <CardText>
                  Tech Used: AngularJS, Angular Materialize, node.js, express, mongoDB, Twilio,
                  nodemailer, charts.js, JavaScript ES6, HTML5, CSS, SASS, Passport, Oauth, Session, x-editable
                  <br />
                  <br />
                  Abamath is an application that is only accessible by authorized instructors whom have been added
                  by the system admin. The instructors can view the roster of any class they have as well as edit
                  any information. They can also spin up a view that asks guardians to sign in students.
                  Guardians can register their phone number to receive texts whenever the student checks
                  out of class as well as register a pin unique to checking their student in and out of the
                  program. . Thus helping insure that a student is always leaving with an authorized parent/guardian.
                </CardText>
                <CardActions>
                  <a target="_blank" href="https://github.com/Gunnar34/group_project"><FlatButton label="Github" /></a>
                  <FlatButton label="Deployment" />
                </CardActions>
              </Card>
            </MuiThemeProvider>
          </Col>
          <Col xs={12} lg={4} style={{marginTop: '15px'}}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Card>
                <CardHeader
                  title="Full Stack Software Developer"
                  subtitle="Front-End Focus"
                  avatar={Img}
                />
                <CardMedia
                  overlay={<CardTitle title="Group Project" subtitle="Prime Digital Academy" />}
                >
                  <img src={Img5} alt="" />
                </CardMedia>
              </Card>
            </MuiThemeProvider>
          </Col>
        </Row>
      </Container>
    );
  }
}
