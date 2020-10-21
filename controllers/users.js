var User = require('../models/users'); 

exports.user_create = function(req, res, next) {
  //
  if (req.body) {
    let items = req.body
    User.create(items, function(err, newUsers){
      if(err) return res.json({ error: err });
        res.json(newUsers) 
    });
  } 
  else {
    res.json({status: 'ERROR', message: 'Debe completar todos los campos'}); //opcional mandar un mensaje de error
  }
}

exports.user_get = async function(req, res, next) {
  var users = await User.find({})
  var listUsers = users.map((user) => {
    user.lastname = user.lastname.replace("ñ","nn");
    // Replace , para cambiar "ñ" por "nn"
  return user;
});
return listUsers.sort();
// sort que ordena de forma alfabéticamente 
};