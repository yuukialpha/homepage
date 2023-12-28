const md = new markdownit({ breaks: true, linkify: true });

fetch('./README.md')
  .then((res) => res.text())
  .then((text) => {
    document.getElementById('main').innerHTML = md.render(text);
  })
  .then(() => {
    const aTags = document.querySelectorAll('#main a');
    aTags.forEach((aTag) => {
      const maxColors = (1<<24)|0;
      const randomColor = `#${Math.floor(Math.random() * maxColors).toString(16).padStart(6, '0')}`;
      aTag.style.color = randomColor;
      aTag.style.textDecoration = 'underline';
      aTag.setAttribute('target', '_blank');
    });
  });
