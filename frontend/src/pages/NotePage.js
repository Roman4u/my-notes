import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const NotePage = (props) => {
    let { id } = useParams();
    let [note, setNote] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getNote();
    }, [id]);

    let getNote = async () => {
        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json();
        setNote(data);
    };
    
    const display = () => {
        console.log("it worked!");
    };

    return(
        <div>
            {/* <button onClick={() => { 
                navigate('/')
            }}>click</button> */}
            {/* <h1>NOTE HERE {id} </h1> */}
            <p>{note?.body}</p>
        </div>
    )
}

export default NotePage;