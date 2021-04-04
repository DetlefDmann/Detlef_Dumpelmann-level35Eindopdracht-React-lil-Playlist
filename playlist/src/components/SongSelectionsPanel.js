import React from 'react'; 
import { filterGenre, filterStars, selectGenre, selectStars } from '../features/filters/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const SongSelectionsPanel = () => {
    const selectedFiltersObject = useSelector(selectGenre);
    const selectedStarsObject = useSelector(selectStars);
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        //should update the filterSlice
        dispatch(filterGenre({name:e.target.name, checked:e.target.checked}))
    }
    const handleStars = (e) => {
        dispatch(filterStars({name:e.target.name, checked:e.target.checked}))
    }

    return (
        <div className="song__panel">
            <div className="genres__panel">
            <p>Select genres</p>
            <input 
                type="checkbox" 
                name="metalSongArray" 
                id="metal" 
                onChange={handleChange}
                checked={selectedFiltersObject.metalSongArray}
            />
            <label htmlFor="metal">Metal</label><br/>
            <input 
                type="checkbox" 
                name="rockSongArray" 
                id="rock"
                onChange={handleChange}
                checked={selectedFiltersObject.rockSongArray}
            />
            <label htmlFor="rock">Rock</label><br/>
            <input 
                type="checkbox" 
                name="bluesSongArray" 
                id="blues"
                onChange={handleChange}
                checked={selectedFiltersObject.bluesSongArray}
            />
            <label htmlFor="blues">Blues</label><br/>
            <input 
                type="checkbox" 
                name="classicalSongArray" 
                id="classical"
                onChange={handleChange}
                checked={selectedFiltersObject.classicalSongArray}
            />
            <label htmlFor="classical">Classical</label><br/>
            <input 
                type="checkbox" 
                name="jazzSongArray" 
                id="jazz"
                onChange={handleChange}
                checked={selectedFiltersObject.jazzSongArray}
            />
            <label htmlFor="jazz">Jazz</label><br/>
            <input 
                type="checkbox" 
                name="popSongArray" 
                id="pop"
                onChange={handleChange}
                checked={selectedFiltersObject.popSongArray}
            />
            <label htmlFor="pop">Pop</label><br/>
            <input 
                type="checkbox" 
                name="fusionSongArray" 
                id="fusion"
                onChange={handleChange}
                checked={selectedFiltersObject.fusionSongArray}
            />
            <label htmlFor="fusion">Fusion</label><br/>
            <input 
                type="checkbox" 
                name="soulSongArray" 
                id="soul"
                onChange={handleChange}
                checked={selectedFiltersObject.soulSongArray}
            />
            <label htmlFor="soul">Soul</label><br/>
            <input 
                type="checkbox" 
                name="reggaeSongArray" 
                id="reggae"
                onChange={handleChange}
                checked={selectedFiltersObject.reggaeSongArray}
            />
            <label htmlFor="reggae">Reggae</label><br/>
            <input 
                type="checkbox" 
                name="skaSongArray" 
                id="ska"
                onChange={handleChange}
                checked={selectedFiltersObject.skaSongArray}
            />
            <label htmlFor="ska">Ska</label><br/>
            <input 
                type="checkbox" 
                name="punkSongArray" 
                id="punk"
                onChange={handleChange}
                checked={selectedFiltersObject.punkSongArray}
            />
            <label htmlFor="punk">Punk</label><br/>
            <input 
                type="checkbox" 
                name="grungeSongArray" 
                id="grunge"
                onChange={handleChange}
                checked={selectedFiltersObject.grungeSongArray}
            />
            <label htmlFor="grunge">Grunge</label><br/>
            <input 
                type="checkbox" 
                name="elevatorSongArray" 
                id="elevator"
                onChange={handleChange}
                checked={selectedFiltersObject.elevatorSongArray}
            />
            <label htmlFor="elevator">Elevator music</label><br/>
            <input 
                type="checkbox" 
                name="songArray" 
                id="other"
                onChange={handleChange}
                checked={selectedFiltersObject.songArray}
            />
            <label htmlFor="other">Other</label><br/>
            </div>
            <div className="stars__panel">
                <p>Select Stars</p>
                <input type="checkbox" name="five" id="five" onChange={handleStars} checked={selectedStarsObject.five}/>
                <label htmlFor="five">⭐⭐⭐⭐⭐</label><br/>
                <input type="checkbox" name="four" id="four" onChange={handleStars} checked={selectedStarsObject.four}/>
                <label htmlFor="four">⭐⭐⭐⭐</label><br/>
                <input type="checkbox" name="three" id="three" onChange={handleStars} checked={selectedStarsObject.three}/>
                <label htmlFor="three">⭐⭐⭐</label><br/>
                <input type="checkbox" name="two" id="two" onChange={handleStars} checked={selectedStarsObject.two}/>
                <label htmlFor="two">⭐⭐</label><br/>
                <input type="checkbox" name="one" id="one" onChange={handleStars} checked={selectedStarsObject.one}/>
                <label htmlFor="one">⭐</label><br/>
            </div>
        </div>
    )
}

export default SongSelectionsPanel
