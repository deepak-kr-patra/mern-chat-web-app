import React, { useReducer } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import SingleContainer from '../../components/SingleContainer';
import useScreenWidth from '../../zustand/useScreenWidth';


const Home = () => {

  const { screenWidth, setScreenWidth } = useScreenWidth();

  const [_, forceUpdate] = useReducer(x => x + 1, 0);

  window.onresize = function () {
    setScreenWidth(screen.width);
    forceUpdate();
  };

  return (
    <div className='flex adjust-dimensions rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      {console.log(screenWidth)}
      {screenWidth < 510 ? (
        <SingleContainer />
      ) : (
        <>
          <Sidebar />
          <MessageContainer />
        </>
      )}
    </div>
  )
}

export default Home

// screenWidth < 640 ? (
//   <div className='flex h-full w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//     <Sidebar />
//     {/* <MessageContainer /> */}
//   </div>
// ) : (
//   <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//     <Sidebar />
//     <MessageContainer />
//   </div>
// )