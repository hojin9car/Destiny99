const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");


// 시작 버튼 클릭 시 qna로 이동
function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "flex";
    }, 300);
    let qIdx = 0;
    goNext(qIdx)
  }, 400);
  qna.style.WebkitAnimation = "fadeIn 1s";
  qna.style.animation = "fadeIn 1s";
}