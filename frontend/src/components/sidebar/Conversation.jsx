import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';
import useScreenWidth from '../../zustand/useScreenWidth';

const Conversation = ({ conversation, emoji, lastIdx }) => {

    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const onlineStatus = onlineUsers.includes(conversation._id) ? "online" : "";

    const { screenWidth } = useScreenWidth();

    let setAvatarWidth = "";
    let setTextSize = "";
    let setEmojiSize = "";
    if (screenWidth < 768 && screenWidth >= 680) {
        setAvatarWidth = "w-10";
        setTextSize = "text-md";
        setEmojiSize = "text-md";
    } else if (screenWidth < 680 && screenWidth >= 550) {
        setAvatarWidth = "w-9";
        setTextSize = "text-sm";
        setEmojiSize = "text-md";
    } else if (screenWidth < 550 && screenWidth >= 510) {
        setAvatarWidth = "w-8";
        setTextSize = "text-xs";
        setEmojiSize = "text-sm";
    } else if (screenWidth < 510) {
        setAvatarWidth = "w-10";
        setTextSize = "text-md";
        setEmojiSize = "text-xl";
    } else {
        setAvatarWidth = "w-12";
        setTextSize = "text-md";
        setEmojiSize = "text-xl";
    }

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
            ${isSelected ? "bg-sky-500" : ""}`} onClick={() => setSelectedConversation(conversation)}>
                <div className={`avatar ${onlineStatus}`}>
                    <div className={`${setAvatarWidth} rounded-full`}>
                        <img src={conversation.profilePic} alt='user avatar' />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className={`font-bold text-gray-200 ${setTextSize}`}>{conversation.username}</p>
                        <span className={`${setEmojiSize}`}>{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    )
}

export default Conversation