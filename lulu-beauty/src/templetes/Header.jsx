import logo from '../assets/img/lulu-logo.png';
import menu from '../assets/img/menu.png';
import styled from "styled-components";
import LanguageMenu from "../components/LanguageMenu"
import { useState } from 'react';
import { withTranslation } from 'react-i18next';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 2px 20px rgba(0,0,0,0.106);
`
const MenuStyle = styled.img`
  width: 30px;
  height: 30px;
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
  font-weight: 700;

  &:hover {
    background: #12bd7e;
    color: #fff;
  }
`

const MenulUl = styled.ul`
  min-width: 88px;
  position: absolute;
  top: 55px;
  left: 20px
  background: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 4px 4px 20px rgba(0,0,0,0.14);
`

const MenuLi = styled.li`
  width: 100%;
  padding: 8px 12px;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
  color: #12bd7e;
  font-weight: 700;

  &:hover {
    color: #fff;
    background: #12bd7e;
  }
`

const Header = ({t}) => {
  const LanguageList = ['English','Chinese','Thai', 'Vietam']
  const [openLang, setOpenLang] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const openLangList = (e) => {
    openLang ? setOpenLang(false) : setOpenLang(true);
  }

  const openMenuList = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  }

  return (
    <HeaderStyle>
      {openMenu && 
      <MenulUl>
        <MenuLi>{t('login')}</MenuLi>
        <MenuLi>{t('inquery')}</MenuLi>
      </MenulUl>
      }

      <MenuStyle src={menu} alt="메뉴" onClick={openMenuList}/>
        <div>
          <LogoStyle src={logo} alt="로고" />
        </div>
      <LanguageBtn onClick={openLangList}>Language</LanguageBtn>
      {openLang && 
        <LanguageMenu 
        openLang={openLang} 
        setOpenLang={setOpenLang} 
        LanguageList={LanguageList}
        />
      }
    </HeaderStyle>
  )
}

export default withTranslation()(Header)