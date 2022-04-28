import React, { useState, useEffect } from "react";
import ListItem from "../components/Listitem";

const NotesListPage = () => {
  
  let [ notes, setNotes ] = useState(null);

  useEffect(() => {
      getNotes();
  }, []);

  let getNotes = async () => {
      let response = await fetch('/api/notes/' );
      let data = await response.json();
      setNotes(data);  
  };
  
  return (
    <div>
      <div className="notes-list">
        {notes?.map((note, index) => {
          return <ListItem key={index} note={note} />;
        })}
      </div>
    </div>
  );
};

export default NotesListPage;
