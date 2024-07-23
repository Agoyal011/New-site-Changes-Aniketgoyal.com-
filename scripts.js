document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('changing-text');
    const texts = ['I am a Data Engineer.', 'I am a Mechatronics Engineer.'];
    let index = 0;
    let charIndex = 0;
    let typing = true;
  
    function typeText() {
      if (typing) {
        if (charIndex < texts[index].length) {
          textElement.textContent += texts[index].charAt(charIndex);
          charIndex++;
          setTimeout(typeText, 60);
        } else {
          typing = false;
          setTimeout(typeText, 400);
        }
      } else {
        if (charIndex > 0) {
          textElement.textContent = textElement.textContent.slice(0, -1);
          charIndex--;
          setTimeout(typeText, 40);
        } else {
          typing = true;
          index = (index + 1) % texts.length;
          setTimeout(typeText, 500);
        }
      }
    }
  
    typeText();
  });