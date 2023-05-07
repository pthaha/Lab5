// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  // 
  let audio = '.';
  let option = 'nothing';
  let v = 50;

  const button = document.querySelector('button');
  const select = document.querySelector('select');
  const img = document.querySelector("img[src='assets/images/no-image.png']");
  const vol = document.querySelector("img[src='assets/icons/volume-level-2.svg']");
  const vv = document.getElementById("volume");
  const jsConfetti = new JSConfetti();

  select.addEventListener('change', function() {
    option = select.value;
    console.log(option);
    audio = new Audio('assets/audio/'+option+'.mp3');
    img.src = 'assets/images/'+option+'.svg';
    img.alt = option;
  })

  vv.addEventListener('change', function() {
    console.log(vv.value);
    v = vv.value;
    if (v == 0) {
      vol.src = 'assets/icons/volume-level-0.svg';
    } else if (v < 33) {
      vol.src = 'assets/icons/volume-level-1.svg';
    } else if (v < 67) {
      vol.src = 'assets/icons/volume-level-2.svg';
    } else {
      vol.src = 'assets/icons/volume-level-3.svg';
    }
  })

  button.addEventListener('click', function() {
    console.log('clicked');
    if (audio != '.') {
      audio.volume = v/100;
      if (option == "party-horn") {
        jsConfetti.addConfetti();
      }
      audio.play();
    }
  })

}


