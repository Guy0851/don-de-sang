function EspacePerso(){
    let nom="Delcourt"
    let prenom="Guillaume"
    let email = "guillaume.mail@mail.fr"
    let mdp = "******"
    
    return(
        <div className="espace-perso">
            <h1>Nom</h1>
            <h2>{nom} <button>changer votre nom </button></h2>
            <br/>
            <h1>Prenom</h1>
            <h2>{prenom} <button>changer votre prénom </button></h2>
            <br/>
            <h1>Mail</h1>
            <h2>{email} <button>changer l'adresse mail </button></h2>
            <br/>
            <h1>Mot de passe</h1>
            <h2>{mdp} <button>changer le mot de passe </button></h2>
        </div>
    )

}
export default EspacePerso