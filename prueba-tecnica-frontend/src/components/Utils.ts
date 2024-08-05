import axios from 'axios';

async function buscarPorNombre(name: string) {
  try {
    const response = await axios.get('http://localhost:8000/api/buscarPorNombre', {
      params: { name }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


async function buscarPorApellido(lastName: string) {
  try {
    const response = await axios.get('http://localhost:8000/api/buscarPorApellido', {
      params: { lastName }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function buscarPorEmail(email: string) {
  try {
    const response = await axios.get('http://localhost:8000/api/buscarPorEmail', {
      params: { email }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const validarCrearOActualizarDatos = async (name: string, lastName: string, email: string, phone: string, program: string) => {
  
  const foundByName = await buscarPorNombre(name);
  const foundByLastName = await buscarPorApellido(lastName);
  const foundByEmail = await buscarPorEmail(email);

  if (foundByName.length > 0 && foundByLastName.length > 0) {
    try {
      await axios.put(`http://localhost:8000/api/actualizar/${name}/${lastName}`, {
        email: email,
        phone: phone,
        program: program,
        status: 'No llamado',
      });
      alert('Datos actualizados');
      return true;
    } catch (error) {}
  } else if (foundByEmail.length > 0) {
    try {
      await axios.put(`http://localhost:8000/api/actualizar/${email}`, {
        name: name, 
        lastName: lastName,
        phone: phone,
        program: program,
        status: 'No llamado',
      });
      alert('Datos actualizados');
      return true;
    } catch (error) {}
  } else {
    try {
      await axios.post('http://localhost:8000/api/registro', {
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        program: program,
        status: 'No llamado'
      });
      alert('Registro exitoso');
      return true;
    } catch (error) {
      alert(error.response.data.message);
    }
  }
}