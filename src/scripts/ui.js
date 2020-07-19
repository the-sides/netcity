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
    createPin(window.submitBody.pnt, window.submitBody.map);
    postPin(window.submitBody.pnt, composerElm.value)

    curtainElm.classList.remove('prompt')
    composerElm.value = '';
}

const attachHandlers = () => {
    const postCancelBtn = curtainElm.querySelector('.cancelBtn');
    postCancelBtn.addEventListener('click', handlePostCancel)
    postAcceptBtn.addEventListener('click', handlePostAccept);
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
}

const createPins = (pins) => {
    pins.forEach(pin => {
        const pnt = { lat: Number(pin.lat), lng: Number(pin.lng) }
        const marker = new google.maps.Marker({
            position: pnt,
            map: map,
            title: 'Hello World!'
        });
    })
}

const createFeed = () => {

}

export { confirmPost, attachHandlers, createPins, createFeed }