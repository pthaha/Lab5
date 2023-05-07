// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const button =  document.querySelector('button');
  const text = document.getElementById('text-to-speak');
  const lang = document.getElementById('voice-select');
  const img = document.querySelector("img[src='assets/images/smiling.png']");

  let v = '';
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      console.log("problem");
      return;
    }
  
    const voices = speechSynthesis.getVoices();
    console.log(voices);
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      lang.appendChild(option);
    }
  }
    
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener ('click', function () {
    let txt = new SpeechSynthesisUtterance(text.value);
    console.log(txt);
    const voices = speechSynthesis.getVoices();
    if (v != '') {
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === v.getAttribute('data-name')) {
          console.log(v);
          
          txt.voice = voices[i];
        }
      }
      window.speechSynthesis.speak(txt);
      img.src='assets/images/smiling-open.png';
      txt.onend = function() {
        img.src = 'assets/images/smiling.png'
      }
    }
  })

  lang.addEventListener('change', function() {
    v = lang.options[lang.selectedIndex];
    console.log(v.getAttribute("data-name"));
  })

}