import './temp-block.css';

export default function Temp_Block(props)
{
    // console.log('props from temp block' , props);
    return(
        <div className='temp_block mx-auto mt-4 d-flex pt-3'>
           <div className='icon pt-3 mt-5 pb-5 mb-5'>
           <img src={props.data.current?.condition.icon} alt='sun-icon' className='temp_icon d-block mx-auto'/>
           </div>
           <div className='text mt-5 pt-4 pb-5 mb-5 d-flex flex-column'>
             <h5 className='mb-0'>Today</h5>
             {props.data.current? (
              <>
                <h1 className='mb-0 fw-bold'>{props.data.location.name}</h1>
                <h5 className='mb-0 mt-3'>Temperature : {props.data.current.temp_c} °C</h5>
                <h5 className='mb-0 mt-1'>{props.data.current?.condition.text}</h5>
              </>
             ) : (
              <div>
                
              </div>
            )}
           </div>
        </div>
    );
}