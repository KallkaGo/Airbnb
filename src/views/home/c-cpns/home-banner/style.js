import styled from "styled-components";
/*方法一*/
// import CoverImg from '@/assets/img/cover_01.jpeg'
// background: url(${CoverImg}) center/cover;
export const BannerWrapper = styled.div`
  height: 529px;
  
  /*方法二*/
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
  
`