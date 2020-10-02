import React, {useState} from 'react';
import './App.css';
import 'rbx/index.css';
import {Title} from 'rbx';
import {Container} from '@material-ui/core';
import Buttons from './components/Buttons';
import ArrayBars from './components/ArrayBars';
import {newArray} from './utils/utils';


const App = () => {
    const [arrSize, setArrSize] = useState('few');
    const [arr, setArr] = useState(newArray(arrSize));

    const toggleSize = () => {
        setArrSize(arrSize === 'few' ? 'many' : 'few');
        setArr(newArray(arrSize === 'few' ? 'many' : 'few'));
    };

    return (
        <Container>
            <Title>Sorting Visualizer</Title>
            <Buttons arr={arr} setArr={setArr} arrSize={arrSize} toggleSize={toggleSize} />
            <ArrayBars arr={arr} arrSize={arrSize} />
        </Container>
    );
};

export default App;
