import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { selectGenre, selectOptions, selectStars } from './filters/filterSlice';
import { selectBluesSongs, selectElevatorSongs, selectFusionSongs, selectGrungeSongs, selectJazzSongs, selectKlassiekSongs, selectMetalSongs, selectPopSongs, selectPunkSongs, selectReggaeSongs, selectRockSongs, selectSkaSongs, selectSoulSongs, setShowArray } from './songs/songSlice';

//const other  = useSelector(selectSongs);
export const SortingFunction = () => {
    const dispatch = useDispatch();
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
    const starFilter = useSelector(selectStars);
    const genreFilter = useSelector(selectGenre);
    const sortBy = useSelector(selectOptions);
    
    useEffect(() => {
    
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
            console.log("not sorted");
    }
        dispatch(setShowArray(cummulate))
    
},[genreFilter, starFilter, sortBy, metal, rock, blues, klassiek, jazz, lift, pop, punk, fusion, reggae, grunge, soul, ska,dispatch])
    return (
        <>
        </>
    );
}
