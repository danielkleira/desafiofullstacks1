import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--body-font);
  font-size: 16px;
  background-color: var(--background-color);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: var(--text-color);

  h1 {
    color: var(--text-color);
    margin: 10px;
  }

  h2 {
    color: var(--text-color);
  }

  h4 {
    font-size: 14px;
    color: var(--text-color);
    margin: 5vw, 0, 5vw, 0;
  }

  p {
    color: var(--text-color);
    font-size: 12px;
    margin: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 60vh;
    align-items: center;
    width: 100%;
    max-width: 35vw;
    color: var(--text-color);
    background: var(--header-background);
    border-radius: 4px;
    padding: 42px 22px 42px 22px;

    p{
      color: var(--error-message);
    }

    input {
      height: 2vh;
      width: 50%;
      color: var(--text-color);
      background-color: transparent;
      border-radius: 30px;
      padding:8px;
      border: 1px solid grey;
    }
    @media (max-width: 650px) {
      max-width: 80%;
    }

    @media (max-width: 850px) {
      max-width: 70%;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 35vw;
    margin: none;
    @media (max-width: 1000px) {
      max-width: 40vw;
    }

    @media (max-width: 850px) {
      max-width: 80vw;
    }

    button {
      background: var(--button-background);
      color: white;
      width: 100%;
      max-width: 67px;
      height: 32px;
      border: none;
      border-radius: 4px;
      :hover {
        filter: brightness(1.1);
        background-color: var(--button-hover);
        cursor: pointer;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: var(--button-background);
  color: var(--text-color);
  display: inline-flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: none;
  height: 45px;
  width: 55%;
  border-radius: 8px;
  transition: 0.1s;
  @media (max-width: 650px) {
    width: 50vw;
  }

  :hover {
    filter: brightness(1.1);
    background-color: var(--button-hover);
    cursor: pointer;
  }
`;
