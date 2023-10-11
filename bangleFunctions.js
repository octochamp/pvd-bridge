/* Puck.write("Bangle.setLCDPower(1)");
Puck.write("\n");
Puck.write("\n Bangle.setLCDTimeout(0)");
Puck.write("\n");
Puck.write("\n g.clear(1)");
Puck.write("\n");
Puck.write("\n g.setBgColor(-1)");
Puck.write("\n");
Puck.write("\n g.setColor(1)");
Puck.write("\n");
Puck.write("\n g.clear()");
Puck.write("\n");
Puck.write("\n g.setFontAlign(0,0,0)");
Puck.write("\n");
Puck.write("\n g.setFont('Vector:20')");
Puck.write("\n");
Puck.write("\n g.drawString('initialising...', 88, 88)");
Puck.write("\n");
Puck.write("\n g.setFont('Vector:40')");
Puck.write("\n");
Puck.write("\n g.setBgColor(0,0,1)");
Puck.write("\n");
Puck.write("\n g.setColor(-1)");
Puck.write("\n");
Puck.write("\n g.clear()");
 */
async function setLCDPower(power) {
    await Puck.write("Bangle.setLCDPower("+power+"); \n");
}

async function setLCDTimeout(time) {
    await Puck.write("Bangle.setLCDTimeout("+time+"); \n");
}

async function clearScreen() {
    await Puck.write("g.clear(); \n");
}

async function clearScreenAll() {
    await Puck.write("g.clear(1); \n");
}

async function setBgColor(color) {
    await Puck.write("g.setBgColor("+color+"); \n");
}

async function setColor(color) {
    await Puck.write("g.setColor("+color+"); \n");
}

async function setFontAlignCentre() {
    await Puck.write("g.setFontAlign(0,0,0); \n");
}

async function setFontSizeSmall() {
    await Puck.write("g.setFont('12x20', 1); \n");
}

async function setFontSizeBig() {
    await Puck.write("g.setFont('12x20', 2); \n");
}

async function drawString(text) {
    await Puck.write("g.drawString('" + text + "', 88, 88); \n");
}

async function vibrate(time) {
    await Puck.write("Bangle.buzz(" + time + "); \n")
}