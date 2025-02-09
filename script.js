function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        alert("Please enter valid values for weight and height.");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let resultText = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
        resultText += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += "You are overweight.";
    } else {
        resultText += "You are obese.";
    }

    document.getElementById("result").innerText = resultText;
}
