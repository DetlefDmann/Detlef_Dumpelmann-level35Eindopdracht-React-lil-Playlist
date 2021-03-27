import React from 'react'; 
import { filterGenre, selectGenre } from '../features/filters/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const SongSelectionsPanel = () => {
    const selectedFiltersObject = useSelector(selectGenre);// filters boolean
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        //should update the filterSlice
        dispatch(filterGenre({name:e.target.name, checked:e.target.checked}))
    }

    return (
        <div className="song__panel">
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
                name="klassiekSongArray" 
                id="klassiek"
                onChange={handleChange}
                checked={selectedFiltersObject.klassiekSongArray}
            />
            <label htmlFor="klassiek">Klassiek</label><br/>
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
            <label htmlFor="elevator">Liftmuziek</label><br/>
        </div>
    )
}

export default SongSelectionsPanel
