import { useNavigate } from 'react-router-dom';

const BoutonPatient = () => {
    const nav = useNavigate();

    const handleClick = () => {
      // Remplacez '/votre-route' par la route vers laquelle vous souhaitez rediriger
        nav('/patient');
    };

    return (
        <button onClick={handleClick} class="patient-button">
            Accès
        </button>
    );
};
export default BoutonPatient;