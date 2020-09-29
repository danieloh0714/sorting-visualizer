import React, {useState} from 'react';
import './App.css';
import 'rbx/index.css';
import {Title} from 'rbx';
import {Container} from '@material-ui/core';
import Buttons from './components/Buttons';
import ArrayBars from './components/ArrayBars';
import {newArray} from './utils/utils';


const App = () => {
    const [arrSize, setArrSize] = useState('small');
    const [arr, setArr] = useState(newArray(arrSize));

    const toggleSize = () => {
        setArrSize(arrSize === 'small' ? 'large' : 'small');
        setArr(newArray(arrSize));
    };

    return (
        <Container>
            <Title>Sorting Visualizer</Title>
            <Buttons arr={arr} setArr={setArr} toggleSize={toggleSize} />
            <ArrayBars arr={arr} arrSize={arrSize} />
        </Container>
    );
};

export default App;
