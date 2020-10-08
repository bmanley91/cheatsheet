const removeDupes = (input: number[]): number[] => {
    const set = new Set(input);
    return Array.from(set);
};

console.log(removeDupes([1,2,1,3,2,4]));
