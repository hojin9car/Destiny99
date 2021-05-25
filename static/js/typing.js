const content = "Destiny 99 "
const text = document.querySelector(".text")
let index = 0;

function typing() {
  text.textContent += content[index++];
  if (index == content.length) {
    text.textContent = "D"
    index = 1;
  }
}

let handle = setInterval(typing, 100)
var repeat = setInterval(function () {
  typing();
  clearInterval(handle);
}, 1000)