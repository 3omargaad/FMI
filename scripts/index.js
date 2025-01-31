function calculate_fmi(mass, volume, color, gender, personality) {
    const r = parseInt(color.slice(1, 3), 16); // Gets Red Color value in RGB
    const b = parseInt(color.slice(5, 7), 16); // Gets Blue Color value in RGB

    let colorValue = 0; 
    let genderValue = 0;
    let personalityValue = 0;
    // Sets initial "X Factor" values to 0

    if (r > b) {
        colorValue = -5;
    } else if (b > r) {
        colorValue = 5;
    }
    // Modifies colorValue based on input

    switch (gender) {
        case "Female":
            genderValue = -10;
            break;
        case "Male":
            genderValue = 10;
            break;
        default:
            break;
    }
    // Modifies genderValue based on input

    switch (personality) {
        case "Zen-Vibes":
            personalityValue = -10; 
            break;
        case "Lowkey-Savage":
            personalityValue = -5; 
            break;
        case "Very-Handsome":
            personalityValue = 5; 
            break;
        case "Big-Brain-Energy":
            personalityValue = 10; 
            break;
        default:
            break;
    }
    // Modifies personalityValue based on input

    const X_factors = colorValue + genderValue + personalityValue;
    const FMI = 50 + ((volume - mass) / 4) + X_factors;
    // Calculates FMI based on volume, mass and "X Factors"

    return FMI;
}

function calculate_fmi_type(FMI, name) {
    if (name == "Rick Astley") {
        return "Rick Astley";
    }
    // Special Case based on specific name

    if (isNaN(FMI)) {
        return ("Error: Please enter a valid number");
    } else if (0 <= FMI && FMI <= 15) {
        return ("No Forehead");
    } else if (15 < FMI && FMI <= 30) {
        return ("Small Forehead");
    } else if (30 < FMI && FMI < 60) {
        return ("Average Forehead");
    } else if (60 <= FMI && FMI < 85) {
        return ("Big Forehead");
    } else if (85 <= FMI && FMI <= 100) {
        return ("Infinite Forehead");
    } else {
        return ("Error: FMI out of range");
    }
    // Calculates Forehead Type (aka fmi_type) based on the FMI being within a certain range of Values
}

document.getElementById('fmi_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from reloading the page
    
    const name = document.getElementById('name').value;
    const mass = document.getElementById('mass').value;
    const volume = document.getElementById('volume').value;
    const color = document.getElementById('color').value;
    const gender = document.getElementById('gender').value;
    const personality = document.querySelector('input[name="personality"]:checked').id;
    // Gets User Inputs From webpage

    let fmi = calculate_fmi(mass, volume, color, gender, personality);
    let fmi_type = calculate_fmi_type(fmi, name);
    // Calculates FMI and Forehead Type using procedures

    localStorage.setItem("name", name);
    window.location.href = "result.html";
    // Stores name in localStorage

    localStorage.setItem("fmi", fmi); 
    window.location.href = "result.html";
    // Stores FMI in localStorage

    localStorage.setItem("fmi_type", fmi_type);
    window.location.href = "result.html";
    // Stores Forehead Type in localStorage
});