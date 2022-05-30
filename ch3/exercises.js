const min = (a, b) => {
    return a < b ? a : b;
};

const isEven = (num) => {
    if (num < 0) {
        num *= -1;
    }

    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else {
        return isEven(num - 2);
    }
};

const countBs = (word) => {
    return countChar(word, 'B');
};

const countChar = (word, letter) => {
    let count = 0;

    for (let ndx = 0; ndx < word.length; ndx++) {
        if (word[ndx] === letter) {
            count++;
        }
    }
    return count;
};

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));