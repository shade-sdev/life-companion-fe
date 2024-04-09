import {UUID} from "../../util/uuid";

export class Person {
  id?: UUID;
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
