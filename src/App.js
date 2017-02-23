import React from 'react';
import './App.css';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationMenu />
        <Header />
        <div className="">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Panel title</h3>
            </div>
            <div className="panel-body">
              Panel content
            </div>
            <div className="panel-footer" >Panel footer</div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
