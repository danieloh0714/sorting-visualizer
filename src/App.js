import React, {useState} from 'react';
import './App.css';
import 'rbx/index.css';
import {Title} from 'rbx';
import {Container} from '@material-ui/core';
import Buttons from './components/Buttons';
import ArrayBars from './components/ArrayBars';
import {newArray} from './utils/utils';


const App = () => {
    const [arr, setArr] = useState(newArray);

    return (
        <Container>
            <Title>Sorting Visualizer</Title>
            <Buttons arr={arr} setArr={setArr} />
            <ArrayBars arr={arr} />
        </Container>
    );
};

export default App;
