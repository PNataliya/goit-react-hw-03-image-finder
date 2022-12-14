import styled from '@emotion/styled';

export const LoaderSkeleton = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 7px solid #f3f3f3;
  border-top: 7px solid #3f51b5;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
