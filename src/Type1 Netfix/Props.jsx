import React from 'react';

const Type1 = () => {

    function Card(props) {
        return (
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="imgm3gun" className='card_img' />
                    <div className="card_info">
                        <span className="card_category"> {props.SeriesName}
                            <h3 className="card_title">{props.Title}</h3>
                            <a href={props.link} target='_blank'>
                                <button> Watch Now</button>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>

            <h1 className='heading_style'>List (1) of top 6 horror Series in 2023</h1>
            <Card
                imgsrc="https://www.heavenofhorror.com/wp-content/uploads/2023/01/m3gan-review-1200x675.jpg"
                link="https://www.imdb.com/title/tt8760708/?ref_=adv_li_i"
                Title="M3GUN"
                SeriesName="A Netfix Original Series M3GUN"

            />

            <Card
                imgsrc="https://highoncinemaa.com/wp-content/uploads/2023/04/Evil-Dead-Rise-Full-Plot-Summary-Spoilers-and-Leaks-Is-There-A-Post-Credit-Scene.jpg"
                link="https://www.imdb.com/title/tt13345606/?ref_=adv_li_tt"
                Title="Evil Dead Rise"
                SeriesName="A Netfix Original Series IMDB"
            />

            <Card

                imgsrc="https://i.pinimg.com/564x/e6/d0/58/e6d058a04589c6bf5883e25d68c2823b.jpg"
                link="https://www.imdb.com/title/tt0387564/?ref_=adv_li_tt"
                Title="Saw"
                SeriesName="A Netfix Original Series IMBD"
            />


            <Card
                imgsrc="https://m.media-amazon.com/images/M/MV5BMTNiMDBmZWQtZDI4Ni00ZGViLWJlOWMtNTdkODNlMTFkZjc2XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_FMjpg_UX1000_.jpg"
                link="https://www.imdb.com/title/tt2628232/?ref_=rvi_tt"
                Title="Penny Dreadful"
                SeriesName="A Netfix Original Series IMDB"
            />


            <Card
                imgsrc=" https://w0.peakpx.com/wallpaper/927/713/HD-wallpaper-helloween-ghost-bats-witch-hallowee-skeleton-jack-o-lantern-pumpkins.jpg "
                link=" https://www.imdb.com/title/tt0077651/?ref_=ttls_li_tt "
                Title=" Halloween "
                SeriesName="A Netfix Original Series IMDB"

            />

            <Card
                imgsrc=" https://flxt.tmsimg.com/assets/p101_v_h10_ad.jpg "
                link=" https://www.imdb.com/title/tt0077745/?ref_=ttls_li_tt "
                Title=" Invasion of the Body Snatchers "
                SeriesName="A Netfix Original Series IMDB"
            />

        </>
    )
}

export default Type1;
