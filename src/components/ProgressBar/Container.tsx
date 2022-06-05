import React from 'react'

interface IContainer {
    animationDuration: number,
    children: any,
    isFinished: boolean
}

const Container: React.FC<IContainer> = ({ animationDuration, children, isFinished }) => (
    <div
        style={{
            opacity: isFinished ? 0 : 1,
            pointerEvents: 'none',
            transition: `opacity ${animationDuration}ms linear`,
        }}
    >
        {children}
    </div>
)

export default Container