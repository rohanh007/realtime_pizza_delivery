const homecontroller=require("../app/http/controllers/homecontroller");
const authcontroller=require("../app/http/controllers/authcontroller")
const cartcontroller=require("../app/http/controllers/customers/cartcontroller")
function initroutes(app)
{
    app.get('/',homecontroller().index)

    app.get('/cart',cartcontroller().cart)
    app.get('/login',authcontroller().indexlogin)
    app.get('/register',authcontroller().indexregister)
}



module.exports=initroutes;