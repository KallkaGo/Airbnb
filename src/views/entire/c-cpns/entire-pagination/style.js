import styled from "styled-components";

export const PaginationWrapper = styled.div`
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .MuiPaginationItem-page.Mui-selected{
      background-color: #222;
      color: #fff;
    }
    .MuiPaginationItem-page{
      margin: 0 9px;
      &:hover{
        text-decoration: underline;
      }
    }
    
  }

  .desc {
    margin-top: 15px;
    color: #222;
  }
`