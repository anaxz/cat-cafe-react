import React, { useState } from "react";
import { teamCat } from '../../assets/cat'

import Card from 'react-bootstrap/Card';

const MeetTheTeam = () => {
    const [catImg, setCatImg] = useState(teamCat)
    
    // const IMG = () => {
    //     return require (`${catImg}`)
    // }

    return <div className="meet-cat-team-container">
        <h3>Meet the team...</h3>
        {catImg.map((cat, index) => <Card key={index+1}>
            <img src={`${cat.src}`} alt={cat.alt}></img>

            <p className="card-text">Micky</p>
        </Card>
        )}
        
    </div>
}

export default MeetTheTeam