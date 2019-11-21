import styled from 'styled-components';

export const BoxWarp = styled.div`
    height: 100%;
    position: relative;
    #inner{
        position: absolute;
        height: 100vh;
        width: 50vh;
        left: 50%;
        top: 50%;
        background: skyblue;
        transform: translate(-50%, -50%);
        /* 状态栏 */
        #status{
            height: 3vh;
        }
    }        

`