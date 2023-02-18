module.exports = mongoose => {
  const Tutorial = mongoose.model(
    "department",
    mongoose.Schema(
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true }
      },
      {
        versionKey: false
      }
    )
  );

  return Tutorial;
};