import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/svg-icons/navigation/menu';
import More from 'material-ui/svg-icons/navigation/more-horiz';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropLeft from 'material-ui/svg-icons/navigation/chevron-left';
// import { styles } from './styles.js';

const muiTheme = getMuiTheme({
  palette: {
    Color: cyan500,
  },
  appBar: {
    height: 70,
  },
});

export default class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          <AppBar
            title="Noah Rolf's Portfolio"
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
                  <MenuItem primaryText="LinkedIn" />
                </a>
                <a target="_blank" href="https://github.com/Gunnar34" style={{ textDecoration: 'none' }}>
                  <MenuItem primaryText="Github" />
                </a>
                <MenuItem
                  primaryText="Contact"
                  leftIcon={<ArrowDropLeft />}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  menuItems={[
                    <a target="_blank" href="mailto:noahrolf1@gmail.com" style={{ textDecoration: 'none' }}>
                      <MenuItem primaryText="noahrolf1@gmail.com"/>
                    </a>,
                    <MenuItem primaryText="(651)-788-3057"/>,
                    <Divider />,
                    <MenuItem primaryText="Prime Academy" secondaryText="| Student"/>,
                  ]}
                />
              </IconMenu>
            }
          />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Drawer
            containerStyle={{height: 'calc(100% - 64px)', top: 64}}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})
            }
          >
            <AppBar title="More"
              iconElementLeft={
                <IconButton onTouchTap={this.handleToggle}>
                  <ActionHome />
                </IconButton>
              }
            />
            <Link to="/" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>
            <Link to="/about" style={{ textDecoration: 'none' }}><MenuItem onTouchTap={this.handleClose}>About Me</MenuItem></Link>
          </Drawer>
        </MuiThemeProvider>
        </div>
    );
  }
}
