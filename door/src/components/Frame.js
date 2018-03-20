import styled from 'styled-components';

const Frame = styled.div`
  flex: 1;
  border: 1px solid #e4e4e4;
  padding: 0.5rem;
  margin: 1rem;
  text-align: center;

  h1 {
    font-size: 1.1rem;
    margin: 0 auto 0.5rem auto;
    padding-bottom: 0.5rem;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
  }

  button {
    border-radius: 4px;
    padding: 0.5rem;
    width: 47%;

    &:hover {
      font-weight: 700;
    }
  }

  .disabled {
    cursor: not-allowed;
  }
`;

export default Frame;
