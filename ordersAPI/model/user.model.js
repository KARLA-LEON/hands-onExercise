module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                username: { type: String, required: true },
                password: { type: String, required: true },
                name: { type: String, required: true },
                lastname: { type: String, required: true },
                email: { type: String, required: true }
            }
        )
    );

    return User;
};