import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { black, white } from "../constants/colors";
import up from "../assets/images/up.svg"
import down from "../assets/images/down.svg"
import { Link, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const { logout } = useAuth(); 
  //const { user } = useContext(UserContext);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    
    if (visible) {
      document.addEventListener('click', handleDocumentClick);
    }
    
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [visible]);

  const handleClick = () => {
    setVisible(!visible);
    console.log('Icon clicked')
  }


  return (
    <HeaderContainer >
      <Link to={"/"}>Linkr</Link>
      
      <div ref={menuRef}>
      
      {visible ? (
        <Icon src={up} size={38} onClick={handleClick} />
      ) : (
        <Icon src={down} size={38} onClick={handleClick} />
      )}
        <UserImage onClick={handleClick} src="http://tny.im/ufP" />
        {/* <UserImage data-test="avatar" src={user.image ? user.image : "http://tny.im/ufP"} /> */}
      </div>
      
      <Logout data-test="menu" show={visible} to={"/"}>
        <button data-test="logout" onClick={logout}>Logout</button>
      </Logout>
    </HeaderContainer>
  );
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
  a {
    font-size: 49px;
    font-family: "Passion One", cursive;
    text-decoration: none;
    color: ${white};
  }

  @media screen and (max-width: 375px) {
    width: 100vw;
    a {
      font-size: 45px;
      text-align: left;
     }
  }

`;

const UserImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 98.5px;
  object-fit: contain;
`;

const Logout = styled(Link)`
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
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  button {
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: white;
    font-size: 19px;
    font-weight: 700;
    font-family: "Passion One", cursive;
    border: none;
    border-radius: 0px 0px 0px 20px;
    cursor: pointer;
  }
`;


const Icon = styled.img`
  height: 13px;
  width: 18px;
  position: fixed;
  top: 35px;
  right: 90px;

  @media screen and (max-width: 375px) {
    height: 10px;
    width: 14px;
    left: 280px;
    }
`;
