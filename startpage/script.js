var inputvalue = document.getElementById("inputField");
var input = document.getElementById("inputField");

function searchGoogle() {
        inputvalue = document.getElementById("inputField").value;
        var search = 'http://www.google.com/search?q=' + inputvalue;
        console.log(search)
}
  
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      searchGoogle();
  }
});
