
function modifyClipboard() {
  navigator.clipboard.readText()
    .then(function(clipboardText) {
      if (clipboardText.includes("x.com")) {
        // const modifiedText = clipboardText.replace(/twitter\.com/g, "fxtwitter.com");
        const modifiedText = clipboardText.replace(/x\.com/g, "fxtwitter.com");
        navigator.clipboard.writeText(modifiedText)
          .then(function() {
            console.log("Clipboard content modified.");
          })
          .catch(function(error) {
            console.error("Failed to modify clipboard content: " + error);
          });
      }
    })
    .catch(function(error) {
      console.error("Failed to read clipboard content: " + error);
    });
}

// Function to execute callback after some time
function callLater(fun, delay = 50) {
  setTimeout(fun,delay);
}

document.addEventListener('copy', callLater(modifyClipboard), false)

