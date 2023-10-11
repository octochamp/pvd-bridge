let fileHandle; // Store the reference to the file handle
let interval;

function connectBangle() {
    let connected = false;
    let pickCounter = 0;
    Puck.modal(function () {
        Puck.write("\n", function () {
            connected = true;
        });
    });
}

async function selectFile() {
    try {
        fileHandle = await window.showOpenFilePicker();
        document.getElementById("startButton").removeAttribute("disabled");
    } catch (error) {
        console.error('Error selecting file: ' + error.message);
    }
    return;
}

async function startChecking() {
    checkProcess();
    interval = 5000;
    intervalId = setInterval(checkProcess, interval); // Re-read the .txt file every 5 seconds
    return;
}

async function checkProcess() {
     if (fileHandle != 0) {
        document.getElementById("stopButton").removeAttribute("disabled");
        document.getElementById("startButton").setAttribute("disabled", "");
        try {
            const file = await fileHandle[0].getFile();
            const blob = await file.text(); // Read the contents of the file as a Blob

            const fileText = await new Response(blob).text();

            if (fileText === "true") {
                console.log("Text says TRUE");
                return;
            } else if (fileText === "false") {
                console.log("Text says FALSE")
                Puck.write("Bangle.buzz()\n")
                return;
            } else {
                console.log("Error: Invalid input (neither true nor false)");
                return;
            }
        } catch (error) {
            console.error('Error fetching file: ' + error.message);
            return;
        }
    } else {
        return;
    }
}

function stopChecking() {
    clearInterval(intervalId);
    document.getElementById("startButton").removeAttribute("disabled");
    document.getElementById("stopButton").setAttribute("disabled", "");
}
