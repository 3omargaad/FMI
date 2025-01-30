function input(text) {
    return window.prompt(text)
}

function calculate_fmi(mass, volume, color, gender, personality) {
    const r = parseInt(color.slice(1, 3), 16);
    const b = parseInt(color.slice(5, 7), 16);

    let colorValue = 0;
    let genderValue = 0;
    let personalityValue = 0;

    if (r > b) {
        colorValue = -5;
    } else if (b > r) {
        colorValue = 5;
    }

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

    const X_factors = colorValue + genderValue + personalityValue
    const FMI = 50 + ((volume - mass) / 4) + X_factors;

    return FMI;
}

function calculate_fmi_type(FMI, name) {
    if (name == "Rick Astley") {
        return "Rick Astley"
    }

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
}

document.getElementById('fmi_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from reloading the page
    
    const name = document.getElementById('name').value;
    const mass = document.getElementById('mass').value;
    const volume = document.getElementById('volume').value;
    const color = document.getElementById('color').value;
    const gender = document.getElementById('gender').value;
    const personality = document.querySelector('input[name="personality"]:checked').id;

    let fmi = calculate_fmi(mass, volume, color, gender, personality);
    let fmi_type = calculate_fmi_type(fmi, name);

    console.log(fmi_type)

    localStorage.setItem("name", name); // Store name in localStorage
    window.location.href = "result.html";
    
    localStorage.setItem("fmi", fmi); // Store FMI in localStorage
    window.location.href = "result.html";

    localStorage.setItem("fmi_type", fmi_type); // Store fmi_type in localStorage
    window.location.href = "result.html";

    //alert(`${name}, Your FMI is ${fmi}`);
    //alert(`Forehead type: ${fmi_type}`);
});