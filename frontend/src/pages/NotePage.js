import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assests/arrow-left.svg';


const NotePage = (props) => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getNote();
    }, [id]);

    const getNote = async () => {
        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json();
        setNote(data);
    };

    const updateNote = () => {
        fetch(`/api/notes/${id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    };
    
    const handleSubmit = () => {
        console.log("note:", note);
        updateNote();
    };

    return(
        <div className="note" >
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={() => {
                        handleSubmit();
                        navigate('/')}
                        } />
                </h3>
            </div>

            <textarea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage;