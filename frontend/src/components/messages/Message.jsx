import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import extractTime from '../../utils/extractTime';
import useScreenWidth from '../../zustand/useScreenWidth';


const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();

    const fromMe = authUser._id === message.senderId;
    const chatClass = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const chatBubbleBGColor = fromMe ? "bg-blue-500" : "";
    const formattedTime = extractTime(message.createdAt);
    const shakeClass = message.shouldShake ? "shake" : "";

    const { screenWidth } = useScreenWidth();

    let setTextSize = "";
    if (screenWidth < 660 && screenWidth >= 560) {
        setTextSize = "text-sm";
    } else if (screenWidth < 560 && screenWidth >= 510) {
        setTextSize = "text-xs";
    } else {
        setTextSize = "text-md";
    }

    return (
        <div className={`chat ${chatClass}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble ${chatBubbleBGColor} ${shakeClass} text-white ${setTextSize}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
                {formattedTime}
            </div>
        </div>
    )
}

export default Message