import { Routes , Route } from 'react-router-dom';
import Navbar from './navbar.component';
import Home from './home.component';
import About from './about.component';
import Contact from './contact.component';

export default function HomePage()
{
    return(
        <>
        <Routes>
          <Route path = '/' element = { <Navbar /> }>
            <Route index element = { <Home /> }></Route>
            <Route path = 'about'  element = { <About /> }></Route>
            <Route path = 'contact' element = { <Contact /> }></Route>
          </Route>
        </Routes>
        </>
    );
}