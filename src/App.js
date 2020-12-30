import { useEffect, useState } from 'react';
import Axios from 'axios'
// const USUARIOS = [
//   {
//     id: 1,
//     nome: 'teste1'
//   },
//   {
//     id: 2,
//     nome: 'teste2'
//   },
//   {
//     id: 3,
//     nome: 'teste3'
//   },
//   {
//     id: 4,
//     nome: 'teste4'
//   },
//   {
//     id: 5,
//     nome: 'teste5'
//   }
// ]

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getUsuarios()
  }, [])

  // function getUsuarios() {
  //   setLoading(true)

  //   setTimeout(() => {
  //     setUsuarios(USUARIOS)
  //     setLoading(false)
  //   }, 1000)
  // }

  async function getUsuarios() {
    setLoading(true)

    const response = (await Axios.get('http://localhost:3333/usuarios')).data

    setUsuarios(response)
    setLoading(false)
  }

  return (
    <div>
      <table border='1' >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {loading ?
            <span>carregando...</span>
            :
            usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
