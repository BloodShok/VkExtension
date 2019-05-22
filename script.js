

var dataRows = document.querySelectorAll(".audio_row.audio_row_with_cover._audio_row.audio_can_add");
var dataPlayer = document.querySelectorAll(".audio_row__title._audio_row__title");

var musikUrlList = [];

for (let index = 0; index < 8; index++) {
    dataRows[index].addEventListener('click', () => {
        // musikUrlList = performance.getEntries().filter(x => x.name.includes("vkuseraudio")).map(x => x.name);
        // console.warn(musikUrlList);
        var m_url = performance.getEntries().filter(x => x.initiatorType === 'audio' && !x.name.includes('https://vk.com/mp3'))[0];
        const element = dataPlayer[index];
        var elem = document.createElement('span');
        elem.innerHTML = `<button id="Teeeest2" onclick="hi(6); event.stopPropagation();"style="z-index: 22;border-radius: 21px;background-color: #2a76a8;color: white;border: 1px solid white;">U</button>`;
        element.appendChild(elem);
        var elem = document.createElement('span');
        elem.innerHTML = `<button id="Teeeest" onclick="forceDownload('${m_url.name}'); event.stopPropagation();"style="z-index: 22;border-radius: 21px;background-color: #4a76a8;color: white;border: 1px solid white;">D</button>`;
        element.appendChild(elem);


    }, false);
}

function hi(times2) {
    setTimeout(function () {

        if(musikUrlList.length === 6) {
            musikUrlList.forEach((x, i) => {
                forceDownload(x,i)
            });
            musikUrlList = [];
            times2 = -10;
            return;
        }
        if(times2 <= 0 && times2 != -10 && musikUrlList.length != 6) {
            times2 = 6;
            console.warn(times2);
            hi(times2);
        }
        dataRows[times2].click();
        setTimeout(function () {
            dataRows[times2].click();
        }, 100);
        console.warn(times2);
        times2--;
        hi(times2);
    }, 1000);

    musikUrlList = performance.getEntries().filter(x => x.name.includes("vkuseraudio")).map(x => x.name);
    console.warn(musikUrlList);
};

function forceDownload(url, name) {
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        var urlCreator = window.URL || window.webkitURL;
        var audioUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = audioUrl;
        tag.download = `${name}fileName.mp3`;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}