import React, {useState} from 'react';

import {ButtonGroup} from '@material-ui/core';
import NewArrayButton from './NewArrayButton';
import SortAlgoButtons from './SortAlgoButtons';
import SortButton from './SortButton';
import { runSelectedAlgo } from '../../utils/utils';


const TopButtons = ({arr, newArray, speeds, isSorting, setIsSorting}) => {
    const [selectedAlgo, setSelectedAlgo] = useState('');

    const isSelected = (algo) => {
        if (algo === selectedAlgo) return 'outlined';
        return 'contained';
    };

    const sort = () => {
        runSelectedAlgo(selectedAlgo, arr, setIsSorting, speeds);
    };

    return (
        <div style={{textAlign: 'center', marginTop: '2%'}}>
            <ButtonGroup>
                <NewArrayButton isSorting={isSorting} newArray={newArray} />
                <SortAlgoButtons isSorting={isSorting} setSelectedAlgo={setSelectedAlgo} isSelected={isSelected} />
                <SortButton isSorting={isSorting} selectedAlgo={selectedAlgo} sort={sort} />
            </ButtonGroup>
        </div>
    );
};

export default TopButtons;
