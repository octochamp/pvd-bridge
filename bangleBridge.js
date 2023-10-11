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
    Puck.write("Bangle.setLCDPower(1); \n Bangle.setLCDTimeout(0);")
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
                Puck.write("g.setBgColor(0,1,0); \n g.clear(); \n g.setFont('Vector', 60); \n g.drawString('True');")
                return;
            } else if (fileText === "false") {
                console.log("Text says FALSE")
                Puck.write("g.setBgColor(1,0,0); \n g.clear(); \n g.setFont('Vector', 60); \n g.drawString('False');")
                Puck.write("Bangle.buzz();\n Bangle.buzz();\n Bangle.buzz();\n")
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
    Puck.write("Bangle.setLCDPower(0.5); \n Bangle.setLCDTimeout(5);")
    document.getElementById("startButton").removeAttribute("disabled");
    document.getElementById("stopButton").setAttribute("disabled", "");
}
