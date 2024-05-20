let isOriginalText = true;

function changeText() {
  const textElement = document.getElementById("myText");

  if (textElement) {
    if (isOriginalText) {
      textElement.textContent = "JavaScript InnerHTML!";
    } else {
      textElement.textContent = "Hello World";
    }
    isOriginalText = !isOriginalText;
  } else {
    alert("Element with id 'myText' not found!");
  }
}
