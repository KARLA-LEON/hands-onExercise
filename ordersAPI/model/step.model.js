module.exports = mongoose => {
    const Step = mongoose.model(
      "step",
      mongoose.Schema(
        {
            //CHECAR ID ADICIONAL O NO
            // orderID: String,
            description: { type: String, required: true },
            status: { type: Boolean, required: true }  //true: completado, false: sin completar
        },
        { timestamps: true }
      )
    );
  
    return Step;
};