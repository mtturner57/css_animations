let myObject = document.getElementsByClassName("box")[0],
    btn1 = document.getElementById("button"),
    btn2 = document.getElementById("reset");

btn1.addEventListener('click', function () {
  myObject.classList.add('box-animate');
  this.disabled = true;
  btn2.disabled = false;
}, false);

btn2.addEventListener('click', function () {
  myObject.classList.remove('box-animate');
  this.disabled = true;
  btn1.disabled = false;
}, false);