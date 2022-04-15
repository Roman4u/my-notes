import React, { useState, useEffect } from "react";

const NotesListPage = () => {
  // const { notes } = props;
  let [ notes, setNotes ] = useState(null);

  useEffect(() => {
      getNotes();
  }, []);

  let getNotes = async () => {
      let response = await fetch('http://127.0.0.1:8000/api/notes/' );
      let data = await response.json();
      console.log(data)
      console.log("data:", data);
      setNotes(data);
      console.log('111',notes)
  };
  
  return (
    <div>
      <div className="notes-list">
        {notes?.map((note, index) => {
          return <h3>{note.body}</h3>;
        })}
      </div>
    </div>
  );
};

export default NotesListPage;
