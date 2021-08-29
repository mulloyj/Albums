const db = require('../models');
const Album = db.albums;

// Create and Save a new Album
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a new Album
    const album = new Album({
        title: req.body.title,
        artist: req.body.artist,
        spotifyLink: req.body.spotifyLink,
        imageUrl: req.body.imageUrl,
        listenedTo: req.body.listenedTo ? req.body.listenedTo : false,
        dateListened: null,
        current: false,
    });

    // Save Album in the database
    album
        .save(album)
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating the Album."
            });
        });
};

// Retrieve all Albums from the database
exports.findAll = (req, res) => {
    const slug = req.query.slug;
    var condition = slug ? { slug: { $regex: new RegExp(slug), $options: "i"} } : {};

    Album.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occured while retrieving the Albums."
            });
        });
};

// Find a single Album with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Album.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Album with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Album with id " + id});
        });
};

// Update a Album by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Album.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannt update Album with id ${id}. Maybe Album was not found!`
                });
            } else res.send({ message: "Album was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Album with id " + id
            });
        });
};

// Delete a Album with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Album.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Album with id ${id}. Maybe Album was not found!`
                });
            } else {
                res.send({
                    message: "Album was successfully deleted!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Album with id " + id
            });
        });
};

// Delete all Albums from the database.
exports.deleteAll = (req, res) => {
    Album.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Albums were succesfully deleted`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while removing all tutorials"
            });
        });
};

// Find all listened to Albums
exports.findAllListenedTo = (req, res) => {
    Album.find({ listenedTo: true})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving albums"
            });
        });
};

// Find all unlistened to Albums
exports.findAllUnlistenedTo = (req, res) => {
    Album.find({ listenedTo: false })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving albums"
            });
        });
}

// Find the current Album
exports.findCurrent = (req, res) => {
    Album.findOne({ current: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving albums"
            });
        });
}