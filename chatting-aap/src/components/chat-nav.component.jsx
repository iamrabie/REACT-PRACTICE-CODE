import './chat-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faVideo , faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';
import Profile from '../static/Rabia.png';
export default function ChatNav({person})
{
    /* console.log('selected user from nav :' , person); */
    var user;
    if (person == 'john')
    {
      user = 'bob';
      console.log('user : ' , user);
    }

    if (person == 'bob')
    {
      user = 'john';
      console.log('user : ' , user);
    }
    return(
        <>
        <div className='d-flex align-items-center'>
          <img src={Profile} height='55' width='55' className='ms-1'/>
          <p className='mb-0 px-1 small fw-bold'>{user}</p>
        </div>
        <div className='d-flex align-items-center px-2'>
          <p className='mb-0 px-2 pt-1'>
           <FontAwesomeIcon icon={faPhone} className="nav-icons" />
          </p>
          <p className='mb-0 px-2 pt-1'>
           <FontAwesomeIcon icon={faVideo} className="nav-icons" />
          </p>
          <p className='mb-0 px-2 pt-1'>
           <FontAwesomeIcon icon={faCircleInfo} className="nav-icons" />
          </p>
        </div>
        </>
    );
}