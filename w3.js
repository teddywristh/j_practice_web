const bedrooms = 3;
const taxRate = 0.08;
const city = "Boston";
const isSold = true;

// Math helper function
const square = (x) => x * x;

// Greeting helper function
function greet(name) {
  return `Hello, ${name}!`;
}

// House size evaluation
if (bedrooms > 2) {
  console.log("This is a big house");
} else {
  console.log("This is a small house");
}

// Counter loop
for (let i = 0; i < 5; i++) {
  console.log(`Index: ${i}`);
}

const predictions = [
  { id: 1, name: "例如A", result: 28 },
  { id: 2, name: "例如B", result: 52 },
  { id: 3, name: "例如C", result: 74 },
  { id: 4, name: "例如D", result: 19 }
];

// Filter predictions (result >= 50)
const filteredPredictions = [];
for (let i = 0; i < predictions.length; i++) {
  if (predictions[i].result >= 50) {
    filteredPredictions.push(predictions[i]);
  }
}
console.log("Filtered (>= 50):", filteredPredictions);

// Calculate total sum of results
function sumResults(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].result;
  }
  return total;
}
console.log("Total:", sumResults(predictions));

// Find object with the largest result
function findLargest(data) {
  if (data.length === 0) return null;
  let largest = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].result > largest.result) {
      largest = data[i];
    }
  }
  return largest;
}
console.log("Largest:", findLargest(predictions));

const form = document.getElementById("houseForm");
const feedbackContainer = document.getElementById("feedbackContainer");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    feedbackContainer.innerHTML = "";

    const locationInput = document.getElementById("location").value.trim();
    const priceInput = document.getElementById("price").value.trim();
    const bedroomsInput = document.getElementById("bedrooms").value.trim();
    const bedroomsNum = Number(bedroomsInput);

    let errorMessage = "";

    if (locationInput === "" || priceInput === "" || bedroomsInput === "") {
      errorMessage = "All fields are required.";
    } else if (isNaN(bedroomsNum) || bedroomsNum <= 0) {
      errorMessage = "Bedrooms must be a positive number greater than 0.";
    }

    if (errorMessage !== "") {
      const errorDiv = document.createElement("p");
      errorDiv.className = "error-message";
      errorDiv.textContent = errorMessage;
      feedbackContainer.appendChild(errorDiv);
    } else {
      const successDiv = document.createElement("p");
      successDiv.className = "success-message";
      successDiv.textContent = "Ready to submit";
      feedbackContainer.appendChild(successDiv);
    }
  });
}