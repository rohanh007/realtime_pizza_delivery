function authcontroller(){
    return {
        indexlogin(req,res){
            res.render('auth/login') 
        },
        indexregister(req,res){
            res.render('auth/register')
        }
    }
}

module.exports=authcontroller