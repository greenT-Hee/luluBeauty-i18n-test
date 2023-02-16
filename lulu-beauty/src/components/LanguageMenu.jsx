import styled from "styled-components"
import { useTranslation } from 'react-i18next'

const MenuBox = styled.ul`
  box-sizing: border-box;
  position: absolute;
  width: 88px;
  right: 20px;
  top: 55px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 20px rgba(0,0,0,0.1);
`
const LangList = styled.li`
  width: 100%;
  border-radius: 4px;

  &:hover {
    background: #12bd7e;
  }
  `
  
  const LangBtn = styled.button`
  width: 100%;
  border: none;
  background: none;
  padding: 8px 12px;
  color: #12bd7e;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: #fff;
  }
`

const LanguageMenu = ({setOpenLang, openLang}) => {  
  console.log(openLang)
  console.log(setOpenLang)
  const { i18n } = useTranslation();
  const changeToEn = () => {
    i18n.changeLanguage('en');
    setOpenLang(false);
  }
  const changeToCh = () => {
    i18n.changeLanguage('ch');
    setOpenLang(false);
  }
  const changeToTh = () => {
    i18n.changeLanguage('th');
    setOpenLang(false);
  }
  
  const changeToVt = () => {
    i18n.changeLanguage('vt');
    setOpenLang(false);
  }
  
  return (
      <MenuBox>
        <LangList>
          <LangBtn onClick={changeToEn}>English</LangBtn>
        </LangList>
        <LangList>
          <LangBtn onClick={changeToCh}>Chinese</LangBtn>
        </LangList>
        <LangList>
          <LangBtn onClick={changeToTh}>Thai</LangBtn>
        </LangList>
        <LangList>
          <LangBtn onClick={changeToVt}>Vietnam</LangBtn>
        </LangList>
      </MenuBox>
  )
}

export default LanguageMenu