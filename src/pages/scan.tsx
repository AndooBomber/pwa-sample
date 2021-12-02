import React, { useState } from 'react'
import { NextPage } from 'next'
import Header from 'components/organisms/Header/Menu'
import { requestSesame } from 'axios/sesame'
import LoadingOverlay from 'components/atoms/LoadingOverlay'
import { useRecoilValue } from 'recoil'
import { ignoreRead } from 'state/ignoreRead'
import NeumorphicButton from 'components/atoms/NeumorphicButton/intex'
import MyDialog from 'components/organisms/MyDialog'

let controller: AbortController | undefined = undefined

export type NFCMessage = {
  name: string
  imgSrc: string
  token: string
}

const Scan: NextPage = () => {
  const [name, setName] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isIgnoreRead = useRecoilValue(ignoreRead)

  // TODO: 後で整理する
  const click = async () => {
    try {
      // abort
      if (controller || isIgnoreRead) {
        console.log('abort')
        return
      }
      controller = new AbortController()
      controller.signal.onabort = () => {
        setIsLoading(false)
      }
      setTimeout(() => {
        controller!.abort()
        controller = undefined
      }, 3000)

      // show modal
      setIsLoading(true)

      const reader = new NDEFReader()
      await reader.scan({ signal: controller.signal })

      reader.onreadingerror = () => {
        console.log('Error')
      }

      // read
      reader.onreading = async (event) => {
        try {
          const { data, recordType, mediaType } = event.message.records[0]
          if (recordType === 'mime' && mediaType === 'application/json') {
            const textDecoder = new TextDecoder()
            const nfcMessage: NFCMessage = JSON.parse(textDecoder.decode(data))

            // off modal
            setIsLoading(false)

            // request
            await requestSesame(nfcMessage.name, nfcMessage.token)
              .then(() => {
                // setName
                setName(nfcMessage.name)
                setImgSrc(nfcMessage.imgSrc)
                setIsOpen(true)
              })
              .catch((err) => {
                console.log(err)
              })
          }
        } catch (error) {
          console.log('Error!: ', error)
          setName('')
        }
      }
    } catch (error) {
      console.log('Error: ', error)
      setName('')
    }
  }

  return (
    <>
      <div className="flex flex-col h-screen px-4 pt-4">
        <Header />
        <div className="flex flex-1 h-full items-center justify-center mb-24">
          <NeumorphicButton onClick={click} />
        </div>
      </div>
      {isOpen && (
        <MyDialog
          name={name}
          imgSrc={imgSrc}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {isLoading && <LoadingOverlay />}
    </>
  )
}

export default Scan
