function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    if (weight && height) {
        let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category})`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid values';
    }
}
