import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'
import styled from 'styled-components'
import { authActionTypes } from '../store/auth/authReducer'

const Header = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch()

 const isAuthorized = useSelector((state) => state.auth.isAuthorized)
      console.log(isAuthorized);

 const logoutHandler = () => {
  dispatch({type:authActionTypes.LOG_OUT})
  console.log("ddddd");
  navigate("/")
 }
  return (
    <>

  {isAuthorized &&
  <>
  <HeaderStyle>
      <h1>Redux Auth</h1>
    <nav>
        <Ul>
          <List>
            <A>My Products</A>
          </List>
          <List>
            <A>My Sales</A>
          </List>
          <List>
            <ButtonStyled onClick={logoutHandler}>Logout</ButtonStyled>
          </List>
        </Ul>
      </nav>
    </HeaderStyle>
    <Outlet/>
    </>
    }  
    </>
  )
}

export default Header

const HeaderStyle = styled.header`
   /* width: 100%; */
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3c0080;
  color: white;
  padding: 0 10%;
  margin-bottom:50px;

`
const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`

const List = styled.li`
  margin: 0 1rem;
  
`
const A = styled.a`
   text-decoration: none;
  color: white;
  font-size: 1.25rem;
  &:hover{
    color: #b864da;

  }
`

const ButtonStyled = styled.button`
   font-size: 1.25rem;
  background-color: #ffbb00;
  border: 1px solid #ffbb00;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: #2c2922;

&:hover,
&:active {
  background-color: #ffa600;
  border-color: #ffa600;
}
`

