import React from "react";

function Note(props)
{

    return(
        <div className="note">
            <h1 contentEditable="true" spellCheck="false" >{props.title}</h1>
            <p contentEditable="true" spellCheck="false">{props.content}</p>
        </div>
    );
}

export default Note;