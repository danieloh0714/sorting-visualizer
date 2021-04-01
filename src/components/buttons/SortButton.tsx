import { Button } from '@material-ui/core';
import React from 'react';

interface Props {
    isSorting: boolean;
    selectedAlgo: any;
    sort: any;
};

const SortButton: React.FC<Props> = ({ isSorting, selectedAlgo, sort }) => (
    <Button
        variant='contained'
        color='secondary'
        disabled={isSorting || selectedAlgo === ''}
        onClick={sort}
    >
        Sort
    </Button>
);

export default SortButton;
