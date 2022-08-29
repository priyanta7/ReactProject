import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
const Weather = () => {
    return(
        <div className="container">
            <div className="cards">
                <h1>London</h1>
                <h5 className="py-4">
                <WbSunnyIcon />
                </h5>
                <h1 className="py-4">25&deg;</h1>
                {minmaxTemp(24,19)
               }
                
               
            </div>

        </div>
    )
}
function minmaxTemp(min,max){
    return
    {
        <h3> 
            <span className="px-4"> min@deg; </span>
            <span className="px-4"> max@deg; </span>
        </h3>
      
    }
}
export default Weather;