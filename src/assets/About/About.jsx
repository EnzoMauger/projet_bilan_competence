import { useState } from "react";
import IframeModal from "../IframeModal/IframeModal";
import "./about.css";

const About = () => {

    const [readerIsOpen, setReaderIsOpen] = useState(false);

    const [secretUrl, setSecretUrl] = useState("https://www.youtube.com/embed/j5a0jTc9S10");

    return (
        <>
            <div id="about">
                <h1>À propos</h1>
                <p>Vous vous trouvez sur le projet bilan de compétence d'<a href="https://www.linkedin.com/in/enzo-mauger-7037301a0/" target="_blank" rel="noreferrer"  >Enzo Mauger</a>,
                    cette version est la première itération de ce site, elle a été conçue dans le cadre d'un projet universitaire portant sur la capitalisation des compétences acquises</p>
                <p>L'idée derrière la page principale est de reproduire un jeu de carte, que le visiteur peut inspecter,
                    il découvre alors divers documents, portant ici sur les livrables attendus dans ce module d'enseignements, à savoir :</p>
                <ul>
                    <li>CV</li>
                    <li>Parcours scolaire</li>
                    <li>Accidents de vie</li>
                    <li>Projection professionnelle</li>
                    <li>Formations complémentaires</li>
                    <li>Attentes professionnelles</li>
                    <li>Personnalité</li>
                    <li>Hobby</li>
                </ul>
                <p>Information bonus : il y a un secret sur ce site, vous pouvez le chercher sur cette page, ou bien <span className="hint-span" onClick={displaySecretHint}>donner votre langue au chat</span></p>

            </div>
            <IframeModal readerIsOpen={readerIsOpen} updateReaderCallback={setReaderIsOpen} _src={secretUrl} />
            <footer id="footer">
                <h2>Enzo Mauger &middot; Dev & Automatisation</h2>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/enzo-mauger-7037301a0/" target="_blank" rel="noreferrer" >
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/EnzoMauger" target="_blank" rel="noreferrer" >
                            <i className="bi bi-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:maugerenzo1@gmail.com">
                            <i className="bi bi-envelope"></i>
                        </a>
                    </li>
                </ul>
                <p><small>&copy; 2023 Enzo Mauger<span id="secret"
                onClick={() => {setReaderIsOpen(true);setSecretUrl("https://www.youtube.com/embed/j5a0jTc9S10?autoplay=1")}}
                >.</span> All rights reserved.</small></p>
            </footer>
        </>
    );
}

const displaySecretHint = () => {
    const secret = document.getElementById("secret");
    secret.style.color = "gold";
    secret.style.fontWeight = "bolder";
    secret.style.backgroundColor = "red";
}
export default About;