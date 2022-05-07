import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assests/arrow-left.svg';


const NotePage = (props) => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("id");
        getNote();
    }, [id]);

    const getNote = async () => {
        console.log(id);
        if(id === 'new') return;

        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json();
        setNote(data);
    };

    const createNote = async () => {
        fetch('/api/notes/create', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        console.log("create note initiated");
    }

    const updateNote = async () => {
        fetch(`/api/notes/${id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    };

    const deleteNote = async () => {
        fetch(`/api/notes/${id}/delete`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
    }
    
    const handleSubmit = () => {
        console.log("note:", note);
        if(id !== 'new' && note.body === ''){
            // this logic checks for when the content of note.body has 
            // been manually deleted; i.e. not using the provided 
            // delete button
            deleteNote();
        }else if(id !== 'new'){
            updateNote();
        }else if(id === 'new' && note !== null){
            createNote();
        }   
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
                {id !== 'new' ?  (
                        <button onClick={() => {
                        deleteNote();
                        navigate('/')
                        }}>Delete</button>
                    ) : (
                        <button onClick={() => {
                        handleSubmit();
                        navigate('/')
                        }}>Done</button>    
                 )}      
            </div>

            <textarea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage;