import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
//! Even though I'm not going to use Redux I should understand it so I didn't confusing my lack of knowledge with gatsby as something that I've missed.
//* We've got through the difficult part now it's much easier to understand where I am and what I'm doing. Redux will be easy for me to learn.
    //* Read the Redux documentation.
class App extends Component { 
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />                                     {/* <Switch> means that at any point of time only allow one of sthses Routes to take presedence. With the scitch tag it'll only use the first corresponing route it finds. */}
          <Switch>                                       {/* //* It looks like the components are less like components but seperate pages */}
            <Route exact path='/' component={Home}/>     {/* // "exact path=" means to set home to '/' rather than it loading "/about" or any other page that just has a "/" in the biggining of it.  */}
            <Route path='/about' component={About} />    {/* path= & component= are not parameters through which to pass in props. This is Router so it has different rules. */}
            <Route path='/contact' component={Contact} />{/* //* Routes mean to not send a request to the server to load up a new page but to the server but get intercepted by React and load a component corresponding to the href-tag instead */}
            <Route path='/:post_id' component={Post} />  {/* This will render whatever the post clicked on and what will go into the path is the post's id. */}
          </Switch>  {/* basically there is only one page that is essentailly a template for whatever list. */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
