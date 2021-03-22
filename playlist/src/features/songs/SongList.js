import React from 'react';
import { selectSongs } from './songSlice';
import { useSelector } from 'react-redux';

const SongList = () => {

    const songs  = useSelector(selectSongs); 
    console.log(songs)
    const actualList = songs.map((element ,index)=> {
        return (<tr id={index + element.songTitle} key={index + element.songTitle}>
                <td>{element.songTitle}</td>
                <td>{element.artistName}</td>
                <td>{element.genre}</td>
                <td>{element.rating}</td>
            </tr>)

    })

    return (
        <tbody>
            {actualList}
        </tbody>
    )
}

export default SongList
