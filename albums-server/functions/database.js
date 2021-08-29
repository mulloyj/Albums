const db = require('../models');
const Album = db.albums

module.exports = async function updateCurrent() {
    const current = await Album.getCurrent();
    const albums = await Album.getUnListened();

    if (albums.length > 0) {
        const newCurrent = albums[Math.floor(Math.random() * albums.length)];

        await Album.findByIdAndUpdate(current.id, { current: false});
        await Album.findByIdAndUpdate(newCurrent.id, { current: true, listenedTo: true, dateListened: new Date()});

        console.log(`Current album updated to ${newCurrent.title}`);
    } else {
        console.log('No new albums to update current');
    }
    
}