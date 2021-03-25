import React from 'react'
import { useSelector } from 'react-redux';
import { selectSongs } from '.././features/songs/songSlice';


const About = () => {
    const songs  = useSelector(selectSongs);
    return (
        <main>
            <h3>About this songlist:</h3> 
            <p>There are currently {songs.length} songs on this list.</p>
        </main>
    )
}

export default About
