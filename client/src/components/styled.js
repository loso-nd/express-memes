import styled, { css } from 'styled-components';

export const NavBar = styled.nav`
background: #4a5970;
height: 3.2rem;
display: flex;
align-items: center; 
justify-content: center; 


a {
    text-decoration: none;
    padding: 1em;
    color: #fff;
    transition: background 0.3s 0s ease-in-out;
    &:hover {
      background: #ccbba3;
    }
  }
  a.active {
    background: #ccbba3;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Input = styled.input`
  padding: 1em;
  margin: 1em 0;
  width: 18em;
  border-radius: 0.375em;
  ${(props) =>
    props.submit &&
    css`
      cursor: pointer;
      background: #4a5970;
      color: white;
      transition: background 0.3s 0s ease-in-out;
      :hover {
        background:  #ccbba3;
      }
    `}
`;

export const Textarea = styled.textarea`
  padding: 1em;
  margin: 1em 0;
  width: 18em;
  border-radius: 0.375em;
  height: 10em;
`;

export const Card = styled.div `
    padding: 1rem;
    @media (min-width: 960px) {
        width: 25%;
    }
`;

export const Image = styled.img `
max-width:80%;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;