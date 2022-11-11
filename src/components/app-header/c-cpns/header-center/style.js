import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    align-items: center;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    box-sizing: border-box;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}
    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 32px;
      width: 32px;
      color: #fff;
      background-color: ${props => props.theme.primaryColor};
    }
  }
`