const user = require('../Models/Users');
module.exports = {
    //cadastrar
    async create(req, res) {
   /*    
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
    */
   /*
    const emailExiste = await user.findOne({ email: req.body.email });
    if (emailExiste) {
        return res.json({
            error: true,
            message: "Este email ja esta sendo usado!"
        })
    }
  */
    const users = await user.create(req.body);
    if (users) {
        return res.json({
            error: false,
            message: "Usuario Cadastrado com sucesso!"
        })
    } else {
        return res.json({
            error: true,
            message: "Usuario não Cadastrado com sucesso!"
        })
    }

    },
    //listar
    async Listar(req, res) {
        const users = await user.find({})
        if (users) {
            return res.json({
                error: false,
                message: " Listar usuario !",
                Usuario: users
            })
        } else {
            return res.json({
                error: true,
                message: "Nenhum usuario cadastrado!",
                Usuario: users
            })
        } 
    },
    //lista um usuario
    async Listar_um_usuario(req, res) {
    const { id } = req.params;
    const users = await user.findById({ _id: id })
    if (users) {
        return res.json({
            error: false,
            message: "pesquisa realizada com sucesso!",
            usuario: users
        })
    } else {
        return res.json({
            error: false,
            message: "Nenhum usuario encontrado!",

        })
    }
    },
    //atualizar um usuario
    async Atualizar(req, res) {
        const { id } = req.params;
        const { username, email } = req.body
        const users = await user.findByIdAndUpdate({ _id: id }, { username, email })
        if (users) {
            return res.json({
                error: false,
                message: "usuario atualizado com sucesso!",
               
            })
        } else {
            return res.json({
                error: true,
                message: "Nenhum usuario encontrado  para atualização!",
    
            })
        }
    },
    //Apagar usuario
    async Deletar(req, res) {
        const { id } = req.params;
        const users = await user.findByIdAndDelete({ _id: id });
        if (users) {
            return res.json({
                error: false,
                message: "usuario deletado com sucesso!",
                
            })
        } else {
            return res.json({
                error: true,
                message: "Nenhum usuario encontrado!",
                
            })
        
        }
    }
}





/*

router.get('/usuarios', async (req, res) => {
    const users = await user.find({})
    if (users) {
        return res.json({
            error: false,
            message: " Listar usuario !",
            Usuario: users
        })
    } else {
        return res.json({
            error: true,
            message: "Nenhum usuario cadastrado!",
            Usuario: users
        })
    }
})

router.get('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const users = await user.findById({ _id: id })
    if (users) {
        return res.json({
            error: false,
            message: "pesquisa realizada com sucesso!",
            usuario: users
        })
    } else {
        return res.json({
            error: false,
            message: "Nenhum usuario encontrado!",

        })
    }

})

router.post('/usuario', async (req, res) => {

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
    const emailExiste = await user.findOne({ email: req.body.email });
    if (emailExiste) {
        return res.json({
            error: true,
            message: "Este email ja esta sendo usado!"
        })
    }

    const users = await user.create(req.body);
    if (users) {
        return res.json({
            error: false,
            message: "Usuario Cadastrado com sucesso!"
        })
    } else {
        return res.json({
            error: true,
            message: "Usuario não Cadastrado com sucesso!"
        })
    }

})

router.put('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body
    const users = await user.findByIdAndUpdate({ _id: id }, { username, email })
    if (users) {
        return res.json({
            error: false,
            message: "usuario atualizado com sucesso!",
            usuario: users
        })
    } else {
        return res.json({
            error: true,
            message: "Nenhum usuario encontrado  para atualização!",

        })
    }

})

router.delete('/usuario/:id',async(req,res)=>{
    const { id } = req.params;
    const users = await user.findByIdAndDelete({ _id: id });
    if (users) {
        return res.json({
            error: false,
            message: "usuario deletado com sucesso!",
            
        })
    } else {
        return res.json({
            error: true,
            message: "Nenhum usuario encontrado!",
            
        })
    
    }
})

*/


/*
 const password = await bcrypt.hash('1234', 8);

        if ((await bcrypt.compare(req.body.password, password))) {
            return res.status(400).json({
                error: true,
                messagem: "Usuario ou senha incorreta bcrypt!"
            })
            
        }
 /$2b$08$zijtVc4Av04xusSM5uII0.1e2zozkiIKKMQtYXzHnUmLR3myaL9SW       
*/


//module.exports = router;