
var data = document.querySelectorAll(".audio_row__title._audio_row__title");
var script = document.createElement('script');
script.src = chrome.extension.getURL("script.js");

(document.head||document.documentElement).appendChild(script);
script.onload = function() {
    script.parentNode.removeChild(script);
};

for (let index = 0; index < 5; index++) {
    const element = data[index];
    var elem = document.createElement('span');
    elem.innerHTML = '<button id="Teeeest" onclick="hi(); event.stopPropagation();" style="z-index: 22;border-radius: 21px;background-color: #4a76a8;color: white;border: 1px solid white;">D</button>';
    element.appendChild(elem);
}

