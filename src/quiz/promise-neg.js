function fltrRow(arr, idx) {
    return new Promise((resolve, reject) => {
        if(arr.length > idx) {
            setTimeout(() => {
                //let negRow = [];
                let hasNeg = false;
                for (let i = 0; i < arr.length; i++) {
                    hasNeg = hasNeg || arr[i] < 0;
                }
                if (hasNeg) {
                    resolve(arr);
                } else {
                    console.log(`Row ${idx} has no negative numbers`);
                }
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

rowNegPromises = [];

for (let x = 0; x < array2D.length; x++) {
    rowNegPromises.push(fltrRow(array2D[x], x));
}

Promise.all(rowNegPromises)
    .then((result) => {
        console.log(result);
       for (res of result) {
        console.log(`This row contains a negative number: ${res}`);
       }
    }
    )
    .catch(() => {console.log('There was an error excecuting this promise')});