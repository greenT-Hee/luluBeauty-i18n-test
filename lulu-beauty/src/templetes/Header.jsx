import logo from '../assets/img/lulu-logo.png';
import menu from '../assets/img/menu.png';
import styled from "styled-components";
import LanguageMenu from "../components/LanguageMenu"
import { useState } from 'react';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 2px 20px rgba(0,0,0,0.106);
`
const MenuStyle = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`
const LogoStyle = styled.img`
  width: 220px;
  cursor: pointer;
`
const LanguageBtn = styled.button`
  display: block;
  cursor: pointer;
  border: 1px solid #12bd7e;
  background: none;
  padding: 8px 12px;
  border-radius: 6px;
  color: #12bd7e;
  font-weight: 600;

  &:hover {
    background: #12bd7e;
    color: #fff;
  }
`

const Header = () => {
  const LanguageList = ['English','Chinese','Thai', 'Vietam']
  const [openLang, setOpenLang] = useState(false);

  const openLangList = (e) => {
    openLang ? setOpenLang(false) : setOpenLang(true);
  }

  return (
    <HeaderStyle>
      <MenuStyle src={menu} alt="메뉴" />
        <div>
          <LogoStyle src={logo} alt="로고" />
        </div>
      <LanguageBtn onClick={openLangList}>Language</LanguageBtn>
      {openLang && <LanguageMenu openLang={openLang} setOpenLang={setOpenLang} LanguageList={LanguageList}/>}
    </HeaderStyle>
  )
}

export default Header