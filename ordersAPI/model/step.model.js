module.exports = mongoose => {
    const Step = mongoose.model(
      "step",
      mongoose.Schema(
        {
            //CHECAR ID ADICIONAL O NO
            // orderID: String,
            description: String,
            status: Boolean  //true: completado, false: sin completar
        },
        { timestamps: true }
      )
    );
  
    return Step;
};