export default class Form {
  firstName: string | null;
  secondName: string | null;
  IDNumber: number | null;
  diagnosisTitle: string | null;
  diagnosisDetails: string | null;
  photoUrl: string | null;

  constructor(
    firstName: string | null,
    secondName: string | null,
    IDNumber: number | null,
    diagnosisTitle: string | null,
    diagnosisDetails: string | null,
    photoUrl: string | null
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.IDNumber = IDNumber;
    this.diagnosisTitle = diagnosisTitle;
    this.diagnosisDetails = diagnosisDetails;
    this.photoUrl = photoUrl;
  }
}
