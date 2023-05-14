import { useCallback } from "react";
import "./carte-collectioner.css";

function CarteCollectionner(props) {

    const { filename } = props;
    const { pdfCallback } = props;
    const { previewfile } = props;

    let { starsValue } = props;
    starsValue = starsValue ?? 3;
    const MAX_VALUE = 5;
    starsValue = Math.min(starsValue, MAX_VALUE);
    
    const { hpLeft } = props;


    let { cardTitle } = props;
    cardTitle = cardTitle ?? "Nom de la carte";

    const togglePopup = useCallback((pathToFile) => {
        pdfCallback(pathToFile);
    }, [pdfCallback]);

    return (
        <>
            <div className="carte" onClick={() => togglePopup("/files/" + filename)} >
                <div className="carte-image">
                    <img src={previewfile} alt="Preview" />
                </div>
                <div className="carte-contenu">
                    <h3 className="carte-titre">{cardTitle}</h3>
                    <ul className="carte-caracteristiques">
                        <div className="health-bar">
                            <div className="bar" style={{width: `${hpLeft}%`}}>
                                <div className="hit"></div>
                            </div>
                        </div>
                        {
                            Array.from(Array(MAX_VALUE).keys()).map((i, key) => {
                                return (i < starsValue) ?
                                    <img src="star_full.png" alt="yellow full star" className="star full-star" key={key} />
                                    :
                                    <img src="empty_star.png" alt="empty star" className="star empty-star" key={key} />;
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CarteCollectionner;