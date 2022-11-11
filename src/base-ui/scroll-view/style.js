import styled from "styled-components";

export const ScrollViewWarpper = styled.div`
  padding: 5px 0;
  position: relative;

  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 200ms ease;
    }
  }

  .control {
    z-index: 10;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    border: 2px solid #fff;
    background-color: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, .14);
    cursor: pointer;
    
    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`