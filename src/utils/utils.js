const newArray = () => (
    Array.from({length: 20}, () => Math.floor(Math.random() * (100 - 5 + 1) * 5))
);

const arrColour = 'olive';
const animColour = 'pink';

export {newArray, arrColour, animColour};
