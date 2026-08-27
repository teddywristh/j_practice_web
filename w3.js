let bedrooms = 3;
const taxRate = 0.08;

let price;
let result = null;
let sqrt = 1200;
let city = "Boston";
let isSold = true;

function square(x) {
    return x * x;
}

const square2 = (x) => x * x;

function greet(name) {
    (x) => x * 2;
}

if (bedrooms > 2) {
    console.log("This is a big house");
}
else {
    console.log("This is a small house");
}   
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 1. Create an array of prediction samples
const predictions = [
    { id: 1, name: "例如A", result: 28 },
    { id: 2, name: "例如B", result: 52 },
    { id: 3, name: "例如C", result: 74 },
    { id: 4, name: "例如D", result: 19 }
];


// 2. Use a for loop to filter result >= 80
const filteredPredictions = [];

for (let i = 0; i < predictions.length; i++) {
    if (predictions[i].result >= 50) {
        filteredPredictions.push(predictions[i]);
    }
}

console.log("Filtered:", filteredPredictions);


// 3. Function to sum all result values
function sumResults(data) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total = total + data[i].result;
    }

    return total;
}

console.log("Total:", sumResults(predictions));


// 4. Function to find the object with the largest result
function findLargest(data) {
    let largest = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i].result > largest.result) {
            largest = data[i];
        }
    }

    return largest;
}

console.log("Largest:", findLargest(predictions));