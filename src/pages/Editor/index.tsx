import styled from 'styled-components'
import { Loader } from '../../components/Loader'
import backImg from '../../assets/video_background_dark.png'
import Scene from '../../components/Scene'

const Wrapper = styled.div`
    position: relative;
    background-image: url(${backImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const Editor = () => {
    return (
        <Wrapper className='w-screen h-screen'>
            {/* <Loader /> */}
            <Scene />
        </Wrapper>
    )
}

export default Editor