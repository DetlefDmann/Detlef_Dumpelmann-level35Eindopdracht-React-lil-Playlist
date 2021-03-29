import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { selectGenre, selectOptions, selectStars } from '../features/filters/filterSlice';
import { deleteSong, selectBluesSongs, selectElevatorSongs, selectFusionSongs, selectGrungeSongs, selectJazzSongs, selectKlassiekSongs, selectMetalSongs, selectPopSongs, selectPunkSongs, selectReggaeSongs, selectRockSongs, selectSkaSongs, selectSoulSongs } from '../features/songs/songSlice';


const SongList = () => {
    const dispatch = useDispatch();
    //const other  = useSelector(selectSongs);
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
    

    const[songs,setSongs] = useState([]);

    const starFilter = useSelector(selectStars);
    const genreFilter = useSelector(selectGenre);
    const sortBy = useSelector(selectOptions);

    //  Re-calculate the list when the filters or the state change   
    useEffect(() => {
        setSongs([]);
                let cummulate = [];
              
                if(genreFilter.metalSongArray){
                    cummulate = [...cummulate, ...metal];
                }
                else console.log(sortBy);
                if(genreFilter.rockSongArray){
                    cummulate = [...cummulate, ...rock];
                }
                if(genreFilter.bluesSongArray){
                    cummulate = [...cummulate, ...blues];
                }
                if(genreFilter.klassiekSongArray){
                    cummulate = [...cummulate, ...klassiek];
                }
                if(genreFilter.jazzSongArray){
                    cummulate = [...cummulate, ...jazz];
                }
                if(genreFilter.popSongArray){
                    cummulate = [...cummulate, ...pop];
                }
                if(genreFilter.fusionSongArray){
                    cummulate = [...cummulate, ...fusion];
                }
                if(genreFilter.soulSongArray){
                    cummulate = [...cummulate, ...soul];
                }
                if(genreFilter.reggaeSongArray){
                    cummulate = [...cummulate, ...reggae];
                }
                if(genreFilter.skaSongArray){
                    cummulate = [...cummulate, ...ska];
                }
                if(genreFilter.punkSongArray){
                    cummulate = [...cummulate, ...punk];
                }
                if(genreFilter.grungeSongArray){
                    cummulate = [...cummulate, ...grunge];
                }
                if(genreFilter.elevatorSongArray){
                    cummulate = [...cummulate, ...lift];
                } 
                if(!starFilter.one){
                    cummulate = cummulate.filter(song => song.rating !== 1)
                }
                if(!starFilter.two){
                    cummulate = cummulate.filter(song => song.rating !== 2)
                }
                if(!starFilter.three){
                    cummulate = cummulate.filter(song => song.rating !== 3)
                }
                if(!starFilter.four){
                    cummulate = cummulate.filter(song => song.rating !== 4)
                }
                if(!starFilter.five){
                    cummulate = cummulate.filter(song => song.rating !== 5)
                }
                // sort by sortOption (string)
                switch(sortBy){
                    case "songsAZ":
                        cummulate.sort((a,b)=> {
                            if(a.songTitle>b.songTitle){return 1}
                            if(b.songTitle>a.songTitle){return -1}
                            return 0
                        });
                    break;
                    case "songsZA":
                        cummulate.sort((a,b)=> {
                            if(a.songTitle<b.songTitle){return 1}
                            if(b.songTitle<a.songTitle){return -1}
                            return 0
                        });
                    break;
                    case "artistAZ":
                        cummulate.sort((a,b)=> {
                            if(a.artistName>b.artistName){return 1}
                            if(b.artistName>a.artistName){return -1}
                            return 0
                        });
                    break;
                    case "artistZA":
                        cummulate.sort((a,b)=> {
                            if(a.artistName<b.artistName){return 1}
                            if(b.artistName<a.artistName){return -1}
                            return 0
                        });
                    break;
                    case "starsDesc":
                        cummulate.sort((a,b)=> {
                            if(a.rating<b.rating){return 1}
                            if(b.rating<a.rating){return -1}
                            return 0
                        });
                    break;
                    case "starsAsc":
                        cummulate.sort((a,b)=> {
                            if(a.rating>b.rating){return 1}
                            if(b.rating>a.rating){return -1}
                            return 0
                        });
                    break;
                    default:
                        console.log("not sorted")
                }

                setSongs(cummulate);
        
    },[genreFilter,starFilter,sortBy])

    console.log(songs)
    console.log(starFilter)

    const handleDelete = (e) => {
        
        const genre = e.target.genre;
        const id = e.target.id;
        dispatch(deleteSong({id:id, genre:genre}));
        console.log(e.target)
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
