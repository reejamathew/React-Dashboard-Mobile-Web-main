import React from 'react'

const NotesList = ({item, deleteNoteProp}) => {
//deleting particular note
    const deleteNote = _ => deleteNoteProp(item)

//showing list of notes along with delete button for deleting it
    return (
        <div className='NotesList'>
            <div>{item.note}</div>
            <div><input type="button" value='Delete' onClick={deleteNote}></input></div>
        </div>
    )
}

export default NotesList;