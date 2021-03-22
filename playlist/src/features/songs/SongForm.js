import React, {useState } from 'react'
import {useDispatch} from 'react-redux';
import { addSong } from './songSlice';


const SongForm = () => {
     const dispatch = useDispatch();
     const [songToAdd, setSongToAdd] = useState({
         songTitle:"",
         artistName:"",
         genre:"",
         rating:""
     });

    const handleChange = (e) => {
           setSongToAdd((prev) => ({
                ...prev,
               [e.target.name]:(e.target.value)
            }) )
    }

    return (
        <div>
            <input type="text" name="songTitle" value={songToAdd.songTitle} onChange={handleChange}/>
            <input type="text" name="artistName" value={songToAdd.artistName} onChange={handleChange} />
            <input type="text" name="genre" value={songToAdd.genre}  onChange={handleChange}/>
            <input type="text" name="rating" value={songToAdd.rating} onChange={handleChange}/>
            <button onClick={() => dispatch(addSong(songToAdd)) } >Add</button>
        </div>
    )
}

export default SongForm
