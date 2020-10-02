import React, {useState} from 'react';

import './App.css';
import Buttons from './components/buttons/Buttons';
import ArrayBars from './components/ArrayBars';
import {generateArray, speedsSlow, speedsFast} from './utils/utils';


const App = () => {
    const [arr, setArr] = useState(generateArray(20));
    const [arrSize, setArrSize] = useState(20);
    const [speeds, setSpeeds] = useState(speedsSlow);

    const newArray = () => {
        setArr(generateArray(arrSize));
    };

    const toggleSize = () => {
        setArrSize(arrSize === 20 ? 120 : 20);
        setSpeeds(arrSize === 20 ? speedsFast : speedsSlow);
        setArr(generateArray(arrSize === 20 ? 120 : 20));
    };

    return (
        <div>
            <Buttons arr={arr} newArray={newArray} toggleSize={toggleSize} speeds={speeds} />
            <ArrayBars arr={arr} arrSize={arrSize} />
        </div>
    );
};

export default App;
