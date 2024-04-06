import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useScreenWidth from '../../zustand/useScreenWidth'

const Sidebar = () => {

    const { screenWidth } = useScreenWidth();

    let setWidth = "";
    if (screenWidth < 510) {
        setWidth = "w-full";
    } else {
        setWidth = "w-[45%]";
    }
    const setBorder = screenWidth < 510 ? "" : "border-r border-slate-500";

    return (
        <div className={`${setWidth} ${setBorder} p-4 flex flex-col`}>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar