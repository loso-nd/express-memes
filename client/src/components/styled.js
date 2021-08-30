import styled, { css } from 'styled-components';

export const NavBar = styled.nav`
background: #4a5970;
height: 4.5rem;
display: flex;
align-items: center; 
justify-content: flex-start;
margin-left: 10px

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

export const Select = styled.select`
  padding: 1em;
  margin: 1em 1em;
  width: 14em;
  border-radius: 0.375em;
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
padding: 1.5em 1em 1em;
background: #fafafa;
box-shadow: 0px 2px 5px lightblue;
transition: height 0.3s ease-in;
    @media (min-width: 960px) {
      width: 29%;
      margin: 1%;
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

export const Button = styled.button`
  padding: 0.75em 1.5em;
  margin: 0 0.5em;
  border-radius: 0.375em;
  border-width: 0;
  cursor: pointer;
  transition: background 0.3s 0s ease-in-out;
  ${(props) =>
    props.red &&
    css`
      background: red;
      color: white;
      :hover {
        background: #e50000;
      }
    `}
  ${(props) =>
    props.green &&
    css`
      background: #4a5970;
      color: #fff;
      :hover {
        background: #21d521;
      }
    `}
    ${(props) =>
    props.grey &&
    css`
      background: #e2e2e2;
      :hover {
        background: #d8d8d8;
      }
    `}
`;

export const Errors = styled.div`
  min-height: 1.25em;
  content: '.';
  color: red;
`

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;


export const Logo = styled.h1`
  font-family: "Courier New";
  font-size: 3rem;
  color: #ccbba3;
  margin: 0;
  line-height: 1;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export const Divider = styled.hr`
border: none;
border-bottom: 1px solid #ccc;
margin: 16px 0;
`;

export const Box = styled.div`
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  padding: 16px;
`;