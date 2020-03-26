import React from "react";
import Container from "./Container";
import Title from "./Title";
import Disqus from "disqus-react";

const Community = () => (
  <Container maxWidth={650}>
    <Title>Pokè Info</Title>
    <Disqus.DiscussionEmbed shortname="poke-info" config={{}}>
      댓글을 불러오는 중...
    </Disqus.DiscussionEmbed>
  </Container>
);

export default Community;
