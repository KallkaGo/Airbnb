import styled from "styled-components";


export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${props => props.theme.textColor.primaryColor};
  z-index: 10;

  .btns {
    display: flex;
   color: ${props=>props.theme.isAlpha ? "#fff" : props.theme.textColor.primaryColor};
    .btn {
      //height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      font-weight: 600;
      &:hover {
        background-color: ${props=>props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    margin-right: 20px;
    color: ${props => props.theme.textColor.greyColor};
    ${props=>props.theme.mixin.boxShadow}
    .panel{
      color: #666;
      position: absolute;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 2px 4px rgba(0,0,0,.18);
      right: 0;
      top: 60px;
      border-radius: 10px;
      .top, .bottom{
        padding: 10px 0;
        &> div{
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
        }
        & >div:hover{
          background-color: #f5f5f5f5;
        } 
      }
      .top{
        border-bottom: 1px solid #ddd;
      }
    }
  }
`