function checkAiOutput() {
    console.log("Running checkAiOutput...")
    const xhr = new XMLHttpRequest();

    xhr.open('GET', "test.txt");
    xhr.onload = () => {
    if (xhr.status === 200) {
        const text = xhr.responseText;

            if (text === "true") {
                console.log("Text says TRUE");
            } else if (text === "false") {
                console.log("Text says FALSE");
            } else {
                console.log("Error: Invalid input (neither true nor false");
            }
    
        } else {
        console.error('Error fetching file: ' + xhr.statusText);
    }
    };
    xhr.send();
}