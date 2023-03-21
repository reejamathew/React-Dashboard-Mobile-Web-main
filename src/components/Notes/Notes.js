import React, {useState} from 'react'
import NotesForm from './NotesForm';
import NotesList from './NotesList';

const Notes = () => {

    const [notes, setNotes] = useState([]);
//adding notes
    const addNote = note => {
        setNotes([...notes, note]);
        alert(`${note.note} is added successfully`)
    }
//deleting notes
    const deleteNote = note => {
        setNotes(notes.filter(noteItem => noteItem.id !== note.id))
        alert(`${note.note} is removed successfully`)
    }

    return (
        <div className='container'>
            <div className='col-md-6 m-auto mt-5'>  
                <div className='Notes'>
                    <NotesForm addNoteProp = {addNote} />
                    {
                        notes.map(note => <NotesList key={ note.id } item={ note }  deleteNoteProp = {deleteNote}/>)
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Notes;