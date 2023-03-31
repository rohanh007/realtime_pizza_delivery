function homecontroller(){
    return {
        index(req,res){
            res.render('home') 
        }
    }
}

module.exports=homecontroller