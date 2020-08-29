import React , {Component} from 'react';

class ResultPad extends Component {
    constructor(props) {
        super();
    }
    render() {
        return(
            <div className="result-pad">
                <div className="wrapper">
                    <p>
                        {this.props.result}
                    </p>
                </div>
            </div>
        )
    }
}

export default ResultPad;