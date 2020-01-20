import React from 'react';
import Container from './Container';
import Title from './Title';
import Disqus from 'disqus-react';

const Community = () => (
  <Container>
    <Title>Pokè Info</Title>
    <Disqus.DiscussionEmbed shortname="poke-info" />
  </Container>
);

export default Community;
