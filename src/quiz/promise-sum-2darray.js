function sumRow(arr, idx) {
    return new Promise((resolve, reject) => {
        if(arr.length > idx) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                    
                }
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
    });
}

async function calculateSum() {
    const array2D = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    rowSumPromises = [];

    for (let x = 0; x < array2D.length; x++) {
        rowSumPromises.push(sumRow(array2D[x], x));
    }
    try {
        const rowSums = await Promise.all(rowSumPromises);
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;d
        });
        console.log(`Sum is ${sum}`);
        return 'done';
    } catch (error) {
        console.log(`Error Msg: ${error}`);
        return 'failed';
    }
}

calculateSum().then((status) => console.log(status));


// const sum = 
// Promise.all(rowSumPromises)
//     .then((result) => {
//        let sum = 0;
//        for (res of result) {
//             sum += res;
//        }
//        console.log(`Total 2D array sum is ${sum}`);
//     }
//     )
//     .catch(() => {console.log('There was an error excecuting this promise')});


