import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Common/Login/Login';
import { connect } from "react-redux";
import { initializingApp } from './redux/appReducer';
import Spinner from './Common/Spinner/Spinner'

class App extends React.Component {

  componentDidMount() {
    this.props.initializingApp();
  }

  render() {
    if (!this.props.initialize) {
      return <Spinner/>
    }

    return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer />
              <Navbar store={this.props.store} />
              <div className='app-wrapper__content'>
                  <Routes>
                      <Route  path="/dialogs/*" 
                              element={<DialogsContainer />}/>
                      <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                      <Route path='/profile/*' element={<ProfileContainer/>}/>
                      <Route path="/news" element={<News />} />
                      <Route path="/music" element={<Music />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/users" element={<UsersContainer />} />
                      <Route path="/login" element={<Login />} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    initialize: state.app.initialize
  }
}

export default connect(mapStateToProps, {initializingApp})(App);
