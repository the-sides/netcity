import './gmap';
import { db, getPins } from './db';
import { attachHandlers, createPins, createFeed } from './ui';

getPins()
    .then(pins => {
        createPins(pins);
        createFeed(pins);
    })

window.addEventListener('DOMContentLoaded', attachHandlers);