import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectOptions , sortOption } from '../features/filters/filterSlice'

const SongSortingPanel = () => {
    const dispatch = useDispatch();
    const selectedOption = useSelector(selectOptions)

const handleOptions = (e) => {
    console.log(e.target.value)
    dispatch(sortOption(e.target.value))
}

    return (
        <div className="song__sort">
            <p>Sort songs by</p>
            <select name="sortingOptions" value={selectedOption} onChange={handleOptions}>
                <option value="songsAZ">Songs a-z</option>
                <option value="songsZA">Songs z-a</option>
                <option value="artistAZ">Artist a-z</option>
                <option value="artistZA">Artist z-a</option>
                <option value="starsDesc">Stars 5-1</option>
                <option value="starsAsc">Stars 1-5</option>
            </select>
        </div>
    )
}

export default SongSortingPanel
