import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Error from './Error';
import userDummy from './userDummy';
import DropdownList from './DropdownList';

import {Link} from 'react-router-dom';

const userPages = () => {
  return (
      <>
      <h1>userPages Page</h1>
        {userDummy.map((user, index) => (
          <h4 key={index}>
            {/* <Link to={`/userDummy/${index + 1}`}>{user.name}'s Page</Link> */}
            <Link to={`/userDummy/${index + 1}`}>{user.name}'s Page</Link>
          </h4>
        ))}
      </>
    );
};


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' />
        <Route exact path='/about' component={About} />
        <Route exact path='/Services' component={Services} />
        <Route exact path='/Services/:first' component={Services} />
        <Route exact path='/userDummy' component={userPages} />
        <Route exact path='/userDummy/:asd' component={userPages} />
        <Route exact path='/DropdownList' component={DropdownList} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
export { Route, Switch };       
