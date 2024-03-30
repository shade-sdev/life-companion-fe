export interface Person {
  firstName: string;
  lastName: string;
  profilePicture: string;
  gender: Gender;
  ageGroup: AgeGroup;
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female"
}

export enum AgeGroup {
  CHILD = "Child",
  ADULT = "Adult"
}
