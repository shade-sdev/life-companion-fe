export interface Person {
  firstName: string;
  lastName: string;
  profilePicture: string;
  gender: Gender;
  ageGroup: AgeGroup;
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
