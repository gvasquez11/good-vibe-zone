module.exports = {
    homePage: (req,res) => {
        res.render('index.ejs')
    },
    loginPage: (req,res) =>{
        res.render('signin.ejs')
    },
    signupPage: (req,res) => {
        res.render('signup.ejs')
    }
}