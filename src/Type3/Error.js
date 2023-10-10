1111111111111111111111111111111111111111111111111111111111
function NetflixCard(value, ind) {
    console.log(ind)
    return (
        <Card
        imgsrc={value.imgsrc}
        link={value.link}
        Title={value.Title}
        SeriesName={value.SeriesName}
    />
    );
}
     
     {/* Type 1 ka bhag  */}
     { Sdata.map(NetflixCard)}


2222222222222222222222222222222222222222222222222222222222222222222

     {/* Type 2 ka bhag */}
     { {Sdata.map(function NetflixCard(value){
return(
 <Card
imgsrc={value.imgsrc}
link={value.link}
Title={value.Title}
SeriesName={value.SeriesName}
/>
)
})}
}

3333333333333333333333333333333333333333333333333333

     { Type 3 ka bhag}

     {Sdata.map((value) => {
         return (
             <Card
                 imgsrc={value.imgsrc}
                 link={value.link}
                 Title={value.Title}
                 SeriesName={value.SeriesName}
             />
         );
     })}


