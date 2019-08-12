import styled from 'styled-components';

export const Container = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        
        input{
            color: black;
        }

        input[type="text"]{
            margin-right: 10px;
        }

        input[type="submit"]{
            margin-left: 10px;
        }
    }
`;
