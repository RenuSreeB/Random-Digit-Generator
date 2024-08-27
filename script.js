document.getElementById('generateBtn').addEventListener('click', function() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const randomNumberElement = document.getElementById('randomNumber');

    if (isNaN(minValue) || isNaN(maxValue)) {
        randomNumberElement.textContent = "Please enter valid numbers.";
        return;
    }

    if (minValue > maxValue) {
        randomNumberElement.textContent = "Minimum value cannot be greater than maximum value.";
        return;
    }

    const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    randomNumberElement.textContent = `Random Number: ${randomNum}`;
});
