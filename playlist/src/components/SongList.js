import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { selectGenre, selectOptions, selectStars } from '../features/filters/filterSlice';
import { deleteSong , selectShowArray,setShowArray } from '../features/songs/songSlice';


const SongList = () => {
    const dispatch = useDispatch();
     const starFilter = useSelector(selectStars);
     const genreFilter = useSelector(selectGenre);
     const sortBy = useSelector(selectOptions);
    const shownSongs = useSelector(selectShowArray);

    //  Re-calculate the list when the filters or the state change   
    useEffect(() => {
        dispatch(setShowArray({genreFilter,starFilter,sortBy}));
        
    },
    [genreFilter,starFilter,sortBy, dispatch]
    )

    const handleDelete = (e) => {
        const genre = e.target.genre;
        const id = e.target.id;
        dispatch(deleteSong({id:id, genre:genre}));
        dispatch(setShowArray({genreFilter,starFilter,sortBy}));
    }

    const actualList = shownSongs.map((element)=> {
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
