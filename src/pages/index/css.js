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

            .icon-left {
                margin-right: 2.6vh;
            }

            .title {
                position: absolute;
                margin: 0 auto; 
                left: 0;
                right: 0;
                text-align: center;
            }
        }

    #box {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        flex: 1;    

        #search {
            height: 5.8vh;
            display: flex;
            align-items: center;
            position: relative;
            color：#B3B5C0;
            padding: 0 1vh;
            
            .icon-fdj{
                position: absolute;
                top: 50%;
                left: 43%;
                transform: translate(-50%, -50%);
            }

            #talk-search {
                width: 100%;
                border-radius: 24px;
                border: none;
                background: #F5F6FA;
                text-align: center;
                font-size: 12px;
                height: 3.3vh;
                outline: none;
            }
        }

        #tips{
            padding: 0 1vh;
            color: black;
            height: 3vh;
            display: flex;
            align-items: center;

            .tips{
                flex: 1;
            }
        }
    }
    #footer{
        background: white;
        height: 8vh;
        display: flex;
        align-items:  center;
        justify-content: space-around;
        .tab{
            display: flex;
            flex-direction: column;
            font-size: 18px;
            flex: 1;
            height: 100%;
            align-items: center;
            justify-content: center;
            color: #A8A8A8;
        }
        .tab-name{
            font-size: 12px;
            margin-top: 2px;
        }
        .active{
            color: #6532D7;
        }
    }
}
`
