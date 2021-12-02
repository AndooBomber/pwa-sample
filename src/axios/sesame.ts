import axios from 'axios'

export const requestSesame = async (name: string, token: string) => {
  return await axios.post('/api/server', {
    name,
    token,
  })
}
