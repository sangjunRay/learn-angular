enum Gender {
  M,F
}

export interface Hero {
  name: string;
  guild: string;
  mbti: string;
  gender: Gender;
}

export const HEROES = [
  {name: 'Ray', guild:'Front-end', mbti: 'ENTP', gender: 0},
  {name: 'Mila', guild:'Front-end', mbti: 'INTJ', gender: 1},
  {name: 'Jerry', guild:'Front-end', mbti: 'ENTJ', gender: 0},
  {name: 'Sunny', guild:'Front-end', mbti: 'INTJ', gender: 1},
  {name: 'Jhon', guild:'Back-end', mbti: "INTJ", gender: 0},
  {name: 'Woody', guild:'Back-end', mbti: 'ENTJ', gender: 0},
  {name: 'Martin', guild:'Front-end', mbti: 'ISTP', gender: 0},
  {name: 'Jim', guild:'CTO', mbti: 'INTP', gender: 0},
];
