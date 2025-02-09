// Function to calculate BMI using ES6 syntax
const calculateBMI = (weight, height) => {
  if (height === 0) return 'Height cannot be zero'; // Prevent division by zero

  const bmi = weight / (height ** 2);  // BMI formula: weight (kg) / height (m)^2
  return bmi.toFixed(2);  // Return BMI rounded to 2 decimal places
}

// Function to classify BMI
const classifyBMI = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
  if (bmi >= 25 && bmi < 29.9) return 'Overweight';
  return 'Obesity';
}

// Example usage
const weight = 70;  // kg
const height = 1.75; // meters

const bmi = calculateBMI(weight, height);
console.log(`Your BMI is ${bmi} and you are classified as: ${classifyBMI(bmi)}`);
