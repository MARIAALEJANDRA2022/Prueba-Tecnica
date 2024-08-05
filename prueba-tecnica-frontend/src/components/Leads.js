import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Leads = () => {

  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const [user, setUser] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/leads')
      .then(response => {
        if (!response.ok) {
          throw new Error('Hubo un error en la red');
        }
        return response.json();
      })
      .then(data => {
        setEstudiantes(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [query]);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('authToken');
      try {
        const response = await axios.get('http://localhost:8000/api/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    loadUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSearch = async () => {
    setLoadingSearch(true);

    try {
      const response = await axios.get('http://localhost:8000/api/buscar', {
        params: { query }
      });
      setEstudiantes(response.data);
    } catch (error) {
    } finally {
      setLoadingSearch(false);
    }
  };
  const actualizarEstado = async(id) => {
    try {
      setUpdatingStatus(true);
      await axios.put(`http://localhost:8000/api/leads/${id}`, {
        status: 'Llamado',
      });
      setEstudiantes(prevEstudiantes =>
        prevEstudiantes.map(estudiante =>
          estudiante.id === id
            ? { ...estudiante, status: 'Llamado' }
            : estudiante
        )
      );
    } catch (error) {
    } finally {
      setUpdatingStatus(false);
    }
  }

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      localStorage.removeItem('authToken');

      navigate('/');

    } catch (error) {
      console.error('No se pudo cerrar sesión:', error);
    }
  };

  if (user.length === 0) 
    return <Login />;

  return (
    <div className="mb-3" style={{width: "100%", height: "100vh", background: "#ffffff"}}>
      <div className="mb-3">
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div class="container-fluid text-white d-flex justify-content-between align-items-center">
            <ul class="navbar-nav mb-2 mb-lg-0 d-flex">
              <li class="nav-item">
                <label style={{ fontSize: '24px' }}><strong>Bienvenido: </strong>{user.name + " " + user.lastName}</label>
              </li>
            </ul>
            <button className='btn btn-primary' style={{ fontSize: '24px' }} onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        </nav>
      </div>
      <div className="mb-3">
        <div className="container-xl">
          <div className="d-flex mb-3">
            <input type="text" className="form-control" placeholder="Buscar" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button className='btn btn-outline-success ml-3' onClick={handleSearch}>Buscar</button>
          </div>
          {loadingSearch && <label className='text-dark'>Cargando...</label>}
          {estudiantes.length > 0 || query === '' ? (
            <div>
              <table class="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Programa</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                {estudiantes.map(item => (
                  <tbody>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.program}</td>
                      <td>{item.status}</td>
                      <td>
                        {
                          item.status === 'No llamado' &&
                          <button className='btn btn-success' onClick={() => actualizarEstado(item.id)} disabled={updatingStatus}>
                            {updatingStatus ? 'Actualizando...' : 'Contactado'}
                          </button>
                        }
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ) : (
            <div><label className='text-dark'>No se encontraron resultados.</label></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leads;
