// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let element = document.getElementById("error")
function error() {
    element.textContent = "Something went wrong, please try again"   
}
