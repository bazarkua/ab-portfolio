import React from 'react'
import { Triangle } from  'react-loader-spinner'


const Loading = () => {
    return (
        <div className='bg-[#36b0ff] w-full h-screen flex justify-center items-center text-center text-medium'>
          <Triangle
                height="100"
                width="100"
                color="white"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                />
        </div>
    )
}

export default Loading