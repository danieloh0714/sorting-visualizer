import React, {useState} from 'react';

import './App.css';
import Buttons from './components/Buttons';
import ArrayBars from './components/ArrayBars';
import {generateArray, speedsFew, speedsMany} from './utils/utils';
import ToggleSizeButton from './components/ToggleSizeButton';


const App = () => {
    const [arr, setArr] = useState(generateArray('few'));
    const [arrSize, setArrSize] = useState('few');
    const [isSorting, setIsSorting] = useState(false);
    const [speeds, setSpeeds] = useState(speedsFew);

    const toggleSize = () => {
        setArrSize(arrSize === 'few' ? 'many' : 'few');
        setSpeeds(arrSize === 'few' ? speedsMany : speedsFew);
        setArr(generateArray(arrSize === 'few' ? 'many' : 'few'));
    };

    const newArray = () => {
        setArr(generateArray(arrSize));
    };

    return (
        <>
            <Buttons arr={arr} newArray={newArray} speeds={speeds} isSorting={isSorting} setIsSorting={setIsSorting} />
            <ArrayBars arr={arr} arrSize={arrSize} />
            <ToggleSizeButton isSorting={isSorting} toggleSize={toggleSize} />
        </>
    );
};

export default App;
