import './navbar.css';
import { Link , Outlet } from 'react-router-dom';

export default function Navbar()
{

    function handleDeleteAccount()
    {
        localStorage.clear();
        window.location.reload();
    }


    function handleLogout()
    {
       localStorage.removeItem('sign up');
       window.location.reload();
    }

    return(

        <>
         <nav>
            <ul 
              style={{listStyleType:'none' , display:'flex', paddingInlineStart:'0px' , width:'fit-content'}} 
              className = "mx-auto mt-4">
                <li className='px-3'>
                  <Link 
                     to = '/'
                     style={{textDecoration : 'none' , color:'white'}} 
                     className='small'>Home
                  </Link>
                </li>

                <li className='px-3'>
                   <Link
                     to = '/about' 
                     style={{textDecoration : 'none' ,  color:'white'}} 
                     className='small'>About
                  </Link>
                </li>

                <li className='px-3'>
                   <Link 
                     to = '/contact' 
                     style={{textDecoration : 'none' ,  color:'white'}} 
                     className='small'>Contact
                  </Link>
                </li>

                <li 
                  className='px-3 small' 
                  onClick = {handleDeleteAccount} 
                  style={{color : 'red'}}>
                    Delete account 
                </li>

                <li 
                  className='px-3 small' 
                  style={{color:'yellowgreen'}}
                  onClick = {handleLogout}>
                   Logout 
                </li>
            </ul>
         </nav>
         <Outlet />
        </>

    );

}