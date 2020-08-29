import React, {Component} from 'react';
import './keypad.scss';

class KeyPad extends Component {
    constructor(props) {
        super();

        this.keypadKeys = [            
            { value: '/', type: 'symbol'},
            { value: '*', type: 'symbol'},
            { value: '+', type: 'symbol'},
            { value: '-', type: 'symbol'},
            { value: '0', type: 'number'},
            { value: '1', type: 'number'},
            { value: '2', type: 'number'},
            { value: '3', type: 'number'},
            { value: '4', type: 'number'},
            { value: '5', type: 'number'},
            { value: '6', type: 'number'},
            { value: '7', type: 'number'},
            { value: '8', type: 'number'},
            { value: '9', type: 'number'},
            { value: '0', type: 'number'},            
            { value: 'CE', type: 'symbol'},
            { value: '<=', type: 'symbol'},
            { value: '=', type: 'symbol'},
        ];
    }       

    render(props) {
        return (
            <div className="keypad">
                <div className="keypad-wrapper">
                    <div className="keypad-row">
                        <ul>
                            {
                                this.keypadKeys.map((data, index)=> {
                                    if(index < 4) {
                                        return (
                                            <li 
                                            key={index}
                                            name={data.value}
                                            className={data.type}
                                            onClick={() => this.props.onClickhandler(data.value)}
                                            >
                                                {data.value}
                                            </li>
                                        );
                                    }else {
                                        return (
                                            <li 
                                            key={index}
                                            name={data.value}
                                            className={data.type}
                                            onClick={() => this.props.onClickhandler(data.value)}
                                            >
                                                {data.value}
                                            </li>
                                        );
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default KeyPad;