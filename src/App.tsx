import React, { useState } from 'react';
import './App.css';
import ArrayBars from './components/ArrayBars';
import Buttons from './components/buttons/Buttons';
import { generateArray, speedsFast, speedsSlow } from './utils/utils';

const App = () => {
    const [arr, setArr] = useState<Array<number>>(generateArray(20));
    const [arrSize, setArrSize] = useState<number>(20);
    const [speeds, setSpeeds] = useState<Array<Array<number>>>(speedsSlow);

    const newArray = () => setArr(generateArray(arrSize));

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
