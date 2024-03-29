import React from 'react'
import { Triangle } from  'react-loader-spinner'


const Loading = () => {
    return (
        <div className='bg-black w-full h-screen flex justify-center items-center text-center text-medium'>
          <Triangle
                height="150"
                width="150"
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