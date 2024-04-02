import styled, { keyframes } from "styled-components";
import reactsvg from "../assets/react.svg";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 24px;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinningImage = styled.img`
  animation: ${spin} infinite 20s linear;
  width: 150px;
`;

const LoadingScreen = () => {
  return (
    <Wrapper>
      <SpinningImage src={reactsvg} alt="React Logo" />
      {/* <Text>loading...</Text> */}
    </Wrapper>
  );
};

export default LoadingScreen;
