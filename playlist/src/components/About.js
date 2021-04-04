import React from 'react'
import { useSelector } from 'react-redux';
import { selectShowArray } from '.././features/songs/songSlice';


const About = () => {
    const songs  = useSelector(selectShowArray);
    return (
        <main>
            <article className="song__table">
                <h3>About this songlist:</h3> 
                <p>There are currently {songs.length} songs selected on this list. <br/>
                
                </p>

            </article>
        </main>
    )
}

export default About
