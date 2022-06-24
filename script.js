var i = 1;
var j = 0;

function change() {
  var doc = document.getElementById("background");
  var color = ["#EB5353", "#F9D923", "#36AE7C", "#187498", "#52006A", "#CD113B", "#FF7600", "#FFA900"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

function changeAnother(){
  var doc = document.getElementById("text");
  var color = ["red", "green", "blue", "cyan", "magenta", "yellow"];
  doc.style.color = color[j];
  j = (j + 1) % color.length;
}

setInterval(change, 500);
setInterval(changeAnother, 500);