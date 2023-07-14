export const questions = [
  {
    number: '01',
    question: '세안 1시간 후, 아무 것도 바르지 않으면 내 피부는?',
    choices: [
      { text: '건조하고 피부가 당기는 느낌이 든다.', value: 'd' },
      { text: '당기긴 커녕 피부가 번들거린다.', value: 'o' },
      { text: '특정 부분만 번들거리고, 나머지는 건조하다.', value: 'm' },
      { text: '건조하거나 번들거림<br> 그 어느 쪽에도 해당하지 않는다.', value: 'n' }
    ]
  },
  {
    number: '02',
    question: '출근/등교 4시간 후, 나의 피부는?',
    choices: [
      { text: '기름지는 듯한 느낌이 난다. <br>기름종이를 항상 들고다닌다.', value: 'o' },
      { text: '하얗게 각질이 올라오거나 가렵다.', value: 'd' },
      { text: '코나 이마 부분만 번들거린다.', value: 'm' },
      { text: '세안 직후와 크게 차이가 없다.', value: 'n' }
    ]
  },
  {
    number: '03',
    question: '평소 내 피부의 모습은?',
    choices: [
      { text: '피부 부분별로 건조함의 차이가 크다.', value: 'm' },
      { text: '블랙헤드나 피지가 눈에 보일 정도로 많다.', value: 'o' },
      { text: '한여름에도 피부에 건조함이 느껴진다.', value: 'd' },
      { text: '그 어떤 것에도 해당하지 않는다.', value: 'n' }
    ]
  },
  {
    number: '04',
    question: '나의 피부 컴플렉스는?',
    choices: [
      { text: '전체적으로 트러블이 자주 나거나 모공이 크다.', value: 'o' },
      { text: '피부가 자주 가렵고 가끔 하얀 각질이 올라온다.', value: 'd' },
      { text: '일상생활을 하다보면 <br>이마만 기름기로 반짝거린다.', value: 'm' },
      { text: '딱히 피부 컴플렉스를 느낀 적이 없다.', value: 'n' }
    ]
  }
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
    items: ['에센스', '마스크팩']
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
    items: ['세럼', '오일']
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
    items: ['약알칼리성<br>클렌징폼', '액상 제형']
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
    items: ['약산성 클렌징폼', '유분이 적은 제형']
  }
]
export const skinTypes = {
  n: 0,
  d: 1,
  o: 2,
  m: 3
}
