import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/layout/Home'
import BookSearch from './components/books/bookSearch'
import BookSummary from './components/books/bookSumaary'
import About from './components/layout/About'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignOut'

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/books" component={BookSearch} />
            <Route path="/books/:id" component={BookSummary} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
