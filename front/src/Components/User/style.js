import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

.content{
    display: flex;
    section{ 
        width: 30%;
        border: 3px solid black;
        border-radius: 40px;
        padding: 15px;
    }
}

`