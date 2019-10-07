import React from "react";

function Toolbar(props) {
    return (
        <header className="toolbar">
            <img src={props.logo} />
        </header>
    );
}

export default Toolbar;
