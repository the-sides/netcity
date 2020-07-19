import './gmap';
import { db } from './db';
import {attachHandlers} from './ui';

const collection = db.collection('pins')

console.log(collection.get().then((snap) => {
    snap.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
    })
}))

window.addEventListener('DOMContentLoaded', attachHandlers);