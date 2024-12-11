window.onload = function () {

  let mainBody = document.getElementsByClassName('main');
  let textInput = document.getElementsByClassName('comands')[0];



  function backgroundColor() {
    let bodyTag = document.getElementsByTagName('body')[0];
    let btnBGColor = document.getElementsByClassName('btns')[0];
    let inputField = document.getElementsByTagName('input')[0];
    btnBGColor.style.cursor = 'pointer';

    btnBGColor.addEventListener('click', function () {
      let color = inputField.value;
      bodyTag.style.background = color;
    })
  }
  backgroundColor();

  function textColor() {
    let bodyTag = document.getElementsByTagName('body')[0];
    let btnTextColor = document.getElementsByClassName('btns')[1];
    let inputField = document.getElementsByTagName('input')[0];
    btnTextColor.style.cursor = 'pointer';

    btnTextColor.addEventListener('click', function () {
      let color = inputField.value;
      bodyTag.style.color = color;
    })
  }
  textColor();

  function fontFamily() {
    let bodyTag = document.getElementsByTagName('body')[0];
    let btnfontFamily = document.getElementsByClassName('btns')[2];
    let inputField = document.getElementsByTagName('input')[0];
    btnfontFamily.style.cursor = 'pointer';


    btnfontFamily.addEventListener('click', function () {
      let fontFamily = inputField.value;
      bodyTag.style.fontFamily = fontFamily;
    })
  }
  fontFamily();

  function fontSize() {
    let bodyTag = document.getElementsByTagName('body')[0];
    let btnFontSize = document.getElementsByClassName('btns')[3];
    let inputField = document.getElementsByTagName('input')[1];
    btnFontSize.style.cursor = 'pointer';


    btnFontSize.addEventListener('click', function () {
      let fontSize = inputField.value;
      bodyTag.style.fontSize = fontSize + 'px'
    })
  }
  fontSize();


  function linesSpacing() {
    let bodyTag = document.getElementsByTagName('body')[0];
    let btnLineHeight = document.getElementsByClassName('btns')[4];
    let inputField = document.getElementsByTagName('input')[1];
    btnLineHeight.style.cursor = 'pointer';


    btnLineHeight.addEventListener('click', function () {
      let lineHeight = inputField.value;
      if (lineHeight < 20) {
        alert('Erro, número muito baixo')
      } else {
        bodyTag.style.lineHeight = lineHeight + 'px';
      }
    })
  }
  linesSpacing();



}