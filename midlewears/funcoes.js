const user = require('../Models/Users');

const validarCampos = (req,res,next)=>{

    const { username, email, password } = req.body;

    if (!username) {
        return res.json({
            error: true,
            message: "Preencha o campo username!"
        })
    }
    if (!email) {
        return res.json({
            error: true,
            message: "Preencha o campo email!"
        })
    }
    if (!password) {
        return res.json({
            error: true,
            message: "Preencha o campo password!"
        })
    }
  next();
} 

const UsuarioExiste = async (req,res,next)=>{
    const emailExiste = await user.findOne({ email: req.body.email });
    if (emailExiste) {
        return res.json({
            error: true,
            message: "Este email ja esta sendo usado!"
        })
    }
    next();
}

module.exports ={ validarCampos,UsuarioExiste }