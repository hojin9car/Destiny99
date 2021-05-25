<!--
'front',1,
'backJava',2,
'backNode',3,
-->

const qnaList = [
  {
    q: 'Q1. 괜히 신경쓰인다',
    a: [
      { answer: 'a. YES', type: ['1'] },
      { answer: 'b. NO', type: ['2', '3'] },
    ]
  },
  {
    q: 'Q2. "ㄴ란지금츄ㅣㅏ해써델ㅇㅓ와ㅑ" 라는 카톡이 친구에게 왔다. 나의 답변은?',
    a: [
      { answer: 'a. 취했으니까 데리러 오라고??', type: ['2', '3'] },
      { answer: 'b. 엥 뭐야 똑바로 말해!', type: ['1'] },
    ]
  },
  {
    q: 'Q3. 친구가 오늘 자신이 당한 부당한 일에 대해 열변을 토하고 있다. 근데 과장이 조금 섞여 있는 것 같다.',
    a: [
      { answer: 'a. 나는 무조건 내가 직접 눈으로 봐야 믿음이 간다.', type: ['1'] },
      { answer: 'b. 보이지 않더라도 논리에 맞다면 충분히 믿을만 하다.', type: ['2', '3'] },
    ]
  },
  {
    q: 'Q4. 노트북 자판에 먼지가 꼈다. 당신의 행동은?',
    a: [
      { answer: 'a. 보기 싫어! 당장 치운다.', type: ['1'] },
      { answer: 'b. 에이, 잘 돌아가면 됐지. 그대로 둔다.', type: ['2', '3'] },
    ]
  },
  {
    q: 'Q5. 새로 접하는 운동을 하기 전에 당신의 행동은?',
    a: [
      { answer: 'a. 운동은 장비빨이지~! 장비 풀세트 구매', type: ['1'] },
      { answer: 'b. 장비는 나중에, 일단 해보자!', type: ['2', '3'] },
    ]
  },
  {
    q: 'Q6. 카톡 안읽은 메세지가 300+ 떠있는 친구를 보았다 당신의 리액션은?',
    a: [
      { answer: 'a. 어, 나도 이러는데 너도네? ㅋㅋ', type: ['2', '3'] },
      { answer: 'b. 극혐;; 읽을 건 읽어라~라고 한마디 한다.', type: ['1'] },
    ]
  },
  {
    q: 'Q7. 나의 취향은?',
    a: [
      { answer: 'a. 주인공이 개짱센 다 때려 부수는 판타지 소설', type: ['1'] },
      { answer: 'b. 가슴이 선덕선덕해지는 로맨스 소설', type: ['2', '3'] },
    ]
  },
  {
    q: 'Q8. 신상품이 나왔을 때, 당신의 반응은?',
    a: [
      { answer: 'a. 나는 얼리어답터! 제일 먼저 사서 어떤 기능이 있는지 써보고 싶다.', type: ['1'] },
      { answer: 'b. 늦더라도 다른 사람의 구매 후기와 리뷰를 꼼꼼하게 보고 사고 싶다.', type: ['2', '3'] },
    ]
  },
  {
    q: 'Q9. 냉장고를 구매하려고 한다. 성능은 똑같으나 내가 원하는 색으로 구매하려면 50만원을 더 내야한다. 당신의 선택은?',
    a: [
      { answer: 'a. 냉장고는 오래쓰는 제품이니까 내가 좋아하는 색으로 고르는 게 당연하다.', type: ['1'] },
      { answer: 'b. 성능이 똑같은데 색상이 무슨 상관인가. 기본으로 고르고 그 50만원으로 다른 걸 구매한다.', type: ['2', '3'] },
    ]
  },


  {
    q: 'Q10. 학교에서 기간에 제약이 없는 과제를 부여 받았다. 나는 어떤 부분에 집중하고 싶을까?',
    a: [
      { answer: 'a. 완성도가 어떻든 일단 결과물을 빨리 보는 것이 좋다.', type: ['3'] },
      { answer: 'b. 속도도 중요하지만 완성도 있는 결과물이 가장 중요하다.', type: ['2'] },
    ]
  },
  {
    q: 'Q11. 학교에서 기숙사에 살 것인지 아니면 자취를 할 것인지를 정해서 알려달라고 한다.',
    a: [
      { answer: 'a. 기숙사면 살면서 어느 정도의 제약이 있는 것이 오히려 덜 스트레스 받는다', type: ['2'] },
      { answer: 'b. 자취, 날 구속하지마라! 나는 자유로운 영혼의 소유자!', type: ['3'] },
    ]
  },
  {
    q: 'Q12. 한창 코딩을 하던 중 도저히 스스로는 해결하기 힘든 부분에 봉착해버렸다.',
    a: [
      { answer: 'a. 하다가 막히면 아는 사람한테 물어보는게 최고다.', type: ['2'] },
      { answer: 'b. 남에게 물어보기 보다는 내가 스스로 해결해서 성취한다!', type: ['3'] },
    ]
  },
  {
    q: 'Q13. 제주도로 친구들과 여행을 가는데 숙소를 고민하는 중이다.',
    a: [
      { answer: 'a. 오랜 역사가 묻어나는 제주 돌담집이 딱!!!', type: ['2'] },
      { answer: 'b. 도심의 모던하고 편리한 호텔!!!', type: ['3'] },
    ]
  },
  {
    q: 'Q14. 물건을 빌려가면 돌려주지 않는다고 소문이 자자하지만 심성은 착한 베스트 프렌드가 나에게 다가온다. 엄마가 생일 선물로 사준 나이키 덩크 로우 레트로 블랙을 빌려달라고 한다. 당신의 행동은?',
    a: [
      { answer: 'a. 철저한 계약서를 작성하고 추후 못받을 시 내용증명을 보낼 각오를 하고 빌려준다.', type: ['2'] },
      { answer: 'b. 어떻게든 받을 방법이 있을 거라는 생각과 믿음 하나로 빌려준다.', type: ['3'] },
    ]
  },
]

const infoList =[
  {
    name : '결과 11 프론드엔드입니다아아아 환영',
    desc: 'css와 친해지세요.'
  },
  {
    name : '결과 22 백엔드임 너어는 노드해라',
    desc: '열심히해라'
  },
  {
    name : '결과33 벡엔드임22 자바고고 ',
    desc: 'now or never'
  },


]