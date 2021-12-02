import axios from 'axios'
import { aesCmac } from 'node-aes-cmac'

const SESAME_ID = process.env.SESAME_ID
const KEY_SECRET_HEX = process.env.KEY_SECRET_HEX
const X_API_KEY = process.env.X_API_KEY
const NFC_TOKEN = process.env.NFC_TOKEN

const wm2_cmd = async (name) => {
  const cmd = 83 //(toggle:88,lock:82,unlock:83)
  const base64_history = Buffer.from(name).toString('base64')

  const sign = generateRandomTag(KEY_SECRET_HEX)
  await axios.post(
    `https://app.candyhouse.co/api/sesame2/${SESAME_ID}/cmd`,
    {
      cmd: cmd,
      history: base64_history,
      sign: sign,
    },
    {
      headers: { 'x-api-key': X_API_KEY },
    }
  )
}

const generateRandomTag = (secret) => {
  // * key:key-secret_hex to data
  const key = Buffer.from(secret, 'hex')
  const date = Math.floor(Date.now() / 1000)
  const dateDate = Buffer.allocUnsafe(4)
  dateDate.writeUInt32LE(date)
  const message = Buffer.from(dateDate.slice(1, 4))

  return aesCmac(key, message)
}

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(400).send('BAD REQUEST')
  }
  const { name, token } = req.body
  if (token === NFC_TOKEN) {
    await wm2_cmd(name)
  }
  res.status(200).send('success')
}
