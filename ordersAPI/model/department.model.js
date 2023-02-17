module.exports = mongoose => {
  const Tutorial = mongoose.model(
    "department",
    mongoose.Schema(
      {
        name: String,
        email: String,
        phone: Number
      },
      {
        versionKey: false
      }
    )
  );

  return Tutorial;
};