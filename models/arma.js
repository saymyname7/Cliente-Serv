var mongoose = require("mongoose");

var armaSchema = mongoose.Schema({
    descripcion: {type: String, required:true, unique:true},
    categoria: {type: String, required:true},
    fuerza: {type: String, required:true},
    municiones: {type: Boolean, required:true}
});

armaSchema.methods.name = function() {
    return this.descripcion;
}
armaSchema.methods.tipo = function() {
    return this.categoria;
}

var Arma = mongoose.model("Arma",armaSchema);
module.exports = Arma;  