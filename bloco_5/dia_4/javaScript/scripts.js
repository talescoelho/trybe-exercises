window.onload = function() {

  if(!localStorage.bgColor) {
    localStorage.setItem("bgColor", "white");
  }
  if(!localStorage.pPadding) {
    localStorage.setItem("pPadding", "0px");
  }
  if(!localStorage.fontColor) {
    localStorage.setItem("fontColor", "black");
  }
  if(!localStorage.fontFamily) {
    localStorage.setItem("fontFamily", "Verdana");
  }
  if(!localStorage.fontSize) {
    localStorage.setItem("fontSize", "16px");
  }

  const bodyTag = document.body;
  
  bodyTag.style.fontSize = localStorage.fontSize;
  bodyTag.style.backgroundColor = localStorage.bgColor;
  for (let index = 0; index < document.querySelectorAll('p').length; index += 1) {
    console.log(index);
    bodyTag.querySelectorAll('p')[index].style.paddingBottom = localStorage.pPadding;;
  }
  bodyTag.style.fontColor = localStorage.fontColor;
  bodyTag.style.fontFamily = localStorage.fontFamily;

  const sizeUp = document.getElementById('size-up');
  const sizeDown = document.getElementById('size-down');
  const fontChange = document.getElementById('font-change');
  const fontEUp = document.getElementById('font-e-up');
  const fontEDown = document.getElementById('font-e-down');
  const colorFont = document.getElementById('color-font');
  const colorBackground = document.getElementById('color-background');
  const headeSection = document.getElementById('header-section');
  sizeUp.addEventListener('click', function() {
    if (parseInt(localStorage.fontSize) < 30) {
      bodyTag.style.fontSize = `${parseInt(localStorage.fontSize)+1}px`;
      localStorage.fontSize = `${parseInt(localStorage.fontSize)+1}px`;
    }
  });
  sizeDown.addEventListener('click', function() {
    if (parseInt(localStorage.fontSize) > 12) {
      bodyTag.style.fontSize = `${parseInt(localStorage.fontSize)-1}px`;
      localStorage.fontSize = `${parseInt(localStorage.fontSize)-1}px`;
    }
  });

  fontChange.addEventListener('click', function() {
    if (bodyTag.style.fontFamily === 'monospace') {
      bodyTag.style.fontFamily = 'Verdana';
      localStorage.fontFamily = 'Verdana';
    }
    else {
      bodyTag.style.fontFamily = 'monospace';
      localStorage.fontFamily = 'monospace';
    }
  });

  fontEUp.addEventListener('click', function() {
    if (parseInt(localStorage.pPadding) < 40) {
      for (let index = 0; index < document.querySelectorAll('p').length; index += 1) {
        console.log(index);
        bodyTag.querySelectorAll('p')[index].style.paddingBottom = `${parseInt(localStorage.pPadding)+5}px`;
      }
      localStorage.pPadding = `${parseInt(localStorage.pPadding)+5}px`;
    }
  });

  fontEDown.addEventListener('click', function() {
    if (parseInt(localStorage.pPadding) > 0) {
      for (let index = 0; index < document.querySelectorAll('p').length; index += 1) {
        console.log(index);
        bodyTag.querySelectorAll('p')[index].style.paddingBottom = `${parseInt(localStorage.pPadding)-5}px`;
      }
      localStorage.pPadding = `${parseInt(localStorage.pPadding)-5}px`;
    }
  });

  colorFont.addEventListener('click', function() {
    if (bodyTag.style.color === 'red') {
      bodyTag.style.color = 'black';
      localStorage.fontColor = 'black';
    } else {
      bodyTag.style.color = 'red';
      localStorage.fontColor = 'red';
    }
  });

  colorBackground.addEventListener('click', function() {
    if (bodyTag.style.backgroundColor === 'blue') {
      bodyTag.style.backgroundColor = 'white';
      localStorage.bgColor = 'white';
    } else {
      bodyTag.style.backgroundColor = 'blue';
      localStorage.bgColor = 'blue';
    }
  });
}