// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Card({data}) {
    return (
        <section className="cards">

                {data.map((item,i) => (
                    <div className="item" key={item.id}>
                        <div className="card">
                            <img src={item.image} alt={item.alt} key={i} width={200}/>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}

        </section>
    )
}

export default Card