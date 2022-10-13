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







    // get data from the database
    const [data, setData] = useState([{}]);

    useEffect(()=>{
        fetch("/api")
            .then(res => res.json() )
            .then(data => setData(data) );
    },[]);



    // delete note from the list
    function deleteNote(id){
        // delete from the data list state
        setData(prevState => {
            return prevState.filter((note)=>{
                return note._id !== id;
            });
        });

        // delete from the database
        fetch("/api/"+id, {method: "DELETE"} )
            .then(res => console.log(res));

    };


    // add the note when button "Add" is clicked
    function addNote(inputContent){
        // currIndex += 1;
        // const newNote = {
        //     ...inputContent,
        //     key: currIndex
        // }
        // setNoteList(prevState => {
        //     return ([
        //         ...prevState,
        //         newNote
        //     ]);
        // });

        const {title, content} = inputContent;
        const newNote = {
            title: title,
            body : content
        }

        fetch("/api",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newNote)})
            .then(res => console.log(res));
    }



  return (
    <div >
      <Header />
        <CreateArea
        onAdd={addNote}/>

      {/*{noteList.map((note, index)=>{*/}
      {/*  return <Note*/}
      {/*      key={index}*/}
      {/*      id={index}*/}
      {/*    title={note.title}*/}
      {/*    content={note.content}*/}
      {/*      onDelete={deleteNote}*/}
      {/*  />;*/}
      {/*})}*/}

        {data.map((note) =>{
            return <Note
                key = {note._id}
                id = {note._id}
                title= {note.title}
                content={note.body}
                onDelete={deleteNote}
            />
        })}

      <Footer />
    </div>
  );
}

export default App;
