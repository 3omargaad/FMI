function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}

// Usage example:
async function exampleUsage() {
    console.log("Waiting...");
    await wait(2); // Waits for 2 seconds
    console.log("Done waiting!");
}

exampleUsage();
