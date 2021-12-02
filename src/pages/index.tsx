import React, { useState } from 'react'
import { NextPage } from 'next'
import { useSetRecoilState } from 'recoil'
import Header from 'components/organisms/Header/Menu'
import Form from 'components/organisms/Form'
import { NFCMessage } from './scan'
import LoadingOverlay from 'components/atoms/LoadingOverlay'
import { ignoreRead } from 'state/ignoreRead'

const Home: NextPage = () => {
  const [name, setName] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)
  const setIgnoreRead = useSetRecoilState(ignoreRead)

  // TODO: 後で整理する
  const click = async () => {
    try {
      if (name === '' || token === '') {
        return
      }

      setLoading(true)
      setIgnoreRead(true)
      const textEncoder = new TextEncoder()
      const message: NFCMessage = {
        name: name,
        imgSrc: imgSrc,
        token: token,
      }
      const jsonRecord = {
        recordType: 'mime',
        mediaType: 'application/json',
        data: textEncoder.encode(JSON.stringify(message)),
      }

      const writer = new NDEFReader()
      await writer.write({ records: [jsonRecord] }).then(() => {
        setLoading(false)
        setIgnoreRead(false)
      })
    } catch (error) {
      console.log('Error:', error)
      setName('')
      setLoading(false)
      setIgnoreRead(false)
    }
  }

  return (
    <>
      <div className="flex flex-col h-screen px-4 pt-4">
        <Header />
        <Form
          setName={setName}
          setImgSrc={setImgSrc}
          setToken={setToken}
          onClick={click}
        />
      </div>
      {loading && <LoadingOverlay />}
    </>
  )
}

export default Home
