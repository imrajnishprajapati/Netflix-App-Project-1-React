import React from 'react'

function Card(props) {
    // console.log(props)
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="imgm3gun" className='card_img' />
                    <div className="card_info">
                        <span className="card_category"> {props.SeriesName}  </span>
                        <h3 className="card_title"> {props.Title}  </h3>
                        <a href={props.link} target='_blank'>
                            <button> Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
