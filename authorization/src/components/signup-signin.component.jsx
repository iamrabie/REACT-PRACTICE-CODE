import './signup-signin.css';
import { useRef , useEffect , useState } from 'react';
import HomePage from './home-page.component';

export default function SignUp_SignIn()
{
    const name = useRef();
    const email = useRef();
    const password = useRef();
   
    const [ homePage , setHomePage ] = useState(false);
    console.log('comp render');

    const [ display , setDisplay ] = useState(false);

    useEffect( () =>
    {
        console.log('use effect render');
        if (localStorage.getItem('sign up'))
        {
            setHomePage(true);

        }

        if (localStorage.getItem('email address'))
        {
            setDisplay(true);
        }
    }
    );
      
    const handleSignUp = () =>
    {
     /*    e.preventDefault();
        console.log('name : ' , name.current.value);
        console.log('email : ' , email.current.value);
        console.log('password :' , password.current.value); */

        if (name.current.value && email.current.value && password.current.value)
        {
            localStorage.setItem('name' , name.current.value)
            localStorage.setItem('email address' , email.current.value)
            localStorage.setItem('pass' , password.current.value)
            localStorage.setItem('sign up' , email.current.value)

            alert('account created successfully!');

        }
    }


    const handleSignIn = () =>
    {
        if ( email.current.value == localStorage.getItem('email address') && password.current.value == localStorage.getItem('pass'))
        {
            localStorage.setItem('sign up' , email.current.value)
            window.location.reload()
        }

        else
        {
            alert('invalid credentials');
        }
    }

    return(
        <>
        { homePage ? <HomePage />
        :
        ( display ?
        <form className = "d-flex flex-column w-25 mx-auto mt-5 pt-2 pb-4 shadow">
          <label className = "mt-1 mb-3 fw-bold text-center">Hello {localStorage.getItem('name')}</label>
            <input
               type="text" 
               placeholder="Email" 
               className="mb-4 mt-3 w-75 mx-auto"
               ref={email}
            />
            <input 
               type="password"
               placeholder="Password" 
               className="mb-4  w-75 mx-auto"
               ref={password}
            />
            <button 
              className="w-75 mx-auto"
              onClick = {handleSignIn} >Sign In
            </button>
        </form>

        :

        <form className = "d-flex flex-column w-25 mx-auto pt-4 pb-5 shadow" style={{marginTop:'80px'}}>
        <label className = "mt-1 mb-3 fw-bold text-center" style={{fontFamily:'cursive'}}>Sign Up</label>
          <input 
             type="text" 
             placeholder="Name" 
             className="mb-4 mt-3 w-75 mx-auto"
             ref={name}
          />
          <input
             type="text" 
             placeholder="Email" 
             className="mb-4 w-75 mx-auto"
             ref={email}
          />
          <input 
             type="password"
             placeholder="Password" 
             className="mb-4 w-75 mx-auto"
             ref={password}
          />
          <button 
            className="w-75 mx-auto"
            onClick = {handleSignUp} >Sign Up
          </button>
      </form>
        )
     
        }
        </>
    );
}