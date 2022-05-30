const loopTriangle = () => {
    let triString = '#';

    while(triString.length <= 7) {
        console.log(triString);
        triString += '#';
    }
};

const fizzBuzz = () => {
    for(let num = 1; num <= 100; num++) {
        if (!(num % 3) && !(num % 5)) {
            console.log('Fizz Buzz')
        } else if (!(num % 3)) {
            console.log('Fizz');
        } else if (!(num % 5)) {
            console.log('Buzz');
        } else {
            console.log(num);
        }
    }
};

const genChessBoard = () => {
    const size = 8;
    let board = '';

    for (let height = 0; height < size; height++) {
        for (let width = 0; width < size; width ++) {
            if (height % 2) {
                if (width % 2) {
                    board += ' ';
                } else {
                    board += '#';
                }
            } else {
                if (width % 2) {
                    board += '#';
                } else {
                    board += ' ';
                }
            }
        }
        if (height < size - 1) {
            board += '\n';
        }
    }
    return board;
}

console.log(genChessBoard());