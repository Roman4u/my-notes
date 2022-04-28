import React from "react";

const ListItem = (props) => {
    const { note } = props; 

    return(
        <div>
            <h3>{note.body}</h3>
        </div>
    )
}

export default ListItem;