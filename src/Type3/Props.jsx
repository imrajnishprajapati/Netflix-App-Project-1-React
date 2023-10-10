import React from 'react';
import Card from './Card';
import Sdata1 from './Sdata';

{/* first solution  */}

function NCard(value) {
    return (
        <Card
            imgsrc={value.imgsrc}
            link={value.link}
            Title={value.Title}
            SeriesName={value.SeriesName}
        />
    )
}


const Type3 = () => {
    return (
        <>
            <h1 className='heading_style'>List (3) of top 6 horror Series in 2023</h1>

{/* first solution  */}
           { Sdata1.map(NCard)}



{/* second solution  */}

{ Sdata1.map(function NCard (value){
    return(
        <Card
             imgsrc={value.imgsrc}
             link={value.link}
             Title={value.Title}
             SeriesName={value.SeriesName}
         />
    )
} )}


{/* third  solution  */}
{ Sdata1.map((value)=>{
    return(
        <Card
             imgsrc={value.imgsrc}
             link={value.link}
             Title={value.Title}
             SeriesName={value.SeriesName}
         />
    )
})}




        </>
    )
}

export default Type3;
