import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from './AppBar';
import Drawer from './Drawer';
import News from './News';
import Courses from './Courses';
import Videos from './Videos';
import Notifications from './Notifications';
import Contact from './Contact';

const style = {
  margin: '8px',
  marginTop: '70px'
}

const Home = () => (
  <div>Home</div>
);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpened: false
    }
  }

  toggleDrawer() {
    this.setState({isDrawerOpened: !this.state.isDrawerOpened});
  }

  render() {
    return (
      <Router>
        <div className="AppComponent">
          <Drawer isDrawerOpened={this.state.isDrawerOpened} toggleDrawer={() => this.toggleDrawer()} />
          <AppBar toggleDrawer={() => this.toggleDrawer()} />
          <div style={style}>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/notifications' render={() => <Notifications />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/courses' render={() => <Courses />} />
            <Route path='/videos' render={() => <Videos />} />
            <Route path='/contact' render={() => <Contact />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
