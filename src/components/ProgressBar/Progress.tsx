import { NProgress } from '@tanem/react-nprogress'
import React from 'react'
import Bar from './Bar'
import Container from './Container'

interface IProgress {
    isAnimating: boolean,
    animationDuration: number,
    incrementDuration: number
}

const Progress: React.FC<IProgress> = ({ isAnimating, animationDuration, incrementDuration }) => (
    <NProgress isAnimating={isAnimating} animationDuration={animationDuration} incrementDuration={incrementDuration}>
        {({ animationDuration, isFinished, progress }) => (
            <Container animationDuration={animationDuration} isFinished={isFinished}>
                <Bar animationDuration={animationDuration} progress={progress} />
            </Container>
        )}
    </NProgress>
)

export default Progress