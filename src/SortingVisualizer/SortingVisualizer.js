import React from 'react';
import './SortingVisualizer.css';


export default class SortingVisualizer extends React.Component {
    constructor() {
        super();

        this.state = {
            arr: [],
        };
    }

    componentDidMount() {
        this.newArray();
    }

    newArray() {
        const arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(Math.floor(Math.random() * (300 - 5 + 1) + 5));
        }
        this.setState({arr: arr});
    }

    render() {
        const arr = this.state.arr;

        return (
            <>
                <div id='array-container'>
                    {arr.map((value, idx) => (
                        <div className='array-bar'
                        key={idx}
                        style={{height: `${value}px`}}>
                        </div>
                    ))}
                </div>
                <div id='btns'>
                    <button class='btn' onClick={() => this.newArray()}>New Array</button>
                </div>
            </>
        );
    }
}