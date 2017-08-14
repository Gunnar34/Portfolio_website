import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/svg-icons/navigation/menu';
import More from 'material-ui/svg-icons/navigation/more-horiz';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Copy from 'material-ui/svg-icons/content/content-copy';
import CopyToClipboard from 'react-copy-to-clipboard';
import Snackbar from 'material-ui/Snackbar';
import { SocialIcon } from 'react-social-icons';
import { ScreenClassRender } from 'react-grid-system';
// import { styles } from './styles.js';

const styleFunction = (screenClass, props) => {
  let height = 70;
  let fontSize = 10;
  if (screenClass === 'sm') {height = 150; fontSize = 56; }
  if (screenClass === 'md') {height = 125; fontSize = 48; }
  if (screenClass === 'lg') {height = 70; fontSize = 20; }
  if (screenClass === 'xl') {height = 70; fontSize = 20; }
  return {
    fontSize: `${fontSize}px`,
    height: `${height}px`,
    ...props.style,
  };
};

const muiTheme = getMuiTheme({
  palette: {
    Color: cyan500,
  }
});

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      copied: false,
      snack: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleCopy = () => {
    this.setState({copied: true});
    this.setState({snack: true});
  };

  handleRequestClose = () => {this.setState({snack: false, });};

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          <ScreenClassRender style={styleFunction}>
            <AppBar
              style={{backgroundColor: '#56c8d8'}}
              iconElementLeft={
                <IconButton onTouchTap={this.handleToggle}>
                  <Menu />
                </IconButton>
              }
              iconElementRight={
                <IconMenu
                  iconButtonElement={<IconButton><More /></IconButton>}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                  <a target="_blank" href="https://www.linkedin.com/in/noah-rolf/" style={{ textDecoration: 'none' }}>
                    <MenuItem
                      primaryText="LinkedIn"
                      leftIcon={<SocialIcon url="https://www.linkedin.com/in/noah-rolf/"/>}
                    />
                  </a>
                  <a target="_blank" href="https://github.com/Gunnar34" style={{ textDecoration: 'none' }}>
                    <MenuItem
                      primaryText="Github"
                      leftIcon={<SocialIcon url="https://github.com/Gunnar34"/>}
                    />
                  </a>
                  <MenuItem
                    primaryText="Contact"
                    leftIcon={<ArrowDropLeft />}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    menuItems={[
                      // <a href="mailto:noahrolf1@gmail.com" style={{ textDecoration: 'none' }}>
                      <CopyToClipboard text={"noahrolf1@gmail.com"} onCopy={this.handleCopy}>
                        <MenuItem
                          primaryText="noahrolf1@gmail.com"
                          leftIcon={<Copy />}
                        />
                      </CopyToClipboard>,
                      // </a>,
                      <CopyToClipboard text={"(651)-788-3057"} onCopy={this.handleCopy}>
                        <MenuItem
                          primaryText="(651)-788-3057"
                          leftIcon={<Copy />}
                        />
                      </CopyToClipboard>,
                      <Divider />,
                      <MenuItem disabled primaryText="Prime Academy" secondaryText="| Student"/>,
                    ]}
                  />
                </IconMenu>
              }
            />
          </ScreenClassRender>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Drawer
            containerStyle={{height: '100%', top: '8px', backgroundColor: 'rgba(48, 48, 48, .9)'}}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})
            }
          >
            <ScreenClassRender style={styleFunction}>
              <AppBar title="More"
                titleStyle={{color: '#FFF'}}
                style={{backgroundColor: '#9BDCDE', opacity: 1}}
                iconElementLeft={
                  <IconButton onTouchTap={this.handleToggle}>
                    <Link to="/" style={{ textDecoration: 'none'}}>
                      <ActionHome />
                    </Link>
                  </IconButton>
                }
                iconElementRight={
                  <IconButton onTouchTap={this.handleToggle}>
                    <NavigationClose color="#FFF" />
                  </IconButton>
                }
              />
            </ScreenClassRender>
            <Link to="/" style={{ textDecoration: 'none'}}><MenuItem onTouchTap={this.handleClose} style={{color: '#eee'}}>Home</MenuItem></Link>
            <Link to="/projects" style={{ textDecoration: 'none'}}><MenuItem onTouchTap={this.handleClose} style={{color: '#eee'}}>My Projects</MenuItem></Link>
            <Link to="/resume" style={{ textDecoration: 'none'}}><MenuItem onTouchTap={this.handleClose} style={{color: '#eee'}}>My Resume</MenuItem></Link>
            <Link to="/contact" style={{ textDecoration: 'none'}}><MenuItem onTouchTap={this.handleClose} style={{color: '#eee'}}>Contact Me</MenuItem></Link>
          </Drawer>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Snackbar
            open={this.state.snack}
            message="Copied To Your Clipboard"
            autoHideDuration={3000}
            onRequestClose={this.handleRequestClose}
          />
        </MuiThemeProvider>
        </div>
    );
  }
}
