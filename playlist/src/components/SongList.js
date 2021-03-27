import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { selectGenre, selectStars } from '../features/filters/filterSlice';
import { deleteSong, selectBluesSongs, selectElevatorSongs, selectFusionSongs, selectGrungeSongs, selectJazzSongs, selectKlassiekSongs, selectMetalSongs, selectPopSongs, selectPunkSongs, selectReggaeSongs, selectRockSongs, selectSkaSongs, selectSongs, selectSoulSongs } from '../features/songs/songSlice';


const SongList = () => {
    const dispatch = useDispatch();
    const other  = useSelector(selectSongs);
    const metal = useSelector(selectMetalSongs);
    const rock = useSelector(selectRockSongs);
    const blues = useSelector(selectBluesSongs);
    const klassiek = useSelector(selectKlassiekSongs);
    const jazz = useSelector(selectJazzSongs);
    const pop = useSelector(selectPopSongs);
    const fusion = useSelector(selectFusionSongs);
    const soul = useSelector(selectSoulSongs);
    const reggae = useSelector(selectReggaeSongs);
    const ska = useSelector(selectSkaSongs);
    const punk = useSelector(selectPunkSongs);
    const grunge = useSelector(selectGrungeSongs);
    const lift = useSelector(selectElevatorSongs);

    const[songs,setSongs] = useState([])

    const starFilter = useSelector(selectStars);
    const genreFilter = useSelector(selectGenre);


    const concatPlaylistComponents = () => {
        // genreFilter loop 
        setSongs([]);
        if(genreFilter.metalSongArray){
            setSongs([...songs, ...metal]);
            console.log("metal added" + songs)
        }
        else console.log("metal removed");
    }

    useEffect(() => {
        concatPlaylistComponents()

    },[genreFilter, metal])

    console.log(metal)
    console.log(songs)
    console.log(starFilter)
    console.log(genreFilter)

    const handleDelete = (e) => {
        
        const genre = e.target.genre;
        const id = e.target.id;
        dispatch(deleteSong({id:id, genre:genre}));
        console.log(e.target.genre)
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
