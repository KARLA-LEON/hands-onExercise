module.exports = mongoose => {
    const Client = mongoose.model(
        "client",
        mongoose.Schema(
            {
                clientName: String,
                rfc: String,
                email: String,
                phone: String,
                blocked: Boolean
            }
        )
    );

    return Client;
}