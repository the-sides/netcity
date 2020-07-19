import { postPin } from './db';

const composerElm = document.querySelector('#composer');
const curtainElm = document.querySelector('#curtain');
const postPreviewElm = curtainElm.querySelector('.toPost');
const postAcceptBtn = curtainElm.querySelector('.acceptBtn');


const handlePostCancel = () => {
    curtainElm.classList.remove('prompt')
    window.submitBody = {
        pnt: null,
        map: null
    }
}

const handlePostAccept = () => {
    const marker = createPin(window.submitBody.pnt, window.submitBody.map);
    postPin(window.submitBody.pnt, composerElm.value)

    createFeedItem({
        content: composerElm.value,
    }, marker)
    curtainElm.classList.remove('prompt')
    composerElm.value = '';
}

const handleComposer = () => {
    const helpElm = document.querySelector('.composerHelp');
    composerElm.addEventListener('focus', () => {
        helpElm.classList.add('prompt')
    })
    composerElm.addEventListener('blur', () => {
        setTimeout(() => {
            helpElm.classList.remove('prompt')
        }, 1500)
    })
    composerElm.addEventListener('change', () => {
        if (composerElm.value === '') {
            helpElm.classList.remove('prompt')
        }
    })
}

const attachHandlers = () => {
    const postCancelBtn = curtainElm.querySelector('.cancelBtn');
    postCancelBtn.addEventListener('click', handlePostCancel)
    postAcceptBtn.addEventListener('click', handlePostAccept);
    handleComposer()
}


const confirmPost = (pnt, map) => {
    const content = composerElm.value
    if (content === '') return false;

    postPreviewElm.textContent = content;
    curtainElm.classList.add('prompt')

    // Setup the "accept" listener data
    window.submitBody = {
        pnt: pnt,
        map: map,
    }

}

const createPin = (pnt, map) => {
    const marker = new google.maps.Marker({
        position: pnt,
        map: map,
        title: 'Hello World!'
    });
    return marker;
}

const createPins = (pins) => {
    pins.forEach(pin => {
        const pnt = { lat: Number(pin.lat), lng: Number(pin.lng) }

        var contentString =
            '<p>' +
            pin.content +
            "</p>";

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });


        const marker = new google.maps.Marker({
            position: pnt,
            map: map,
            title: pin.content,
            animation: google.maps.Animation.DROP,
        });
        marker.addListener("click", function () {
            infowindow.open(map, marker);
        });
        createFeedItem(pin, marker)
    })
}

const createFeedItem = (pin, marker = false) => {
    const newPostElm = document.createElement('div')
    feed.append(newPostElm)
    newPostElm.outerHTML = `<div class="post"> <i><svg xmlns="http://www.w3.org/2000/svg" width="68" height="100" viewBox="0 0 68 100" fill="none"><path d="M0 6.77775V72.342C0 74.8431 1.55144 77.0818 3.89326 77.96L59.8933 98.96C63.8158 100.431 68 97.5312 68 93.342V28.6013C68 26.1284 66.4828 23.9087 64.1786 23.0108L8.17864 1.18727C4.24482 -0.34577 0 2.55576 0 6.77775Z" fill="#1B262C"></path></svg></i><div class="msg"><p>${pin.content}</p></div></div>`
    if (marker) window.markers.push(marker)
}



export { confirmPost, attachHandlers, createPins }