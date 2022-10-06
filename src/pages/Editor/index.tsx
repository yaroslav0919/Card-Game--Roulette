import styled from 'styled-components'
import { Loader } from '../../components/Loader'
import backImg from '../../assets/video_background_dark.png'
import Scene from '../../components/Scene'
import { useEffect, useState } from 'react'

const Wrapper = styled.div`
    position: relative;
    background-image: url(${backImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const FontFaceObserver = require('fontfaceobserver');

export const Editor = () => {
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const font = new FontFaceObserver('Circular Std')

        font.load().then(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <Wrapper className='w-screen h-screen'>
            { isLoading ? (
                <Loader />
            ) : (
                <Scene />
            ) }
        </Wrapper>
    )
}

export default Editor