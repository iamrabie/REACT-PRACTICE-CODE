import './temp-card.css';
import Temp_Mini_Card from './temp-mini-card.component';
export default function Temp_Card(props)
{

/*     console.log('props from temp card' , props); */
   
     return(
        <div className="temp_card mx-auto ps-4 pe-4">
          <div className="d-flex justify-content-evenly"> 
            {props.data.forecast?.forecastday?.map((info) =>
            {
              return(
                <>
                 <Temp_Mini_Card data = {info} />
                </>
              );

            })}
          </div>
        </div>
    );
}