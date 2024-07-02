import React, { useEffect, useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';
import useScreenWidth from '../../zustand/useScreenWidth';


const MessageInput = () => {

    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();
    const { screenWidth } = useScreenWidth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) {
            return;
        }
        await sendMessage(message);
        setMessage("");
        textArea.style.height = "40px";
    };

    const adjustTextArea = () => {
        let textArea = document.getElementById('textArea');

        textArea.style.height = "40px";
        textArea.style.maxHeight = "120px"
        textArea.style.height = `${textArea.scrollHeight}px`;
    }

    useEffect(() => {
        adjustTextArea();
    }, [screenWidth]);

    function setTextAreaInput(messageValue) {

        setMessage(messageValue);

        adjustTextArea();
    }

    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <textarea
                    id='textArea'
                    className='border rounded-lg text-sm p-2.5 pr-9 block w-full bg-gray-700 border-gray-500 text-white'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => { setTextAreaInput(e.target.value) }}
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'>
                    {loading ? <span className='loading loading-spinner'></span> : <BsSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput