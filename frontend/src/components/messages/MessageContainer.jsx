import React, { useEffect } from 'react'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import InnerMessageContainer from './InnerMessageContainer';
import useScreenWidth from '../../zustand/useScreenWidth';


const MessageContainer = () => {

  const { screenWidth } = useScreenWidth();
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // will run during unmounting
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  // let setWidth = "";
  // if (screenWidth < 640) {
  //   setWidth = "w-2/3"
  // }

  return (
    <div className={`flex flex-col w-[55%]`}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <InnerMessageContainer />
        </>
      )}
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {

  const { screenWidth } = useScreenWidth();

  let setFontSize = "";
  if (screenWidth < 530) {
    setFontSize = "text-xs";
  } else if (screenWidth >= 530 && screenWidth < 560) {
    setFontSize = "text-sm";
  } else if (screenWidth >= 560) {
    setFontSize = "text-md";
  }
  const { authUser } = useAuthContext();

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className={`flex flex-col items-center gap-2 px-4 text-center ${setFontSize} sm:text-lg md:text-xl text-gray-200 font-semibold`}>
        <p>Welcome 👋 {authUser.username} 🌟</p>
        <p>Select a chat to start messaging!</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}