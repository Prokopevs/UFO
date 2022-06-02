import React from 'react'

const Spinner = () => {
    return (
        <div className="spinner" >
            <div className="blob top"></div>
            <div className="blob bottom"></div>
            <div className="blob left"></div>
            <div className="blob move-blob"></div>
        </div>
    )
}

export default Spinner