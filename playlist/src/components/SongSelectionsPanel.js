import React from 'react'

const SongSelectionsPanel = () => {
    return (
        <div className="Selectionpanel">
            <p>Select genres</p>
            <input type="checkbox" name="metal" id="metal"/>
            <label htmlFor="metal">Metal</label>
            <input type="checkbox" name="" id="rock"/>
            <label htmlFor="rock">Rock</label>
            <input type="checkbox" name="" id="blues"/>
            <label htmlFor="blues">Blues</label>
            <input type="checkbox" name="" id="klassiek"/>
            <label htmlFor="klassiek">Klassiek</label>
            <input type="checkbox" name="" id="jazz"/>
            <label htmlFor="jazz">Jazz</label>
            <input type="checkbox" name="" id="pop"/>
            <label htmlFor="pop">Pop</label>
            <input type="checkbox" name="" id="fusion"/>
            <label htmlFor="fusion">Fusion</label>
            <input type="checkbox" name="" id="soul"/>
            <label htmlFor="soul">Soul</label>
            <input type="checkbox" name="" id="reggae"/>
            <label htmlFor="reggae">Reggae</label>
            <input type="checkbox" name="" id="ska"/>
            <label htmlFor="ska">Ska</label>
            <input type="checkbox" name="" id="punk"/>
            <label htmlFor="punk">Punk</label>
            <input type="checkbox" name="" id="grunge"/>
            <label htmlFor="grunge">Grunge</label>
            <input type="checkbox" name="" id="elevator"/>
            <label htmlFor="elevator">Liftmuziek</label>
        </div>
    )
}

export default SongSelectionsPanel
