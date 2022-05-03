import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
    const { note } = props; 

    return(
        <Link to={`/notes/${note.id}`}>
            <h3>{ note.body }</h3>
        </Link>
    )
}

export default ListItem;