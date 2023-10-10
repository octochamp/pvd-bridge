function checkAiOutput() {

const xhr = new XMLHttpRequest();

xhr.open('GET', '/path/to/your/textfile.txt');
xhr.onload = () => {
  if (xhr.status === 200) {
    const text = xhr.responseText;
    // do something with the text, like using it in an if/else conditional
  } else {
    console.error('Error fetching file: ' + xhr.statusText);
  }
};
xhr.send();
};