import React from 'react';

function MedicalTreatmentList(props) {
  const treatmentsJson = props.string;
  const medicalTreatmentsArray = JSON.parse(treatmentsJson);

  const listMedicalTreats = medicalTreatmentsArray.map((medicalTreatment) => (
    <li>
      Treat ID: {medicalTreatment.treatId}
      <br />
      Treat Course ID: {medicalTreatment.treatCourseId}
      <br />
      Type: {medicalTreatment.type}
      <br />
      Category: {medicalTreatment.category}
      <br />
      Name: {medicalTreatment.name}
      <br />
      Start Date: {medicalTreatment.startDate}
      <br />
      <br />
    </li>
  ));

  return <div>{listMedicalTreats}</div>;
}

export default MedicalTreatmentList;
