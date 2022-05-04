import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as AddIcon } from '../assests/add.svg';

const AddButton = () => {
    const navigate = useNavigate();

    return (
        <div>
            <AddIcon onClick={() => {
                navigate('/notes/new')
            }} className="floating-button" />
        </div>
    )
}

export default AddButton