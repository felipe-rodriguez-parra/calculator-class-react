import React from 'react';
import { Button } from './components/Button';
import { Screen } from './components/Screen';
import data from './datasets/data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      screen: '0',
    };
  }

  handleClick(e) {
    this.setState({
      screen: e,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='calculator-container'>
          <Screen screen={this.state.screen} />
            <div className='row'>
              <Button
                onClick={(e) => this.handleClick(e)}
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
