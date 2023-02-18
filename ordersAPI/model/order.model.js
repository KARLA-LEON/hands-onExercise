module.exports = mongoose => {
    const Order = mongoose.model(
      "Order",
      mongoose.Schema(
        {
            id: { type: String, required: true, unique: true },
            description: { type: String, required: true },
            date: { type: Date, default: Date.now },
            status: { type: String, required: true },
            urgency: { type: String, required: true },
            authorID: { type: String, required: true },
        },
        {
            collection: "Order",
        }        
      )
    );
  
    return Order;
};