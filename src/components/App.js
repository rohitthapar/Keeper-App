import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Note from "./Note.js";
import notes from "../notes";

function createNotes(noteItem)
{
    return (<Note
        key={noteItem.key}
        title = {noteItem.title}
        content = {noteItem.content}
    />)
}

function App()
{
    return ( 
        <div>
           <Header/>
           {notes.map(createNotes)}
           <Footer/>
        </div>
    );
}


export default App;