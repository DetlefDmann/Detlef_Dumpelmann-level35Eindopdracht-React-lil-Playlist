import React, {useState } from 'react'
import {useDispatch , useSelector} from 'react-redux';
import { selectGenre, selectOptions, selectStars } from '../features/filters/filterSlice';
import { addSong , setShowArray} from '../features/songs/songSlice';


const SongForm = () => {
     const dispatch = useDispatch();
     const starFilter = useSelector(selectStars);
     const genreFilter = useSelector(selectGenre);
     const sortBy = useSelector(selectOptions);
     const [songToAdd, setSongToAdd] = useState({
         songTitle:"",
         artistName:"",
         genre:"",
         rating:5,
     });

    const handleChange = (e) => {
           setSongToAdd((prev) => ({
            ...prev,
            [e.target.name]:(e.target.value),
            }) )
    }

    const handleClick  = () => {
        dispatch(addSong(songToAdd));
        dispatch(setShowArray({genreFilter,starFilter,sortBy}));
    }

    return (
        <div className="song__form">
            <input type="text" name="songTitle" value={songToAdd.songTitle} onChange={handleChange}/>
            <input type="text" name="artistName" value={songToAdd.artistName} onChange={handleChange} />
            <select name="genre" value={songToAdd.genre} onChange={handleChange}>
                <option value=""></option>
                <option value="metal">Metal</option>
                <option value="rock">Rock</option>
                <option value="blues">Blues</option>
                <option value="klassiek">Klassiek</option>
                <option value="jazz">Jazz</option>
                <option value="pop">Pop</option>
                <option value="fusion">Fusion</option>
                <option value="soul">Soul</option>
                <option value="reggae">Reggae</option>
                <option value="ska">Ska</option>
                <option value="punk">Punk</option>
                <option value="grunge">Grunge</option>
                <option value="elevator">Liftmuziek</option>
            </select>
            <select name="rating" value={songToAdd.rating} onChange={handleChange}>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
            <button onClick={handleClick} >Add</button>
        </div>
    )
}

export default SongForm
