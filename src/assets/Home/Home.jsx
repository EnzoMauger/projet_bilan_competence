import MainCartes from '../MainCartes/MainCartes';
import PdfReader from '../PdfReader/PdfReader';
import Dimmer from '../Dimmer/Dimmer';
import { useCallback, useState } from 'react';

const Home = () => {

    const [readerIsOpen, setReaderIsOpen] = useState(false);
    const [pathToFile, setPathToFile] = useState(null);

    const handlePdfContent = useCallback((filename, display = true) => {
        setPathToFile(filename);
        setReaderIsOpen(display);
    }, []);

    return (
        <>
            <PdfReader readerIsOpen={readerIsOpen} pathToFile={pathToFile} updateReaderCallback={setReaderIsOpen} />
            <Dimmer isActive={readerIsOpen} />
            <MainCartes pdfCallback={handlePdfContent} />
        </>
    );
}

export default Home;