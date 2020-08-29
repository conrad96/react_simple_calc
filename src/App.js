import React, {Component} from 'react';
import KeyPad from './components/keypad';
import ResultPad from './components/result';
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
      this.calculate
    }else {
      this.setState({result: this.state.result + symbol})
    }
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