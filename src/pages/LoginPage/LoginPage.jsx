import './LoginPage.css'
import { Link } from 'react-router-dom';
import logoLogin from '../../assets/logoLogin';
import loginlogo from '../../assets/loginlogo.png';

function LoginPage(){

    return(
        <div className='body-login'>
            <div className='logo-div-login'>
                <img src={loginlogo} alt="Mind Shield" />
            </div>
            
            <div className='container-login'>
            <form action="">
                <div className='div-input-login'>
                    <label>Email:</label>
                    <input className="input-login" placeholder="Email Institucional" type="text" />
                </div>
                <div className='div-input-login'>
                    <label>Senha:</label>
                    <input  type="password" className="input-login" placeholder="Senha"/>
                </div>
            </form>
                <div className='button-login-div'>
                    <Link  to="/StartPage" className='link-login'>
                        <button className='button-login'>LOGIN</button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default LoginPage;