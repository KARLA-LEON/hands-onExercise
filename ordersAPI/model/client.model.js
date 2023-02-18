module.exports = mongoose => {
    const Client = mongoose.model(
        "client",
        mongoose.Schema(
            {
                clientName: { type: String, required: true },
                rfc: { type: String, required: true },
                email: { type: String, required: true },
                phone: { type: String, required: true },
                blocked: { type: Boolean, required: true }
            }
        )
    );

    return Client;
}