import { useCallback, useEffect, useState } from "react";
import "./iframe-modal.css";

function IframeModal(props) {

    const baseClass = "iframe-modal";
    const { readerIsOpen } = props;
    const { updateReaderCallback } = props;

    const [content, setContent] = useState("");

    let { _width } = props;
    _width = _width ?? 560;
    let { _height } = props;
    _height = _height ?? 315;
    let { _src } = props;

    useEffect(() => {
        setContent(
            <iframe width={_width} height={_height} src={_src} title="YouTube video player" frameborder="0" allow="fullscrenn accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            // <iframe  src={_src} allow="autoplay fullscreen" />
            );
    }, [setContent, _width, _height, _src]);

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
        return () => { window.removeEventListener("keyup", handleKeyUp); }
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

export default IframeModal;