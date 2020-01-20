import React from 'react';

const Disqus = () => {
  (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://poke-info.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();

  return <div id="disqus_thread"></div>;
}

export default Disqus;
