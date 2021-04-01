import { Button } from '@material-ui/core';
import React from 'react';

interface Props {
    isSorting: boolean;
    toggleSize: any;
};

const ToggleSizeButton: React.FC<Props> = ({ isSorting, toggleSize }) => (
    <Button
        variant='contained'
        disabled={isSorting}
        onClick={toggleSize}
    >
        Toggle Size
    </Button>
);

export default ToggleSizeButton;
