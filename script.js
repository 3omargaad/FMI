function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}

// Usage example:
async function exampleUsage() {
    console.log("Waiting...");
    await wait(2); // Waits for 2 seconds
    console.log("Done waiting!");
}

const fmiForm = document.getElementById('fmiForm');
const resultDiv = document.getElementById('result');

fmiForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mass = parseFloat(document.getElementById('mass').value);
    const volume = parseFloat(document.getElementById('volume').value);
    if (!isNaN(mass) && !isNaN(volume) && mass > 0 && volume > 0) {
        const fmi = (mass / volume).toFixed(2);
        resultDiv.textContent = `Your Forehead Mass Index (FMI) is: ${fmi}`;
    } 
    else {
        resultDiv.textContent = 'Please enter valid positive numbers for both width and height.';
    }
});


//exampleUsage();
