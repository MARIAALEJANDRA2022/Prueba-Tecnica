import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { validarCrearOActualizarDatos } from './Utils.ts';

function Registro() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [program, setProgram] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const isSuccess = validarCrearOActualizarDatos(name, lastName, email, phone, program);
        if (isSuccess)
            navigate('/');
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
                                    <label className="form-label text-dark">Nombres</label>
                                    <input type="text" className="form-control" value={name} placeholder="Escribir nombres completos" onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-dark">Apellidos</label>
                                    <input type="text" className="form-control" value={lastName} placeholder="Escribir apellidos completos" onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-dark">Email</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-dark">Telefono</label>
                                    <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-dark">Programa de interes</label>
                                    <div>
                                        <select class="form-select form-select-sm" name="Programa" value={program} onChange={(e) => setProgram(e.target.value)} required>
                                            <option value="">Selecciona un programa</option>
                                            <option value="Bachillerato">Bachillerato</option>
                                            <option value="Ingles">Ingles</option>
                                            <option value="Preicfes">Preicfes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary btn-lg">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Registro;