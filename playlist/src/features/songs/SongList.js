import React from 'react';
import { selectSongs } from './songSlice';
import { useSelector , useDispatch } from 'react-redux';
import { deleteSong } from './songSlice';


const SongList = () => {
    const dispatch = useDispatch();
    const songs  = useSelector(selectSongs); 
    console.log(songs)

    const handleDelete = (e) => {
        dispatch(deleteSong(e.target.id));
        console.log(`Dit is de id die meegegeven wordt: ${e.target.id}`)
    }

    const actualList = songs.map((element)=> {
        return (
            <tr  key={element.id}>
                <td >{element.songTitle}</td>
                <td >{element.artistName}</td>
                <td >{element.genre}</td>
                <td >{element.rating}</td>
                <td ><button id={element.id} onClick={ handleDelete }>delete</button></td>
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
