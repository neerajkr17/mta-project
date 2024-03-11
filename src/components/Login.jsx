import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/landing');
    }

    return (
        <div className='login-form bg-pink-300'>
            <div className='bg-gray-200 flex justify-between mx-20 py-6 p-6 rounded-xl'>
                <img src='https://fiaks.com/wp-content/uploads/2019/03/Final-Fino-Payments-Bank-Logo_White.jpg' className='navbar-logo rounded' href="#" alt='logo' />
                <div>
                    <p>Qadar</p>
                    <p>Apki Mehnat Ki</p>
                </div>
            </div>

            <form>
                {/* Your form elements go here */}
            </form>

            <div className='btn mx-96 space-x-60'>
                <button className="bg-gray-400 py-2 px-5 rounded-lg" onClick={handleLogin}>Login</button>
                <button className="bg-gray-400 py-2 px-5 rounded-lg">Clear</button>
            </div>
        </div>
    );
}

export default Login;