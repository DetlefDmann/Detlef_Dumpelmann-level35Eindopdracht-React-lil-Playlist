import React from 'react'
import { useSelector } from 'react-redux';
import { selectSongs } from '.././features/songs/songSlice';


const About = () => {
    const songs  = useSelector(selectSongs);
    return (
        <main>
            <article className="song__table">
                <h3>About this songlist:</h3> 
                <p>There are currently {songs.length} songs on this list.</p>
            </article>
            
        </main>
    )
}

export default About
