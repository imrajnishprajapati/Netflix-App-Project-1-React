import React from 'react';
import Sdata from './Sdata';

const Type2 = () => {

    function Card(props) {
        return (
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="imgm3gun" className='card_img' />
                    <div className="card_info">
                        <span className="card_category"> {props.SeriesName}</span>
                            <h3 className="card_title">{props.Title}</h3>
                            <a href={props.link} target='_blank'>
                                <button> Watch Now</button>
                            </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>

            <h1 className='heading_style'>List (2) of top 6 horror Series in 2023</h1>
           
            <Card
                imgsrc={Sdata[0].imgsrc}
                link={Sdata[0].link}
                Title={Sdata[0].Title}
                SeriesName={Sdata[0].SeriesName}
            />

            <Card
                imgsrc={Sdata[1].imgsrc}
                link={Sdata[1].link}
                Title={Sdata[1].Title}
                SeriesName={Sdata[1].SeriesName}
            />

            <Card
                imgsrc={Sdata[2].imgsrc}
                link={Sdata[2].link}
                Title={Sdata[2].Title}
                SeriesName={Sdata[2].SeriesName}
            />

            <Card
                imgsrc={Sdata[3].imgsrc}
                link={Sdata[3].link}
                Title={Sdata[3].Title}
                SeriesName={Sdata[3].SeriesName}
            />

<Card
                imgsrc={Sdata[4].imgsrc}
                link={Sdata[4].link}
                Title={Sdata[4].Title}
                SeriesName={Sdata[4].SeriesName}
            />

<Card
                imgsrc={Sdata[5].imgsrc}
                link={Sdata[5].link}
                Title={Sdata[5].Title}
                SeriesName={Sdata[5].SeriesName}
            />




        </>
    )
}

export default Type2;
