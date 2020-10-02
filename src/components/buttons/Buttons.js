import React, {useState} from 'react';

import {ButtonGroup} from '@material-ui/core';
import NewArrayButton from './NewArrayButton';
import ToggleSizeButton from './ToggleSizeButton';
import SortAlgoButtons from './SortAlgoButtons';
import SortButton from './SortButton';
import {runSelectedAlgo} from '../../utils/utils';


const TopButtons = ({arr, newArray, toggleSize, speeds}) => {
    const [selectedAlgo, setSelectedAlgo] = useState('');
    const [isSorting, setIsSorting] = useState(false);

    const isSelected = (algo) => {
        if (algo === selectedAlgo) return 'outlined';
        return 'contained';
    };

    const sort = () => {
        runSelectedAlgo(selectedAlgo, arr, setIsSorting, speeds);
    };

    return (
        <div className='btns'>
            <ButtonGroup>
                <NewArrayButton isSorting={isSorting} newArray={newArray} />
                <ToggleSizeButton isSorting={isSorting} toggleSize={toggleSize} />
                <SortAlgoButtons isSorting={isSorting} setSelectedAlgo={setSelectedAlgo} isSelected={isSelected} />
                <SortButton isSorting={isSorting} selectedAlgo={selectedAlgo} sort={sort} />
            </ButtonGroup>
        </div>
    );
};

export default TopButtons;
