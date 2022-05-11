export enum Gender {
  M= '그의',
  F= '그 녀의'
}

export interface Hero {
  name: string;
  guild: string;
  mbti: string;
  gender: Gender;
}

export const HEROES = [
  {name: 'Ray', guild:'Front-end', mbti: 'ENTP', gender: Gender.M},
  {name: 'Mila', guild:'Front-end', mbti: 'INTJ', gender: Gender.F},
  {name: 'Jerry', guild:'Front-end', mbti: 'ENTJ', gender: Gender.M},
  {name: 'Sunny', guild:'Front-end', mbti: 'INTJ', gender: Gender.F},
  {name: 'John', guild:'Back-end', mbti: "INTJ", gender: Gender.M},
  {name: 'Woody', guild:'Back-end', mbti: 'ENTJ', gender: Gender.M},
  {name: 'Martin', guild:'Front-end', mbti: 'ISTP', gender: Gender.M},
  {name: 'Jim', guild:'CTO', mbti: 'INTP', gender: Gender.M},
];
