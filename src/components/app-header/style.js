import styled from "styled-components";

export const HeaderWrapper = styled.div`

  
  font-size: 16px;


  &.fixed {
    position: fixed;
    z-index: 19;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 99;
    transition: all  250ms ease;
    background-color: ${props =>props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)" };
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props =>props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(233,233,233,1)" };
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }


  }

  .cover {
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, .4);
  }

`

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease; 
  height: ${props => props.isSearch ? "100px" : "0"}
`