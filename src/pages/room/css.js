import styled from 'styled-components';

export const BoxWarp = styled.div` height: 100%;
position: relative;

#inner {
    position: absolute;
    height: 100vh;
    width: 50vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    
    /* 状态栏 */
    #status {
        height: 3vh;
        background: #6532D7;
        text-align: center;
    }
    #head {
            height: 5vh;
            background: #6532D7;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5vh;
            position: relative;
            color: white;
            .menu-icon{
                font-size: 16px;
                color: white;  
                margin-left: 10px;
            }
            #room-name{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
            #back{
                cursor: pointer;
            }
        }

    #box {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        flex: 1;    
        background: #F5F6FA;
        overflow-y: scroll;
        ::-webkit-scrollbar{
            display: none;
        }
    }
    #footer{
        background: white;
        height: 5.3vh;
        display: flex;
        align-items:  center;
        justify-content: space-around;
        background: #F5F6FA;
        padding: 0 1.5vh;
        .icon{
            font-size: 22px;
            margin-left: 5px;
        }
        #talk-inner{
            flex: 1;
            margin: 0 1.5vh;
            border: none;
            outline: none;
            border-radius: 2vh;
            background:  white;
        }
        #talk-inner{
            height: 3vh;
        }
    }
}
`
