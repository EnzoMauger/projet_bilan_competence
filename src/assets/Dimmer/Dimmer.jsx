import "./dimmer.css";

function Dimmer(props) {

    const { isActive } = props;

    const baseClass = "dimmer"; 

    return (
        <div className={isActive ? baseClass + " z-3" : baseClass + " hidden"}></div>
    )
}

export default Dimmer;