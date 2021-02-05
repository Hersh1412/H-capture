import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  // flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 7rem;
  // padding: 2rem 4rem 0rem 4rem;
  color: white;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 3rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImageDiv = styled.div`
  flex: 1;
  overflow: hidden;
  // padding-left: 2rem;

  img {
    width: 100%;
    height: 80vh;
    // padding-left: 5rem;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
