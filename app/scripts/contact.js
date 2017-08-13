import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import {blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import axios from 'axios';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first: '',
      last: '',
      text: '',
      snack: false
    };
  }
  onCommentSubmit = (email) => {
    axios.post('/email', email).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }
  handleFirstName = (e) => {
    this.setState({first: e.target.value});
  }
  handleLastName = (e) => {
    this.setState({last: e.target.value});
  }
  handleText = (e) => {
    this.setState({text: e.target.value});
  }
  handleSubmit = () => {
    const email = this.state.email;
    const first = this.state.first;
    const last = this.state.last;
    const text = this.state.text;
    if (!text || !first || !last || !email || !(email.includes('@')) || !(email.includes('.'))) {
      this.setState({snack: true});
      return;
    }
    this.onCommentSubmit({first: first, last: last, email: email, text: text});
    this.setState({first: '', last: '', email: '', text: ''});
  }
  handleRequestClose = () => {this.setState({snack: false, });};
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Container>
            <Row>
              <Col md={6} offset={{md: 3}} style={{textAlign: 'center', color: '#FFF'}}>
                <h1>Ready to get in contact?</h1>
              </Col>
              <Col md={12} style={{backgroundColor: '#f7f7f7', marginTop: '50px'}}>
                <div>
                  <TextField
                    floatingLabelText="Email Address"
                    floatingLabelStyle={{color: '#777'}}
                    floatingLabelFocusStyle={{color: blue500}}
                    underlineFocusStyle={{borderColor: blue500}}
                    underlineStyle={{borderColor: '#777'}}
                    inputStyle={{color: '#303030'}}
                    value={this.state.email}
                    onChange={this.handleEmail}
                  /><br />
                  <TextField
                    floatingLabelText="First Name"
                    floatingLabelStyle={{color: '#777'}}
                    floatingLabelFocusStyle={{color: blue500}}
                    underlineFocusStyle={{borderColor: blue500}}
                    underlineStyle={{borderColor: '#777'}}
                    inputStyle={{color: '#303030'}}
                    value={this.state.first}
                    onChange={this.handleFirstName}
                  /><br />
                  <TextField
                    floatingLabelText="Last Name"
                    floatingLabelStyle={{color: '#777'}}
                    floatingLabelFocusStyle={{color: blue500}}
                    underlineFocusStyle={{borderColor: blue500}}
                    underlineStyle={{borderColor: '#777'}}
                    inputStyle={{color: '#303030'}}
                    value={this.state.last}
                    onChange={this.handleLastName}
                  /><br />
                  <TextField
                    floatingLabelText="Message"
                    multiLine
                    rows={3}
                    floatingLabelStyle={{color: '#777'}}
                    floatingLabelFocusStyle={{color: blue500}}
                    underlineFocusStyle={{borderColor: blue500}}
                    underlineStyle={{borderColor: '#777'}}
                    textareaStyle={{color: '#303030'}}
                    style={{marginBottom: '25px'}}
                    value={this.state.text}
                    onChange={this.handleText}
                  /><br />
                </div>
                <RaisedButton
                  backgroundColor={blue500}
                  buttonStyle={{color: '#FFF'}}
                  style={{
                    marginBottom: '25px'
                  }}
                  onTouchTap={this.handleSubmit}
                >
                  Send
                </RaisedButton>
              </Col>
            </Row>
          </Container>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Snackbar
            open={this.state.snack}
            message="Please Complete All Fields With Valid Info"
            autoHideDuration={3000}
            onRequestClose={this.handleRequestClose}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
