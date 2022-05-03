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
        // .then((res) => {
        //     console.log(res.body.json);
        // });
        console.log('response:', response);
        let data = await response.json();
        console.log('data:', data);
        setNote(data);
    }
    
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