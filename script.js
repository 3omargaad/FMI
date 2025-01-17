function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}

function result(fmi_type) {
    document.getElementById("fmi_result").innerHTML = fmi_type;
}

function input(text) {
    return window.prompt(text)
    
}


function print(output, id) {
        document.getElementById(id).innerHTML = output;
}


function calculate_fmi(mass, volume) {
    let FMI = 50 + ((volume - mass) / 4);
    return FMI;
}

function calculate_fmi_type(FMI) {
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
    //event.preventDefault(); // Prevents the form from reloading the page
    
    const name = document.getElementById('name').value;
    const mass = document.getElementById('mass').value;
    const volume = document.getElementById('volume').value;
    
    print(`Name: ${name}`, "fmi_result");
    //print(`Mass: ${mass}`, "fmi_result");
    //print(`Volume: ${volume}`, "fmi_result");
});


/*let mass = Number(window.prompt("Enter Forehead Mass"));
let volume = Number(window.prompt("Enter Forehead Volume"));
    
    let FMI = calculate_fmi(mass, volume);

    let type = calculate_fmi_type(FMI);

    print(type, "fmi_result")
    print(FMI, "fmi")*/

// Check for invalid input*/