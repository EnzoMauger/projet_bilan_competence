import CarteCollectionner from "../CarteCollectioner/CarteCollectionner";
import "./main-cartes.css";

import files from "./files";
import { useCallback, useState } from "react";

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const DECK_SIZE = 4;


function MainCartes(props) {
    const { pdfCallback } = props;

    const deckOriginal = Object.keys(files);

    let [mainCartes, setMainCarte] = useState(randomComposeMain(deckOriginal));
    let [cardsSpecs, setCardsSpecs] = useState(randomCardsSpecs());

    const shuffleCards = useCallback(() => {
        setMainCarte(randomComposeMain(deckOriginal));
        setCardsSpecs(randomCardsSpecs());
    }, [setMainCarte, deckOriginal]);

    return (
        <>
            <div className="deck">
                <div className="main-cartes">

                    {
                        mainCartes.map((title, nb) => {
                            let previewfile = require(`./preview/${title}.png`);
                            return (
                                <div key={nb}>
                                    <CarteCollectionner
                                        cardTitle={title}
                                        filename={files[title]}
                                        pdfCallback={pdfCallback}
                                        previewfile={previewfile}
                                        hpLeft={cardsSpecs[nb].hpLeft}
                                        starsValue={cardsSpecs[nb].stars}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <button className="shuffle-button" onClick={shuffleCards}>
                <img src="Card_deck.png" alt="" />
            </button>
        </>
    );
}

export default MainCartes;

function randomComposeMain(deckOriginal) {
    const deck = deckOriginal.slice(0);
    let mainCartes = [];
    for (let i = 0; i < DECK_SIZE; i++) {
        let maxRand = 7 - i;
        mainCartes.push(deck.splice(randomIntFromInterval(0, maxRand), 1)[0]);
    }

    return mainCartes;
}

function randomCardsSpecs() {
    return Array.from({ length: DECK_SIZE}, (_, i) => {
        const hpLeft = Math.max(0.05, Math.random()) * 100;
        const stars = randomIntFromInterval(0, 5);
        return {
            stars,
            hpLeft
        };
    });
}
