import './search-field.css';

export default function SearchField({sendDataToParents})
{
    let id;
    const handleChange = (event) =>
    {  
      id = event.target.value;
    }

    return(
        <div className='row d-flex justify-content-center mt-5'>
            
           <input 
             type="text" 
             placeholder="Enter City, Country, postal code or {lan, lat}" 
             className='w-25'
             onChange={handleChange}
            />

           <button 
             style={{width:'78px'}} 
             className='ms-3 mt-2 h-75 search-button'
             onClick={ () => { sendDataToParents(id); }}>Search
           </button>
        </div>
    );
}