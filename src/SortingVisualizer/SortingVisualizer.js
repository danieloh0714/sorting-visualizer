import React from 'react';
import './SortingVisualizer.css';
import {getMergeSort} from '../SortingAlgorithms/mergeSort.js';
import {getSelectionSort} from '../SortingAlgorithms/selectionSort.js';


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

    handleMergeSort() {
        const animations = getMergeSort(this.state.arr);
        const arrBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            if (animations[i][2]) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                const barTwoStyle = arrBars[barTwoIdx].style;
                const color = i % 3 == 0 ? 'pink' : 'olive';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }
    }

    handleSelectionSort() {
        const animations = getSelectionSort(this.state.arr);
        const arrBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            if (animations[i][2]) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                const barTwoStyle = arrBars[barTwoIdx].style;
                const color = i % 4 == 0 ? 'pink' : 'olive';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 50);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 50);
            }
        }
    }

    render() {
        const arr = this.state.arr;

        return (
            <>
                <div id='array-container'>
                    {arr.map((value, idx) => (
                        <div
                            className='array-bar'
                            key={idx}
                            style={{height: `${value}px`}}>
                        </div>
                    ))}
                </div>
                <div id='btns'>
                    <button class='btn' onClick={() => this.newArray()}>New Array</button>
                    <button class='btn' onClick={() => this.handleMergeSort()}>Merge Sort</button>
                    <button class='btn' onClick={() => this.handleSelectionSort()}>Selection Sort</button>
                </div>
            </>
        );
    }
}
