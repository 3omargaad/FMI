function print(output, id) {
    const element = document.getElementById(id);

    if (!element) {
        console.error(`Element with id "${id}" not found.`);
        return;
    }
    // Ensure the element exists before trying to modify it

    if (output === null || output === undefined) {
        console.warn("Output is null or undefined, nothing will be printed.");
        return;
    }
    // Handle different output types

    element.innerHTML = typeof output === "string" ? output : JSON.stringify(output);
    // Convert output to string (optional, in case of non-string values)
}
// This procedure changes the contents of a html (text) element

function adjustImage(fmi_type) {
    const img = document.getElementById('result_image');
    // Gets Image on result.html

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
    // Sets Image to corresponding Forehead Type
}


let name = localStorage.getItem("name");
let fmi = localStorage.getItem("fmi");
let fmi_type = localStorage.getItem("fmi_type");
// Gets Items from localStorage

const description = {
    "No Forehead" : "Who needs a forehead anyway?", 
    "Small Forehead" : "I'm sorry for your loss.", 
    "Average Forehead" : "68% of the population have the same forehead as you :|", 
    "Big Forehead" : "Where others see big forehead, you see big brain.", 
    "Infinite Forehead" : "Your forehead has the potential to unlocked the secrets of the universe.", 
    "Rick Astley" : "Never gonna give you up,<br>Never gonna let you down,<br>Never gonna run around and desert you,<br>Never gonna make you cry,<br>Never gonna say goodbye,<br>Never gonna tell a lie and hurt you."
}
// Description of each Forehead Type

if (name == null || name == "") {
    print(`You have ${fmi_type}`, "forehead_type");
    adjustImage(fmi_type);
    print(`FMI: ${fmi} <br> ${description[fmi_type]}`, "fmi_result");
} else if (name == "Rick Astley") {
    print(`FMI: ${fmi} <br><br> ${description[fmi_type]}`, "fmi_result");
    print("", "forehead_type");
    print(`${description["Rick Astley"]}`, "fmi_result");
} else {
    print(`${name}, you have ${fmi_type}`, "forehead_type");
    adjustImage(fmi_type);
    print(`FMI: ${fmi} <br> ${description[fmi_type]}`, "fmi_result");
}
// Adjusts Result page based on FMI and Forehead Type