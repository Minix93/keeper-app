import React, {useEffect, useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";


function App() {
    const initalNotes = notes;
    let currIndex = notes.length;
    const [noteList, setNoteList] = useState(initalNotes);


    // add the note when button "Add" is clicked
    function addNote(inputContent){
        currIndex += 1;
        const newNote = {
            ...inputContent,
            key: currIndex
        }
        setNoteList(prevState => {
           return ([
               ...prevState,
               newNote
           ]);
        });
    }

    function deleteNote(id){
        setNoteList(prevState => {
            return prevState.filter((note,index)=>{
                return index !== id;
            });
        });
    };



    const [data, setData] = useState([{}]);

    useEffect(()=>{
        fetch("/api")
            .then(res => res.json() )
            .then(data => setData(data) );
    },[]);





  return (
    <div >
      <Header />
        <CreateArea
        onAdd={addNote}/>

      {noteList.map((note, index)=>{
        return <Note
            key={index}
            id={index}
          title={note.title}
          content={note.content}
            onDelete={deleteNote}
        />;
      })}

        <Note
            key={10}
            id={10}
            title={data.title}
            content={data.content}
            onDelete={deleteNote}
        />

      <Footer />
    </div>
  );
}

export default App;
