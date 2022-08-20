import React from 'react';
import { Button } from './components/Button';
import { Screen } from './components/Screen';
import { evaluate } from 'mathjs';  
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: '',
    };

    this.changeNumber = this.changeNumber.bind(this);
    this.deleteNumber = this.deleteNumber.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  changeNumber(newNumber) {
    const screen = this.state.screen;
    this.setState({
      screen: screen + newNumber,
    });
  }

  deleteNumber() {
    this.setState({
      screen: '',
    });
  }

  calculate() {
    this.setState({
      screen: evaluate(this.state.screen)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='calculator-container'>
            <Screen 
              screen={this.state.screen} />
            <div className='row'>
              <Button
                text='1'
                onClick={this.changeNumber}
              />
              <Button
                text='2'
                onClick={this.changeNumber}
              />
              <Button
                text='3'
                onClick={this.changeNumber}
              />
              <Button
                text='+'
                onClick={this.changeNumber}
              />
            </div>
            <div className='row'>
              <Button
                text='4'
                onClick={this.changeNumber}
              />
              <Button
                text='5'
                onClick={this.changeNumber}
              />
              <Button
                text='6'
                onClick={this.changeNumber}
              />
              <Button
                text='-'
                onClick={this.changeNumber}
              />
            </div>
            <div className='row'>
              <Button
                text='7'
                onClick={this.changeNumber}
              />
              <Button
                text='8'
                onClick={this.changeNumber}
              />
              <Button
                text='9'
                onClick={this.changeNumber}
              />
              <Button
                text='*'
                onClick={this.changeNumber}
              />
            </div>
            <div className='row'>
              <Button
                text='='
                onClick={this.calculate}
              />
              <Button
                text='0'
                onClick={this.changeNumber}
              />
              <Button
                text='.'
                onClick={this.changeNumber}
              />
              <Button
                text='/'
                onClick={this.changeNumber}
              />
            </div>
            <div className='row'>
              <Button
                text='AC'
                onClick={this.deleteNumber} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}


export default App;
