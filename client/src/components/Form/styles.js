import styled from "styled-components";

export const Container = styled.div`
  height: 35vh;
  width: 40vw;
  display: flex;

  @media (max-width: 768px) {
    width: 85vw !important;
    height: 45vh !important;
  }

  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);

  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;

      input[type="text"] {
        width: 80vw !important;
      }

      input[type="submit"] {
        width: 60vw !important;
        margin-top: 15px;
        margin-left: 0;
      }
    }

    input {
      font-family: "Oswald", sans-serif;
    }

    input[type="text"] {
      color: black;
      text-align: center;
      font-size: 40px;
      height: 60px;
      width: 25vw;
      border: none;
      border-bottom: 1px solid black;
    }

    input[type="submit"] {
      font-size: 25px;
      width: 10vw;
      margin-left: 10px;
      border: none;
      background-color: #663399;
      padding: 5px;
      border-radius: 25px;
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);

      &:hover {
        background-color: #47236b;
        cursor: pointer;
      }

      &:active {
        background-color: #33194c;
        cursor: pointer;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }
`;
