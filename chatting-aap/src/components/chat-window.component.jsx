import './chat-window.css';
export default function ChatWindow({bobChat , johnChat , person})
{
   /*  console.log('bob chat : '  , bobChat);
    console.log('john chat : ' , johnChat);
    console.log('person is  : ' ,person); */

  /*   var array = [];
    array = [...bobChat , ...johnChat]; */
  /*   console.log('array' , array); */


    return(
        <>
          {/*   {array.map((text) =>
            {
              return(
                <>
                 <div key={text.id} className={`pe-2 mt-1 ${ person == 'john' ? 'ms-auto' : 'me-auto' }`} style={{maxWidth:'420px' , border:'1px solid purple'}}>
                  <p 
                    style={{width:'fit-content'}} 
                    className={`mb-0 ms-auto ps-3 pe-3 py-1 small ${ person == 'john' ? 'john-texts' : 'bob-texts' }`} >{text.chats}
                  </p>
                  </div>
                </>
              );
            })} */}

            {/*   iterating john chat */}
            {johnChat.map((texts) => 
            {
              return(
                <>
                  <div key={texts.id} className='ms-auto pe-2 mt-1' style={{maxWidth:'420px'}}>
                  <p 
                    style={{width:'fit-content'}} 
                    className='mb-0 ms-auto right ps-3 pe-3 py-1 small john-texts'>{texts.chats}
                  </p>
                  </div>
                </>
                ); 
             })
             }

           {/*  iterating bob's chat */}
             {bobChat.map((text) => 
             {
                return(
                  <>
                    <div key={text.id} className='ps-2 mt-2' style={{maxWidth:'420px' , transition:'0.6s'}}>
                    <p   
                      style={{width:'fit-content'}} 
                      className='mt-1 mb-1 left ps-3 pe-3 small py-1 bob-texts'>{text.chats}
                    </p>
                    </div>
                  </>
                ); 
             })
             }
          

        </>
    );
}