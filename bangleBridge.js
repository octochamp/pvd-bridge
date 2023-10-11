async function checkAiOutput() {
    console.log("Running checkAiOutput...");

    try {
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const text = await file.text();

        if (text === "true") {
            console.log("Text says TRUE");
        } else if (text === "false") {
            console.log("Text says FALSE");
        } else {
            console.log("Error: Invalid input (neither true nor false)");
        }
    } catch (error) {
        console.error('Error fetching file: ' + error.message);
    }
}

checkAiOutput();
