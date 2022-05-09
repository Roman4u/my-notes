import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
    const { note } = props; 

    const getTitle = (note) => {
        let title = note.body.split("\n")[0];
        if(title.length > 45){
            return title.slice(0, 45)
        };
        return title; 
    };

    const getTime = (note) => {
        console.log(note);
        return new Date(note.updated).toLocaleDateString();
    }

    const getContent = (note) => {
        let title = getTitle(note)
        let content = note.body.replaceAll('\n', ' ');
        content = content.replaceAll(title, '');

        if(content.length > 45){
            return content.slice(0, 45) + '...';
        }else{
            return content; 
        }
    }

    return(
        <Link to={`/notes/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)} </h3>
                <p>
                    <span>{getTime(note)}</span>
                    {getContent(note)}
                </p>
            </div>    
        </Link>
    )
}

export default ListItem;