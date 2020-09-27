const newArray = () => (
    Array.from({length: 100}, () => Math.floor(Math.random() * (100 - 5 + 1) * 5))
);

export {newArray};
