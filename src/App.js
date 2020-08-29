import React, {Component} from 'react';
import KeyPad from './components/keypad';
import ResultPad from './components/result';
import './App.scss';
class App extends Component {
  constructor(props) {
    super();

    this.state = {
      result: ""
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || '') + ''
      })
    }catch {
      this.setState({
        result: "Invalid"
      })
    }
  }

  onClickhandler = (symbol) => {
    if(symbol === '=') {
      this.calculate()
    }else 
    if(symbol === 'CE') {
      this.reset()
    }else if(symbol === '<=') {
      this.delete()
    }else {
      this.setState({result: this.state.result + symbol})
    }
  }

  reset = () => {    
    this.setState({result: ''})    
  }

  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">A Simple Calculator</header>
        <div className="calculator-wrapper">
            <div className="visible-wrapper">
                <ResultPad result={this.state.result} />
                <KeyPad onClickhandler={this.onClickhandler} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;