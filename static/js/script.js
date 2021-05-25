const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 10;

function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      qna.style.display = "flex";
    }, 400)
  })
}

function addAnswer(answerText, qIdx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-4');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function () {
    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      goNext(qIdx + 1);
    }, 350)
  }, false);
}
function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}


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