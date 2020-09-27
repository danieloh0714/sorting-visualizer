import React, {useState} from 'react';
import './App.css';
import 'rbx/index.css';
import {Container, Title} from 'rbx';
import Buttons from './components/Buttons';
import ArrayBars from './components/ArrayBars';
import {newArray} from './utils/newArray.js';


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
