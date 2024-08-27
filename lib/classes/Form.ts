export default class Form {
  firstName: string;
  secondName: string;
  IDNumber: number;
  diagnosisTitle: string;
  diagnosisDetails: string;
  photoUrl: string;

  constructor(
    firstName: string,
    secondName: string,
    IDNumber: number,
    diagnosisTitle: string,
    diagnosisDetails: string,
    photoUrl: string
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.IDNumber = IDNumber;
    this.diagnosisTitle = diagnosisTitle;
    this.diagnosisDetails = diagnosisDetails;
    this.photoUrl = photoUrl;
  }
}
