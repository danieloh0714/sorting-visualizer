import React, {useState} from 'react';

import './App.css';
import TopButtons from './components/buttons/TopButtons';
import ArrayBars from './components/ArrayBars';
import ToggleSizeButton from './components/buttons/ToggleSizeButton';
import {generateArray, speedsFew, speedsMany} from './utils/utils';


const App = () => {
    const [arr, setArr] = useState(generateArray(20));
    const [arrSize, setArrSize] = useState(20);
    const [isSorting, setIsSorting] = useState(false);
    const [speeds, setSpeeds] = useState(speedsFew);

    const toggleSize = () => {
        setArrSize(arrSize === 20 ? 120 : 20);
        setSpeeds(arrSize === 20 ? speedsMany : speedsFew);
        setArr(generateArray(arrSize === 20 ? 120 : 20));
    };

    const newArray = () => {
        setArr(generateArray(arrSize));
    };

    return (
        <>
            <TopButtons arr={arr} newArray={newArray} speeds={speeds} isSorting={isSorting} setIsSorting={setIsSorting} />
            <ArrayBars arr={arr} arrSize={arrSize} />
            <ToggleSizeButton isSorting={isSorting} toggleSize={toggleSize} />
        </>
    );
};

export default App;
