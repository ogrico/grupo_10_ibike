var modal = document.getElementById("myModal")

var btn = document.getElementById("btnEliminar");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {
    event.preventDefault()
  modal.style.display = "block";
}

span.onclick = function(event) {
    event.preventDefault()
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log('??')
  }
  console.log('?')
}