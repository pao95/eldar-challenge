const { Schema, model } = require("mongoose");

const ROLES = ["user", "admin"];

const UsuarioSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ROLES, 
    default: "user", 
  },
});

module.exports = model("Usuario", UsuarioSchema);
