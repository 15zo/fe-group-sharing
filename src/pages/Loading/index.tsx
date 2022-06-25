import styled from 'styled-components';
import FadeLoader from 'react-spinners/FadeLoader';

const Loading = () => {
  return (
    <Wrapper>
      <FadeLoader color="#e89024" height={25} width={6} radius={5} margin={10} />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Loading;
