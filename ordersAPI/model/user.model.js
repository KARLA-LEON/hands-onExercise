module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                username: String,
                password: String,
                name: String,
                lastname: String,
                email: String
            }
        )
    );

    return User;
};