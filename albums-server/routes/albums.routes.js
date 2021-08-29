module.exports = app => {
    const albums = require('../controllers/album.controller.js');
    
    var router = require("express").Router();

    // Create a new Album
    router.post("/", albums.create);

    // Retrieve all Albums
    router.get("/", albums.findAll);

    // Retrieve all listened to Albums
    router.get("/listened", albums.findAllListenedTo);

    // Retrieve all unlistened to Albums
    router.get("/unlistened", albums.findAllUnlistenedTo)

    // Retrieve the current Album
    router.get("/current", albums.findCurrent);

    // Retreive a single Album with id
    router.get("/:id", albums.findOne);

    // Update a Album with id
    router.put("/:id", albums.update);

    // Delete a Album with id
    router.delete("/:id", albums.delete);

    // Delete all Albums
    router.delete("/", albums.deleteAll);

    app.use('/api/albums', router);
}