export default function Home()
{
    return(
      <>
        <h1 className='text-center mt-5' style={{fontFamily:'cursive'}}>Welcome {localStorage.getItem('name')} !</h1>
        <p className = 'text-center mt-4' style={{fontFamily:'cursive' , fontSize:'28px'}}>I'm home page!</p>
      </>
    );
}