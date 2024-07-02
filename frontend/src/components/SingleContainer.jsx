import React, { useEffect } from 'react'
import useConversation from '../zustand/useConversation'
import Sidebar from './sidebar/Sidebar';
import InnerMessageContainer from './messages/InnerMessageContainer';


const SingleContainer = () => {
    const { selectedConversation } = useConversation();

    // useEffect(() => {
    //     // will run during unmounting
    //     return () => setSelectedConversation(null);
    // }, [setSelectedConversation]);

    return (
        <>
            {(!selectedConversation) ? (
                <Sidebar />
            ) : (
                <div className='flex flex-col w-full'>
                    <InnerMessageContainer />
                </div>
            )}
        </>
    )
}

export default SingleContainer