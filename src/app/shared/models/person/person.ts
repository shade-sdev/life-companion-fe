import {v4 as uuidv4} from 'uuid';

export class Person {
  id?: typeof uuidv4;
  picture?: string;
  firstName!: string;
  lastName!: string;
  gender!: Gender;
  ageGroup!: AgeGroup;
}

export type Gender = 'MALE' | 'FEMALE';

export const Gender = {
  MALE: 'MALE' as Gender,
  FEMALE: 'FEMALE' as Gender
}

export type AgeGroup = 'CHILD' | 'ADULT';

export const AgeGroup = {
  CHILD: 'CHILD' as AgeGroup,
  ADULT: 'ADULT' as AgeGroup
}
