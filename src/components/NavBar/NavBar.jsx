import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar(){

    return(
        <div className='body-navbar'>
            <div className='logo-nav-bar'>
                <p>MIND SHILD</p>
            </div>
            <div className='element2'>
                <div className='welcome'>
                    <p >Seja bem vindo!</p>
                </div>
                <div className='adminlogout-div'>
                    <Link to="/LoginPage" className='link-adminlogout'>
                    <button className='adminlogout'>SAIR</button>
                    </Link>
                </div>
            </div>
            
        </div>
        
    );
};

export default NavBar;