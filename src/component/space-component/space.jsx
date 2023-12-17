import React from 'react';
import DoctorSpace from './inside-space-component/doctor-space';
import PatientSpace from './inside-space-component/patient-space'
function MySpace() {
    // Votre logique de rendu ici
    return (
        <div id='MySpace'>
            <PatientSpace/>
            <DoctorSpace/>
        </div>
    );
}

export default MySpace;