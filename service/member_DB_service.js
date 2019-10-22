var Member = require('../models/member')

exports.register = async function (req, res, next) {

    try {
        const member=new Member(
            {
              name: req.body.name,
              id: req.body.id,
              pw: req.body.pw
            }
          );
        member.save()    
        .then((result)=>{
        console.log(result);
        res.status(201).json({"msg":req.body.name + "님 가입되셨습니다."});
        })
        .catch((err)=>{
        console.error(err);
        next(err);
        });  
    } catch (e) {
    // Log Errors
    console.error(e);
    }
}