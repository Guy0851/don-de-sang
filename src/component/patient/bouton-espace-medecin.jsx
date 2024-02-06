import { useNavigate } from 'react-router-dom';

const BoutonMedecin = () => {
    const nav = useNavigate();

    const handleClick = () => {
      // Remplacez '/votre-route' par la route vers laquelle vous souhaitez rediriger
        nav('/medecin');
    };

    return (
        <button onClick={handleClick} class="patient-button">
            Accès
        </button>
    );
};
export default BoutonMedecin;