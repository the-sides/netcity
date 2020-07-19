import './gmap';
import { db, getPins } from './db';
import { attachHandlers, createPins, createFeed } from './ui';

getPins()
    .then(createPins)

window.addEventListener('DOMContentLoaded', attachHandlers);