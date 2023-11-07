const { ques2, ques3, ques4, ques5, ques6, ques7 } = require('../controller/userController')

const routes=require('express').Router()

// routes.get("/register",register)

// routes.get("/login",login)

routes.post("/ques2",ques2)
routes.get("/ques3",ques3)
routes.get("/ques4",ques4)
routes.get("/ques5",ques5)
routes.post("/ques6",ques6)
routes.delete("/ques7",ques7)


module.exports=routes