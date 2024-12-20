import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note,setNote] = useState({
        title:"",
        description:"",
        tag:""
    });
    
    const onChange = (e) => {
        setNote({...note,[e.target.name]: e.target.value})
    }
    
    const handleClick = (e) => {
        e.preventDefault();//to avoid page reload
        addNote(note.title, note.description, note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added Succesfully","success");
    }

    return (
        <div>
            <div className='container my-3'>
                <h1>Add a note</h1>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} value={note.title} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={note.description} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag} minLength={5} required />
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5 || note.tag.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote