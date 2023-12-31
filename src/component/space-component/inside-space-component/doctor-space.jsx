import React from 'react';

function DoctorSpace() {
    // Votre logique de rendu ici
    return (
        <div id='doctor'>
            <div className='space-title'>
            <h2>Espace médecin</h2>
            </div>
            <div className='paragraphe-space'>
                <p className='paragraphe'>Dans cet espace dédié, les médecins ont la possibilité de consigner de nouveaux dons de sang en y intégrant toutes les données associées. Ils peuvent enregistrer les détails spécifiques de chaque don effectué par les patients, ainsi que d'autres informations cliniques pertinentes.</p>
                <p className='paragraphe'> Grâce à cette fonctionnalité, les professionnels de la santé peuvent maintenir un suivi précis de l'historique des dons de chaque patient, assurant une gestion exhaustive et sécurisée des données. Cette capacité permet aux médecins d'avoir un aperçu complet des contributions des patients.</p>
            </div>
            <button onclick="window.location.href=localhost:3000/espace-medecin" class="patient-button">Accès</button>
        </div>
    );
}

export default DoctorSpace;