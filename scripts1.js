document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting-text');
    const greetings = ['Hi', 'नमस्ते', 'Bonjour', '你好', 'Hallo', 'Hola', 'こんにちは', '안녕하세요', 'Здравствуйте', 'Ciao'];
    let index = 0;
    let charIndex = 0;
    let typing = true;
  
    function typeText() {
      if (typing) {
        if (charIndex < greetings[index].length) {
          greetingElement.textContent += greetings[index].charAt(charIndex);
          charIndex++;
          setTimeout(typeText, 100);
        } else {
          typing = false;
          setTimeout(typeText, 2000);
        }
      } else {
        if (charIndex > 0) {
          greetingElement.textContent = greetingElement.textContent.slice(0, -1);
          charIndex--;
          setTimeout(typeText, 50);
        } else {
          typing = true;
          index = (index + 1) % greetings.length;
          setTimeout(typeText, 500);
        }
      }
    }
  
    typeText();
  });