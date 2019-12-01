import styled from "styled-components";

export const ListWarp = styled.div` 
    flex: 1;
    overflow-y: scroll;
    background: #F5F6FA;

    ::-webkit-scrollbar {
        display: none;
    }

    .list-item {
        display: flex;
        padding: 1vh;
        align-items: center;
        background: white;
        cursor: pointer;

        .text {
            display: flex;
            flex-direction: column;
            flex: 1;
            height: 28px;
            justify-content: space-between;
            padding-left: 5px;

            .name{
                color: black;
            }

            .message{

            }
        }
        .text2{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            height: 28px;
            justify-content: space-between;
            .quantity{
                display: inline-block;
                height: 12px;
                line-height: 12px;
                width: 12px;
                border-radius: 50%;
                text-align: center;
                font-size: 10px;
                background: #D3DAE2;
                color: white;
            }
        }
    }

`