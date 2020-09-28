const newArray = () => (
    Array.from({length: 20}, () => Math.floor(Math.random() * (100 - 5 + 1) * 5))
);

const arrColour = 'pink';
const animColour = 'navy';

export {newArray, arrColour, animColour};
