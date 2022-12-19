import styled from "styled-components";

export const PictureWrapper =styled.div`
  position: relative;
.picture{
  display: flex;
  height: 600px;
  background-color: #000;
  &:hover{
    .cover{
      opacity: 1 !important;
    }
    .cover:hover{
      opacity: 0 !important;
    }
  }
} 
  //.cover{
  //  opacity: 1 !important;
  //}
  //.item:hover{
  //  .cover{
  //    opacity: 0 !important;
  //  }
  //}
  .left ,.right{
    width: 50%;
    height: 100%;
    .item{
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in;
      }
      .cover{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.4);
        opacity:0;
        transition: opacity 200ms ease;
      }
      &:hover{
        img{
          transform: scale(1.1);
        }
      }
    }
  }
  .right{
    display: flex;
    flex-wrap: wrap;
    .item{
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }
  
  .show-browser{
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`