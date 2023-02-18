module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            url: { type: String, required: true },
            updateDate: { type: Date, default: Date.now },
            size: { type: String, required: true },
            format: { type: String, required: true }
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Resource = mongoose.model("resource", schema);
    return Resource;
};