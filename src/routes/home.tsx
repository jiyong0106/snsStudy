import PostTweet from "../components/post-tweet";
import styled from "styled-components";

const Wrapper = styled.div`
  
`

const Home = () => {
  return (
    <Wrapper>
      <PostTweet />
    </Wrapper>
  );
};

export default Home;
