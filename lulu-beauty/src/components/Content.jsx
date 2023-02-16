import styled from 'styled-components';
import beauty from '../assets/img/beauty.jpg'
import { withTranslation } from 'react-i18next';

const ArticelStyle = styled.article`
  max-width: 600px;
  background: #fff;
  margin: 100px auto;
  text-align: center;
  /* box-shadow: 0px 0px 40px rgba(0,0,0,0.16); */
`

const ImgStyle = styled.img`
  width: 350px;
  margin-top: 40px;
`

const IntroTxt = styled.p`
  font-size: 24px;
  font-weight: 700;
`

const Content = ({t}) => {
  return (
    <ArticelStyle>
      <IntroTxt>{t('introduce')}</IntroTxt>
      <ImgStyle src={beauty} alt=""/>
    </ArticelStyle>
  )
}

export default withTranslation()(Content)