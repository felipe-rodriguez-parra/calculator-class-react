import React from 'react';
import { Button } from './components/Button';
import data from './datasets/data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='calculator-container'>
          <div className='row'>
              <Button 
              name={data.slice(15, 19).map(data => {
                return (
                  <div className='button-container'>
                    {data.name}
                  </div>
                )
              })} />
            </div>
            <div className='row'>
              <Button 
              name={data.slice(0, 4).map(data => {
                return (
                  <div className='button-container'>
                    {data.name}
                  </div>
                )
              })} />
            </div>
            <div className='row'>
              <Button 
              name={data.slice(4, 8).map(data => {
                return (
                  <div className='button-container'>
                    {data.name}
                  </div>
                )
              })} />
            </div>
            <div className='row'>
              <Button 
              name={data.slice(8, 12).map(data => {
                return (
                  <div className='button-container'>
                    {data.name}
                  </div>
                )
              })} />
            </div>
            <div className='row'>
              <Button 
              name={data.slice(12, 15).map(data => {
                return (
                  <div className='button-container'>
                    {data.name}
                  </div>
                )
              })} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}


export default App;
