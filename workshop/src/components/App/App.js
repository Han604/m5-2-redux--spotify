import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect,
} from 'react-router-dom';
import {useDispatch} from 'react-redux'

import GlobalStyles from '../GlobalStyles.js';
import ArtistRoute from '../ArtistRoute';

//ACTIONS

import { requestAccessToken, receiveAccessToken, receiveAccessTokenError } from '../../actions'


// WS BOOGIE
const DEFAULT_ARTIST_ID = '5usbqiU7sjvszjWecANDL6'

const App = () => {
  const dispatch = useDispatch()
  React.useEffect (()=> {
    dispatch(requestAccessToken())
    fetch ('/spotify_access_token')
      .then( res => res.json())
      .then( res => {
        dispatch(receiveAccessToken(res.access_token));
      })
      .catch ((err) => {
        console.error(err);
        dispatch(receiveAccessTokenError());
      })
  }, [])
  return (
    <Router>
      <GlobalStyles/>
        <Switch>
          <Route path ='/artist/:artistId'><ArtistRoute/></Route>
          <Redirect path to={`/artist/${DEFAULT_ARTIST_ID}`}/>
        </Switch>
    </Router>
  )};

export default App;
