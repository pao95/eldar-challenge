const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe",
      });
    }

    usuario = new Usuario(req.body);

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    const token = await generarJWT(usuario.id, usuario.name, usuario.role);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
      role: usuario.role,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario y/o la contraseña no son correctos.",
      });
    }

    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario y/o la contraseña no son correctos.",
      });
    }

    const token = await generarJWT(usuario.id, usuario.name, usuario.role);

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
      role: usuario.role,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const revalidarToken = async (req, res = response) => {
  const { uid } = req;

  const usuario = await Usuario.findById(uid);

  const token = await generarJWT(usuario._id, usuario.name, usuario.role);

  res.json({
    ok: true,
    uid: usuario.id,
    name: usuario.name,
    token,
    role: usuario.role,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
