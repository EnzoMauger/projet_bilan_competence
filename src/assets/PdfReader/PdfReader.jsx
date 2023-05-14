import { useCallback, useEffect, useState } from "react";
import "./pdf-reader.css";

function PdfReader(props) {

    const baseClass = "pdf-reader";
    const { readerIsOpen } = props;
    const { pathToFile } = props;
    const { updateReaderCallback } = props;
    
    const [content, setContent] = useState("");

    useEffect(() => {
        if (readerIsOpen && pathToFile !== null && pathToFile !== "undefined") {
            setContent(<iframe
                src={pathToFile}
                height={"90%"}
                width={"90%"}
                title={pathToFile}
                />);
                
        }
    }, [readerIsOpen, pathToFile, setContent]);

    const handleClick = useCallback(() => {
        if (readerIsOpen) {
            updateReaderCallback(false);
        }
    }, [readerIsOpen, updateReaderCallback]);

    const handleKeyUp = useCallback((e) => {
        if (e.key !== undefined && e.key !== null && e.key === "Escape") {
            updateReaderCallback(false);
        }
    }, [updateReaderCallback])

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);
        return () => { window.removeEventListener("keyup", handleKeyUp);}
    }, [handleKeyUp]);

    return (
        <div
        className={readerIsOpen ? baseClass + " z-4" : baseClass + " hidden"}
        onClick={handleClick}
        >
            {content}
        </div>
    );
}

export default PdfReader;