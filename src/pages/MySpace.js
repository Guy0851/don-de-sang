import Header from "../component/header/header"
// import BoutonPatient from "../component/patient/bouton-nouveau-don"
import EspacePerso from "../component/mon-espace/espace-perso"

export default function MySpace(){
    return(
        <>
            <Header/>
            <body className='App-body App'>
                <EspacePerso/>
                {/* <h1>Bienvenue sur votre espace</h1>
                <BoutonPatient/> */}
            </body>
        </>
    )
}