import './LoginPage.css'
import { Link } from 'react-router-dom';
import logoLogin from '../../assets/logoLogin';
import loginlogo from '../../assets/loginlogo.png';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


async function LoginPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('http://localhost:5500/auth/signin', {
          email,
          password
        });
        console.log('Login successful:', response.data);
        setEmail('');
        setPassword('');
        const { access_token } = response.data;
        setAuthorizationHeader(access_token);
        navigate("/StartPage", { replace: true })
      } catch (error) {
        console.error('Login error:', error);
      }
    };


    return(
        <div className='body-login'>
            <div className='logo-div-login'>
                <img src={loginlogo} alt="Mind Shield" />
            </div>
            
            <div className='container-login'>
            <form onSubmit={handleFormSubmit}>
                <div className='div-input-login'>
                    <label>Email:</label>
                    <input 
                    className="input-login" 
                    placeholder="Email Institucional" 
                    type="text" 
                    value={email}
                    onChange={handleEmailChange}/>
                </div>
                <div className='div-input-login'>
                    <label>Senha:</label>
                    <input  
                    type="password" 
                    className="input-login" 
                    placeholder="Senha"
                    value={password}
                    onChange={handlePasswordChange}/>
                </div>
            </form>
                <div className='button-login-div'>
        
                        <button type="submit" className='button-login'>LOGIN</button>
                </div>
                
            </div>
        </div>
    );
};

export default LoginPage;