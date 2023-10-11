let fileHandle; // Store the reference to the file handle
let interval = 5000;

function connectBangle() {
    let connected = false;
    let pickCounter = 0;
    Puck.modal(function () {
        Puck.write("\n", function () {
            connected = true;
        });
    });
}

const stopChecking = () => {clearInterval(intervalId)}

async function checkAiOutput() {
    if (!fileHandle) {
        try {
            fileHandle = await window.showOpenFilePicker();
        } catch (error) {
            console.error('Error selecting file: ' + error.message);
            return;
        }
    }

    try {
        const file = await fileHandle[0].getFile();
        const blob = await file.text(); // Read the contents of the file as a Blob

        const fileText = await new Response(blob).text();

        if (fileText === "true") {
            console.log("Text says TRUE");
        } else if (fileText === "false") {
            console.log("Text says FALSE")
            Puck.write("Bangle.buzz()\n")
            ;
        } else {
            console.log("Error: Invalid input (neither true nor false)");
        }
    } catch (error) {
        console.error('Error fetching file: ' + error.message);
    }
}

// Set up a periodic timer to re-read the file
intervalId = setInterval(checkAiOutput, interval); // Re-read the file every 5 seconds