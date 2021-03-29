import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { selectGenre, selectOptions, selectStars } from '../features/filters/filterSlice';
import { deleteSong , selectShowArray } from '../features/songs/songSlice';


const SongList = () => {
    const dispatch = useDispatch();
     const starFilter = useSelector(selectStars);
     const genreFilter = useSelector(selectGenre);
     const sortBy = useSelector(selectOptions);
    const shownSongs = useSelector(selectShowArray);
    const[songs,setSongs] = useState([]);

    //  Re-calculate the list when the filters or the state change   
    useEffect(() => {
        setSongs(shownSongs);
        
    },[genreFilter,starFilter,sortBy, shownSongs])

    const handleDelete = (e) => {
        const genre = e.target.genre;
        const id = e.target.id;
        dispatch(deleteSong({id:id, genre:genre}));
    }

    const actualList = songs.map((element)=> {
        return (
            <tr  key={element.id}>
                <td >{element.songTitle}</td>
                <td >{element.artistName}</td>
                <td >{element.genre}</td>
                <td >{element.rating}</td>
                <td ><button id={element.id} genre={element.genre} onClick={ handleDelete }>delete</button></td>
            </tr>
        )

    })

    return (
        <tbody>
            {actualList}
        </tbody>
    )
}

export default SongList
