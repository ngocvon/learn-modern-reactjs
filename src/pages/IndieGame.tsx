// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useParams} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function IndieGame() {
    const {name}=useParams();
    return (
        <div className="wrapper">
            <div className="innerWrapper">
                <section className="IndieGame">
                    <h1>This is IndieGame page-{ name }</h1>
                </section>
            </div>

        </div>
    )
}

export default IndieGame