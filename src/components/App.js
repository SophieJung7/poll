import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PollsList from './Polls/PollsList';
import PollPage from './Polls/PollPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={PollsList} />
            <Route path='/polls/:id' exact component={PollPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
