import {v4 as uuidv4} from 'uuid';

export class Person {
  id?: typeof uuidv4;
  picture?: string;
  firstName!: string;
  lastName!: string;
  gender!: Gender;
  ageGroup!: AgeGroup;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

export enum AgeGroup {
  CHILD = "CHILD",
  ADULT = "ADULT"
}
