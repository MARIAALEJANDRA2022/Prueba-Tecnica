import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email: email,
                password: password
            });
            setError('');
            localStorage.setItem('authToken', response.data.token);
            navigate('/leads');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return(
        <div className="mb-3" style={{width: "100%", height: "100vh", background: "#ffffff"}}>
            <div className="mb-3">
                <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                    <div class="container-fluid text-white">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-white" to="/">Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/registro">Registrarse</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="mb-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex justify-content-center">
                        <div className="card" style={{width: "50%"}}>
                            <div class="card-body">
                                <div className="mb-3">
                                    <label className="form-label text-dark">Email</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-dark">Contraseña</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                {
                                    error !== '' &&
                                    <div className="mb-3">
                                        <label className="form-label" style={{ color: 'red' }}>{error}</label>
                                    </div>
                                }
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary btn-lg">Iniciar Sesión</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;