import React from "react";

import { Slider, MeetTheTeam } from '../../components'

const Home = () => {
    return <div className="home-container">
        <Slider />
        <MeetTheTeam />

        <div>
            <p>...and the humans</p>
        </div>
    </div>
}

export default Home