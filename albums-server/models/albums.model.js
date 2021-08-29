module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            title: String,
            artist: String,
            spotifyLink: String,
            imageUrl: String,
            slug: String,
            listenedTo: Boolean,
            dateListened: Date,
            current: Boolean,
        }
    );

    schema.statics.getCurrent = async function() {
        let album = await this.findOne({ current: true });

        return album;
    }

    schema.statics.getUnListened = async function() {
        let albums = await this.find({ listenedTo: false });
        
        return albums;
    }

    schema.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Album = mongoose.model("album", schema);

    return Album;
}
