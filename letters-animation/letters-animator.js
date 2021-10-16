const LettersAnimator = {

  letterStyle: `
    margin-right: -0.25em;
    transform: scaleY(0) translateY(-40px);
    display: inline-block;
    transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
  `,
  wordStyle: `
    margin-right:0.5em;
  `,  
  init: function(selector){
    document.querySelectorAll(selector).forEach(el => this.spanLetters(el));
  },
  spanLetters: function(el){
    let text = el.innerText;
    el.innerHTML = '';
    let words = text.split(' ');
    let wordsSpan = [];

    for (const wordIndex in words) {
      let word = words[wordIndex];
      let span = document.createElement('span');
      span.classList.add('word');
      span.style.cssText = this.wordStyle;

      let letterSpan = []

      for(const character_index in word){
        letterSpan = [...letterSpan, `<span style="${this.letterStyle}" class="letter">${word[character_index]}</span>`]
      }

      span.innerHTML = letterSpan.join(' ');
      wordsSpan.push(span);
    }
    
    wordsSpan.forEach(span => el.appendChild(span));

    this.animate(el);

  },
  animate: function(el){
    el.querySelectorAll(".letter").forEach((span, index) => {
      setTimeout(()=>{
        span.style.transform = 'scaleY(1) translateY(0px)'
      },30*index) //multiplicar por el index para aplicar el retraso de la animacion a cada elemento por separado
    })
  }
}