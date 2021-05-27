const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 14;
const select = [0, 0, 0];

function addResult(point) {
    $.ajax({
        type: "GET",
        url: "/api/addResult?idx="+point,
        data: {},
        async:false,
        success: function (response) {
        }
    })
}

function postResult() {
    $.ajax({
        type: "GET",
        url: "/api/postResult",
        data: {},
        async:false,
        success: function (response) {
            var json=response['result'];
            var react,node,spring;
            for(var i=0;i<3;i++){
                if(json[i]['name']=="react"){
                    react=json[i]["count"]
                }
                if(json[i]['name']=="node"){
                    node=json[i]["count"]
                }
                if(json[i]['name']=="spring"){
                    spring=json[i]["count"]
                }
            }
            var total = react+node+spring;
            const allResult = document.querySelector('.allResult');
            allResult.innerHTML = `<br>현재 ${total}명이 이 테스트를 하였습니다.<br> 그 중 React는 ${react}명, Spring은 ${spring}명, Node.js는 ${node}명의 결과가 나왔습니다.<br>`
        }
    })
}

function calResult() {
    var result = select.indexOf(Math.max(...select));
    return result;
}

function setResult() {
    let point = calResult();
    addResult(point);
    postResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = '../static/img/image-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "flex";
        }, 400);
    })
    setResult();
}

function addQnaImg(qIdx) {
    $('#qnaImg').empty();
    var i = document.querySelector('#qnaImg');
    var img = document.createElement('img');
    var imgURL = '../static/img/Q' + qIdx + '.png';
    img.src = imgURL;
    img.alt = qIdx;
    img.classList.add('img-fluid');
    i.appendChild(img);
}


function addAnswer(answerText, qIdx, idx) {
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
            var target = qnaList[qIdx].a[idx].type;
            for (let j = 0; j < target.length; j++) {
                select[target[j] - 1] += 1;
            }
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
    addQnaImg(qIdx);
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