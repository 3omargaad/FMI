function print(output, id) {
    const element = document.getElementById(id);
    
    // Ensure the element exists before trying to modify it
    if (!element) {
        console.error(`Element with id "${id}" not found.`);
        return;
    }

    // Handle different output types
    if (output === null || output === undefined) {
        console.warn("Output is null or undefined, nothing will be printed.");
        return;
    }

    // Convert output to string (optional, in case of non-string values)
    element.innerHTML = typeof output === "string" ? output : JSON.stringify(output);
}

function adjustImage(fmi_type) {
    const img = document.getElementById('result_image');

    switch (fmi_type) {
        case "No Forehead":
            img.src = "images/no_forehead.png";
            break;
        case "Small Forehead":
            img.src = "images/small_forehead.png";
            break;
        case "Average Forehead":
            img.src = "images/average_forehead.png";
            break;
        case "Big Forehead":
            img.src = "images/big_forehead.png";
            break;
        case "Infinite Forehead":
            img.src = "images/infinite_forehead.png";
            break;
        default:
            img.src = "images/placeholder.gif";
            break;
    }
}


let name = localStorage.getItem("name");
let fmi = localStorage.getItem("fmi");
let fmi_type = localStorage.getItem("fmi_type");

const description = {
    "No Forehead" : "Who needs a forehead anyway?", 
    "Small Forehead" : "I'm sorry for your loss.", 
    "Average Forehead" : "68% of the population have the same forehead as you :|", 
    "Big Forehead" : "Where others see big forehead, you see big brain.", 
    "Infinite Forehead" : "Your forehead has the potential to unlocked the secrets of the universe.", 
    "Rick Astley" : "Never gonna give you up,<br>Never gonna let you down,<br>Never gonna run around and desert you,<br>Never gonna make you cry,<br>Never gonna say goodbye,<br>Never gonna tell a lie and hurt you."
}

if (name == null || name == "") {
    print(`You have ${fmi_type}`, "forehead_type");
    adjustImage(fmi_type);
    print(`FMI: ${fmi} <br> ${description[fmi_type]}`, "fmi_result");
} else if (name == "Rick Astley") {
    print(`FMI: ${fmi} <br><br> ${description[fmi_type]}`, "fmi_result");
    print("", "forehead_type");//"¯\\_(ツ)_/¯", "forehead_type");
    print(`${description["Rick Astley"]}`, "fmi_result");

} else {
    print(`${name}, you have ${fmi_type}`, "forehead_type");
    adjustImage(fmi_type);
    print(`FMI: ${fmi} <br> ${description[fmi_type]}`, "fmi_result");
}

//print(`Forehead Type: ${fmi_type}`, "fmi_type_result");


//print(`FMI: ${fmi}, Forehead Type: ${fmi_type}`, "fmi_result");

//print(`Mass: ${mass}`, "fmi_result");
//print(`Volume: ${volume}`, "fmi_result");