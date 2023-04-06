const mongoose = require('mongoose');

const conectar =() =>{
   mongoose.connect("mongodb+srv://root:root@cluster1.iwctrfb.mongodb.net/?retryWrites=true&w=majority"
   ).then(() => console.log('Connected em atlas!'))
    .catch((error) => console.log(error));
      
}

module.exports =  conectar;




//mongodb+srv://root:root@cluster0.ov0tydf.mongodb.net/?retryWrites=true&w=majority




// pra usar no mongodb atlas
//password: root
// username : root

// string de conexao do atlas 
//mongodb+srv://root:<password>@cluster0.ov0tydf.mongodb.net/?retryWrites=true&w=majority

//trocar o password pelo root
/*
const mongoose = require('mongoose');
 const conectar =() =>{
   mongoose.connect("mongodb+srv://root:root@cluster0.ov0tydf.mongodb.net/?retryWrites=true&w=majority"
   ).then(() => console.log('Connected!'))
      .catch((error) => console.log(error));
      
}

module.exports =  conectar;

*/


// mongodb://127.0.0.1:27017/test  seria no servidor local
