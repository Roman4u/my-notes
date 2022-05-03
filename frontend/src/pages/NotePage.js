import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assests/arrow-left.svg';
import { Link } from "react-router-dom";

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
        <div className="note" >
            {/* <button onClick={() => { 
                navigate('/')
            }}>click</button> */}
            {/* <h1>NOTE HERE {id} </h1> */}
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft />
                    </Link>
                </h3>

            </div>
            <textarea defaultValue={note?.body} ></textarea>
        </div>
    )
}

export default NotePage;