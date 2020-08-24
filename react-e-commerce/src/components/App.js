import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom'

import Home from '../components/home/Home'
// import './App.css';

function App() {
  return (
    <div className="App">

      <ul className="menu-items">
        <li><NavLink activeClassName="active" exact  to="/" >Home</NavLink></li>
        {/* <li><NavLink activeClassName="active" exact  to="/todo-app" >To Do App</NavLink></li> */}
      </ul>

      <Switch>

        {/* 
        ****************
        *** Method 1 ***
        ****************
        
        This mehtod does not give acccess to "props"


        <Route path="/todo-app">
          <ToDoApp />
        </Route>
        <Route path="/">
          <Home />
        </Route> 

        */}

        {/* 
        ****************
        *** Method 2 ***
        ****************
        
        This mehtod does not give acccess to "props" too
        
        
        <Route path="/todo-app" render={ () => <ToDoApp /> } />
        <Route path="/" render={ () => <Home /> } /> 

        */}

        {/*  
        ****************
        *** Method 3 ***
        ****************
        */}

  
          {/* <Route path="/todo-app" component={ToDoApp} /> */}
          <Route path="/" component={Home} />

      </Switch>
      
    </div>
  );
}

export default App;
