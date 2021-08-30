import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
      string: 'Hello Bennie'

    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.state.string }
          </p>

          <button onClick= {() => this.setState({ string: 'Hello Johnny' })}>
          Change Text
          </button>
        </header>
      </div>
    );
  }
}
export default App;
