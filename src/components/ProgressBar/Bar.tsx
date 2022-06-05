import React from 'react'

interface IBar {
    animationDuration: number,
    progress: number
}

const Bar: React.FC<IBar> = ({ progress, animationDuration }) => (
    <div
        style={{
            background: '#29d',
            height: 3,
            left: 0,
            marginLeft: `${(-1 + progress) * 100}%`,
            position: 'fixed',
            top: 54,
            transition: `margin-left ${animationDuration}ms linear`,
            width: '100%',
            zIndex: 1031,
        }}
    >
        <div
            style={{
                boxShadow: '0 0 2px #29d, 0 0 2px #29d',
                display: 'block',
                height: '100%',
                opacity: 1,
                position: 'absolute',
                right: 0,
                transform: 'rotate(0deg) translate(0px, 0px)',
                width: 50,
            }}
        />
    </div>
)

export default Bar