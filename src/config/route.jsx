import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'
import DetailContainer from '../containers/DetailContainer'

import store from '../config/store'


export default (store) => {
  return (
     <Route path='/' component={MainContainer}>
         <IndexRoute component={HomeContainer} />
          <Route path='detail/:name' component={DetailContainer} />
     </Route>
  );
};

