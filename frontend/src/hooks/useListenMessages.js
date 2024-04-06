import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';


const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            if (selectedConversation?._id === newMessage.senderId) {
                setMessages([...messages, newMessage]);
            }
        });

        return () => socket?.off("newMessage");
    }, [socket, messages, setMessages]);
}

export default useListenMessages