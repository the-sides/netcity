import './gmap';
import { db, getPins } from './db';
import { attachHandlers, createPins } from './ui';

window.markers = [];
getPins()
    .then(pins => {
        createPins(pins);
        const feed = [...document.querySelectorAll('.post')]
        feed.forEach((post, ind) => {
                // console.log(post)
            post.addEventListener('hover', () => {
                if (markers[ind].getAnimation() !== null) {
                    markers[ind].setAnimation(google.maps.Animation.BOUNCE);
                }
            })
        })

        // createFeed(pins);
    })

window.addEventListener('DOMContentLoaded', attachHandlers);