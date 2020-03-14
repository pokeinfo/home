import React from "react";
import Container from "./Container";
import Title from "./Title";
import Disqus from "disqus-react";

const Community = () => (
  <Container maxWidth={650}>
    <Title>Pokè Info</Title>
    <Disqus.DiscussionEmbed shortname="poke-info" config={{}} />
  </Container>
);

export default Community;
