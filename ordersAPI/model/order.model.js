module.exports = mongoose => {
    const Order = mongoose.model(
      "order",
      mongoose.Schema(
        {
          description: { type: String, required: true },
          date: { type: Date, default: Date.now },
          status: { type: String, required: true },
          urgency: { type: String, required: true },
          authorID: { type: String, required: true }
        },
        {
          timestamps: true
        }        
      )
    );
  
    return Order;
};