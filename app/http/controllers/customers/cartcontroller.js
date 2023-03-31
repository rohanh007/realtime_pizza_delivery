function cartcontroller(){
    return {
        cart(req,res){
            res.render('Customer/cart')
        }
    }
}

module.exports=cartcontroller