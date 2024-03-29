import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";


const MessageContainer = () => {
  let noChatSelected = true;

  return (
    <div className='flex flex-col md:min-w-[450px]'>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* HEADER */}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>Daisy Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center gap-2 px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold'>
        <p>Welcome 👋 Daisy Doe 🌟</p>
        <p>Select a chat to start messaging!</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}