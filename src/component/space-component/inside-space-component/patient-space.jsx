import React from 'react';

function PatientSpace() {
    // Votre logique de rendu ici
    return (
        <div id='patient'>
            <div className='space-title'>
            <h2>Espace patient</h2>
            </div>
            <div className='paragraphe-space'>
                <p className='paragraphe'>Cet espace confidentiel est conçu pour vous permettre de garder une trace de vos dons, vous informant sur la fréquence de ceux-ci et vous fournissant des informations détaillées sur leur utilisation. Explorez cette plateforme pour avoir une vue complète et précise de votre impact en tant que donneur</p>
                <p className='paragraphe'>Cet espace est déstiné aux patients donneurs de sang. Ici, vous pourrez consulter et suivre vos contributions , visualiser vos historiques de dons, et accéder aux détails spécifiques de chaque don effectué.</p>
            </div>
            <button onclick="window.location.href=/espace-patient" class="patient-button"> Accès </button>
        </div>
    );
}

export default PatientSpace;