const md = new markdownit({
  html: true,
  linkify: true,
});

addEventListener('load', () => {
  fetch('./template.md')
    .then((res) => res.text())
    .then((text) => {
      document.querySelector('#main').innerHTML = md.render(text);
    })
    .then(() => {
      const aTags = document.querySelectorAll('#main a');
      aTags.forEach((aTag) => {
        const maxColors = (1 << 24) | 0;
        const randomColor = `#${Math.floor(Math.random() * maxColors).toString(16).padStart(6, '0')}`;
        aTag.style.color = randomColor;
        aTag.style.textDecoration = 'underline';
        aTag.setAttribute('target', '_blank');
      });

      fetch('https://taikoapp.uk/api/songs')
        .then((res) => res.json())
        .then((json) => {
          document.querySelector('#taiko-size').textContent = json.length.toString();
          json.slice(-7).reverse().forEach((song, index) => {
            document.querySelector(`#taiko-last-song-${index+1}`).textContent = song['title'];
          });
        });
    });
});
