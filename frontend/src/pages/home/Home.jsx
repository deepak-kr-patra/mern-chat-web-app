import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import SingleContainer from '../../components/SingleContainer';
import useScreenWidth from '../../zustand/useScreenWidth';


const Home = () => {

  const { screenWidth, setScreenWidth } = useScreenWidth();

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
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