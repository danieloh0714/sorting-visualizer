import { ButtonGroup } from '@material-ui/core';
import React, { useState } from 'react';
import { runSelectedAlgo } from '../../utils/utils';
import NewArrayButton from './NewArrayButton';
import SortAlgoButtons from './SortAlgoButtons';
import SortButton from './SortButton';
import ToggleSizeButton from './ToggleSizeButton';

interface Props {
    arr: Array<number>;
    newArray: React.Dispatch<React.SetStateAction<any[]>>;
    toggleSize: () => void;
    speeds: Array<Array<number>>;
};

const TopButtons: React.FC<Props> = ({ arr, newArray, toggleSize, speeds }) => {
    const [selectedAlgo, setSelectedAlgo] = useState<string>('');
    const [isSorting, setIsSorting] = useState<boolean>(false);

    const isSelected = (algo: string) => {
        if (algo === selectedAlgo) return 'outlined';
        return 'contained';
    };

    const sort = () => runSelectedAlgo(selectedAlgo, arr, setIsSorting, speeds);

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
