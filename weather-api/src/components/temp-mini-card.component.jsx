import './temp-mini-card.css';

function Temp_Mini_Card({data})
{
    // console.log('props from temp mini card' , data);
   
     return(
        <div className="temp-mini-card d-flex flex-column text-center pt-3 pb-3">
          <p className='mb-0'>{data.date}</p>
          <img src={data.day.condition.icon} alt="daily-update" height="50" width="50" className="d-block mx-auto"/>
          <p className='mb-0 fw-bold'>{data.day.avgtemp_c} C</p>
        </div>
    );
}


export default Temp_Mini_Card;