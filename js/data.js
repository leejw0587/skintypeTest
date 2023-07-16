export const questions = [
  {
    number: '01',
    question: '세안 후, 아무 것도 바르지 않았을 때 나의 피부 상태는?',
    choices: [
      { text: '피부 당김이 느껴지며 거칠거칠해진다.', value: 'd' },
      { text: '바로 기름이 올라오며 <br>만졌을 때 기름기가 느껴진다.', value: 'o' }
    ]
  },
  {
    number: '02',
    question: '출근/등교 후 4시간이 지났다, 나의 피부 상태는?',
    choices: [
      { text: '기름이 올라와 피부가 반짝거린다', value: 's' },
      { text: '다 챙겼겠지?<br>여분 옷을 좀 더 챙길까..(뒤척뒤척)', value: 'n' }
    ]
  },
  {
    number: '03',
    question: '친했던 동기가<br>퇴사를?',
    choices: [
      { text: '일하면서 많이 힘들었나?<br>내가 좀 더 챙겨줄걸.', value: 'f' },
      { text: '아 이직하나?<br>퇴사하고 뭐하냐고 물어봐야지.', value: 't' }
    ]
  },
  {
    number: '04',
    question: '대규모 프로젝트를 맡게 되어 떨리는 마음에 처음 시작한 건?',
    choices: [
      { text: '큰 프로젝트인 만큼 계획이 중요해!<br>목적과 목표 먼저 정리해봐야지!', value: 'j' },
      { text: '당장 미팅 잡고<br>팀원이랑 이야기하면 되겠지?', value: 'p' }
    ]
  },
  {
    number: '05',
    question: '첫 입사 날!<br>나의 첫 인사말은?',
    choices: [
      { text: '안녕하세요ㅎㅎ 잘 부탁드려요~<br>(부끄러워 >///<)', value: '' },
      { text: '안녕하세요! 저는 자취하고 있고요,<br>MBTI는 ~~ (빨리 친해져야지 >0<) ', value: '' }
    ]
  },
  {
    number: '06',
    question: '날씨가 좋아~<br>유난히 일하기 싫은 날엔?',
    choices: [
      { text: '날 좋은데 일이라니.<br>그런데 어쩌겠어? 일해야지!', value: '' },
      { text: '이럴 때 일할 순 없어!!<br>반차 써버릴 거야!', value: '' }
    ]
  },
  {
    number: '07',
    question: '상사한테 한 소리 들었다.<br>나는?',
    choices: [
      { text: '더 열심히 해서 잘할 수 있다는<br>사람이란 걸 보여주자!', value: '' },
      { text: '내가 재능이 없나?<br>퇴사각..', value: '' }
    ]
  },
  {
    number: '08',
    question: '일을 하는 데 너무 어려워ㅠㅠ<br>어떻게 해결하지?',
    choices: [
      { text: '시간을 더 끌 순 없지.<br>팀장님한테 당장 물어봐야지!', value: '' },
      { text: '어떡하지.. 야근하더라도<br>방법을 더 찾아봐야겠다. ', value: '' }
    ]
  },
  {
    number: '09',
    question: '좋은 곳에서 이직 제안이 왔다!<br>나의 선택은?',
    choices: [
      { text: '인생은 도전이야!<br>좋은 기회라고 생각하고 시작해볼래!', value: '' },
      { text: '지금 회사도 좋은데..<br>위험 부담을 안고 이직하는 게 맞을까?', value: '' }
    ]
  },
  {
    number: '10',
    question: '회사에서 진급 대상이 되었다.<br>나의 마음은?',
    choices: [
      { text: '드디어 회사가 날 알아주는구나!<br>더 열심히 해야지!', value: '' },
      { text: '진급하면 월급도 오르겠지?<br>월급 오르면 ○○ 사야지~ (상상의 나래~)', value: '' }
    ]
  },
]
export const results = [
  {
    title: '중성 피부',
    character: 'images/result_character1.png',
    results: [
      '건성과 지성의 중간상태로, 가장 이상적인 피부 상태에요.',
      '피부가 매끄럽고 윤기가 있어 메이크업이 잘 돼요.',
      '하지만 환경의 변화, 스트레스 등으로 트러블이 발생하기 쉬워요.',
      '이미 유수분 밸런스가 맞기때문에 지금 상태만 유지해줘도 돼요.'
    ],
    jobs: ['에센스', '마스크팩']
  },
  {
    title: '건성 피부',
    character: 'images/result_character2.png',
    results: [
      '피부가 거칠고 각질이 일어나요.',
      '수분뿐만 아니라, 지질(지방)또한 부족한 상태에요.',
      '피부의 탄력이 떨어지고 당기며, 자주 가려워요.',
      '건성 피부 전용 크림을 사용하여 유수분 밸런스를 맞춰주세요.'
    ],
    jobs: ['세럼', '오일']
  },
  {
    title: '지성 피부',
    character: 'images/result_character3.png',
    results: [
      '여드름이 자주 나고, 피부가 번들거려요.',
      '모공이 넓고, 유분기로 인해 피부가 지저분해 보여요.',
      '과한 피지 분비로 이런 피부 상태가 돼요.',
      '세안을 특히 신경써서 해주세요.'
    ],
    jobs: ['약산성 제품', '액상 제형']
  },
  {
    title: '복합성 피부',
    character: 'images/result_character4.png',
    results: [
      '얼굴 부위에 따라 건성/지성이 같이 나타나는 피부에요.',
      '잘못된 피부 관리, 호르몬 불균형 등이 주된 원인이에요.',
      '대부분 T존은 지성, U존은 건성이에요.',
      '클렌저와 토너를 잘 선택해 사용해주세요!'
    ],
    jobs: ['제품 A', '제품 B']
  }
]
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 2,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 5
}
