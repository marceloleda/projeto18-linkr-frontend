import { useContext, useState } from "react"
import styled from "styled-components"
import { black } from "../../constants/colors"
import { MdKeyboardArrowDown } from "react-icons/md"

export default function Header() {
    //const { user } = useContext(UserContext);

    return (
        <HeaderContainer>
        <p>Linkr</p>
        <div>
            <MdKeyboardArrowDown size={38}/>
            <UserImage src="http://tny.im/ufP" /> 
            {/* <UserImage src={user.image ? user.image : "http://tny.im/ufP"} /> */}
        </div>
        <Logout>
            <button>Logout</button>
        </Logout>
        </HeaderContainer>

    )
}

const HeaderContainer = styled.div`
    background-color: ${black};
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 25px;
    color: white;
    p {
        font-size: 49px;
        font-family: 'Passion One', cursive;
    }
`

const UserImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 98.5px;
  object-fit: contain;
`

const Logout = styled.div`
    width: 11%;
    height: 47px;
    background-color: ${black};
    position: absolute;
    right: 0;
    margin-top: 110px;
    border-radius: 0px 0px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* visibility: hidden; */
    button {
        width: 100%;
        height: 100%;
        background-color: inherit;
        color: white;
        font-size: 19px;
        font-weight: 700;
        font-family: 'Passion One', cursive;
        border: none;
        border-radius: 0px 0px 0px 20px;
    }
`