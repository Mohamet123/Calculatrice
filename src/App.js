
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
        };
    }

    handleClick = (e) => {
        this.setState({
            result: this.state.result.concat(e.target.name),
        });
    }

    clear = () => {
        this.setState({
            result: "",
        });
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1),
        });
    }

    calculate = () => {
        try {
            this.setState({
                result: eval(this.state.result).toString(),
            });
        } catch (err) {
            this.setState({
                result: "Error",
            });
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <form>
                        <input type='text' value={this.state.result}/>
                    </form>
                    <div className='keypad'>
                        <button onClick={this.clear} id='clear'>Clear</button>
                        <button onClick={this.backspace} className='dangerLight' id='backspace'>C</button>
                        <button name='/' className='hightlight ' onClick={this.handleClick}>&divide;</button>
                        <button name='7' onClick={this.handleClick}>7</button>
                        <button name='8' onClick={this.handleClick}>8</button>
                        <button name='9' onClick={this.handleClick}>9</button>
                        <button name='*' className='hightlight ' onClick={this.handleClick}>&times;</button>
                        <button name='4' onClick={this.handleClick}>4</button>
                        <button name="5" onClick={this.handleClick}>5</button>
                        <button name='6' onClick={this.handleClick}>6</button>
                        <button name='-' className='hightlight ' onClick={this.handleClick}>&ndash;</button>
                        <button name='1' onClick={this.handleClick}>1</button>
                        <button name='2' onClick={this.handleClick}>2</button>
                        <button name='3' onClick={this.handleClick}>3</button>
                        <button name='+' className='hightlight ' onClick={this.handleClick}>+</button>
                        <button name='0' onClick={this.handleClick}>0</button>
                        <button name='.' onClick={this.handleClick}>.</button>
                        <button onClick={this.calculate} id='result'>=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
